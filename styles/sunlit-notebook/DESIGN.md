---
id: sunlit-notebook
name: Sunlit Notebook
version: 1.0.0
license: CC-BY-4.0
author: karas
mood: a warm paper notebook in afternoon light
summary: Warm paper canvas, white cards separated by a hairline rather than a shadow, and one blue reserved for the single filled button. Colour variety lives in the feature card fills, and hierarchy is alpha on the ink before it is a new hue.
tags: [light, warm, paper, productivity, saas, editorial, calm]
quality: draft
# The built-in demo shows the palette, but a hairline-and-paper system is only
# convincing at product scale: a nav, a product mockup, four coloured panels and
# a pricing table. The style page leads with the real site instead.
showDemo: false
showcase:
  - label: Margin
    url: https://sunlit-notebook.vercel.app
    embed: true
    note: Landing page for a fictional notes product, built from this spec with Next.js and Tailwind v4
fonts:
  - family: Figtree
    role: sans
    license: OFL-1.1
    url: https://fonts.google.com/specimen/Figtree
    note: Humanist geometric with a tall x-height. Holds up at 14px UI and at a tightly tracked 96px.
  - family: Inter
    role: sans
    license: OFL-1.1
    url: https://fonts.google.com/specimen/Inter
    note: Fallback. Same proportions at text sizes, so a missing Figtree does not reflow a card.
  - family: IBM Plex Mono
    role: mono
    license: OFL-1.1
    url: https://github.com/IBM/plex
    note: Keyboard shortcuts, counts and table figures only.
tokens:
  color:
    bg: "#f5f1ea"
    surface: "#ffffff"
    fg: "#171310"
    muted: "#6a6058"
    accent: "#1063d8"
    accentFg: "#ffffff"
    border: "#d2c7b7"
    success: "#1f7a45"
    danger: "#c33f27"
  font:
    sans: '"Figtree", "Inter", "Helvetica Neue", Arial, sans-serif'
    mono: '"IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, monospace'
    display: '"Figtree", "Inter", "Helvetica Neue", Arial, sans-serif'
    scale: 1.2
    baseSize: "16px"
    weightBody: 400
    weightHeading: 600
    headingTracking: -0.035
  space:
    unit: "4px"
    gutter: "24px"
    section: "80px"
    maxWidth: "1440px"
  stroke:
    width: "1px"
  radius:
    sm: "4px"
    md: "8px"
    lg: "12px"
    full: "9999px"
  motion:
    duration: "200ms"
    easing: "cubic-bezier(0.25, 0.1, 0.25, 1)"
---

# Sunlit Notebook

A working document, not a marketing page. The canvas is warm paper, the cards are white, and the
only thing that separates them is a hairline. Colour arrives as whole panels of it, the way a
sticky note lands on a page, and then the interface goes quiet again.

## Principles

- The page is paper and the cards are white. Inverting that removes the warmth the whole style rests on.
- One filled button per screen, in `accent`. Every other action is a tint or plain text.
- Separation is a 1px hairline. This style has no shadow token, and cards do not get one.
- Colour variety lives in feature card fills, one hue per card, never in a button.
- Build hierarchy with `fg` at 100, 60 and 40 percent opacity before reaching for another colour.
- Tracking tightens as type grows, to about -0.035em at display sizes. Body stays at normal.

## Typography

One family does headings, UI and body, at a minor third from 16px. Weight is the hierarchy: 400
for copy, 500 for nav and labels, 600 for headings. The negative tracking is the part people miss.
It is not applied evenly: at 96px it is close to -0.048em and by 18px it is gone, so a headline
reads compact while a paragraph keeps its normal fit. The source studied for this style also runs
an editorial serif at a handful of moments per page. That is a house rule rather than a system, so
it is not carried here.

## Colour

`bg` is paper and `surface` is the only white on the page. `border` is a warm hairline that clears
the required 1.4:1 against the canvas at 1.48:1, which is why it is a tan rather than the near
invisible black at 8 percent the source uses. `accent` blue is a switch, not decoration: it fills
one button, marks the active nav item and draws the focus ring. The rotating cast for card fills
is marigold `#f5b229`, coral `#ef5b3d`, sky `#6fb0ef` and midnight `#101a44`. On the first three
the label is `fg`; on midnight it is `surface`.

## Components

- Button (primary): `accent` fill, `accentFg` label, `radius-md`, 10px/18px padding, weight 500.
- Button (ghost): `#e7f0fd` fill, `accent` label, `radius-md`, same metrics.
- Button (quiet): no fill, `fg` at 60 percent, underline on hover.
- Card: `surface`, 1px `border`, `radius-lg`, 24px padding, no shadow.
- Feature card: one accent hue as a flat fill, no border, `radius-lg`, same padding.
- Pill: `radius-full`, tinted fill, 4px/12px, wrapping one highlighted word inside a headline.
- Nav: sticky, paper background, hairline underneath, 14px links at weight 500.
- Input: `surface`, 1px `border`, `radius-md`, `accent` ring on focus.
- Table: hairline row rules, mono figures, no zebra fill.
- Focus ring: 2px `accent` at 2px offset.

## Do / Don't

- Do keep the canvas paper and the cards white.
- Do carry colour on card fills, one hue per card, and leave the rest of the page neutral.
- Do tighten tracking as the type grows, and leave body copy alone.
- Do use alpha on the ink for secondary text before adding a grey.
- Do keep transitions at 200ms, and save a spring for one element in the hero.
- Don't use pure white as the page background.
- Don't put a shadow on a content card. The hairline is the separation.
- Don't add a second filled button colour to a view.
- Don't use a gradient anywhere. Every fill is flat.
- Don't round a rectangle past `radius-lg`. Pills are the only other shape.

## When to use

Productivity tools, docs and note apps, dashboards that people keep open all day, and marketing
pages for them that need to look like the product. A poor fit for luxury goods and nightlife, where
warm paper and a hairline read as a spreadsheet.
