# Lavender Pill

a lavender candy shop at dusk. A violet-tinted page, aubergine type and big soft-cornered colour blocks. One regular weight does every job, from a 13px caption to a 96px display line.

## Tokens

```yaml
color:  { bg: "#f5f2ff", surface: "#fdfcfe", fg: "#3c315b", muted: "#6f6a80",
          accent: "#ab9ff2", accentFg: "#3c315b", border: "#cec9e3" }
font:   { sans: "\"Figtree\", \"DM Sans\", system-ui, -apple-system, \"Segoe UI\", sans-serif",
          mono: "\"IBM Plex Mono\", ui-monospace, \"SFMono-Regular\", Menlo, monospace",
          base: "16px", scale: 1.25,
          weightBody: 400, weightHeading: 400,
          headingTracking: "-0.025em" }
type:   { xs: "10.24px", sm: "12.8px", base: "16px", lg: "20px", xl: "25px", 2xl: "31.25px", 3xl: "39.06px", 4xl: "48.83px" }
space:  { unit: "4px", gutter: "32px",
          section: "96px", maxWidth: "1560px" }
shape:  { strokeWidth: "1px", radiusSm: "16px",
          radiusMd: "24px", radiusLg: "32px" }
motion: { duration: "400ms", easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
```

## Principles

- The page is tinted, never white. White is a raised material here, reserved for the nav and chips.
- Cards are colour blocks. A row rotates fills rather than repeating one surface.
- One weight does every job. 400 from a 13px caption to a 96px display line.
- Rounding is generous and graded: `radius-md` on blocks, `radius-lg` on anything you click.
- Nothing is outlined. If two things need separating, change the fill or add space.
- Copy runs large. A card leads with a 30px sentence, not a small heading over smaller body.

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

<!-- styles-md/lavender-pill@1.0.0, CC-BY-4.0. Full spec: DESIGN.md -->
