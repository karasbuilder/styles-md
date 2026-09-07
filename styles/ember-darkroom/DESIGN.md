---
id: ember-darkroom
name: Ember Darkroom
version: 1.0.0
license: CC-BY-4.0
author: karas
mood: one object lit in a warm dark room
summary: Warm near-black canvas, cream uppercase grotesk at a single weight, and one ember orange rationed to a single button and a few credit lines. Depth comes from a second surface, never a shadow, and every divider is a dashed hairline.
tags: [dark, warm, editorial, product, minimal, uppercase, luxury]
quality: draft
# The built-in demo cannot carry this style: full-viewport reveals and a 133px
# display line only read at full scale, so the style page leads with the real
# site instead.
showDemo: false
showcase:
  - label: Meridian
    url: https://ember-darkroom.vercel.app
    embed: true
    note: Product page for a brass desk dial, built from this spec with Next.js and Tailwind v4
fonts:
  - family: Archivo
    role: display
    license: OFL-1.1
    url: https://fonts.google.com/specimen/Archivo
    note: Grotesk with a tall x-height and flat terminals. Holds shape at 120px uppercase.
  - family: Inter
    role: sans
    license: OFL-1.1
    url: https://fonts.google.com/specimen/Inter
    note: Fallback. Same skeleton, slightly narrower caps, so a missing Archivo does not reflow the page.
  - family: DM Mono
    role: mono
    license: OFL-1.1
    url: https://fonts.google.com/specimen/DM+Mono
    note: Specs, model numbers and footnote credits only.
tokens:
  color:
    bg: "#140d06"
    surface: "#2e2015"
    fg: "#f7e7cf"
    muted: "#b39d86"
    accent: "#e2601a"
    accentFg: "#140d06"
    border: "#443729"
    success: "#93a862"
    danger: "#e0655a"
  font:
    sans: '"Archivo", "Inter", "Helvetica Neue", Arial, sans-serif'
    mono: '"DM Mono", ui-monospace, "SFMono-Regular", Menlo, monospace'
    display: '"Archivo", "Inter", "Helvetica Neue", Arial, sans-serif'
    scale: 1.2
    baseSize: "18px"
    weightBody: 400
    weightHeading: 500
    headingTracking: 0
  space:
    unit: "6px"
    gutter: "18px"
    section: "160px"
    maxWidth: "1440px"
  stroke:
    width: "1px"
  radius:
    sm: "12px"
    md: "22px"
    lg: "36px"
    full: "9999px"
  motion:
    duration: "250ms"
    easing: "cubic-bezier(0.33, 0, 0.2, 1)"
---

# Ember Darkroom

A product photographed in a warm dark room, with the copy set around it in cream capitals. The
page is a gallery wall: one object per section, generous emptiness, and no chrome arguing with the
form. What makes it feel expensive is what is missing, so the rules below are mostly removals.

## Principles

- One family does every job. Weight 500 uppercase for headings, nav and labels; weight 400 mixed case only for body copy.
- The canvas is warm near-black, never pure black, and text is warm cream, never pure white.
- Ember is rationed: one filled control per page, and otherwise text for links, credits and footnotes.
- Depth is two surfaces, `bg` then `surface`. No shadow exists in this style.
- One object per section, centred, with copy flanking it left and right.
- Dividers are 1px dashed in `border`. A solid rule reads as a UI frame and breaks the gallery.

## Typography

The scale is a minor third from an 18px base, which puts body copy well above the usual 16px and
lets a page carry very few sizes. Headings run past the emitted ramp: the display line is set
around 120px on a wide viewport and 51px on a phone, at line height 0.9, and continuing the same
1.2 ratio is how you get there. Nothing is bold. Weight 500 against weight 400 is the entire
emphasis system, and the difference reads because the two are never mixed inside a line.

## Colour

`bg` is a brown-black, so a screenshot next to a pure `#000` page looks lit rather than switched
off. `surface` is the one chromatic step up, for cards and secondary buttons, and the step is small
on purpose. `muted` is a warm grey that clears AA on the canvas at 7.42:1; the darker
structural browns in this family sit far below that, which is why they are borders and never text.
Ember is the only saturated hue and it appears a handful of times per page.

## Components

- Display line: `font-display`, weight 500, uppercase, line height 0.9, tracking 0.
- Body copy: weight 400, mixed case, `text-lg` to `text-xl`, left aligned, measure under 46 characters.
- Button (primary): `accent` fill, `accentFg` label, `radius-lg` pill, 14px/28px padding. One per page.
- Button (secondary): `surface` fill or 1px `border` over the canvas, `fg` label, `radius-md`, same padding.
- Card: `surface`, `radius-sm`, 24px padding, 1px `border`, no shadow.
- Divider: 1px dashed `border`, full bleed, with `section` space above and below.
- Nav: no bar, no fill. Wordmark left, uppercase 12px links right, active link underlined dashed.
- Label / eyebrow: mono, uppercase, 12px, `muted`, sitting directly above the display line.
- Credit line: mono, 12px, `accent`, bottom corner of a section.
- Focus ring: 2px `accent` outline at 3px offset.

## Do / Don't

- Do set every heading, nav item and label in uppercase weight 500. Sentence case is for body copy only.
- Do give each product reveal its own full viewport height. Two reveals in one screen kills both.
- Do use dashed hairlines for every divider, including the footer.
- Do keep ember to one fill and a handful of small text marks per page.
- Don't use `#000` for a background or `#fff` for text. The warm tint is the whole style.
- Don't fill a card, a badge or a section band with ember. One button is the whole budget.
- Don't add a shadow, a glow or a blur to lift a card. Change the surface instead.
- Don't tighten tracking on display type, and don't letterspace the body.
- Don't centre body copy, even when it flanks a centred image.
- Don't go below `radius-sm` on a container, and don't put two filled buttons in one section.

## When to use

Single-product launches, hardware, coffee and spirits, studio portfolios: anywhere one object has
to carry the page. A poor fit for dense dashboards and long forms, where full-viewport sections and
all-caps labels cost more than they return.
