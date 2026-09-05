#!/usr/bin/env node
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { Command } from "commander";
import matter from "gray-matter";
import { loadStyles, parseStyleFile, type Style } from "./parse.js";
import { validateDir } from "./validate.js";
import { toCss, toTailwind, toShadcn, toTokensJson, TARGETS, type Target } from "./compile.js";
import { toMinified } from "./minify.js";
import { styleSchema } from "./schema.js";

const DEFAULT_REGISTRY = "https://style.karasdev.com";

// CI logs and piped output stay clean; humans get colour.
const COLOR = Boolean(process.stdout.isTTY) && !process.env.NO_COLOR;
const paint = (code: string) => (s: string) => (COLOR ? `\x1b[${code}m${s}\x1b[0m` : s);
const dim = paint("2");
const red = paint("31");
const yellow = paint("33");
const green = paint("32");
const bold = paint("1");

const program = new Command();
program
  .name("styles-md")
  .description("Validate, compile and install styles-md design specs.")
  .version("0.1.0");

program
  .command("validate")
  .argument("[dir]", "styles directory", "styles")
  .description("Check every style against the schema, WCAG AA and the agent token budget")
  .action((dir: string) => {
    const report = validateDir(resolve(dir));

    for (const issue of report.parseIssues) {
      console.error(`${red("✗")} ${issue.file} ${dim(issue.path)} ${issue.message}`);
    }

    for (const style of report.styles) {
      const status = style.errors.length ? red("✗") : style.warnings.length ? yellow("!") : green("✓");
      console.log(
        `${status} ${bold(style.slug)} ${dim(`${style.minTokens} agent tokens, min contrast ${Math.min(...style.contrast.map((c) => c.ratio))}:1`)}`,
      );
      for (const error of style.errors) console.error(`  ${red("→")} ${error}`);
      for (const warning of style.warnings) console.warn(`  ${yellow("→")} ${warning}`);
    }

    const total = report.styles.length;
    console.log(
      `\n${total} style${total === 1 ? "" : "s"}, ${report.errorCount} error${report.errorCount === 1 ? "" : "s"}, ${report.warningCount} warning${report.warningCount === 1 ? "" : "s"}`,
    );
    if (report.errorCount > 0) process.exitCode = 1;
  });

program
  .command("build")
  .argument("[dir]", "styles directory", "styles")
  .option("-o, --out <dir>", "output root; defaults to writing beside each DESIGN.md")
  .description("Generate tokens.json, DESIGN.min.md and style.css for every style")
  .action((dir: string, opts: { out?: string }) => {
    const stylesDir = resolve(dir);
    const { styles, issues } = loadStyles(stylesDir);
    if (issues.length) {
      console.error(red("refusing to build: run `styles-md validate` first"));
      process.exitCode = 1;
      return;
    }

    for (const style of styles) {
      const outDir = opts.out ? join(resolve(opts.out), style.slug) : style.dir;
      mkdirSync(outDir, { recursive: true });
      // Every target ships as a real file so the deployed registry can serve it
      // directly: the site, the CLI and a raw GitHub URL all read the same bytes.
      writeFileSync(join(outDir, "tokens.json"), toTokensJson(style.meta));
      writeFileSync(join(outDir, "DESIGN.min.md"), toMinified(style));
      writeFileSync(join(outDir, "style.css"), toCss(style.meta));
      writeFileSync(join(outDir, "theme.css"), toTailwind(style.meta));
      writeFileSync(join(outDir, "shadcn.css"), toShadcn(style.meta));
      console.log(
        `${green("✓")} ${style.slug} ${dim("tokens.json DESIGN.min.md style.css theme.css shadcn.css")}`,
      );
    }

    const indexPath = opts.out ? join(resolve(opts.out), "index.json") : join(stylesDir, "index.json");
    writeFileSync(indexPath, `${JSON.stringify(styles.map(indexEntry), null, 2)}\n`);
    console.log(`${green("✓")} ${indexPath} ${dim(`${styles.length} entries`)}`);
  });

