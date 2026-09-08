---
id: hatched-lodge
name: Hatched Lodge
version: 1.0.0
license: CC-BY-4.0
author: karas
mood: a mountain lodge printed in two inks
summary: Umber ground, sand ink, and nothing else. Photographs are redrawn as vertical line screens, micro labels are tracked wide while the display line is tracked tight, and every transition takes 600ms.
tags: [dark, warm, editorial, hospitality, architecture, minimal, uppercase]
quality: draft
# The shared demo can show two inks, but not the thing that makes this style
# work: a full bleed engraving with metadata in its corners. The style page
# leads with the real site instead.
showDemo: false
showcase:
  - label: Horyna
    url: https://hatched-lodge.vercel.app
    embed: true
    note: Fictional mountain resort built from this spec, with every picture drawn as a line screen
fonts:
  - family: Instrument Serif
    role: display
    license: OFL-1.1
    url: https://fonts.google.com/specimen/Instrument+Serif
    note: One weight, high contrast, narrow. Built for the sizes this style sets it at.
  - family: Space Grotesk
    role: sans
    license: OFL-1.1
    url: https://fonts.google.com/specimen/Space+Grotesk
    note: Technical grotesk. Holds a 10px label at wide tracking without turning to mush.
  - family: Space Mono
    role: mono
    license: OFL-1.1
    url: https://fonts.google.com/specimen/Space+Mono
    note: Coordinates, measures and tick rules.
tokens:
  color:
    bg: "#2a2622"
    surface: "#37312a"
    fg: "#bfa980"
    muted: "#a08e6d"
    accent: "#d8bd8a"
    accentFg: "#2a2622"
    border: "#4a4238"
  font:
    sans: '"Space Grotesk", "Helvetica Neue", Arial, sans-serif'
    mono: '"Space Mono", ui-monospace, "SFMono-Regular", Menlo, monospace'
    display: '"Instrument Serif", "Times New Roman", Georgia, serif'
    scale: 1.25
    baseSize: "16px"
    weightBody: 400
    weightHeading: 400
    headingTracking: -0.06
  space:
    unit: "4px"
    gutter: "24px"
    section: "120px"
    maxWidth: "1680px"
  stroke:
    width: "1px"
  radius:
    sm: "12px"
    md: "20px"
    lg: "40px"
    full: "9999px"
  motion:
    duration: "600ms"
    easing: "cubic-bezier(0.25, 1, 0.5, 1)"
---

# Hatched Lodge

A printed brochure for a building in the mountains, run at two inks. The ground is umber, every
mark is sand, and the pictures are engravings rather than photographs. It is slow, wide and quiet,
and it falls apart the moment a third colour or a second weight arrives.

## Principles

- Two inks. Umber is every surface, sand is every mark, and nothing else is coloured.
- Pictures are redrawn as vertical line screens in sand, never placed as photographs.
- Micro type is uppercase and tracked out to about +0.08em. Display type is tracked in to -0.06em.
- One weight does everything. Hierarchy is size, tracking and space, never boldness.
- Corners are generous: `radius-lg` on controls, `radius-md` on cards, `radius-sm` on chips.
- Motion is long. 600ms on a control, and up to 1200ms on anything the size of a section.

## Typography

Two faces at one weight each. The display serif runs from 40px upward and gets tighter as it grows,
reaching about -0.06em, so a wordmark set at 144px reads as one object rather than a row of
letters. The grotesk runs at 10, 12 and 16px only, uppercase, tracked wide enough that a 10px label
is still legible against a photograph. The gap between 16px and 40px is deliberately empty. A style
with nothing in the middle forces a page to decide whether a line is a label or a statement.

## Colour

`fg` sand on `bg` umber clears AA at 6.58:1, which is what lets a two ink system carry body copy at
all. `accent` is the same sand lifted toward lamplight, and it exists so a single filled control can
sit inside a field of text without introducing a hue. `muted` is the sand dimmed to 4.71:1, for
labels that should recede but still pass. `border` is a raised umber at 1.52:1, drawn as a hairline
around cards and circles.

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

## When to use

Hotels, architecture and land, festivals and culture programmes: anything sold on atmosphere where
the pictures can be redrawn. A poor fit for dashboards, data tables and long forms, where two inks
and an empty middle of the type scale leave nothing to build a hierarchy from.
