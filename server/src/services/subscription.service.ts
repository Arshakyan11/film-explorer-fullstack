import { prisma } from "../lib/prisma";
import { SubscriptionChangeType } from "../types/auth.types";
import { errorThrower } from "../utils/errorThrower";

export const getSubscriptionsService = async () => {
  const subscriptions = await prisma.subscription.findMany();
  return subscriptions;
};
export const editSubscriptionToProfileService = async (
  userID: string,
  data: SubscriptionChangeType,
) => {
  const subscription = await prisma.subscription.findUnique({
    where: { id: data.subscriptionId },
  });
  if (!subscription) {
    errorThrower("Subscription not found", 404);
  }
  const user = await prisma.user.findUnique({
    where: { id: userID },
    select: {
      subscriptionId: true,
    },
  });

  if (user?.subscriptionId === data.subscriptionId) {
    errorThrower("You already have this subscription", 409);
  }
  await prisma.user.update({
    where: { id: userID },
    data: {
      subscriptionId: data.subscriptionId,
    },
  });

  return {
    message: "Subscription changed successfully",
  };
};