program
  .command("check-links")
  .argument("[dir]", "styles directory", "styles")
  .description("Verify every showcase URL resolves and that `embed: true` is actually frameable")
  .action(async (dir: string) => {
    const { styles } = loadStyles(resolve(dir));
    const entries = styles.flatMap((style) =>
      style.meta.showcase.map((site) => ({ slug: style.slug, site })),
    );

    if (entries.length === 0) {
      console.log(dim("no showcase links declared"));
      return;
    }

    let failures = 0;
    for (const { slug, site } of entries) {
      const result = await inspectFraming(site.url);

      if (!result.ok) {
        console.error(`${red("✗")} ${bold(slug)} ${site.label} ${dim(site.url)}: ${result.reason}`);
        failures++;
        continue;
      }
      // A site that forbids framing is fine; claiming otherwise is not, because
      // the page would render an empty box with no way to tell it went wrong.
      if (site.embed && !result.frameable) {
        console.error(
          `${red("✗")} ${bold(slug)} ${site.label}: declares embed: true but ${result.blockedBy} forbids framing`,
        );
        failures++;
        continue;
      }
      const hint = site.embed
        ? green("embeddable")
        : result.frameable
          ? yellow("frameable, could set embed: true")
          : dim("link-only");
      console.log(`${green("✓")} ${bold(slug)} ${site.label} ${hint}`);
    }

    console.log(`\n${entries.length} link${entries.length === 1 ? "" : "s"}, ${failures} problem${failures === 1 ? "" : "s"}`);
    if (failures > 0) process.exitCode = 1;
  });

program
  .command("list")
  .argument("[dir]", "styles directory", "styles")
  .description("List local styles")
  .action((dir: string) => {
    const { styles } = loadStyles(resolve(dir));
    for (const style of styles) {
      console.log(`${bold(style.meta.id.padEnd(22))} ${style.meta.mood} ${dim(style.meta.tags.join(" "))}`);
    }
  });

program
  .command("add")
  .argument("<slug>", "style id, e.g. pastel-brutalist")
  .option("-d, --dir <dir>", "project directory to write into", ".")
  .option("-t, --target <target>", `output target: ${TARGETS.join(" | ")}`, "css")
  .option("-r, --registry <url>", "registry base URL", DEFAULT_REGISTRY)
  .description("Install a style into your project: DESIGN.md, DESIGN.min.md and a theme file")
  .action(async (slug: string, opts: { dir: string; target: string; registry: string }) => {
    if (!TARGETS.includes(opts.target as Target)) {
      console.error(red(`unknown target "${opts.target}", expected one of ${TARGETS.join(", ")}`));
      process.exitCode = 1;
      return;
    }
    const target = opts.target as Target;

    let style: Style;
    const local = findLocalStyle(slug);
    if (local) {
      const parsed = parseStyleFile(local);
      if (!parsed.ok) {
        console.error(red(`local style "${slug}" is invalid; run \`styles-md validate\``));
        process.exitCode = 1;
        return;
      }
      style = parsed.style;
      console.log(dim(`using local ${local}`));
    } else {
      const fetched = await fetchStyle(slug, opts.registry);
      if (!fetched) {
        console.error(red(`style "${slug}" not found locally or at ${opts.registry}`));
        process.exitCode = 1;
        return;
      }
      style = fetched;
    }

    const outDir = join(resolve(opts.dir), "styles-md");
    mkdirSync(outDir, { recursive: true });

    const themeFile = { css: "theme.css", tailwind: "theme.css", shadcn: "theme.css", json: "tokens.json" }[target];
    const themeBody = { css: toCss, tailwind: toTailwind, shadcn: toShadcn, json: toTokensJson }[target](style.meta);

    writeFileSync(join(outDir, "DESIGN.md"), `${matter.stringify(style.body, style.meta)}`);
    writeFileSync(join(outDir, "DESIGN.min.md"), toMinified(style));
    writeFileSync(join(outDir, themeFile), themeBody);

    console.log(`
${green("✓")} installed ${bold(style.meta.name)} ${dim(`(${style.meta.id}@${style.meta.version}, ${style.meta.license})`)}

  ${join("styles-md", themeFile)}       ${dim("import this in your global stylesheet")}
  ${join("styles-md", "DESIGN.min.md")}  ${dim("point your coding agent at this file")}
  ${join("styles-md", "DESIGN.md")}      ${dim("full spec, for humans")}
`);

    // No font file ships with a style, so the last thing `add` does is say what
    // the stacks will ask for. Every entry is free to use: the schema allows no
    // other kind. Without this the first render silently falls back and looks wrong.
    if (style.meta.fonts.length > 0) {
      console.log(`  ${bold("Fonts")} ${dim("not bundled, install these or the stacks fall back")}\n`);
      for (const font of style.meta.fonts) {
        console.log(`  ${font.family}  ${dim(`${font.role} · ${font.license}`)}\n    ${dim(font.url)}`);
      }
      console.log("");
    }
  });

