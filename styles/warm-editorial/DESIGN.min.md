# Warm Editorial

a printed essay that happens to be a website. Cream paper, ink-dark serif headlines and long measured columns. Built for reading, with a rust accent used sparingly for links and pull quotes.

## Tokens

```yaml
color:  { bg: "#fbf8f3", surface: "#ffffff", fg: "#211d18", muted: "#6b6259",
          accent: "#b4451f", accentFg: "#fffaf3", border: "#d5c8b5" }
font:   { sans: "\"Inter\", system-ui, -apple-system, \"Segoe UI\", sans-serif",
          mono: "\"IBM Plex Mono\", ui-monospace, \"SFMono-Regular\", Menlo, monospace",
          base: "19px", scale: 1.333,
          weightBody: 400, weightHeading: 600,
          headingTracking: "-0.012em" }
type:   { xs: "10.69px", sm: "14.25px", base: "19px", lg: "25.33px", xl: "33.76px", 2xl: "45px", 3xl: "59.99px", 4xl: "79.97px" }
space:  { unit: "4px", gutter: "32px",
          section: "112px", maxWidth: "680px" }
shape:  { strokeWidth: "1px", radiusSm: "2px",
          radiusMd: "4px", radiusLg: "6px" }
motion: { duration: "200ms", easing: "cubic-bezier(0.33, 1, 0.68, 1)" }
```

## Principles

- The measure is 680px and does not stretch. Wide text is unreadable text.
- Headings use the display serif; everything functional uses the sans.
- Line height is 1.7 for body copy. This is not negotiable in a reading style.
- Accent appears on links, pull quotes and nothing else.
- Paper is warm, never white. Pure white pages read as unfinished here.

## Components

- Link: accent colour, 1px underline, 3px offset, thickens on hover.
- Button (primary): accent fill, `accentFg` label, `radius-md`, 12px/20px padding.
- Pull quote: `text-2xl` display serif, no quote marks, 3px accent left rule, 24px inset.
- Card: `surface` fill, 1px border, `radius-lg`, 28px padding, no shadow.
- Rule: 1px `border`, full measure width, 48px of space above and below.
- Figure caption: `text-sm` sans at `muted`, 8px under the image, left aligned.
- Code block: `surface` fill, 1px border, `radius-md`, mono at `text-sm`, 20px padding.
- Byline: `text-sm` sans at `muted`, above the headline, letter-spaced 0.06em uppercase.

## Do / Don't

- Do let sections breathe at 112px. Editorial pacing is mostly whitespace.
- Do use the sans for UI chrome — nav, buttons, captions, metadata.
- Do keep images full-measure or full-bleed, never floated beside text.
- Don't justify text. Ragged right is correct on screen.
- Don't set body copy below 19px; this style has no small mode.
- Don't add drop shadows. Paper does not float.
- Don't use the display serif for anything under `text-lg`.
- Don't introduce a second accent. One warm colour is the entire palette story.

<!-- styles-md/warm-editorial@1.0.0 — CC-BY-4.0. Full spec: DESIGN.md -->
