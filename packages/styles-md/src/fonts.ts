/**
 * Font licensing. This repository redistributes no font files, but a style that
 * names a family in a stack is still telling people to go install it, and the
 * whole point of the library is that you can adopt a style without a purchase
 * order. So every family a stack asks for by name has to be accounted for:
 * either it is free to use, or it is already on the machine.
 *
 * The gate is deliberately strict. `FREE_LICENSES` is an allow-list, so a
 * commercial family cannot reach the registry by being described in prose the
 * validator never reads.
 */

/**
 * Licences that let anyone ship the font in a commercial product without paying
 * or reporting anything. If a family is not under one of these, it does not go
 * into a style, so there is nothing to widen this list for.
 */
export const FREE_LICENSES = [
  "OFL-1.1",
  "Apache-2.0",
  "MIT",
  "CC0-1.0",
  "Ubuntu-1.0",
] as const;

export type FontLicense = (typeof FREE_LICENSES)[number];

/** CSS generic families. They resolve everywhere and belong to nobody. */
const GENERIC = new Set([
  "serif",
  "sans-serif",
  "monospace",
  "cursive",
  "fantasy",
  "system-ui",
  "ui-sans-serif",
  "ui-serif",
  "ui-monospace",
  "ui-rounded",
  "math",
  "emoji",
  "-apple-system",
  "blinkmacsystemfont",
]);

/**
 * Families that ship with an OS. Naming one in a stack costs nothing: the
 * browser uses the copy the reader already has, and no file is redistributed.
 * They are legitimate as fallbacks. Leading a stack with one is a warning, not
 * an error: it still renders, it is just proprietary and not on every device.
 */
const SYSTEM = new Set([
  // Apple
  "sf pro",
  "sf pro text",
  "sf pro display",
  "sf mono",
  "sfmono-regular",
  "helvetica",
  "helvetica neue",
  "menlo",
  "monaco",
  "geneva",
  "avenir",
  "avenir next",
  "new york",
  "palatino",
  "times",
  // Microsoft
  "segoe ui",
  "segoe ui emoji",
  "segoe ui symbol",
  "arial",
  "arial black",
  "impact",
  "tahoma",
  "verdana",
  "georgia",
  "times new roman",
  "trebuchet ms",
  "courier new",
  "consolas",
  "cambria",
  "calibri",
  // Cross-platform / Linux
  "liberation sans",
  "liberation mono",
  "dejavu sans",
  "dejavu sans mono",
  "noto sans",
  "noto sans mono",
  "cantarell",
  "roboto",
  "droid sans mono",
  "lucida console",
]);

export function isGenericFamily(family: string): boolean {
  return GENERIC.has(family.trim().toLowerCase());
}

export function isSystemFamily(family: string): boolean {
  return SYSTEM.has(family.trim().toLowerCase());
}

/** Split a CSS font stack into bare family names, quotes and padding removed. */
export function parseStack(stack: string): string[] {
  return stack
    .split(",")
    .map((part) => part.trim().replace(/^["']|["']$/g, "").trim())
    .filter(Boolean);
}

/**
 * The family a stack actually asks for. Everything after it is the safety net
 * that renders when the reader has not installed the real thing.
 */
export function primaryFamily(stack: string): string | undefined {
  return parseStack(stack)[0];
}

export interface FontDeclaration {
  family: string;
  role: "sans" | "mono" | "display";
  license: FontLicense;
  url: string;
  note?: string;
}

interface StackInput {
  sans: string;
  mono: string;
  display?: string;
}

export interface FontLicensingResult {
  errors: string[];
  warnings: string[];
  /** Families named in a stack that need no declaration, for display. */
  fallbacks: string[];
}

/**
 * Cross-check the declared licences against the stacks the style actually ships.
 *
 * Two failures matter and both are errors. A family that is asked for but never
 * declared is the dangerous one: nobody can tell whether adopting the style
 * costs money. A declaration with no matching family is dead metadata that will
 * quietly rot, so it fails too rather than warning forever.
 */
export function checkFontLicensing(
  stacks: StackInput,
  declared: FontDeclaration[],
): FontLicensingResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const fallbacks: string[] = [];

  const byFamily = new Map(declared.map((f) => [f.family.trim().toLowerCase(), f]));
  const seen = new Set<string>();

  const roles: Array<["sans" | "mono" | "display", string | undefined]> = [
    ["sans", stacks.sans],
    ["mono", stacks.mono],
    ["display", stacks.display],
  ];

  for (const [role, stack] of roles) {
    if (!stack) continue;
    const families = parseStack(stack);

    if (families.length < 2) {
      errors.push(
        `font.${role} is a bare family; a stack needs at least one fallback, since not every reader will have "${families[0] ?? stack}" installed`,
      );
    }

    const first = families[0];
    if (first && isSystemFamily(first)) {
      warnings.push(
        `font.${role} leads with "${first}", a system family. It renders for most readers but not all, and it is proprietary, so it belongs in the fallbacks`,
      );
    }

    for (const family of families) {
      const key = family.toLowerCase();
      if (isGenericFamily(family) || isSystemFamily(family)) {
        if (!fallbacks.includes(family)) fallbacks.push(family);
        continue;
      }

      const entry = byFamily.get(key);
      if (!entry) {
        errors.push(
          `font.${role} names "${family}" but no fonts[] entry declares it; add one with a licence from ${FREE_LICENSES.join(", ")} or drop the family`,
        );
        continue;
      }
      seen.add(key);
      if (entry.role !== role && parseStack(stacks[entry.role] ?? "").every((f) => f.toLowerCase() !== key)) {
        warnings.push(
          `fonts[] declares "${family}" as role "${entry.role}" but it appears in font.${role}`,
        );
      }
    }
  }

  for (const entry of declared) {
    if (!seen.has(entry.family.trim().toLowerCase())) {
      errors.push(
        `fonts[] declares "${entry.family}" but no font stack names it; remove the entry or add the family to a stack`,
      );
    }
  }

  return { errors, warnings, fallbacks };
}
