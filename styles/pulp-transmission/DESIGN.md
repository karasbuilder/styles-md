---
id: pulp-transmission
name: Pulp Transmission
version: 1.0.0
license: CC-BY-4.0
author: karas
mood: a comic broadcast from a dead planet
summary: Deep navy and one flare of coral, inverted section by section. Ultra wide display caps fill the page edge to edge, halftone artwork sits in a radial glow, and technical marks hold the four corners.
tags: [dark, comic, poster, sci-fi, bold, uppercase, entertainment]
quality: draft
# The shared demo shows the palette, but the device here is the inversion
# between sections and a title set by width, neither of which fits on one
# screen. The style page leads with the real site instead.
showDemo: false
showcase:
  - label: Signal Seven
    url: https://pulp-transmission.vercel.app
    embed: true
    note: Fictional comic series built from this spec, with every drawing halftoned to two inks
fonts:
  - family: Anybody
    role: display
    license: OFL-1.1
    url: https://fonts.google.com/specimen/Anybody
    note: Variable width. Pushed to the expanded end at weight 800 it gives the wide slab caps this style is built on.
  - family: Inter Tight
    role: sans
    license: OFL-1.1
    url: https://fonts.google.com/specimen/Inter+Tight
    note: Body and UI. Narrow enough to sit under a display line without competing.
  - family: JetBrains Mono
    role: mono
    license: OFL-1.1
    url: https://fonts.google.com/specimen/JetBrains+Mono
    note: Corner marks, counts, coordinates and timestamps.
tokens:
  color:
    bg: "#0a1526"
    surface: "#16263f"
    fg: "#f2ecea"
    muted: "#93a1b5"
    accent: "#f2565f"
    accentFg: "#0a1526"
    border: "#2b3d59"
  font:
    sans: '"Inter Tight", "Helvetica Neue", Arial, sans-serif'
    mono: '"JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, monospace'
    display: '"Anybody", "Arial Black", Impact, sans-serif'
    scale: 1.25
    baseSize: "16px"
    weightBody: 400
    weightHeading: 800
    headingTracking: 0
  space:
    unit: "4px"
    gutter: "24px"
    section: "120px"
    maxWidth: "1440px"
  stroke:
    width: "1px"
  radius:
    sm: "6px"
    md: "10px"
    lg: "90px"
    full: "9999px"
  motion:
    duration: "350ms"
    easing: "cubic-bezier(0.2, 0.8, 0.2, 1)"
  shadow:
    sm: "0 1px 1px -1px rgba(0, 0, 0, 0.3), 0 2px 2px -2px rgba(0, 0, 0, 0.3)"
    md: "0 2px 3px -1px rgba(0, 0, 0, 0.3), 0 10px 10px -3px rgba(0, 0, 0, 0.3)"
    lg: "0 3px 11px -2px rgba(0, 0, 0, 0.28), 0 10px 50px -3px rgba(0, 0, 0, 0.3)"
---

# Pulp Transmission

A comic book cover that happens to be a website. Two colours trade places between sections, the
title is set as wide as the page will allow, and the artwork is halftoned so it belongs to the same
print run as the type. The furniture in the corners is there to make the page feel like equipment.

## Principles

- Two grounds, and they swap. Navy sections carry coral marks; coral sections carry navy marks.
- On coral, the ink is `bg` navy. Bone on coral fails contrast at 2.86:1, so it never appears there.
- The display line is width, not size. Push the face to its expanded end and fill the measure.
- Artwork is halftoned to two inks and sits in a radial glow, never on a flat rectangle.
- Every screen keeps technical marks in its corners: a barcode, a crossed circle, a frame count.
- Shadows are layered and soft. This is the one style here where depth is allowed to be lit.

## Typography

The display face is variable in width, and that axis carries the whole voice: at the expanded end,
weight 800 and line height 0.8, a three word title fills 1440px with no tracking applied. Sizes
jump rather than step, from 24px straight to 88px and 140px, because a poster has a title and a
caption and nothing between them. Body is the narrow sans at 16 to 24px, and mono holds anything
that reads as instrumentation: counts, coordinates, issue numbers.

## Colour

Navy `#0a1526` is the default ground and bone `#f2ecea` the text on it, at 15.64:1. Coral is the
flare: as text on navy it clears AA at 5.46:1, and as a full bleed ground it takes navy ink at the
same ratio. `muted` is a cool grey for captions at 6.97:1. `surface` is one step up from the ground
for a panel, and `border` is a hairline that reads as a rule on a page rather than as a UI frame.

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

## When to use

Comics, games, drops and launches, music and events: anything sold on a cover. A poor fit for
dashboards, documentation and long reading, where an inverting ground and a 140px title are noise
around the content rather than the content itself.
