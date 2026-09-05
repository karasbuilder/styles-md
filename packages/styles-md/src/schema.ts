import { z as defaultZ } from "zod";
import { FREE_LICENSES } from "./fonts.js";

/**
 * The style contract. This is the real API of the project: the site, the CLI,
 * CI and any future MCP server all validate against this one definition.
 *
 * It is exported as a factory so consumers that bundle their own copy of zod
 * (Astro content collections do) can pass their instance in and avoid the
 * cross-instance `instanceof` problems you get from sharing a built schema.
 */
export function buildStyleSchema(z: typeof defaultZ) {
  const hex = z
    .string()
    .regex(/^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, "must be a hex colour, e.g. #08090a");

  const cssLength = z
    .string()
    .regex(/^-?\d*\.?\d+(px|rem|em|%|vw|vh)$/, "must be a CSS length, e.g. 16px or 1.5rem");

  return z.object({
    id: z
      .string()
      .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "must be kebab-case and match the folder name"),
    name: z.string().min(2).max(60),
    version: z.string().regex(/^\d+\.\d+\.\d+$/, "must be semver"),
    license: z.literal("CC-BY-4.0"),
    author: z.string().default("styles-md contributors"),

    /** One evocative line. This is what humans and search actually match on. */
    mood: z.string().min(8).max(80),
    summary: z.string().min(20).max(240),
    tags: z.array(z.string().regex(/^[a-z0-9-]+$/)).min(2).max(10),

    /** Gallery surfaces `featured` only. Everything lands as `draft`. */
    quality: z.enum(["draft", "reviewed", "featured"]).default("draft"),

    /**
     * Real sites built with this style, shown alongside the built-in demo.
     *
     * `embed` claims the site can be framed. Most cannot, because `X-Frame-Options` or
     * a CSP `frame-ancestors` directive will render a blank box, so it defaults
     * to false and `styles-md check-links` verifies the claim against the live
     * headers before anyone trusts it.
     */
    showcase: z
      .array(
        z.object({
          label: z.string().min(2).max(40),
          url: z.string().url().startsWith("https://", "must be an https URL"),
          embed: z.boolean().default(false),
          note: z.string().max(120).optional(),
        }),
      )
      .max(6)
      .default([]),

    /**
     * Every font family the stacks below ask for by name, and what it costs.
     *
     * `license` is an enum of licences that are free for commercial use, so a
     * paid family cannot be declared at all: the schema rejects it before any
     * reviewer has to notice. System fallbacks (Segoe UI, Menlo, Arial Black)
     * are deliberately absent, since naming one uses the reader's own installed
     * copy and redistributes nothing. `styles-md validate` cross-checks this
     * list against the stacks in both directions.
     */
    fonts: z
      .array(
        z.object({
          family: z.string().min(1).max(60),
          role: z.enum(["sans", "mono", "display"]),
          license: z.enum(FREE_LICENSES),
          /** Where to get it. The page that carries the licence, not a CDN link. */
          url: z.string().url().startsWith("https://", "must be an https URL"),
          note: z.string().max(120).optional(),
        }),
      )
      .max(8)
      .default([]),

    tokens: z.object({
      color: z.object({
        bg: hex,
        surface: hex,
        fg: hex,
        muted: hex,
        accent: hex,
        accentFg: hex,
        border: hex,
        success: hex.optional(),
        danger: hex.optional(),
      }),
      font: z.object({
        /** Full CSS font stack. Never a bare family, since licensing forces fallbacks. */
        sans: z.string().min(3),
        mono: z.string().min(3),
        display: z.string().min(3).optional(),
        /** Modular scale ratio used to derive the type steps. */
        scale: z.number().min(1.05).max(1.7),
        baseSize: cssLength,
        weightBody: z.number().int().min(100).max(900),
        weightHeading: z.number().int().min(100).max(900),
        /** Tracking on headings, in em. Negative is normal for display type. */
        headingTracking: z.number().min(-0.08).max(0.2).default(0),
      }),
      space: z.object({
        unit: cssLength,
        gutter: cssLength,
        section: cssLength,
        maxWidth: cssLength,
      }),
      /** Border weight is a loud style signal: hairline vs 2px is half of "brutalist". */
      stroke: z
        .object({
          width: cssLength,
        })
        .default({ width: "1px" }),
      radius: z.object({
        sm: cssLength,
        md: cssLength,
        lg: cssLength,
        full: z.string().default("9999px"),
      }),
      motion: z.object({
        duration: z.string().regex(/^\d+ms$/),
        easing: z.string().min(4),
      }),
      shadow: z
        .object({
          sm: z.string(),
          md: z.string(),
          lg: z.string(),
        })
        .optional(),
    }),
  });
}

export const styleSchema = buildStyleSchema(defaultZ);
export type StyleFrontmatter = ReturnType<typeof styleSchema.parse>;
export type StyleTokens = StyleFrontmatter["tokens"];

/**
 * Pairs that must clear WCAG AA. Checked in CI, so a palette that fails here
 * cannot merge however good it looks.
 */
export const CONTRAST_PAIRS: Array<{
  fg: keyof StyleTokens["color"];
  bg: keyof StyleTokens["color"];
  min: number;
  label: string;
}> = [
  { fg: "fg", bg: "bg", min: 4.5, label: "body text on page background" },
  { fg: "fg", bg: "surface", min: 4.5, label: "body text on raised surface" },
  { fg: "muted", bg: "bg", min: 4.5, label: "muted text on page background" },
  { fg: "accentFg", bg: "accent", min: 4.5, label: "label on accent fill" },
  { fg: "border", bg: "bg", min: 1.4, label: "border against page background" },
];

/** Agent context budget. A judgment call, not a measured threshold. */
export const TOKEN_BUDGET = { min: 900, full: 2400 } as const;
