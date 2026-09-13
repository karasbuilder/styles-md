---
id: bright-atrium
name: Bright Atrium
version: 1.0.0
license: CC-BY-4.0
author: karas
mood: a bright office atrium at ten in the morning
summary: White page, pale tint blocks and one working blue. Cards are softly rounded and lifted by a single diffuse shadow, chips stay square at 4px, and a friendly display face carries the headline with a light negative tracking.
tags: [light, bright, saas, product, friendly, pastel, marketing]
quality: draft
# The shared demo shows the palette, but the device here is a page that changes
# ground colour section by section, which needs a whole page to read. The style
# page leads with the real site instead.
showDemo: false
showcase:
  - label: Northline
    url: https://bright-atrium.vercel.app
    embed: true
    note: Fictional work tracker built from this spec, with flat spot art drawn from the tint cast
fonts:
  - family: Plus Jakarta Sans
    role: sans
    license: OFL-1.1
    url: https://fonts.google.com/specimen/Plus+Jakarta+Sans
    note: Humanist with open counters. Reads as friendly at 14px UI and stays sturdy at 96px.
  - family: IBM Plex Mono
    role: mono
    license: OFL-1.1
    url: https://github.com/IBM/plex
    note: Plan codes, counts and keyboard shortcuts.
tokens:
  color:
    bg: "#ffffff"
    surface: "#f6f7f8"
    fg: "#14161a"
    muted: "#55585f"
    accent: "#1a63d8"
    accentFg: "#ffffff"
    border: "#d0d3d8"
    success: "#2f7d32"
    danger: "#c0362c"
  font:
    sans: '"Plus Jakarta Sans", "Helvetica Neue", Arial, sans-serif'
    mono: '"IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, monospace'
    display: '"Plus Jakarta Sans", "Helvetica Neue", Arial, sans-serif'
    scale: 1.2
    baseSize: "16px"
    weightBody: 400
    weightHeading: 700
    headingTracking: -0.03
  space:
    unit: "4px"
    gutter: "24px"
    section: "96px"
    maxWidth: "1280px"
  stroke:
    width: "1px"
  radius:
    sm: "4px"
    md: "20px"
    lg: "32px"
    full: "9999px"
  motion:
    duration: "250ms"
    easing: "cubic-bezier(0.4, 0, 0, 1)"
  shadow:
    sm: "0 1px 2px rgba(9, 30, 66, 0.08)"
    md: "0 5px 20px -5px rgba(9, 30, 66, 0.14)"
    lg: "0 16px 44px -10px rgba(9, 30, 66, 0.18)"
---

# Bright Atrium

A product page with the lights on. The ground is white, colour arrives as whole blocks of pale
tint, and one blue does every action on the screen. Cards are round and lifted just enough to look
picked up, and the writing is plain, because the page is selling a tool rather than a mood.

## Principles

- White is the page. Colour arrives as a tinted block that runs the width of a section.
- One blue does actions. Every filled button, link and active state uses it and nothing else does.
- Cards are `radius-md` with `shadow-md` and no border. Chips and inputs stay square at `radius-sm`.
- Two roundnesses only: soft on cards and panels, tight on the small things inside them.
- Headings run at -0.03em. Body copy is left at normal tracking and never goes above 20px.
- Illustration is flat, built from the tint cast, and drawn with no outline and no gradient.

## Typography

One humanist sans does the whole page. Headings are weight 700 with tracking pulled to -0.03em, so
a 96px line holds together while a 24px subhead still reads as a sentence. Body sits at weight 400
between 14 and 20px, which is the working range of the style: anything above 20px is a heading and
should be marked up as one. Mono is small and appears in three places only, on plan codes, counts
and keyboard shortcuts.

## Colour

White ground, ink `#14161a` at 18.11:1, and `muted` grey for supporting copy at 7.12:1. `accent`
blue clears AA both ways: white on it at 5.5:1 and as link text on white at the same ratio.
`surface` is the neutral card ground. The tint cast is mint `#e6f6e4`, sky `#e2eefe`, butter
`#fdf3d2`, lilac `#f0e6fb` and blush `#fde6e6`, and every one of them takes ink text above 15:1,
which is what lets a whole section change colour without a single contrast check failing.

## Components

- Button (primary): `accent` fill, `accentFg` label, `radius-full`, 12px/24px, weight 600.
- Button (subtle): `surface` fill, `fg` label, `radius-full`, same metrics, no border.
- Card: `surface` or white, `radius-md`, 24px padding, `shadow-md`, no border.
- Tint block: a full width section in one cast colour, `radius-lg` when it floats inside the page.
- Chip: `radius-sm`, tint fill, 4px/10px, mono or 12px sans, used for status and category.
- Nav: white, 1px `border` underneath, links at 14px, one primary button on the right.
- Input: white, 1px `border`, `radius-sm`, `accent` ring on focus.
- Spot illustration: flat tint shapes, no outline, sitting inside a card or a tint block.
- Focus ring: 2px `accent` at 2px offset.

## Do / Don't

- Do keep the page white and let the tint blocks carry the colour.
- Do give a section one tint. Two tints in one band turns the page into a swatch sheet.
- Do lift cards with the one soft shadow rather than with a border.
- Do keep body copy between 14 and 20px, and mark anything larger as a heading.
- Do use mono sparingly, on codes and counts, never on a sentence.
- Don't use a second action colour. Green and red are for status text, not for buttons.
- Don't outline an illustration or fill it with a gradient. The shapes are flat.
- Don't put a card inside a card. One level of lift is all this style has.
- Don't round a chip or an input. The tight radius is what keeps the page from going soft.
- Don't set a heading without pulling the tracking in. At weight 700 it opens up and looks unset.

## When to use

Team tools, project and issue tracking, internal platforms, and the marketing pages that sell them.
A poor fit for luxury, nightlife and editorial fashion, where a white page with pastel blocks reads
as a product tour rather than as a point of view.
