---
id: lavender-pill
name: Lavender Pill
version: 1.0.0
license: CC-BY-4.0
author: styles-md contributors
mood: a lavender candy shop at dusk
summary: A violet-tinted page, aubergine type and big soft-cornered colour blocks. One regular weight does every job, from a 13px caption to a 96px display line.
tags: [light, violet, pastel, rounded, playful, fintech, marketing]
quality: draft
# The shared demo page uses one surface for every card, so it cannot show the
# rotating block fills, which are the loudest thing about this style. The real
# site leads instead. That costs comparison against the other styles.
showDemo: false
showcase:
  - label: Lumo
    url: https://lumo-virid-phi.vercel.app
    embed: true
    note: Money app landing page built from this spec with Next.js and Tailwind v4
fonts:
  - family: Figtree
    role: sans
    license: OFL-1.1
    url: https://github.com/erikdkennedy/figtree
    note: Geometric with rounded terminals and a tall x-height, which is what makes 400 read as friendly.
  - family: DM Sans
    role: sans
    license: OFL-1.1
    url: https://fonts.google.com/specimen/DM+Sans
    note: Fallback. Slightly wider, so display lines rewrap but hold their shape.
  - family: IBM Plex Mono
    role: mono
    license: OFL-1.1
    url: https://github.com/IBM/plex
tokens:
  color:
    bg: "#f5f2ff"
    surface: "#fdfcfe"
    fg: "#3c315b"
    muted: "#6f6a80"
    accent: "#ab9ff2"
    accentFg: "#3c315b"
    border: "#cec9e3"
    success: "#2ec08b"
    danger: "#e5555c"
  font:
    sans: '"Figtree", "DM Sans", system-ui, -apple-system, "Segoe UI", sans-serif'
    mono: '"IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, monospace'
    scale: 1.25
    baseSize: "16px"
    weightBody: 400
    weightHeading: 400
    headingTracking: -0.025
  space:
    unit: "4px"
    gutter: "32px"
    section: "96px"
    maxWidth: "1560px"
  stroke:
    width: "1px"
  radius:
    sm: "16px"
    md: "24px"
    lg: "32px"
    full: "9999px"
  motion:
    duration: "400ms"
    easing: "cubic-bezier(0.22, 1, 0.36, 1)"
  shadow:
    sm: "0 0 4px 0 #e2dffe"
    md: "0 0 16px 0 #e2dffe"
    lg: "0 0 40px 0 #e2dffe"
---

# Lavender Pill

A violet-tinted plane with soft-cornered blocks laid on it. There are no outlines and almost no
shadows: everything is separated by fill and by air. Type does the shouting, at one weight, by
getting very large.

## Principles

- The page is tinted, never white. White is a raised material here, reserved for the nav and chips.
- Cards are colour blocks. A row rotates fills rather than repeating one surface.
- One weight does every job. 400 from a 13px caption to a 96px display line.
- Rounding is generous and graded: `radius-md` on blocks, `radius-lg` on anything you click.
- Nothing is outlined. If two things need separating, change the fill or add space.
- Copy runs large. A card leads with a 30px sentence, not a small heading over smaller body.

## Typography

One family carries the page, so the only real variables are size and tracking. Tracking is
-0.025em on headings and nothing else: body and card copy sit at normal, and applying the negative
value there crushes it. Display lines run 64px to 96px at line height 1.1, card copy is 30px/36px,
and body is 16px. The mono stack is only for addresses, hashes and code.

## Colour

Aubergine `fg` is the default ink for the whole page and the label on every light fill. Two other
inks exist and each belongs to one kind of block: `#1c1c1c` on the pale fills and cream `#fffdf8`
on near-black. The block set is periwinkle `accent`, near-black `#1c1c1c` and ash `#e9e8ea`, with
soft lavender `#e2dffe` for quieter actions. Buttercream `#ffffc4`, blush `#ffdadc` and cornflower
`#4a87f2` are occasional guests. `muted` is darker than a purely decorative grey would be, so
secondary copy still clears AA on the tinted page.

## Components

- Nav: `surface` pill floating 24px below the top edge, `radius-lg`, links at 16px in `fg`, 12px/24px padding.
- Button (primary): `accent` fill, `accentFg` label, `radius-lg`, 16px/32px padding, no border.
- Button (soft): `#e2dffe` fill, `accentFg` label, same metrics. The quieter of the two.
- Card: `radius-md`, 48px padding, `shadow-sm`, one fill from the block set, artwork bleeding off the bottom edge.
- Card copy: 30px/36px at 400 with no tracking, `#1c1c1c` on a pale fill and `#fffdf8` on near-black.
- Section chip: `surface` pill with a leading icon, 16px label, `radius-lg`, 12px/20px padding.
- Icon button: 40px or 56px circle, `surface` or `accent` fill, `radius-full`.
- Hero panel: near-black, inset 48px from the page edge, `radius-md`, `overflow: clip`, cream display type centred.
- Heading: 64px to 96px at 400, line height 1.1, tracking -0.025em.
- Focus ring: 2px `accent` outline at 2px offset, following the element radius.

## Do / Don't

- Do tint the page. Pure white drains the palette and the blocks stop reading as blocks.
- Do rotate card fills across a row. Three cards, three different fills.
- Do let artwork bleed off the bottom of a card instead of sitting inside the padding.
- Do keep tracking on headings only, and give sections 96px of air.
- Do inset full-bleed panels 48px from the page edge rather than running them to the viewport.
- Don't reach for a heavier weight to make something important. Size does that here.
- Don't outline a card. If it needs separating, change the fill.
- Don't blur or offset a shadow. The lavender halo is all the elevation there is.
- Don't go below `radius-sm` anywhere, or below `radius-md` on a block.
- Don't put small text on cornflower or near-black in aubergine. Those two fills take cream.

## When to use

Consumer fintech, wallets, and product pages that want to feel playful without going loud. A poor
fit for dense dashboards and long-form reading: one weight and 96px headlines give you very little
to build fine-grained hierarchy from.
