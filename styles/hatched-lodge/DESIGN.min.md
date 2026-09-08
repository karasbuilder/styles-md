# Hatched Lodge

a mountain lodge printed in two inks. Umber ground, sand ink, and nothing else. Photographs are redrawn as vertical line screens, micro labels are tracked wide while the display line is tracked tight, and every transition takes 600ms.

## Tokens

```yaml
color:  { bg: "#2a2622", surface: "#37312a", fg: "#bfa980", muted: "#a08e6d",
          accent: "#d8bd8a", accentFg: "#2a2622", border: "#4a4238" }
font:   { sans: "\"Space Grotesk\", \"Helvetica Neue\", Arial, sans-serif",
          mono: "\"Space Mono\", ui-monospace, \"SFMono-Regular\", Menlo, monospace",
          base: "16px", scale: 1.25,
          weightBody: 400, weightHeading: 400,
          headingTracking: "-0.06em" }
type:   { xs: "10.24px", sm: "12.8px", base: "16px", lg: "20px", xl: "25px", 2xl: "31.25px", 3xl: "39.06px", 4xl: "48.83px" }
space:  { unit: "4px", gutter: "24px",
          section: "120px", maxWidth: "1680px" }
shape:  { strokeWidth: "1px", radiusSm: "12px",
          radiusMd: "20px", radiusLg: "40px" }
motion: { duration: "600ms", easing: "cubic-bezier(0.25, 1, 0.5, 1)" }
```

## Principles

- Two inks. Umber is every surface, sand is every mark, and nothing else is coloured.
- Pictures are redrawn as vertical line screens in sand, never placed as photographs.
- Micro type is uppercase and tracked out to about +0.08em. Display type is tracked in to -0.06em.
- One weight does everything. Hierarchy is size, tracking and space, never boldness.
- Corners are generous: `radius-lg` on controls, `radius-md` on cards, `radius-sm` on chips.
- Motion is long. 600ms on a control, and up to 1200ms on anything the size of a section.

## Components

- Display line: display face, uppercase, -0.06em, line height 0.9, sand on umber.
- Label: sans, uppercase, 10 to 12px, +0.08em, `muted`, anchored to a corner.
- Button (primary): `accent` fill, `accentFg` label, `radius-lg`, 12px/24px, uppercase label.
- Button (outline): transparent, 1px `fg` border, `fg` label, same metrics.
- Card: `surface`, 1px `border`, `radius-md`, 24px padding, no shadow.
- Circle badge: 1px `border`, 160px across, uppercase label centred, turning slowly.
- Hatch image: sand lines 1 to 2px wide on a 4px pitch, length carrying the tone, no frame.
- Scrim: a gradient from transparent to umber at 40 percent, over any hatch that carries text.
- Tick rule: mono tick marks at a corner, used as a measure rather than as decoration.
- Focus ring: 2px `accent` at 3px offset.

## Do / Don't

- Do keep every surface umber and every mark sand.
- Do redraw imagery as a line screen, and keep one pitch across the whole page.
- Do track labels out and display in. The two moving in opposite directions is the voice.
- Do let a transition take 600ms. This system is slow on purpose.
- Do anchor metadata to the corners of a full bleed section rather than centring it.
- Don't add a third hue, including for status or for a hover.
- Don't set body copy above 16px or a display line below 40px.
- Don't reach for a shadow. Depth is the scrim and the one surface step.
- Don't put a picture in a rounded box. It becomes a card, and the page becomes a template.
- Don't bold anything, and don't fake a bold with a second face.

<!-- styles-md/hatched-lodge@1.0.0, CC-BY-4.0. Full spec: DESIGN.md -->
