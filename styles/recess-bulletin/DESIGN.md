---
id: recess-bulletin
name: Recess Bulletin
version: 1.0.0
license: CC-BY-4.0
author: karas
mood: a bulletin board at recess, all stickers
summary: White page, 3px black outlines and enormous radii. Everything is a sticker in a flat colour, tilted and overlapping, and depth comes from the outline rather than from a shadow. Type is a heavy rounded serif with normal tracking.
tags: [light, playful, bold, outline, food, marketing, retro]
quality: draft
# The shared demo can show the outline and the radii, but not the sticker
# board, the marquees or the entrance springs, which is where this style lives.
# The style page leads with the real site instead.
showDemo: false
showcase:
  - label: Hullo
    url: https://recess-bulletin.vercel.app
    embed: true
    note: Fictional oat drink brand built from this spec, with every drawing and animation original
fonts:
  - family: Fraunces
    role: display
    license: OFL-1.1
    url: https://fonts.google.com/specimen/Fraunces
    note: Variable, with a soft axis. At 900 with SOFT up it gets the round heavy serif this style runs on.
  - family: Nunito
    role: sans
    license: OFL-1.1
    url: https://fonts.google.com/specimen/Nunito
    note: Rounded terminals, so 14px UI text belongs to the same drawing as the headline.
  - family: DM Mono
    role: mono
    license: OFL-1.1
    url: https://fonts.google.com/specimen/DM+Mono
    note: Prices, sizes and nutrition figures.
tokens:
  color:
    bg: "#ffffff"
    surface: "#fff6e2"
    fg: "#101010"
    muted: "#575757"
    accent: "#e6533c"
    accentFg: "#101010"
    border: "#101010"
    success: "#3f7d4f"
    danger: "#c3372a"
  font:
    sans: '"Nunito", "Helvetica Neue", Arial, sans-serif'
    mono: '"DM Mono", ui-monospace, "SFMono-Regular", Menlo, monospace'
    display: '"Fraunces", Georgia, "Times New Roman", serif'
    scale: 1.25
    baseSize: "16px"
    weightBody: 500
    weightHeading: 700
    headingTracking: 0
  space:
    unit: "4px"
    gutter: "24px"
    section: "120px"
    maxWidth: "1440px"
  stroke:
    width: "3px"
  radius:
    sm: "20px"
    md: "50px"
    lg: "140px"
    full: "9999px"
  motion:
    duration: "400ms"
    easing: "cubic-bezier(0, 0, 0.1, 1.02)"
---

# Recess Bulletin

A white wall covered in stickers. Every shape is drawn in the same 3px black line, filled flat,
rounded past the point of comfort and tilted a few degrees off square. The page is loud, but it is
loud in one voice, because nothing on it is drawn any other way.

## Principles

- Everything is outlined. 3px black on every sticker, button, card and picture, with no exceptions.
- Fills are flat. No gradient and no shadow exists in this style; the outline carries the depth.
- Corners are enormous. `radius-lg` on panels, `radius-md` on cards, `radius-sm` on chips.
- Stickers tilt 1 to 8 degrees and overlap. A grid of squares is the failure mode.
- Labels on a colour are always black, never white, so the palette can stay this bright.
- Motion overshoots. Controls settle past their end point, marquees run linear and never stop.

## Typography

Two faces, both round. The display serif carries anything above 30px at weight 700, with tracking
left at normal: the letters are already wide, and tightening them turns a headline into a logo. The
rounded sans handles 14 to 20px UI at weight 500, and its terminals match the serif's, so a nav
label and a 72px headline read as the same hand. There is no light weight anywhere. If something
needs to recede it gets `muted`, not a thinner face.

## Colour

White is the page and black is the ink, and neither is ever tinted. Five sticker hues do the rest:
leaf `#6fa87b`, sky `#4d82c4`, sun `#f6dc4f`, blush `#f4c3d1` and cocoa `#a9704b`. Each clears AA
against black text, which is what lets the rule about black labels hold everywhere. `accent` poppy
is the sixth colour and belongs to controls only, so a button never gets confused with a sticker.
`surface` cream is for a panel that needs to sit off the white without becoming a sticker.

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

## When to use

Food and drink, kids and family, merch, festivals, anything sold with a character. A poor fit for
finance, health records and dense tools, where a 140px radius and a 3px outline eat the space that
data needs.
