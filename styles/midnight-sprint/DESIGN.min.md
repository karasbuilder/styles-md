# Midnight Sprint

a stadium tunnel after kickoff, a collector binder on the bench. Cream pebbled-leather opening, then ink-violet chapters under giant ghost headlines. Gold-foil collectible cards, white-bordered prints dropped at an angle and tiny mono captions give an athlete story its weight.

## Tokens

```yaml
color:  { bg: "#0c0a12", surface: "#221836", fg: "#efe9df", muted: "#ada4bb",
          accent: "#e3b54c", accentFg: "#14101c", border: "#3f3355" }
font:   { sans: "\"Manrope\", \"Helvetica Neue\", Arial, sans-serif",
          mono: "\"Space Mono\", Menlo, monospace",
          base: "16px", scale: 1.28,
          weightBody: 400, weightHeading: 400,
          headingTracking: "0.01em" }
type:   { xs: "9.77px", sm: "12.5px", base: "16px", lg: "20.48px", xl: "26.21px", 2xl: "33.55px", 3xl: "42.95px", 4xl: "54.98px" }
space:  { unit: "8px", gutter: "24px",
          section: "128px", maxWidth: "1600px" }
shape:  { strokeWidth: "1px", radiusSm: "2px",
          radiusMd: "4px", radiusLg: "8px" }
motion: { duration: "400ms", easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
```

## Principles

- Open on cream `#ebe5da` with a pebbled-leather texture and one cut-out portrait centred and
  bled off the bottom edge. Every later chapter sits on `bg` or a `#1d1530` violet field.
- Behind each dark chapter, set one giant uppercase word in `display` at ~18vw, coloured
  `#3a2a5c`, fading to `bg` toward its baseline. It is texture; imagery always sits in front.
- Imagery is 2D cel-shaded illustration of one invented athlete, kept on model across every
  image, and shown as objects: collectible cards, tilted prints, products cut out on transparent
  ground. Gold is foil on a card edge, a stat or one control, never a fill area.
- Copy is small and quiet against huge type: 13px to 15px body, 10px to 11px mono captions.
- Motion is optional garnish. Every chapter must read correctly with nothing animated.

## Components

- Hero: one viewport, cream leather, ghost initials in `#d9d1c3` behind the cut-out, a small
  centred wordmark, a 120px collectible card plus a short caption at lower left, a short
  caption at lower right.
- Collectible card: 3/4 image inside a 6px gold-foil frame (a `linear-gradient` of `#8a6421`,
  `accent`, `#fff1b8`), radius `sm`, soft drop shadow, rotated -4° to 4°. Under it, a centred
  mono title and a stat line in `muted`, letter-spaced 0.18em.
- Field ruler: faint yard numerals (`30 40 50`) in `display`, `#2a2140`, along a chapter floor.
- Print: photo with a 10px `#f4efe6` border, rotated -6° to 6°, stacked two or three deep.
- Quote chapter: violet field, centred display sentence at ~6vw, `fg`, a print dropped over it.
- Partner rail: a row of wordmarks in `muted` on `bg`, separated by a `border` hairline.
- Buttons: cream pill (`fg` fill, `accentFg` text, radius `full`, 11px mono uppercase). On
  cream ground, invert to an ink pill. Focus is a 2px `accent` outline offset 4px.

## Do / Don't

- Do check giant headlines at 390px. The subject and copy must stay readable over the ghost.
- Do give every narrative image real `alt` text, and keep faces clear of overlapping type.
- Don't trace a real athlete, copy a team's colours with its marks, or reuse a sponsor's logo.
- Don't use neon gradients, glass panels or rounded dashboard cards.
- Don't put gold on large areas or long text; it stops reading as foil.
- Don't make essential copy depend on scroll animation.

<!-- styles-md/midnight-sprint@1.0.0, CC-BY-4.0. Full spec: DESIGN.md -->
