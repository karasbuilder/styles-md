// Renders the canonical demo page under every style and writes styles/<slug>/preview.webp.
// Run after `pnpm run build:site`. Pass --only=slug,slug to re-render just the styles a PR
// touched — regenerating all of them on every commit floods the diff for no reason.
import { createServer } from "node:http";
import { readFileSync, existsSync, statSync } from "node:fs";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "site", "dist");
const registry = JSON.parse(readFileSync(join(root, "styles", "index.json"), "utf8"));

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
  console.error("site/dist missing — run `pnpm run build:site` first");
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
  await page.goto(`http://localhost:${port}/demo/${style.id}/`, { waitUntil: "networkidle" });
  await page.screenshot({
    path: join(root, "styles", style.id, "preview.webp"),
    type: "webp",
    quality: 82,
  });
  console.log(`rendered ${style.id}`);
}

await browser.close();
server.close();
