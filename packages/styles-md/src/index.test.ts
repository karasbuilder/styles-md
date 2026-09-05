import { describe, it, expect } from "vitest";
import { join } from "node:path";
import { styleSchema } from "./schema.js";
import { loadStyles } from "./parse.js";
import { deriveScales, flattenTokens, toCss, toShadcn } from "./compile.js";
import { checkContrast } from "./contrast.js";
import { splitSections, missingAgentSections, toMinified } from "./minify.js";
import { validateDir, validateStyle } from "./validate.js";
import { checkFontLicensing, parseStack } from "./fonts.js";

const STYLES_DIR = join(import.meta.dirname, "..", "..", "..", "styles");

function baseTokens() {
  return {
    color: {
      bg: "#ffffff",
      surface: "#f5f5f5",
      fg: "#111111",
      muted: "#5a5a5a",
      accent: "#1d4ed8",
      accentFg: "#ffffff",
      border: "#cccccc",
    },
    font: {
      sans: '"Inter", sans-serif',
      mono: '"JetBrains Mono", monospace',
      scale: 1.25,
      baseSize: "16px",
      weightBody: 400,
      weightHeading: 600,
      headingTracking: -0.02,
    },
    space: { unit: "4px", gutter: "24px", section: "96px", maxWidth: "1120px" },
    radius: { sm: "4px", md: "8px", lg: "12px" },
    motion: { duration: "160ms", easing: "ease" },
  };
}

/** Wraps parsed frontmatter into the on-disk Style shape validateStyle takes. */
function styleAt(meta: ReturnType<typeof styleFixture>, body = REQUIRED_SECTIONS) {
  return { slug: meta.id, dir: `/tmp/${meta.id}`, file: `/tmp/${meta.id}/DESIGN.md`, meta, body };
}

const REQUIRED_SECTIONS = [
  "## Principles",
  "- a principle",
  "## Components",
  "- Button: a button",
  "## Do / Don't",
  "- Do something",
].join("\n\n");

function styleFixture(overrides: Record<string, unknown> = {}) {
  return styleSchema.parse({
    id: "test-style",
    name: "Test Style",
    version: "1.0.0",
    license: "CC-BY-4.0",
    mood: "a fixture with a mood",
    summary: "A fixture used by the unit tests to exercise the compiler and validators.",
    tags: ["light", "test"],
    tokens: baseTokens(),
    ...overrides,
  });
}

describe("schema", () => {
  it("rejects a colour that is not hex", () => {
    const tokens = baseTokens();
    tokens.color.bg = "white";
    expect(() => styleFixture({ tokens })).toThrow();
  });

  it("rejects a non-kebab id", () => {
    expect(() => styleFixture({ id: "Test Style" })).toThrow();
  });

  it("defaults stroke width and quality", () => {
    const style = styleFixture();
    expect(style.tokens.stroke.width).toBe("1px");
    expect(style.quality).toBe("draft");
  });

  it("defaults showcase to an empty list so existing styles keep validating", () => {
    expect(styleFixture().showcase).toEqual([]);
  });

  it("accepts a showcase entry and defaults embed to false", () => {
    const style = styleFixture({
      showcase: [{ label: "Acme Docs", url: "https://docs.example.com" }],
    });
    expect(style.showcase[0].embed).toBe(false);
    expect(style.showcase[0].label).toBe("Acme Docs");
  });

  it("rejects a showcase URL that is not https", () => {
    expect(() =>
      styleFixture({ showcase: [{ label: "Acme", url: "http://example.com" }] }),
    ).toThrow();
  });

  it("shows the built-in demo unless a style opts out", () => {
    expect(styleFixture().showDemo).toBe(true);
    expect(styleFixture({ showDemo: false }).showDemo).toBe(false);
  });

  it("refuses to drop the demo when no showcase can replace it", () => {
    const noPreview = validateStyle(
      styleAt(styleFixture({ showDemo: false })),
    );
    expect(noPreview.errors.some((e) => e.includes("no preview at all"))).toBe(true);

    const withShowcase = validateStyle(
      styleAt(
        styleFixture({
          showDemo: false,
          showcase: [{ label: "Acme", url: "https://acme.example.com", embed: true }],
        }),
      ),
    );
    expect(withShowcase.errors.some((e) => e.includes("no preview at all"))).toBe(false);
  });
});

