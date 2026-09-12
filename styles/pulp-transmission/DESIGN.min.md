# Pulp Transmission

a comic broadcast from a dead planet. Deep navy and one flare of coral, inverted section by section. Ultra wide display caps fill the page edge to edge, halftone artwork sits in a radial glow, and technical marks hold the four corners.

## Tokens

```yaml
color:  { bg: "#0a1526", surface: "#16263f", fg: "#f2ecea", muted: "#93a1b5",
          accent: "#f2565f", accentFg: "#0a1526", border: "#2b3d59" }
font:   { sans: "\"Inter Tight\", \"Helvetica Neue\", Arial, sans-serif",
          mono: "\"JetBrains Mono\", ui-monospace, \"SFMono-Regular\", Menlo, monospace",
          base: "16px", scale: 1.25,
          weightBody: 400, weightHeading: 800,
          headingTracking: "0em" }
type:   { xs: "10.24px", sm: "12.8px", base: "16px", lg: "20px", xl: "25px", 2xl: "31.25px", 3xl: "39.06px", 4xl: "48.83px" }
space:  { unit: "4px", gutter: "24px",
          section: "120px", maxWidth: "1440px" }
shape:  { strokeWidth: "1px", radiusSm: "6px",
          radiusMd: "10px", radiusLg: "90px" }
motion: { duration: "350ms", easing: "cubic-bezier(0.2, 0.8, 0.2, 1)" }
```

## Principles

- Two grounds, and they swap. Navy sections carry coral marks; coral sections carry navy marks.
- On coral, the ink is `bg` navy. Bone on coral fails contrast at 2.86:1, so it never appears there.
- The display line is width, not size. Push the face to its expanded end and fill the measure.
- Artwork is halftoned to two inks and sits in a radial glow, never on a flat rectangle.
- Every screen keeps technical marks in its corners: a barcode, a crossed circle, a frame count.
- Shadows are layered and soft. This is the one style here where depth is allowed to be lit.

## Components

- Display line: display face at expanded width, weight 800, uppercase, line height 0.8, tracking 0.
- Button (primary): `accent` fill, `accentFg` label, `radius-lg`, 14px/32px, uppercase mono label.
- Button (ghost): 1px `border`, `fg` label, `radius-lg`, same metrics.
- Icon button: a circle at `radius-full`, `surface` fill, 44px, in a row of five or more.
- Panel: `surface`, `radius-md`, 1px `border`, 24px padding, `shadow-md`.
- Card (art): the halftone bleeds to the edges, `radius-sm`, caption in mono underneath.
- Corner mark: mono at 10px, or a drawn barcode or crossed circle, pinned to a section corner.
- Glow: a radial gradient of `accent` at 25 percent, behind the subject and nothing else.
- Divider: 1px `border`, full bleed, with a mono label sitting on top of it.
- Focus ring: 2px `accent` at 3px offset.

## Do / Don't

- Do invert the ground between sections. A page of one colour loses the whole device.
- Do set the title as wide as the container allows before you make it taller.
- Do halftone the artwork to two inks so it prints with the type.
- Do keep the corner marks on every full bleed section, at 10px, in mono.
- Do let the glow sit behind the subject, at one intensity, once per section.
- Don't put bone text on coral. Navy is the ink on that ground.
- Don't track the display line. Width is the axis you reach for.
- Don't fill a mid sized rectangle with coral. It is either a full ground, a control, or a mark.
- Don't put a photograph on the page untreated. It has to be halftoned or it does not belong.
- Don't add a third hue. The palette is two inks and a grey for captions.

<!-- styles-md/pulp-transmission@1.0.0, CC-BY-4.0. Full spec: DESIGN.md -->
