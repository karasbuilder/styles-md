# Drafting Sheet

an architect's plot sheet on the desk. Warm paper ground, ink grotesk set in tight uppercase, and one plot orange for annotation. Corners are square, rules are hairlines, and the page is bounded by ruler ticks and register marks like a sheet off a plotter.

## Tokens

```yaml
color:  { bg: "#efede7", surface: "#cdcac1", fg: "#232320", muted: "#6b6a64",
          accent: "#c2380a", accentFg: "#ffffff", border: "#a6a39a" }
font:   { sans: "\"Familjen Grotesk\", \"Helvetica Neue\", Arial, sans-serif",
          mono: "\"Geist Mono\", ui-monospace, \"SFMono-Regular\", Menlo, monospace",
          base: "16px", scale: 1.2,
          weightBody: 500, weightHeading: 600,
          headingTracking: "-0.02em" }
type:   { xs: "11.11px", sm: "13.33px", base: "16px", lg: "19.2px", xl: "23.04px", 2xl: "27.65px", 3xl: "33.18px", 4xl: "39.81px" }
space:  { unit: "4px", gutter: "24px",
          section: "96px", maxWidth: "1440px" }
shape:  { strokeWidth: "1px", radiusSm: "0px",
          radiusMd: "0px", radiusLg: "0px" }
motion: { duration: "400ms", easing: "cubic-bezier(0.625, 0.05, 0, 1)" }
```

## Principles

- Corners are square. `radius-sm` through `radius-lg` are all 0, and only markers are circles.
- Rules are 1px hairlines. They divide the page into cells the way a drawing has a border and a grid.
- Type is uppercase grotesk at -0.02em. Sentence case appears only in body paragraphs.
- Orange is annotation. Small squares, one hairline, a link, a single filled control per screen.
- Illustration is drawn, stippled and monochrome, sitting on the paper with no frame around it.
- Shadows are hard offsets in ink with no blur. A soft shadow is the one thing that breaks this.

## Components

- Title block: uppercase, weight 600, -0.02em, sitting against a hairline with a mono key above it.
- Rule: 1px `border`, full bleed, dividing sections into cells rather than framing them.
- Ruler edge: mono tick marks along a section edge, with a plus register mark at each corner.
- Button (primary): `accent` fill, `accentFg` label, square, 12px/24px, uppercase mono.
- Button (secondary): 1px `border`, `fg` label, square, same metrics, `shadow-sm` on hover.
- Cell: `surface` or paper, 1px `border`, 24px padding, square, no radius and no blur.
- Annotation mark: an 8px `accent` square with a mono label, pinned to a point on a drawing.
- Drawing: stippled monochrome linework, no frame, no fill behind it.
- Nav: hairline underneath, items in cells divided by 1px rules, active item in `accent`.
- Focus ring: 2px `accent` at 2px offset.

## Do / Don't

- Do keep every corner square. Circles are for markers and nothing else.
- Do divide the page with hairlines into cells, and let the cells be uneven.
- Do set headings uppercase and tight, and leave body copy in sentence case.
- Do use orange as annotation: a mark, a rule, a link, one filled control.
- Do put ticks and register marks on the edge of a full bleed section.
- Don't use a blurred shadow. The offsets here are hard and inked.
- Don't fill a large area with orange. It stops being an annotation and becomes a brand band.
- Don't set body copy in the mono. It is for labels, dimensions and keys.
- Don't add a second accent hue, or a gradient of any kind.
- Don't round a button, a cell or an image. The sheet has no rounded corners on it.

<!-- styles-md/drafting-sheet@1.0.0, CC-BY-4.0. Full spec: DESIGN.md -->
