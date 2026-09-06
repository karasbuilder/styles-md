# Sticker Diner

a hand-painted burger van at a summer fair. Cream page, enormous fat display type outlined in white, and rotated sticker badges. Sections meet on a wave rather than a straight edge, and every photo is a cut-out that overlaps the headline.

## Tokens

```yaml
color:  { bg: "#f5e3cd", surface: "#ffffff", fg: "#1b1b1b", muted: "#6b4f3a",
          accent: "#e51000", accentFg: "#ffffff", border: "#1b1b1b" }
font:   { sans: "\"Mouse Memoirs\", \"Oswald\", Impact, sans-serif",
          mono: "\"IBM Plex Mono\", ui-monospace, \"SFMono-Regular\", Menlo, monospace",
          base: "16px", scale: 1.35,
          weightBody: 400, weightHeading: 400,
          headingTracking: "0em" }
type:   { xs: "8.78px", sm: "11.85px", base: "16px", lg: "21.6px", xl: "29.16px", 2xl: "39.37px", 3xl: "53.14px", 4xl: "71.74px" }
space:  { unit: "4px", gutter: "24px",
          section: "96px", maxWidth: "1408px" }
shape:  { strokeWidth: "2px", radiusSm: "14px",
          radiusMd: "28px", radiusLg: "72px" }
motion: { duration: "300ms", easing: "cubic-bezier(0.4, 0, 0.2, 1)" }
```

## Principles

- The headline is the layout. It runs to the full width of the page and everything else fits around it.
- Every display line is outlined in white. The stroke scales with the type, roughly 1/15th of the size.
- Photos are cut out, never in a box. They overlap the headline and bleed past their section.
- Badges are stickers: tilted 6 to 12 degrees, `radius-sm`, white outline, never square to the page.
- Sections meet on a wave. A straight horizontal edge between two colours does not appear.
- Three colours do all the work: cream, red and amber. White is the outline, ink is the text.

## Components

- Button (primary): `accent` fill, white label at `text-lg`, `radius-full` or a 50%/60% ellipse, 16px/40px padding.
- Button (secondary): no fill, 2px `border` at 20% opacity, `radius-full`, same metrics.
- Sticker: amber fill, ink label, `radius-sm`, 5px white outline, rotated 6 to 12 degrees.
- Display line: display face, `accent` or `fg`, white stroke scaled to the size, line height 0.75 to 0.9.
- Photo card: `radius-lg`, `shadow-md`, rotated 2 to 5 degrees, overlapping its neighbour.
- Cut-out image: no frame, `drop-shadow(0 9px 7px rgba(0,0,0,0.1))`, sitting over the headline.
- Wave divider: an SVG path, not a border, at least 80px deep so it reads as a shape.
- Nav: cream, no bar. Wordmark left in the display face, pill buttons right.
- Focus ring: 3px `accent` outline at 3px offset.

## Do / Don't

- Do let the headline overflow. If it fits comfortably it is too small.
- Do outline every display line in white, including on a cream background.
- Do tilt the stickers and the photo cards. Nothing decorative sits square.
- Do overlap: photo over headline, sticker over photo, headline over the wave.
- Do keep display line height under 0.9. At this weight the letters fill the line themselves.
- Don't set body copy in the display face. It is unreadable past a few words.
- Don't put a cut-out photo in a rectangle. Cropping it into a box removes the whole effect.
- Don't divide two colour fields with a straight edge. The wave is the divider.
- Don't add a fourth hue. Cream, red and amber, and white and ink for outline and text.
- Don't centre everything. The composition is deliberately off-balance.

<!-- styles-md/sticker-diner@1.0.0, CC-BY-4.0. Full spec: DESIGN.md -->
