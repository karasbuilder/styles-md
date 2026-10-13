---
id: midnight-sprint
name: Midnight Sprint
version: 1.0.0
license: CC-BY-4.0
author: karas
mood: a stadium tunnel after kickoff, a collector binder on the bench
summary: Cream pebbled-leather opening, then ink-violet chapters under giant ghost headlines. Gold-foil collectible cards, white-bordered prints dropped at an angle and tiny mono captions give an athlete story its weight.
tags: [dark, sport, editorial, cinematic, purple, gold, collectible, portfolio]
quality: draft
priority: 10
showDemo: false
showcase:
  - label: Night Shift 07
    url: https://midnight-sprint.vercel.app
    embed: true
    note: Fictional receiver story drawn as 2D anime art, no real athlete or team
fonts:
  - family: Anton
    role: display
    license: OFL-1.1
    url: https://fonts.google.com/specimen/Anton
    note: Narrow, forceful capitals for cropped arena-sized headlines.
  - family: Manrope
    role: sans
    license: OFL-1.1
    url: https://fonts.google.com/specimen/Manrope
    note: Open, readable body copy against the dark ground.
  - family: Space Mono
    role: mono
    license: OFL-1.1
    url: https://fonts.google.com/specimen/Space+Mono
    note: Card captions, stat lines and small navigation labels.
tokens:
  color:
    bg: "#0c0a12"
    surface: "#221836"
    fg: "#efe9df"
    muted: "#ada4bb"
    accent: "#e3b54c"
    accentFg: "#14101c"
    border: "#3f3355"
    success: "#b1d6a0"
    danger: "#f0939b"
  font:
    sans: '"Manrope", "Helvetica Neue", Arial, sans-serif'
    mono: '"Space Mono", Menlo, monospace'
    display: '"Anton", Impact, sans-serif'
    scale: 1.28
    baseSize: "16px"
    weightBody: 400
    weightHeading: 400
    headingTracking: 0.01
  space:
    unit: "8px"
    gutter: "24px"
    section: "128px"
    maxWidth: "1600px"
  stroke:
    width: "1px"
  radius:
    sm: "2px"
    md: "4px"
    lg: "8px"
    full: "9999px"
  motion:
    duration: "400ms"
    easing: "cubic-bezier(0.22, 1, 0.36, 1)"
---

# Midnight Sprint

An athlete story told in two grounds: a bright cream opening that feels like the grain of a new
ball, then a long night of ink and violet where the work is shown off like a collector's binder.
This is a visual language for an original athlete or event story. Its people, numbers and
imagery must be commissioned, licensed or generated for the story, never lifted from a real
player, team or sponsor.

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

## When to use

Athlete portfolios, signing or draft announcements, campaign microsites and sports documentary
landing pages with strong illustration or photography. Avoid admin interfaces and text-heavy
archives, where full-screen chapters and oversized type waste space.
