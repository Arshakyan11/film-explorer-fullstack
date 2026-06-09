import z from "zod";

export const editSubscriptionSchema = z.object({
  subscriptionId: z.enum(["1", "2", "3"]),
});
