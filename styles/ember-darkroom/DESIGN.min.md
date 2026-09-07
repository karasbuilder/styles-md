# Ember Darkroom

one object lit in a warm dark room. Warm near-black canvas, cream uppercase grotesk at a single weight, and one ember orange rationed to a single button and a few credit lines. Depth comes from a second surface, never a shadow, and every divider is a dashed hairline.

## Tokens

```yaml
color:  { bg: "#140d06", surface: "#2e2015", fg: "#f7e7cf", muted: "#b39d86",
          accent: "#e2601a", accentFg: "#140d06", border: "#443729" }
font:   { sans: "\"Archivo\", \"Inter\", \"Helvetica Neue\", Arial, sans-serif",
          mono: "\"DM Mono\", ui-monospace, \"SFMono-Regular\", Menlo, monospace",
          base: "18px", scale: 1.2,
          weightBody: 400, weightHeading: 500,
          headingTracking: "0em" }
type:   { xs: "12.5px", sm: "15px", base: "18px", lg: "21.6px", xl: "25.92px", 2xl: "31.1px", 3xl: "37.32px", 4xl: "44.79px" }
space:  { unit: "6px", gutter: "18px",
          section: "160px", maxWidth: "1440px" }
shape:  { strokeWidth: "1px", radiusSm: "12px",
          radiusMd: "22px", radiusLg: "36px" }
motion: { duration: "250ms", easing: "cubic-bezier(0.33, 0, 0.2, 1)" }
```

## Principles

- One family does every job. Weight 500 uppercase for headings, nav and labels; weight 400 mixed case only for body copy.
- The canvas is warm near-black, never pure black, and text is warm cream, never pure white.
- Ember is rationed: one filled control per page, and otherwise text for links, credits and footnotes.
- Depth is two surfaces, `bg` then `surface`. No shadow exists in this style.
- One object per section, centred, with copy flanking it left and right.
- Dividers are 1px dashed in `border`. A solid rule reads as a UI frame and breaks the gallery.

## Components

- Display line: `font-display`, weight 500, uppercase, line height 0.9, tracking 0.
- Body copy: weight 400, mixed case, `text-lg` to `text-xl`, left aligned, measure under 46 characters.
- Button (primary): `accent` fill, `accentFg` label, `radius-lg` pill, 14px/28px padding. One per page.
- Button (secondary): `surface` fill or 1px `border` over the canvas, `fg` label, `radius-md`, same padding.
- Card: `surface`, `radius-sm`, 24px padding, 1px `border`, no shadow.
- Divider: 1px dashed `border`, full bleed, with `section` space above and below.
- Nav: no bar, no fill. Wordmark left, uppercase 12px links right, active link underlined dashed.
- Label / eyebrow: mono, uppercase, 12px, `muted`, sitting directly above the display line.
- Credit line: mono, 12px, `accent`, bottom corner of a section.
- Focus ring: 2px `accent` outline at 3px offset.

## Do / Don't

- Do set every heading, nav item and label in uppercase weight 500. Sentence case is for body copy only.
- Do give each product reveal its own full viewport height. Two reveals in one screen kills both.
- Do use dashed hairlines for every divider, including the footer.
- Do keep ember to one fill and a handful of small text marks per page.
- Don't use `#000` for a background or `#fff` for text. The warm tint is the whole style.
- Don't fill a card, a badge or a section band with ember. One button is the whole budget.
- Don't add a shadow, a glow or a blur to lift a card. Change the surface instead.
- Don't tighten tracking on display type, and don't letterspace the body.
- Don't centre body copy, even when it flanks a centred image.
- Don't go below `radius-sm` on a container, and don't put two filled buttons in one section.

<!-- styles-md/ember-darkroom@1.0.0, CC-BY-4.0. Full spec: DESIGN.md -->
