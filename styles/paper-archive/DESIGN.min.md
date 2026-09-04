# Paper Archive

a well-kept reference library. Warm grey paper, small type, dense information and no ornament. Made for documentation and reference material that people scan rather than read.

## Tokens

```yaml
color:  { bg: "#f4f2ee", surface: "#fdfcfa", fg: "#2b2a27", muted: "#63605a",
          accent: "#2f5bd8", accentFg: "#ffffff", border: "#cbc6bc" }
font:   { sans: "\"Inter\", system-ui, -apple-system, \"Segoe UI\", sans-serif",
          mono: "\"IBM Plex Mono\", ui-monospace, \"SFMono-Regular\", Menlo, monospace",
          base: "15px", scale: 1.2,
          weightBody: 400, weightHeading: 600,
          headingTracking: "-0.01em" }
type:   { xs: "10.42px", sm: "12.5px", base: "15px", lg: "18px", xl: "21.6px", 2xl: "25.92px", 3xl: "31.1px", 4xl: "37.32px" }
space:  { unit: "4px", gutter: "20px",
          section: "64px", maxWidth: "1240px" }
shape:  { strokeWidth: "1px", radiusSm: "3px",
          radiusMd: "4px", radiusLg: "6px" }
motion: { duration: "120ms", easing: "ease-out" }
```

## Principles

- Optimise for scanning, not reading. Short paragraphs, frequent headings, lots of lists.
- Three-column layout: nav, content, page outline. The outline is not optional.
- Blue is a link colour and nothing else, never a button fill on the page body.
- Code is a first-class citizen; give it a tinted surface and real padding.
- Headings carry a persistent anchor link revealed on hover.

## Components

- Sidebar: 260px wide, `bg` fill, 1px right border, `text-sm` links, accent + weight 600 when active.
- Content: `surface` fill, 1240px max width, 40px padding.
- H2: `text-2xl`, 1px bottom border, 40px above and 16px below.
- Code block: `bg` fill, 1px border, `radius-md`, mono `text-sm`, 16px padding, copy button top right.
- Callout: 3px left rule in accent or danger, tinted fill, `radius-sm`, 16px padding.
- Table: 1px rules, 10px/14px cells, `bg` header row, `text-sm` throughout.
- Breadcrumb: `text-sm` at `muted`, `/` separators, above the page title.
- Page outline: right rail, 220px, `text-sm` `muted` links, accent when in view.

## Do / Don't

- Do keep sections 64px apart and paragraphs under five lines.
- Do use tables and lists instead of prose wherever the content allows.
- Do show the file path or route above every code sample.
- Don't add shadows, gradients or illustration. This style has no mood to sell.
- Don't centre anything except the site footer.
- Don't use accent as a background fill outside of a single primary CTA in the nav.
- Don't exceed `text-3xl`, even for the page title.
- Don't hide navigation behind a menu on desktop.

<!-- styles-md/paper-archive@1.0.0, CC-BY-4.0. Full spec: DESIGN.md -->
