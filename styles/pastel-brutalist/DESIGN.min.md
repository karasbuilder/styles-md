# Pastel Brutalist

a sticker sheet that handles your invoices. Cream page, white cards, 2px ink outlines and hard offset shadows. Flat pastel fills and one ultra-heavy display face carry all the volume.

## Tokens

```yaml
color:  { bg: "#f5f2f0", surface: "#ffffff", fg: "#151617", muted: "#63615f",
          accent: "#b09cfb", accentFg: "#151617", border: "#151617" }
font:   { sans: "\"Geist\", \"Geist Sans\", Inter, system-ui, -apple-system, \"Segoe UI\", sans-serif",
          mono: "\"Geist Mono\", ui-monospace, \"SFMono-Regular\", Menlo, monospace",
          base: "16px", scale: 1.25,
          weightBody: 400, weightHeading: 800,
          headingTracking: "-0.02em" }
type:   { xs: "10.24px", sm: "12.8px", base: "16px", lg: "20px", xl: "25px", 2xl: "31.25px", 3xl: "39.06px", 4xl: "48.83px" }
space:  { unit: "4px", gutter: "24px",
          section: "96px", maxWidth: "1200px" }
shape:  { strokeWidth: "2px", radiusSm: "8px",
          radiusMd: "12px", radiusLg: "16px" }
motion: { duration: "180ms", easing: "cubic-bezier(0.34, 1.4, 0.64, 1)" }
```

## Principles

- Every element that holds content gets a 2px ink border. The border is the drawing.
- Shadows are solid ink offsets, never blurred. Depth is a second copy of the shape, down and right.
- Corners stay round. 12px is the house radius and it is what keeps the black outlines warm.
- Fills are flat pastel. A tint fills the shape, ink outlines it, nothing gradients in between.
- Display type carries all the volume. Body text stays at base size and stays quiet.
- Pressing something moves it into its own shadow: translate 2px, drop the offset to zero.

## Components

- Button (primary): `accent` fill, ink label at weight 600, 2px border, `radius-md`, 12px/20px padding, `shadow-sm`.
- Button (secondary): `surface` fill, identical border, shadow and metrics. Only the fill changes.
- Card: `surface` fill, 2px border, `radius-lg`, 24px padding, `shadow-md`.
- Tinted card: same as card with a pastel fill. One per group, so the eye has a landing spot.
- Input: `surface` fill, 2px border, `radius-md`, 10px/14px padding; focus adds `shadow-sm`.
- Nav: floating bar inset 16px from the top, `surface` fill, 2px border, `radius-lg`, `shadow-sm`.
- Badge: `radius-full`, 2px border, tint fill, mono uppercase at `text-xs`, 4px/10px padding.
- Table: 2px outer border, 1px inner rules, `surface` header row in mono uppercase, 12px/16px cells.
- Heading: `"Gasoek One", "Archivo Black", "Arial Black", sans-serif`, tracking -0.02em, line height 1.0.
- Focus ring: 3px `accent` outline at 2px offset, following the element radius.

## Do / Don't

- Do outline every tinted shape. A pastel fill with no border dissolves into the cream.
- Do keep all shadow offsets pointing the same way. One light source, down and right.
- Do use mono uppercase at `text-xs` for micro labels: badges, table headers, metric captions.
- Do let headings run wide and wrap. The display face is meant to fill its measure.
- Don't blur a shadow or tint it any colour other than ink.
- Don't set the page to pure white. The cream is why the cards read as raised.
- Don't set body copy, buttons or labels in the display family. It is for headings only.
- Don't put more than three tints in one view, or the outlines stop reading as structure.
- Don't drop the border to 1px on small elements. Badges and inputs keep the full 2px.

<!-- styles-md/pastel-brutalist@1.0.0, CC-BY-4.0. Full spec: DESIGN.md -->
