import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { buildStyleSchema } from "styles-md/schema";

/**
 * The site validates styles with the exact schema the CLI and CI use. If a
 * contributor's frontmatter is wrong, the site build fails — there is no second
 * definition to drift from.
 */
const styles = defineCollection({
  loader: glob({ pattern: "*/DESIGN.md", base: "../styles" }),
  schema: buildStyleSchema(z as never) as never,
});

export const collections = { styles };
