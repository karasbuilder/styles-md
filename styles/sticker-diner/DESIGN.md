---
id: sticker-diner
name: Sticker Diner
version: 1.0.0
license: CC-BY-4.0
author: styles-md contributors
mood: a hand-painted burger van at a summer fair
summary: Cream page, enormous fat display type outlined in white, and rotated sticker badges. Sections meet on a wave rather than a straight edge, and every photo is a cut-out that overlaps the headline.
tags: [light, loud, playful, food, retro, poster, marketing]
quality: draft
# The shared demo can carry the palette, but not a 216px headline, a cut-out
# photo overlapping it or a wave between two sections. Flip is the style at the
# size it was written for, so the style page leads with that instead.
showDemo: false
showcase:
  - label: Flip
    url: https://flip-wheat-six.vercel.app
    embed: true
    note: Burger shop landing page built from this spec with Next.js and Tailwind v4
fonts:
  - family: Modak
    role: display
    license: OFL-1.1
    url: https://fonts.google.com/specimen/Modak
    note: One weight, extremely fat and rounded. It is the whole voice of the style.
  - family: Bowlby One
    role: display
    license: OFL-1.1
    url: https://fonts.google.com/specimen/Bowlby+One
    note: Fallback. Same heaviness, less bulbous, so the outline still reads.
  - family: Mouse Memoirs
    role: sans
    license: OFL-1.1
    url: https://fonts.google.com/specimen/Mouse+Memoirs
    note: Condensed and single-weight, which is why body copy can run large without crowding.
  - family: Oswald
    role: sans
    license: OFL-1.1
    url: https://fonts.google.com/specimen/Oswald
    note: Fallback. Also condensed, slightly wider, so the measure holds.
  - family: IBM Plex Mono
    role: mono
    license: OFL-1.1
    url: https://github.com/IBM/plex
tokens:
  color:
    bg: "#f5e3cd"
    surface: "#ffffff"
    fg: "#1b1b1b"
    muted: "#6b4f3a"
    accent: "#e51000"
    accentFg: "#ffffff"
    border: "#1b1b1b"
  font:
    sans: '"Mouse Memoirs", "Oswald", Impact, sans-serif'
    mono: '"IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, monospace'
    display: '"Modak", "Bowlby One", "Arial Black", Impact, sans-serif'
    scale: 1.35
    baseSize: "16px"
    weightBody: 400
    weightHeading: 400
    headingTracking: 0
  space:
    unit: "4px"
    gutter: "24px"
    section: "96px"
    maxWidth: "1408px"
  stroke:
    width: "2px"
  radius:
    sm: "14px"
    md: "28px"
    lg: "72px"
    full: "9999px"
  motion:
    duration: "300ms"
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  shadow:
    sm: "0 6px 22px rgba(27, 27, 27, 0.18)"
    md: "0 14px 43px rgba(27, 27, 27, 0.25)"
    lg: "0 24px 64px rgba(27, 27, 27, 0.3)"
---

# Sticker Diner

A poster, not a page. One enormous headline in a fat rounded face, outlined in white so it can sit
on top of a photograph, with stickers tilted into the gaps. Nothing is quiet and nothing is
aligned to a grid you can see.

## Principles

- The headline is the layout. It runs to the full width of the page and everything else fits around it.
- Every display line is outlined in white. The stroke scales with the type, roughly 1/15th of the size.
- Photos are cut out, never in a box. They overlap the headline and bleed past their section.
- Badges are stickers: tilted 6 to 12 degrees, `radius-sm`, white outline, never square to the page.
- Sections meet on a wave. A straight horizontal edge between two colours does not appear.
- Three colours do all the work: cream, red and amber. White is the outline, ink is the text.

## Typography

Two single-weight faces with no overlap in their jobs. The display face is used at sizes that look
like a mistake in a spec and are correct here: 96px is small for it and 216px is normal. Body is
the condensed sans, and because it is condensed it can run at 26px without eating the line. There
is no bold anywhere, since neither family has a second weight, so emphasis is size and colour.

## Colour

Cream is the page and it is never white. `surface` white is for cut-out cards and the sticker
outline only. `accent` red is the loud one: fills for buttons, and set as display type against
cream. Amber `#f4a804` and its brighter sibling `#ffd750` are the third colour, for stickers and
small fills. The measured red on the source of this palette is `#f91814`, which is bright enough
that white on it fails AA at 4.07:1, so `accent` is a shade deeper and clears it at 4.76:1.

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

## When to use

Food, drink, festivals, merch drops, anything sold on appetite. A poor fit for dashboards, forms
and long-form reading, where a 216px headline and a white text outline are noise rather than
appetite.
