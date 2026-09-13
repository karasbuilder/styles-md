---
id: drafting-sheet
name: Drafting Sheet
version: 1.0.0
license: CC-BY-4.0
author: karas
mood: an architect's plot sheet on the desk
summary: Warm paper ground, ink grotesk set in tight uppercase, and one plot orange for annotation. Corners are square, rules are hairlines, and the page is bounded by ruler ticks and register marks like a sheet off a plotter.
tags: [light, technical, editorial, architecture, saas, uppercase, minimal]
quality: draft
# The shared demo shows the palette and the square corners, but not the sheet:
# ruler edges, register marks, and drawings that plot themselves in. The style
# page leads with the real site instead.
showDemo: false
showcase:
  - label: Caliper
    url: https://drafting-sheet.vercel.app
    embed: true
    note: Fictional drawing checker built from this spec, with every figure drawn and plotted in SVG
fonts:
  - family: Familjen Grotesk
    role: sans
    license: OFL-1.1
    url: https://fonts.google.com/specimen/Familjen+Grotesk
    note: Neo grotesque with a slightly narrow cap. Holds a tight negative tracking without closing up.
  - family: Geist Mono
    role: mono
    license: OFL-1.1
    url: https://fonts.google.com/specimen/Geist+Mono
    note: Every label, dimension and annotation on the sheet.
tokens:
  color:
    bg: "#efede7"
    surface: "#cdcac1"
    fg: "#232320"
    muted: "#6b6a64"
    accent: "#c2380a"
    accentFg: "#ffffff"
    border: "#a6a39a"
  font:
    sans: '"Familjen Grotesk", "Helvetica Neue", Arial, sans-serif'
    mono: '"Geist Mono", ui-monospace, "SFMono-Regular", Menlo, monospace'
    display: '"Familjen Grotesk", "Helvetica Neue", Arial, sans-serif'
    scale: 1.2
    baseSize: "16px"
    weightBody: 500
    weightHeading: 600
    headingTracking: -0.02
  space:
    unit: "4px"
    gutter: "24px"
    section: "96px"
    maxWidth: "1440px"
  stroke:
    width: "1px"
  radius:
    sm: "0px"
    md: "0px"
    lg: "0px"
    full: "9999px"
  motion:
    duration: "400ms"
    easing: "cubic-bezier(0.625, 0.05, 0, 1)"
  shadow:
    sm: "3px 3px 0 -1px #232320"
    md: "0 6px 0 -2px #232320"
    lg: "8px 8px 0 -2px #232320"
---

# Drafting Sheet

A plot sheet, not a landing page. Paper ground, ink type, hairline rules, and one orange reserved
for the marks an engineer would make by hand. Nothing is rounded and nothing is blurred, so the
page reads as something printed and measured rather than rendered.

## Principles

- Corners are square. `radius-sm` through `radius-lg` are all 0, and only markers are circles.
- Rules are 1px hairlines. They divide the page into cells the way a drawing has a border and a grid.
- Type is uppercase grotesk at -0.02em. Sentence case appears only in body paragraphs.
- Orange is annotation. Small squares, one hairline, a link, a single filled control per screen.
- Illustration is drawn, stippled and monochrome, sitting on the paper with no frame around it.
- Shadows are hard offsets in ink with no blur. A soft shadow is the one thing that breaks this.

## Typography

One grotesk does headings and body, one mono does everything the sheet needs to label. Headings run
uppercase at weight 600 with tracking pulled to -0.02em, because at that width the caps close ranks
and read as a title block rather than as a sentence. Mono is small on purpose: 10 to 13px, wide
tracking, uppercase, and it carries dimensions, section keys and annotations. Body copy is the only
sentence case on the page, at weight 500 so it holds against the greige.

## Colour

Paper `#efede7` is the ground and ink `#232320` sits on it at 13.46:1. `surface` greige is a filled
cell, and ink still clears AA on it at 9.61:1. `accent` is a burnt plot orange, dark enough that
white on it clears AA at 5.43:1 and that it works as link text on paper at 4.64:1. Brighter oranges
look better and fail both, which is the tradeoff this palette settles. `border` is a greige
hairline at 2.15:1 against the paper.

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

## When to use

Tools for people who model, draw or measure: architecture and engineering software, hardware, data
tooling, technical documentation. A poor fit for consumer lifestyle brands and anything sold on
warmth, where square corners and a title block read as cold.