describe("compile", () => {
  it("derives the type ramp from base size and ratio", () => {
    const scales = deriveScales(styleFixture().tokens);
    expect(scales.type.find((t) => t.name === "base")?.size).toBe("16px");
    expect(scales.type.find((t) => t.name === "lg")?.size).toBe("20px");
    expect(scales.type.find((t) => t.name === "xl")?.size).toBe("25px");
  });

  it("emits kebab-case custom properties", () => {
    const flat = flattenTokens(styleFixture().tokens);
    expect(flat["color-accent-fg"]).toBe("#ffffff");
    expect(flat["color-accentFg"]).toBeUndefined();
  });

  it("wraps css output in the requested selector", () => {
    const css = toCss(styleFixture(), ".demo");
    expect(css).toContain(".demo {");
    expect(css).toContain("--sm-color-bg: #ffffff;");
  });

  it("converts shadcn variables to oklch", () => {
    expect(toShadcn(styleFixture())).toMatch(/--background: oklch\(/);
  });
});

describe("contrast", () => {
  it("fails a muted colour that is too light", () => {
    const tokens = baseTokens();
    tokens.color.muted = "#dddddd";
    const results = checkContrast(styleFixture({ tokens }).tokens);
    const muted = results.find((r) => r.label.startsWith("muted text"));
    expect(muted?.pass).toBe(false);
  });

  it("passes a well-formed palette", () => {
    expect(checkContrast(styleFixture().tokens).every((r) => r.pass)).toBe(true);
  });
});

describe("minify", () => {
  const body = [
    "## Principles",
    "- one",
    "## Typography",
    "Prose that agents do not need.",
    "## Components",
    "- Button: accent fill.",
    "## Do / Don't",
    "- Do keep it short.",
  ].join("\n");

  it("splits on h2 headings", () => {
    expect(splitSections(body).map((s) => s.title)).toEqual([
      "Principles",
      "Typography",
      "Components",
      "Do / Don't",
    ]);
  });

  it("reports missing required sections", () => {
    expect(missingAgentSections("## Principles\n- one")).toEqual(["Components", "Do / Don't"]);
  });

  it("keeps agent sections and drops the rest", () => {
    const min = toMinified({ slug: "test-style", dir: "", file: "", meta: styleFixture(), body });
    expect(min).toContain("## Principles");
    expect(min).toContain("## Do / Don't");
    expect(min).not.toContain("Prose that agents do not need.");
  });
});

describe("font licensing", () => {
  const ofl = (family: string, role: "sans" | "mono" | "display") =>
    ({ family, role, license: "OFL-1.1", url: "https://example.com/font" }) as const;
  const stacks = {
    sans: 'Inter, system-ui, "Segoe UI", sans-serif',
    mono: 'ui-monospace, "SFMono-Regular", Menlo, monospace',
  };

  it("splits a stack and strips quotes", () => {
    expect(parseStack('"Geist Mono", ui-monospace, Menlo, monospace')).toEqual([
      "Geist Mono",
      "ui-monospace",
      "Menlo",
      "monospace",
    ]);
  });

  it("passes when every named family is declared", () => {
    const result = checkFontLicensing(stacks, [ofl("Inter", "sans")]);
    expect(result.errors).toEqual([]);
    expect(result.warnings).toEqual([]);
  });

  it("rejects a family no fonts[] entry covers", () => {
    const result = checkFontLicensing({ ...stacks, sans: "Circular, system-ui, sans-serif" }, []);
    expect(result.errors).toHaveLength(1);
    expect(result.errors[0]).toContain('names "Circular"');
  });

  it("rejects a declaration no stack asks for, so the list cannot rot", () => {
    const result = checkFontLicensing(stacks, [ofl("Inter", "sans"), ofl("Lyon", "display")]);
    expect(result.errors).toEqual([expect.stringContaining('declares "Lyon"')]);
  });

  it("rejects a bare family with no fallback", () => {
    const result = checkFontLicensing({ ...stacks, sans: "Inter" }, [ofl("Inter", "sans")]);
    expect(result.errors).toEqual([expect.stringContaining("bare family")]);
  });

  it("treats generics and OS families as fallbacks needing no licence", () => {
    const result = checkFontLicensing(stacks, [ofl("Inter", "sans")]);
    expect(result.fallbacks).toContain("Segoe UI");
    expect(result.fallbacks).toContain("Menlo");
    expect(result.fallbacks).toContain("sans-serif");
  });

  it("warns when a stack leads with a proprietary system family", () => {
    const result = checkFontLicensing({ ...stacks, sans: '"Segoe UI", system-ui, sans-serif' }, []);
    expect(result.errors).toEqual([]);
    expect(result.warnings).toEqual([expect.stringContaining('leads with "Segoe UI"')]);
  });

  it("rejects a licence that is not on the free list at the schema layer", () => {
    expect(() =>
      styleFixture({
        fonts: [
          { family: "Inter", role: "sans", license: "Proprietary", url: "https://example.com" },
        ],
      }),
    ).toThrow();
  });

  it("defaults fonts to an empty list", () => {
    expect(styleFixture().fonts).toEqual([]);
  });
});

describe("the shipped library", () => {
  it("parses and passes every gate", () => {
    const report = validateDir(STYLES_DIR);
    expect(report.parseIssues).toEqual([]);
    expect(report.styles.length).toBeGreaterThanOrEqual(1);
    expect(report.styles.flatMap((s) => s.errors)).toEqual([]);
  });

  it("has a unique id per folder", () => {
    const { styles } = loadStyles(STYLES_DIR);
    const ids = styles.map((s) => s.meta.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
