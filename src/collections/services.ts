import { unique } from "@utils/unique";
import { string } from "astro/zod";
import { defineCollection, reference, z } from "astro:content";

export default defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      benefits: z.array(z.string()),
      image: image().optional(),
      testimonials: z.string().optional(),
      pricingOptions: z.array(z.string()),
      longDesctipion: z.string(),
      shortDescription: z.string(),
    }),
});
