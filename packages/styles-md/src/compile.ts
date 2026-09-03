import { converter, formatCss } from "culori";
import type { StyleFrontmatter, StyleTokens } from "./schema.js";

const toOklch = converter("oklch");

/** Steps of the modular scale, relative to the base size. */
const TYPE_STEPS: Array<[name: string, exponent: number]> = [
  ["xs", -2],
  ["sm", -1],
  ["base", 0],
  ["lg", 1],
  ["xl", 2],
  ["2xl", 3],
  ["3xl", 4],
  ["4xl", 5],
];

/** Multiples of the spacing unit. Deliberately not a linear 1..12 ramp. */
const SPACE_STEPS = [1, 2, 3, 4, 6, 8, 12, 16, 24];

function splitLength(value: string): { n: number; unit: string } {
  const match = /^(-?\d*\.?\d+)(px|rem|em|%|vw|vh)$/.exec(value);
  if (!match) throw new Error(`not a CSS length: ${value}`);
  return { n: Number(match[1]), unit: match[2] };
}

/** CSS custom properties are case-sensitive; keep them all kebab-case. */
function kebab(key: string): string {
  return key.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

function round(n: number): number {
  return Math.round(n * 100) / 100;
}

export interface DerivedScales {
  type: Array<{ name: string; size: string }>;
  space: Array<{ step: number; size: string }>;
}

/**
 * The type and space ramps are *derived*, never authored. Two numbers in the
 * frontmatter (scale, unit) produce the whole system, so a style cannot drift
 * into an inconsistent set of sizes.
 */
export function deriveScales(tokens: StyleTokens): DerivedScales {
  const base = splitLength(tokens.font.baseSize);
  const unit = splitLength(tokens.space.unit);

  return {
    type: TYPE_STEPS.map(([name, exp]) => ({
      name,
      size: `${round(base.n * Math.pow(tokens.font.scale, exp))}${base.unit}`,
    })),
    space: SPACE_STEPS.map((step) => ({
      step,
      size: `${round(unit.n * step)}${unit.unit}`,
    })),
  };
}

/** Flat map of every variable, without the leading `--`. Prefix-free. */
export function flattenTokens(tokens: StyleTokens): Record<string, string> {
  const scales = deriveScales(tokens);
  const out: Record<string, string> = {};

  for (const [key, value] of Object.entries(tokens.color)) {
    if (value) out[`color-${kebab(key)}`] = value;
  }

  out["font-sans"] = tokens.font.sans;
  out["font-mono"] = tokens.font.mono;
  if (tokens.font.display) out["font-display"] = tokens.font.display;
  out["font-weight-body"] = String(tokens.font.weightBody);
  out["font-weight-heading"] = String(tokens.font.weightHeading);
  out["heading-tracking"] = `${tokens.font.headingTracking}em`;
  for (const step of scales.type) out[`text-${step.name}`] = step.size;

  for (const step of scales.space) out[`space-${step.step}`] = step.size;
  out["gutter"] = tokens.space.gutter;
  out["section"] = tokens.space.section;
  out["max-width"] = tokens.space.maxWidth;

  out["stroke-width"] = tokens.stroke.width;
  out["radius-sm"] = tokens.radius.sm;
  out["radius-md"] = tokens.radius.md;
  out["radius-lg"] = tokens.radius.lg;
  out["radius-full"] = tokens.radius.full;

  out["duration"] = tokens.motion.duration;
  out["easing"] = tokens.motion.easing;

  if (tokens.shadow) {
    out["shadow-sm"] = tokens.shadow.sm;
    out["shadow-md"] = tokens.shadow.md;
    out["shadow-lg"] = tokens.shadow.lg;
  }

  return out;
}

function declarations(map: Record<string, string>, prefix: string, indent = "  "): string {
  return Object.entries(map)
    .map(([key, value]) => `${indent}--${prefix}${key}: ${value};`)
    .join("\n");
}

/** Plain CSS custom properties. The primary target — works in any framework. */
export function toCss(style: StyleFrontmatter, selector = ":root"): string {
  const body = declarations(flattenTokens(style.tokens), "sm-");
  return `/* ${style.name} — ${style.mood}\n   styles-md style "${style.id}" v${style.version}, ${style.license} */\n${selector} {\n${body}\n}\n`;
}

/** Tailwind v4 CSS-first theme block. */
export function toTailwind(style: StyleFrontmatter): string {
  const flat = flattenTokens(style.tokens);
  const theme: Record<string, string> = {};
  for (const [key, value] of Object.entries(flat)) {
    // Only namespaces Tailwind v4 actually reads. `space-N` is not one of them —
    // v4 derives the whole spacing scale from a single `--spacing` value.
    if (key.startsWith("color-") || key.startsWith("text-") || key.startsWith("radius-")) {
      theme[key] = value;
    } else if (key === "font-sans" || key === "font-mono" || key === "font-display") {
      theme[key] = value;
    }
  }
  theme["spacing"] = style.tokens.space.unit;
  theme["ease-default"] = style.tokens.motion.easing;
  return `/* ${style.name} — Tailwind v4 theme. Import after \`@import "tailwindcss";\` */\n@theme {\n${declarations(theme, "")}\n}\n`;
}

/**
 * shadcn/ui variable names in oklch. Lets a user drop a style straight onto an
 * existing shadcn app without touching a component.
 */
export function toShadcn(style: StyleFrontmatter): string {
  const c = style.tokens.color;
  const oklch = (hex: string) => formatCss(toOklch(hex)!);
  const map: Record<string, string> = {
    background: oklch(c.bg),
    foreground: oklch(c.fg),
    card: oklch(c.surface),
    "card-foreground": oklch(c.fg),
    popover: oklch(c.surface),
    "popover-foreground": oklch(c.fg),
    primary: oklch(c.accent),
    "primary-foreground": oklch(c.accentFg),
    secondary: oklch(c.surface),
    "secondary-foreground": oklch(c.fg),
    muted: oklch(c.surface),
    "muted-foreground": oklch(c.muted),
    accent: oklch(c.surface),
    "accent-foreground": oklch(c.fg),
    destructive: oklch(c.danger ?? "#e5484d"),
    border: oklch(c.border),
    input: oklch(c.border),
    ring: oklch(c.accent),
    radius: style.tokens.radius.md,
  };
  return `/* ${style.name} — shadcn/ui variables */\n:root {\n${declarations(map, "")}\n}\n`;
}

/** Machine-readable sidecar, consumed by the site and by any future MCP server. */
export function toTokensJson(style: StyleFrontmatter): string {
  return `${JSON.stringify(
    {
      id: style.id,
      name: style.name,
      version: style.version,
      license: style.license,
      mood: style.mood,
      tags: style.tags,
      tokens: style.tokens,
      derived: deriveScales(style.tokens),
      variables: flattenTokens(style.tokens),
    },
    null,
    2,
  )}\n`;
}

export const TARGETS = ["css", "tailwind", "shadcn", "json"] as const;
export type Target = (typeof TARGETS)[number];

export function compile(style: StyleFrontmatter, target: Target): string {
  switch (target) {
    case "css":
      return toCss(style);
    case "tailwind":
      return toTailwind(style);
    case "shadcn":
      return toShadcn(style);
    case "json":
      return toTokensJson(style);
  }
}
