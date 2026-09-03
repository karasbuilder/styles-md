---
id: soft-clinic
name: Soft Clinic
version: 1.0.0
license: CC-BY-4.0
author: styles-md contributors
mood: calm competence, clean light and teal
summary: Airy light surfaces, generous radius and a measured teal accent. Trustworthy without being cold — built for products that handle something people care about.
tags: [light, calm, saas, healthcare, rounded, trustworthy]
quality: featured
tokens:
  color:
    bg: "#f6f9fb"
    surface: "#ffffff"
    fg: "#16242e"
    muted: "#566a77"
    accent: "#0e7c86"
    accentFg: "#ffffff"
    border: "#c3d4e0"
    success: "#1f7a4d"
    danger: "#c0392f"
  font:
    sans: '"Inter", system-ui, -apple-system, "Segoe UI", sans-serif'
    mono: '"JetBrains Mono", ui-monospace, "SFMono-Regular", Menlo, monospace'
    scale: 1.25
    baseSize: "16px"
    weightBody: 400
    weightHeading: 620
    headingTracking: -0.015
  space:
    unit: "4px"
    gutter: "24px"
    section: "88px"
    maxWidth: "1140px"
  stroke:
    width: "1px"
  radius:
    sm: "8px"
    md: "12px"
    lg: "20px"
    full: "9999px"
  motion:
    duration: "220ms"
    easing: "cubic-bezier(0.34, 1.2, 0.64, 1)"
  shadow:
    sm: "0 1px 2px rgba(22,36,46,0.06)"
    md: "0 4px 16px rgba(22,36,46,0.08)"
    lg: "0 20px 48px rgba(22,36,46,0.10)"
---

# Soft Clinic

Soft edges and a lot of light. The style says the product is careful with your information without
saying anything at all.

## Principles

- Cards float on tinted background — `surface` is always lighter than `bg`, never the reverse.
- Radius is large and consistent: 12px is the default for anything interactive.
- Shadows are wide and very faint. If you can see the shadow, it is too strong.
- Teal is a calm accent; use it for primary actions and active states only.
- Nothing is dense. Padding is generous even when the data is not.

## Typography

Inter at 16px with a gentle 1.25 ratio. Headings at weight 620 read as confident rather than
shouty. Line height is 1.6 for body and 1.25 for headings. Numbers in metrics use tabular figures
so dashboards do not jitter.

## Colour

The page is a cool off-white and every panel is pure white. That single step does all the layering
work, so shadows can stay almost invisible. `border` is a soft blue-grey used on inputs and table
rules.

## Components

- Button (primary): accent fill, white label, `radius-md`, 12px/20px padding, `shadow-sm`.
- Button (ghost): transparent, accent label, same metrics, tinted accent background on hover.
- Card: white fill, 1px border, `radius-lg`, 28px padding, `shadow-sm`.
- Input: white fill, 1px border, `radius-md`, 12px/14px padding; focus adds a 3px accent-tinted ring.
- Nav: 64px tall, white fill, 1px bottom border, `muted` links, accent pill behind the active item.
- Table: 1px horizontal rules, no vertical rules, 14px/16px cells, `bg`-tinted header row.
- Badge: tinted accent background, accent text, `radius-full`, `text-xs`, 4px/12px padding.
- Empty state: centred, `text-lg` heading, `muted` body, one primary button.

## Do / Don't

- Do keep 24px of padding inside every card, minimum.
- Do use `muted` for supporting copy and labels above inputs.
- Do pair the accent with plenty of white space so it stays calm.
- Don't use hard 1px shadows or dark borders — the whole style collapses.
- Don't mix radii; picking 12px means 12px everywhere except cards at 20px.
- Don't put more than three metrics in a row.
- Don't use red except for genuine destructive actions.
- Don't set body text below 15px anywhere in the product.

## When to use

Healthcare, fintech onboarding, scheduling, anything consumer-facing that needs to feel safe.
Wrong for developer tools, where the softness reads as slow.
