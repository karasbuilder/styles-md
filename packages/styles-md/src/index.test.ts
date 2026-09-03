import { describe, it, expect } from "vitest";
import { join } from "node:path";
import { styleSchema } from "./schema.js";
import { loadStyles } from "./parse.js";
import { deriveScales, flattenTokens, toCss, toShadcn } from "./compile.js";
import { checkContrast } from "./contrast.js";
import { splitSections, missingAgentSections, toMinified } from "./minify.js";
import { validateDir } from "./validate.js";

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

describe("the shipped library", () => {
  it("parses and passes every gate", () => {
    const report = validateDir(STYLES_DIR);
    expect(report.parseIssues).toEqual([]);
    expect(report.styles.length).toBeGreaterThanOrEqual(8);
    expect(report.styles.flatMap((s) => s.errors)).toEqual([]);
  });

  it("has a unique id per folder", () => {
    const { styles } = loadStyles(STYLES_DIR);
    const ids = styles.map((s) => s.meta.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
