import { wcagContrast } from "culori";
import { CONTRAST_PAIRS, type StyleTokens } from "./schema.js";

export interface ContrastCheck {
  label: string;
  fg: string;
  bg: string;
  ratio: number;
  min: number;
  pass: boolean;
}

export function checkContrast(tokens: StyleTokens): ContrastCheck[] {
  const color = tokens.color as Record<string, string | undefined>;
  return CONTRAST_PAIRS.map((pair) => {
    const fg = color[pair.fg]!;
    const bg = color[pair.bg]!;
    const ratio = Math.round(wcagContrast(fg, bg) * 100) / 100;
    return { label: pair.label, fg, bg, ratio, min: pair.min, pass: ratio >= pair.min };
  });
}

export function contrastFailures(tokens: StyleTokens): ContrastCheck[] {
  return checkContrast(tokens).filter((c) => !c.pass);
}
