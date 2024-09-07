import { defineCollection, z } from "astro:content";

export default defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      benefits: z.array(z.string()),
      description: z.string(),
      excerpt: z.string(),
      image: image().optional(),
      pricingOptions: z.array(
        z.object({
          price: z.number().positive(),
          title: z.string(),
        }),
      ),
    }),
});
