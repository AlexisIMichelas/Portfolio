import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			youtube: z.string().url().optional(),
			img: z.string().optional(),
			img_alt: z.string().optional(),
		}),
	}),
};
