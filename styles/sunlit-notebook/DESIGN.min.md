# Sunlit Notebook

a warm paper notebook in afternoon light. Warm paper canvas, white cards separated by a hairline rather than a shadow, and one blue reserved for the single filled button. Colour variety lives in the feature card fills, and hierarchy is alpha on the ink before it is a new hue.

## Tokens

```yaml
color:  { bg: "#f5f1ea", surface: "#ffffff", fg: "#171310", muted: "#6a6058",
          accent: "#1063d8", accentFg: "#ffffff", border: "#d2c7b7" }
font:   { sans: "\"Figtree\", \"Inter\", \"Helvetica Neue\", Arial, sans-serif",
          mono: "\"IBM Plex Mono\", ui-monospace, \"SFMono-Regular\", Menlo, monospace",
          base: "16px", scale: 1.2,
          weightBody: 400, weightHeading: 600,
          headingTracking: "-0.035em" }
type:   { xs: "11.11px", sm: "13.33px", base: "16px", lg: "19.2px", xl: "23.04px", 2xl: "27.65px", 3xl: "33.18px", 4xl: "39.81px" }
space:  { unit: "4px", gutter: "24px",
          section: "80px", maxWidth: "1440px" }
shape:  { strokeWidth: "1px", radiusSm: "4px",
          radiusMd: "8px", radiusLg: "12px" }
motion: { duration: "200ms", easing: "cubic-bezier(0.25, 0.1, 0.25, 1)" }
```

## Principles

- The page is paper and the cards are white. Inverting that removes the warmth the whole style rests on.
- One filled button per screen, in `accent`. Every other action is a tint or plain text.
- Separation is a 1px hairline. This style has no shadow token, and cards do not get one.
- Colour variety lives in feature card fills, one hue per card, never in a button.
- Build hierarchy with `fg` at 100, 60 and 40 percent opacity before reaching for another colour.
- Tracking tightens as type grows, to about -0.035em at display sizes. Body stays at normal.

## Components

- Button (primary): `accent` fill, `accentFg` label, `radius-md`, 10px/18px padding, weight 500.
- Button (ghost): `#e7f0fd` fill, `accent` label, `radius-md`, same metrics.
- Button (quiet): no fill, `fg` at 60 percent, underline on hover.
- Card: `surface`, 1px `border`, `radius-lg`, 24px padding, no shadow.
- Feature card: one accent hue as a flat fill, no border, `radius-lg`, same padding.
- Pill: `radius-full`, tinted fill, 4px/12px, wrapping one highlighted word inside a headline.
- Nav: sticky, paper background, hairline underneath, 14px links at weight 500.
- Input: `surface`, 1px `border`, `radius-md`, `accent` ring on focus.
- Table: hairline row rules, mono figures, no zebra fill.
- Focus ring: 2px `accent` at 2px offset.

## Do / Don't

- Do keep the canvas paper and the cards white.
- Do carry colour on card fills, one hue per card, and leave the rest of the page neutral.
- Do tighten tracking as the type grows, and leave body copy alone.
- Do use alpha on the ink for secondary text before adding a grey.
- Do keep transitions at 200ms, and save a spring for one element in the hero.
- Don't use pure white as the page background.
- Don't put a shadow on a content card. The hairline is the separation.
- Don't add a second filled button colour to a view.
- Don't use a gradient anywhere. Every fill is flat.
- Don't round a rectangle past `radius-lg`. Pills are the only other shape.

<!-- styles-md/sunlit-notebook@1.0.0, CC-BY-4.0. Full spec: DESIGN.md -->
