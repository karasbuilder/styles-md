# Candy Playful

bright, chunky and pleased to see you. Big radii, thick weights, saturated violet and a springy motion curve. Confident and friendly without slipping into childish.

## Tokens

```yaml
color:  { bg: "#fffdf7", surface: "#ffffff", fg: "#2a1d33", muted: "#6b5a75",
          accent: "#7b3fe4", accentFg: "#ffffff", border: "#dcc9ea" }
font:   { sans: "\"Nunito\", \"Inter\", system-ui, -apple-system, sans-serif",
          mono: "\"JetBrains Mono\", ui-monospace, \"SFMono-Regular\", Menlo, monospace",
          base: "17px", scale: 1.333,
          weightBody: 500, weightHeading: 800,
          headingTracking: "-0.02em" }
type:   { xs: "9.57px", sm: "12.75px", base: "17px", lg: "22.66px", xl: "30.21px", 2xl: "40.27px", 3xl: "53.67px", 4xl: "71.55px" }
space:  { unit: "4px", gutter: "24px",
          section: "104px", maxWidth: "1100px" }
shape:  { strokeWidth: "2px", radiusSm: "10px",
          radiusMd: "16px", radiusLg: "28px" }
motion: { duration: "260ms", easing: "cubic-bezier(0.34, 1.56, 0.64, 1)" }
```

## Principles

- Body text is weight 500 and headings are 800. There is no thin type in this style.
- Buttons and cards use a solid offset shadow so they read as physical objects.
- The motion curve overshoots slightly. Every hover and open should feel springy.
- Radius scales with the element: 10px controls, 16px buttons, 28px cards.
- Violet is the only accent; warmth comes from the cream background, not a second hue.

## Components

- Button (primary): accent fill, white label, `radius-md`, 14px/26px padding, weight 700, `shadow-sm`; presses down 2px on active.
- Button (secondary): white fill, 2px border, `fg` label, same metrics.
- Card: white fill, 2px border, `radius-lg`, 28px padding, `shadow-md`.
- Input: white fill, 2px border, `radius-md`, 14px/16px padding; focus swaps border to accent.
- Nav: 72px tall, transparent, `fg` links at weight 600, accent pill behind the active item.
- Badge: tinted accent fill, accent text, `radius-full`, weight 700 `text-xs`, 4px/12px padding.
- Avatar: `radius-full`, 2px white ring over a coloured background.
- Illustration: flat shapes in accent tints, never gradients or drop shadows.

## Do / Don't

- Do give sections 104px of air — the chunky elements need it.
- Do use sentence case for every label, button and heading.
- Do animate hovers with the springy curve; it is the personality of the style.
- Don't use thin or light font weights anywhere.
- Don't drop below 16px radius on a button.
- Don't add a second saturated colour. Tints of the accent only.
- Don't use blurred shadows on buttons; the solid offset is the look.
- Don't set body copy at weight 400 — it looks broken next to the headings.

<!-- styles-md/candy-playful@1.0.0 — CC-BY-4.0. Full spec: DESIGN.md -->
