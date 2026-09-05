// Renders the canonical demo page under every style and writes styles/<slug>/preview.webp.
// Run after `pnpm run build:site`. Pass --only=slug,slug to re-render just the styles a PR
// touched, because regenerating all of them on every commit floods the diff for no reason.
import { createServer } from "node:http";
import { readFileSync, existsSync, statSync } from "node:fs";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
// Relative, because the root package does not depend on the workspace package.
import { loadStyles } from "../packages/styles-md/dist/index.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "site", "dist");
const registry = JSON.parse(readFileSync(join(root, "styles", "index.json"), "utf8"));

// The registry carries no preview settings, so read the specs for showDemo.
const specs = new Map(loadStyles(join(root, "styles")).styles.map((s) => [s.slug, s.meta]));

/**
 * What to shoot for a style. Normally the built-in demo, but a style with
 * `showDemo: false` never displays that page, so shooting it would put a
 * screenshot on the gallery card that appears nowhere else on the site. Those
 * styles get their lead showcase site instead, which costs a network round
 * trip at render time.
 */
function previewTarget(id, port) {
  const meta = specs.get(id);
  if (meta && meta.showDemo === false) {
    const lead = meta.showcase.find((site) => site.embed) ?? meta.showcase[0];
    if (!lead) throw new Error(`${id} sets showDemo: false but declares no showcase to shoot`);
    return { url: lead.url, external: true };
  }
  return { url: `http://localhost:${port}/demo/${id}/`, external: false };
}

const only = process.argv
  .find((arg) => arg.startsWith("--only="))
  ?.slice("--only=".length)
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const targets = only ? registry.filter((s) => only.includes(s.id)) : registry;
if (targets.length === 0) {
  console.log("no styles to render");
  process.exit(0);
}

if (!existsSync(dist)) {
  console.error("site/dist missing. Run `pnpm run build:site` first");
  process.exit(1);
}

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".md": "text/markdown; charset=utf-8",
  ".webp": "image/webp",
};

const server = createServer((req, res) => {
  const path = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  let file = join(dist, path);
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, "index.html");
  if (!existsSync(file)) {
    res.writeHead(404).end("not found");
    return;
  }
  res.writeHead(200, { "content-type": MIME[extname(file)] ?? "application/octet-stream" });
  res.end(readFileSync(file));
});

await new Promise((resolve) => server.listen(0, resolve));
const port = server.address().port;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 2 });

for (const style of targets) {
  const target = previewTarget(style.id, port);
  const response = await page.goto(target.url, { waitUntil: "networkidle", timeout: 30_000 });

  // A remote site that is down would otherwise be written out as a blank card.
  if (target.external && !response?.ok()) {
    throw new Error(`${style.id}: ${target.url} returned ${response?.status() ?? "no response"}`);
  }

  /*
   * The network goes idle well before an entrance animation ends, so a shot
   * taken here catches buttons and headings part way through their fade and
   * writes a washed-out card. Wait for the finite animations to settle.
   *
   * Looping ones (drifting artwork, tickers, marquees) never finish, so they
   * are excluded, and the cap keeps one runaway page from stalling the run.
   */
  await page.evaluate(async () => {
    const settling = document
      .getAnimations()
      .filter((animation) => animation.effect?.getTiming().iterations !== Infinity)
      .map((animation) => animation.finished.catch(() => {}));

    await Promise.race([
      Promise.all(settling),
      new Promise((resolve) => setTimeout(resolve, 2000)),
    ]);
  });

  await page.screenshot({
    path: join(root, "styles", style.id, "preview.webp"),
    type: "webp",
    quality: 82,
  });
  console.log(`rendered ${style.id}${target.external ? ` from ${target.url}` : ""}`);
}

await browser.close();
server.close();
