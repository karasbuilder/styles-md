# Recess Bulletin

a bulletin board at recess, all stickers. White page, 3px black outlines and enormous radii. Everything is a sticker in a flat colour, tilted and overlapping, and depth comes from the outline rather than from a shadow. Type is a heavy rounded serif with normal tracking.

## Tokens

```yaml
color:  { bg: "#ffffff", surface: "#fff6e2", fg: "#101010", muted: "#575757",
          accent: "#e6533c", accentFg: "#101010", border: "#101010" }
font:   { sans: "\"Nunito\", \"Helvetica Neue\", Arial, sans-serif",
          mono: "\"DM Mono\", ui-monospace, \"SFMono-Regular\", Menlo, monospace",
          base: "16px", scale: 1.25,
          weightBody: 500, weightHeading: 700,
          headingTracking: "0em" }
type:   { xs: "10.24px", sm: "12.8px", base: "16px", lg: "20px", xl: "25px", 2xl: "31.25px", 3xl: "39.06px", 4xl: "48.83px" }
space:  { unit: "4px", gutter: "24px",
          section: "120px", maxWidth: "1440px" }
shape:  { strokeWidth: "3px", radiusSm: "20px",
          radiusMd: "50px", radiusLg: "140px" }
motion: { duration: "400ms", easing: "cubic-bezier(0, 0, 0.1, 1.02)" }
```

## Principles

- Everything is outlined. 3px black on every sticker, button, card and picture, with no exceptions.
- Fills are flat. No gradient and no shadow exists in this style; the outline carries the depth.
- Corners are enormous. `radius-lg` on panels, `radius-md` on cards, `radius-sm` on chips.
- Stickers tilt 1 to 8 degrees and overlap. A grid of squares is the failure mode.
- Labels on a colour are always black, never white, so the palette can stay this bright.
- Motion overshoots. Controls settle past their end point, marquees run linear and never stop.

## Components

- Sticker: flat hue fill, 3px `border`, `radius-sm` to `radius-full`, rotated 1 to 8 degrees.
- Button (primary): `accent` fill, black label, `radius-full`, 3px `border`, 12px/28px padding.
- Button (secondary): `surface` or white fill, black label, same outline and metrics.
- Panel: `radius-lg`, flat hue or cream, 3px `border`, 32px padding, often overlapping its neighbour.
- Product card: an arch, `radius-lg` on the top two corners only, 3px `border`, picture inside.
- Round badge: a circle with text on a circular path, 3px `border`, turning slowly.
- Marquee: one strip per section, black on a hue, 20 to 40 seconds linear, never paused on hover.
- Nav: white bar, black wordmark centred, pill button left, mascot badge right.
- Focus ring: 3px `accent` outline at 3px offset.

## Do / Don't

- Do outline every shape in the same 3px black, pictures included.
- Do tilt and overlap the stickers. Nothing decorative sits square to the page.
- Do keep every fill flat, and let the outline do the separating.
- Do put black on colour, and reserve `accent` for things that can be clicked.
- Do let controls overshoot on the way in. The bounce is the personality.
- Don't add a shadow or a gradient. There is no token for either.
- Don't square a corner. The smallest radius on a panel is `radius-md`.
- Don't set white text on a sticker hue, or grey text on any of them.
- Don't run more than one marquee in a section, or two hues into a gradient band.
- Don't thicken the outline on hover. Scale and rotate instead.

<!-- styles-md/recess-bulletin@1.0.0, CC-BY-4.0. Full spec: DESIGN.md -->
