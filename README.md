# styles-md

An open library of design styles as Markdown. One file per style: hard tokens in the frontmatter,
the rules that need judgment in the body. Point a coding agent at it, or compile it straight to CSS.

```bash
npx styles-md add pastel-brutalist            # CSS custom properties
npx styles-md add pastel-brutalist --target tailwind   # Tailwind v4 @theme
npx styles-md add pastel-brutalist --target shadcn     # shadcn/ui variables in oklch
```

That writes three files into your project:

```
styles-md/theme.css        import it in your global stylesheet
styles-md/DESIGN.min.md    the token-budgeted spec, for your agent
styles-md/DESIGN.md        the full spec, for humans
```

No account, no API key, no server. The published site is the registry, and the CLI reads static
files from it.

## Why this exists

Handing an agent a paragraph of vibes ("clean, modern, generous spacing") produces generic output,
and you cannot test a vibe. Every style here is split in two.

The frontmatter is the deterministic layer: colours, type ratio, spacing unit, radii, motion. It
compiles to real CSS with no model involved, and CI checks it.

The body is the judgment layer: principles, component specs, and an explicit Do / Don't list. Only
a model can apply this part, and the Don'ts are usually what saves the output.

## What CI enforces

A style does not merge unless it passes all of these:

| Gate | Rule |
|---|---|
| Schema | Frontmatter validates against `packages/styles-md/src/schema.ts` |
| Contrast | Every required pair clears WCAG AA, including body, muted and accent labels |
| Sections | `## Principles`, `## Components` and `## Do / Don't` are present |
| Context budget | `DESIGN.min.md` stays under ~900 estimated tokens |
| Artefacts | Generated files match a fresh build, so nothing is hand-edited |

One style is published today, and it clears those gates on every commit. The
bet is that a small library nobody has to double-check is worth more than a large scraped one.

## Styles are moods, not brands

Every style is an original system with a name like `pastel-brutalist`. This
project does not publish clones of real companies' design systems. That avoids the trademark and
trade dress problem, and picking by the feeling you want turns out to be more useful than picking
by which company you are imitating.

## Repository layout

```
styles/<slug>/DESIGN.md      authored, the product
styles/<slug>/DESIGN.min.md  generated, the agent-facing spec
styles/<slug>/tokens.json    generated, machine-readable tokens
styles/<slug>/style.css      generated, CSS custom properties
styles/<slug>/theme.css      generated, Tailwind v4 @theme block
styles/<slug>/shadcn.css     generated, shadcn/ui variables in oklch
styles/<slug>/preview.webp   generated, the demo page in this style
styles/index.json            generated, the search index
packages/styles-md/          schema, compiler and CLI
site/src/components/Demo.astro   the canonical page every style renders
site/                        Astro gallery, static, deploys to Vercel
```

## Working on it

```bash
pnpm install
pnpm run validate      # schema + contrast + sections + budget
pnpm run build         # validate, regenerate artefacts, build the site
pnpm run dev           # gallery at localhost:4321
pnpm run previews      # re-render preview images (needs `pnpm exec playwright install chromium`)

# Verify showcase links resolve and that any `embed: true` is really frameable.
node packages/styles-md/dist/cli.js check-links styles
```

Every style renders the same page, `site/src/components/Demo.astro`, which reads only `--sm-*`
variables and hardcodes nothing. That is what you are comparing in the gallery.

## Licence

Tooling is MIT (`LICENSE`). Style specs are CC-BY-4.0 (`LICENSE-CONTENT`), so use them
commercially, just keep the attribution comment the compiler emits.

Fonts are never redistributed. Every style declares a full CSS stack with fallbacks; install the
families you want yourself, or substitute.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md). Short version: copy an existing style, change the tokens,
run `pnpm run validate`, and open a PR. The preview deployment will render your style on the demo
page so reviewers can actually see it.

If you are working through an AI coding agent, [AGENTS.md](AGENTS.md) carries the invariants it
needs: which files are generated, the layout traps already hit here, and what not to add.

## Author

Created and maintained by karas ([github.com/karasbuilder](https://github.com/karasbuilder)).
