# AGENTS.md

Instructions for AI coding agents working in this repository.

## What this is

An open library of design styles as Markdown. One file per style: hard tokens in the
frontmatter, rules that need judgment in the body. A TypeScript package validates and compiles
them; an Astro site presents them. **Static output only — there is no backend anywhere, git is
the database, and the deployed site is the CDN the CLI reads from.** Do not introduce a server,
a database, or a runtime API.

## Commands

```bash
pnpm install
pnpm run validate     # schema + WCAG AA + required sections + token budget
pnpm run build:tokens # regenerate every artefact under styles/
pnpm run build        # validate → build:tokens → build:site
pnpm run dev          # gallery at localhost:4321
pnpm run test         # vitest, in packages/styles-md
pnpm run previews     # re-render preview.webp (needs `pnpm exec playwright install chromium`)
```

Node >= 20.11, pnpm 10.7. Always run `pnpm run validate` before claiming a style change works.

## Architecture invariants

**`packages/styles-md/src/schema.ts` is the single source of truth.** The CLI, CI and the Astro
content collection all validate against that one Zod definition. It is exported as a factory
(`buildStyleSchema(z)`) so Astro can pass its own bundled zod — do not replace this with a second
schema, a JSON Schema file kept in sync by hand, or a type-only definition.

**Two layers, and they must not blur.** Frontmatter is deterministic: it compiles to CSS, a
Tailwind v4 `@theme` block, shadcn variables and a token JSON with no model in the loop. The
Markdown body is judgment: prose a model applies. If you find yourself wanting an LLM to
interpret a number, it belongs in the frontmatter instead.

**Generated files are never hand-edited.** These are build output:

```
styles/<slug>/DESIGN.min.md   tokens.json   style.css   theme.css   shadcn.css   preview.webp
styles/index.json
```

Change `DESIGN.md`, then run `pnpm run build:tokens`. CI runs the build and fails on
`git diff --exit-code -- styles`, so hand edits are caught.

## Adding or changing a style

1. Copy the closest folder under `styles/`, delete its generated files, edit `DESIGN.md`.
2. Folder name and frontmatter `id` must match, and both must be kebab-case.
3. **Name a mood, not a company.** `midnight-precision`, never `linear-clone`. Recreating a real
   product's design system is a trademark problem — this rule is not stylistic.
4. `## Principles`, `## Components` and `## Do / Don't` are required, with those exact titles.
   They are the only sections carried into `DESIGN.min.md`; everything else is dropped. If a rule
   must reach the model, it lives in one of those three.
5. `DESIGN.min.md` must stay under ~900 estimated tokens. Enforced, not advisory — longer specs
   measurably degrade agent output.
6. Every required colour pair must clear WCAG AA. `muted` and `accentFg` fail most often.
7. Run `pnpm run build && pnpm run dev` and *look at the style on the demo page* before saying it
   works. A style that validates but looks bad is not done.

## Changing the schema

**Clear the Astro content cache after every schema change**, or the site build
crashes on styles whose files did not change — the data store still holds entries
parsed by the old schema, so a newly added field reads as `undefined`. There are
**two** stores and both must go:

```bash
rm -rf site/.astro site/node_modules/.astro
```


Adding a required field breaks all eight existing styles. So: new fields are optional or carry a
default, add a test in `packages/styles-md/src/index.test.ts`, and state in the commit what a
style can now express that it could not before. `tokens.stroke.width` was added because border
weight is half of what makes a style feel brutalist — that is the bar for a new field.

## Site conventions

`site/src/styles/site.css` is a **plain CSS file, not an Astro `<style>` block**. `:global()` is
invalid there and silently breaks the rule it wraps.

`site/src/components/Demo.astro` is the canonical demo page rendered under every style. It reads
**only `--sm-*` custom properties** — nothing in it may be hardcoded. That is what makes the
gallery an honest comparison rather than eight cherry-picked screens.

The style page is a two-pane "studio" layout: left is what the style looks like, right is the
artefact itself with format tabs. **Nothing appears in both panes.** The page previously showed
the same tokens as a table, as prose and as a raw file dump, and that duplication was the single
worst readability problem it had. Do not reintroduce it.

The gallery chrome is intentionally neutral (Inter, greys, one tint). A characterful chrome font
would compete with the typographic systems the site exists to display.

## Layout traps already hit here

Re-introducing any of these will look like a mysterious visual bug:

- **`overflow: hidden` on a box containing an `<iframe>` inside an auto grid row.** It becomes a
  scroll container and Chromium drops the iframe from the row's intrinsic size — the row collapses
  to the borders and the content vanishes. Use `overflow: clip`, which still rounds corners.
- **Grid chains without `minmax(0, 1fr)`.** Grid items default to `min-width: auto`, so one long
  unbreakable string widens the whole column and overflows the page. Every grid container down a
  narrow rail needs an explicit `minmax(0, 1fr)` track.
- **Shorthand `padding` on an element that already has `.wrap`.** It zeroes the horizontal
  padding. Use `padding-block`. This is invisible on desktop because auto margins hide it, and
  breaks on mobile.
- **Setting `el.hidden = true` on something with an author `display` rule.** The author rule beats
  the UA `[hidden] { display: none }`, so the element stays on screen while your own counters say
  it is gone. Any class you hide this way needs an explicit `.thing[hidden] { display: none }`.
  When verifying, assert on `getComputedStyle(el).display`, not on `el.hidden` — reading the
  property back only confirms you set it.

## Verifying UI changes

Build, serve `site/dist`, and check with a real browser. The standing requirement is **zero
horizontal overflow** in light and dark at 390 / 768 / 1100 / 1440 / 1800:

```js
document.documentElement.scrollWidth - window.innerWidth  // must be 0
```

When a layout is wrong, measure the element boxes and find the culprit — do not guess at CSS and
re-screenshot hoping it changed.

## Dependencies

The full list is short on purpose: `zod`, `gray-matter`, `culori`, `commander`, `astro`,
`minisearch`, `playwright`, `vitest`. Adding one needs a reason beyond convenience. No CSS
framework in the site, no component library, no build orchestrator — two workspace packages do
not need Turborepo.

## Commits

Conventional commits (`feat:`, `fix:`, `refactor:`, `chore:`). Explain *why* in the body, not just
what changed. **Do not add `Co-Authored-By` trailers.** Commit and push only when asked.

**Never pass `-c user.name` / `-c user.email` to `git commit`.** The repository has a configured
identity; overriding it with an address from somewhere else produces commits GitHub cannot
attribute to the account, and fixing that afterwards means rewriting history and force-pushing.
Just run `git commit` and let git use the configured identity.

## Licensing

Tooling is MIT, style specs are CC-BY-4.0 — keep the split, and keep the attribution comment the
compiler emits at the top of generated files. **No font files are ever committed.** Styles declare
CSS stacks with fallbacks; licensing a family is the consumer's problem.
