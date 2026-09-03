import type { Style } from "./parse.js";
import { deriveScales } from "./compile.js";

/**
 * Sections carried into DESIGN.min.md. Everything else in a style file is
 * rationale for humans — useful in review, pure context tax for an agent.
 * Authors are told up front: if a rule must reach the model, it lives here.
 */
export const AGENT_SECTIONS = ["Principles", "Components", "Do / Don't"] as const;

interface Section {
  title: string;
  body: string;
}

/** Split on `## ` headings. Content before the first one is dropped. */
export function splitSections(body: string): Section[] {
  const sections: Section[] = [];
  let current: Section | null = null;

  for (const line of body.split("\n")) {
    const heading = /^##\s+(.+?)\s*$/.exec(line);
    if (heading) {
      if (current) sections.push(current);
      current = { title: heading[1], body: "" };
    } else if (current) {
      current.body += `${line}\n`;
    }
  }
  if (current) sections.push(current);

  return sections.map((s) => ({ ...s, body: s.body.trim() }));
}

function normalise(title: string): string {
  return title.toLowerCase().replace(/[’']/g, "'").replace(/\s+/g, " ").trim();
}

export function missingAgentSections(body: string): string[] {
  const present = new Set(splitSections(body).map((s) => normalise(s.title)));
  return AGENT_SECTIONS.filter((title) => !present.has(normalise(title)));
}

/**
 * The file an agent actually gets: hard numbers first, then only the rules it
 * has to obey. No prose, no rationale, no history.
 */
export function toMinified(style: Style): string {
  const { meta, body } = style;
  const scales = deriveScales(meta.tokens);
  const c = meta.tokens.color;
  const keep = new Set(AGENT_SECTIONS.map(normalise));
  const sections = splitSections(body).filter((s) => keep.has(normalise(s.title)));

  const lines = [
    `# ${meta.name}`,
    "",
    `${meta.mood}. ${meta.summary}`,
    "",
    "## Tokens",
    "",
    "```yaml",
    `color:  { bg: "${c.bg}", surface: "${c.surface}", fg: "${c.fg}", muted: "${c.muted}",`,
    `          accent: "${c.accent}", accentFg: "${c.accentFg}", border: "${c.border}" }`,
    `font:   { sans: ${JSON.stringify(meta.tokens.font.sans)},`,
    `          mono: ${JSON.stringify(meta.tokens.font.mono)},`,
    `          base: "${meta.tokens.font.baseSize}", scale: ${meta.tokens.font.scale},`,
    `          weightBody: ${meta.tokens.font.weightBody}, weightHeading: ${meta.tokens.font.weightHeading},`,
    `          headingTracking: "${meta.tokens.font.headingTracking}em" }`,
    `type:   { ${scales.type.map((t) => `${t.name}: "${t.size}"`).join(", ")} }`,
    `space:  { unit: "${meta.tokens.space.unit}", gutter: "${meta.tokens.space.gutter}",`,
    `          section: "${meta.tokens.space.section}", maxWidth: "${meta.tokens.space.maxWidth}" }`,
    `shape:  { strokeWidth: "${meta.tokens.stroke.width}", radiusSm: "${meta.tokens.radius.sm}",`,
    `          radiusMd: "${meta.tokens.radius.md}", radiusLg: "${meta.tokens.radius.lg}" }`,
    `motion: { duration: "${meta.tokens.motion.duration}", easing: "${meta.tokens.motion.easing}" }`,
    "```",
    "",
  ];

  for (const section of sections) {
    lines.push(`## ${section.title}`, "", section.body, "");
  }

  lines.push(
    `<!-- styles-md/${meta.id}@${meta.version} — ${meta.license}. Full spec: DESIGN.md -->`,
    "",
  );

  return lines.join("\n");
}