interface FramingResult {
  ok: boolean;
  reason?: string;
  frameable?: boolean;
  blockedBy?: string;
}

/**
 * Ask the live site whether it permits framing. `X-Frame-Options` and a CSP
 * `frame-ancestors` directive are the two ways a site says no; either one turns
 * an embedded preview into a blank rectangle.
 */
async function inspectFraming(url: string): Promise<FramingResult> {
  let response: Response;
  try {
    response = await fetch(url, {
      method: "GET",
      redirect: "follow",
      headers: { "user-agent": "styles-md-check-links" },
      signal: AbortSignal.timeout(10_000),
    });
  } catch (error) {
    return { ok: false, reason: `unreachable (${(error as Error).message})` };
  }

  if (!response.ok) return { ok: false, reason: `HTTP ${response.status}` };

  const xfo = response.headers.get("x-frame-options")?.toLowerCase() ?? "";
  const csp = response.headers.get("content-security-policy")?.toLowerCase() ?? "";
  const ancestors = /frame-ancestors\s+([^;]+)/.exec(csp)?.[1]?.trim();

  if (xfo.includes("deny") || xfo.includes("sameorigin")) {
    return { ok: true, frameable: false, blockedBy: `X-Frame-Options: ${xfo}` };
  }
  if (ancestors && (ancestors === "'none'" || ancestors === "'self'")) {
    return { ok: true, frameable: false, blockedBy: `CSP frame-ancestors ${ancestors}` };
  }
  return { ok: true, frameable: true };
}

/** Walk up from cwd looking for a repo-local styles/<slug>/DESIGN.md. */
function findLocalStyle(slug: string): string | null {
  let dir = process.cwd();
  for (let depth = 0; depth < 6; depth++) {
    const candidate = join(dir, "styles", slug, "DESIGN.md");
    if (existsSync(candidate)) return candidate;
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return null;
}

/** Registry reads are plain static file fetches. There is no server to call. */
async function fetchStyle(slug: string, registry: string): Promise<Style | null> {
  const url = `${registry.replace(/\/$/, "")}/styles/${slug}/DESIGN.md`;
  const response = await fetch(url).catch(() => null);
  if (!response || !response.ok) return null;

  const raw = await response.text();
  const { data, content } = matter(raw);
  const parsed = styleSchema.safeParse(data);
  if (!parsed.success) return null;

  return { slug, dir: "", file: url, meta: parsed.data, body: content.trim() };
}

function indexEntry(style: Style) {
  return {
    id: style.meta.id,
    name: style.meta.name,
    mood: style.meta.mood,
    summary: style.meta.summary,
    tags: style.meta.tags,
    quality: style.meta.quality,
    version: style.meta.version,
    color: style.meta.tokens.color,
  };
}

program.parse();
