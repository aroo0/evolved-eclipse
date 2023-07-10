import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		isDraft: z.boolean(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		coverImage: image().refine((img) => img.width >= 600, {
			message: "Cover image must be at least 600 pixels wide!",
		  }),
		coverAlt: z.string(),
		tags: z.array(z.string())
	}),
});
export const collections = { blog };
