import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const essays = defineCollection({
  // Load Markdown and MDX files in the `src/content/essays/` directory.
  loader: glob({ base: "./src/content/essays", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    id: z.string(),
    when: z.string(),
  }),
});

export const collections = { essays };
