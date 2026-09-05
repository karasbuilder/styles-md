import { loadStyles, estimateTokens, type Style, type ParseIssue } from "./parse.js";
import { checkContrast, type ContrastCheck } from "./contrast.js";
import { missingAgentSections, toMinified } from "./minify.js";
import { TOKEN_BUDGET } from "./schema.js";
import { checkFontLicensing } from "./fonts.js";

export interface StyleReport {
  slug: string;
  contrast: ContrastCheck[];
  missingSections: string[];
  /** Families named in a stack that need no licence: generics and OS fonts. */
  fontFallbacks: string[];
  fullTokens: number;
  minTokens: number;
  errors: string[];
  warnings: string[];
}

export interface ValidationReport {
  styles: StyleReport[];
  parseIssues: ParseIssue[];
  errorCount: number;
  warningCount: number;
}

export function validateStyle(style: Style): StyleReport {
  const contrast = checkContrast(style.meta.tokens);
  const missingSections = missingAgentSections(style.body);
  const fullTokens = estimateTokens(style.body);
  const minTokens = estimateTokens(toMinified(style));
  const licensing = checkFontLicensing(style.meta.tokens.font, style.meta.fonts);

  const errors: string[] = [...licensing.errors];
  const warnings: string[] = [...licensing.warnings];

  for (const check of contrast) {
    if (!check.pass) {
      errors.push(
        `contrast: ${check.label} is ${check.ratio}:1 (${check.fg} on ${check.bg}), needs ${check.min}:1`,
      );
    }
  }

  for (const title of missingSections) {
    errors.push(`missing required section "## ${title}": agents never see it otherwise`);
  }

  if (minTokens > TOKEN_BUDGET.min) {
    errors.push(
      `DESIGN.min.md is ~${minTokens} tokens, budget is ${TOKEN_BUDGET.min}; trim the agent sections`,
    );
  }
  if (fullTokens > TOKEN_BUDGET.full) {
    warnings.push(`DESIGN.md is ~${fullTokens} tokens, soft budget is ${TOKEN_BUDGET.full}`);
  }
  if (style.meta.quality === "featured" && warnings.length > 0) {
    warnings.push(`marked "featured" but still has warnings`);
  }

  return { slug: style.slug, contrast, missingSections, fullTokens, minTokens, errors, warnings };
}

export function validateDir(dir: string): ValidationReport {
  const { styles, issues } = loadStyles(dir);
  const reports = styles.map(validateStyle);
  return {
    styles: reports,
    parseIssues: issues,
    errorCount: issues.length + reports.reduce((n, r) => n + r.errors.length, 0),
    warningCount: reports.reduce((n, r) => n + r.warnings.length, 0),
  };
}
