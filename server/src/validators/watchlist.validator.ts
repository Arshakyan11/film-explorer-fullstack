import { z } from "zod";

export const watchlistSchema = z.object({
  movieId: z.number().int().positive("Movie ID must be positive"),
  title: z.string().min(1, "Title is required").max(200, "Title is too long"),
  img: z.string().min(1, "Image path is required"),
  page: z.number().int().positive("Page must be positive"),
});
