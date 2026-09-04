import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, basename } from "node:path";
import matter from "gray-matter";
import { styleSchema, type StyleFrontmatter } from "./schema.js";

export interface Style {
  /** Folder name. Must equal frontmatter `id`. */
  slug: string;
  dir: string;
  file: string;
  meta: StyleFrontmatter;
  /** Markdown after the frontmatter: the judgment layer. */
  body: string;
}

export interface ParseIssue {
  file: string;
  path: string;
  message: string;
}

export type ParseResult =
  | { ok: true; style: Style }
  | { ok: false; file: string; issues: ParseIssue[] };

export function parseStyleFile(file: string): ParseResult {
  const raw = readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const parsed = styleSchema.safeParse(data);

  if (!parsed.success) {
    return {
      ok: false,
      file,
      issues: parsed.error.issues.map((i) => ({
        file,
        path: i.path.join("."),
        message: i.message,
      })),
    };
  }

  const dir = join(file, "..");
  const slug = basename(dir);
  if (slug !== parsed.data.id) {
    return {
      ok: false,
      file,
      issues: [
        {
          file,
          path: "id",
          message: `id "${parsed.data.id}" does not match folder name "${slug}"`,
        },
      ],
    };
  }

  return {
    ok: true,
    style: { slug, dir, file, meta: parsed.data, body: content.trim() },
  };
}

/** Every `<dir>/<slug>/DESIGN.md`. Order is stable so builds are reproducible. */
export function findStyleFiles(dir: string): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .sort()
    .map((entry) => join(dir, entry))
    .filter((p) => statSync(p).isDirectory())
    .map((p) => join(p, "DESIGN.md"))
    .filter((p) => existsSync(p));
}

export function loadStyles(dir: string): { styles: Style[]; issues: ParseIssue[] } {
  const styles: Style[] = [];
  const issues: ParseIssue[] = [];
  for (const file of findStyleFiles(dir)) {
    const result = parseStyleFile(file);
    if (result.ok) styles.push(result.style);
    else issues.push(...result.issues);
  }
  return { styles, issues };
}

/**
 * Cheap token estimate. We only need it to enforce a budget, not to bill anyone,
 * so ~4 chars per token is close enough and costs no dependency.
 */
export function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
}
