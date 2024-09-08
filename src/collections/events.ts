import { defineCollection, z } from "astro:content";

export default defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      date: z
        .date()
        .refine((date) => date >= new Date(), {
          message: "Date must be today or in the future",
        })
        .optional(),

      description: z
        .string()
        .refine((description) => description.length < 160, {
          message: "Description must be less than 160 characters",
        }),
      image: image().refine((image) => image.width >= 800, {
        message: "Image must be at least 800px wide",
      }),
      location: z.string().optional(),
      price: z.number().nonnegative().default(0),
      recurringDate: z.string().optional(),
      registrationRequired: z.boolean().default(false),
      title: z.string().refine((title) => title.length < 70, {
        message: "Title must be less than 70 characters",
      }),
    }),
});
