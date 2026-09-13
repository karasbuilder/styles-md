# Bright Atrium

a bright office atrium at ten in the morning. White page, pale tint blocks and one working blue. Cards are softly rounded and lifted by a single diffuse shadow, chips stay square at 4px, and a friendly display face carries the headline with a light negative tracking.

## Tokens

```yaml
color:  { bg: "#ffffff", surface: "#f6f7f8", fg: "#14161a", muted: "#55585f",
          accent: "#1a63d8", accentFg: "#ffffff", border: "#d0d3d8" }
font:   { sans: "\"Plus Jakarta Sans\", \"Helvetica Neue\", Arial, sans-serif",
          mono: "\"IBM Plex Mono\", ui-monospace, \"SFMono-Regular\", Menlo, monospace",
          base: "16px", scale: 1.2,
          weightBody: 400, weightHeading: 700,
          headingTracking: "-0.03em" }
type:   { xs: "11.11px", sm: "13.33px", base: "16px", lg: "19.2px", xl: "23.04px", 2xl: "27.65px", 3xl: "33.18px", 4xl: "39.81px" }
space:  { unit: "4px", gutter: "24px",
          section: "96px", maxWidth: "1280px" }
shape:  { strokeWidth: "1px", radiusSm: "4px",
          radiusMd: "20px", radiusLg: "32px" }
motion: { duration: "250ms", easing: "cubic-bezier(0.4, 0, 0, 1)" }
```

## Principles

- White is the page. Colour arrives as a tinted block that runs the width of a section.
- One blue does actions. Every filled button, link and active state uses it and nothing else does.
- Cards are `radius-md` with `shadow-md` and no border. Chips and inputs stay square at `radius-sm`.
- Two roundnesses only: soft on cards and panels, tight on the small things inside them.
- Headings run at -0.03em. Body copy is left at normal tracking and never goes above 20px.
- Illustration is flat, built from the tint cast, and drawn with no outline and no gradient.

## Components

- Button (primary): `accent` fill, `accentFg` label, `radius-full`, 12px/24px, weight 600.
- Button (subtle): `surface` fill, `fg` label, `radius-full`, same metrics, no border.
- Card: `surface` or white, `radius-md`, 24px padding, `shadow-md`, no border.
- Tint block: a full width section in one cast colour, `radius-lg` when it floats inside the page.
- Chip: `radius-sm`, tint fill, 4px/10px, mono or 12px sans, used for status and category.
- Nav: white, 1px `border` underneath, links at 14px, one primary button on the right.
- Input: white, 1px `border`, `radius-sm`, `accent` ring on focus.
- Spot illustration: flat tint shapes, no outline, sitting inside a card or a tint block.
- Focus ring: 2px `accent` at 2px offset.

## Do / Don't

- Do keep the page white and let the tint blocks carry the colour.
- Do give a section one tint. Two tints in one band turns the page into a swatch sheet.
- Do lift cards with the one soft shadow rather than with a border.
- Do keep body copy between 14 and 20px, and mark anything larger as a heading.
- Do use mono sparingly, on codes and counts, never on a sentence.
- Don't use a second action colour. Green and red are for status text, not for buttons.
- Don't outline an illustration or fill it with a gradient. The shapes are flat.
- Don't put a card inside a card. One level of lift is all this style has.
- Don't round a chip or an input. The tight radius is what keeps the page from going soft.
- Don't set a heading without pulling the tracking in. At weight 700 it opens up and looks unset.

<!-- styles-md/bright-atrium@1.0.0, CC-BY-4.0. Full spec: DESIGN.md -->
