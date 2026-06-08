import { prisma } from "../lib/prisma";
import { MovieStructureType } from "../types/auth.types";
import { errorThrower } from "../utils/errorThrower";

export const addWatchlistService = async (
  userID: string,
  watchlistItem: MovieStructureType,
) => {
  const existingItem = await prisma.watchlistItem.findFirst({
    where: {
      AND: [{ userId: userID }, { movieId: watchlistItem.movieId }],
    },
  });
  if (existingItem) {
    return errorThrower("Item already exists in watchlist", 409);
  }
  await prisma.watchlistItem.create({
    data: {
      userId: userID,
      movieId: watchlistItem.movieId,
      page: watchlistItem.page,
      img: watchlistItem.img,
      title: watchlistItem.title,
    },
  });

  return { message: "Item added to watchlist successfully" };
};

export const getWatchlistService = async (userID: string) => {
  const watchlist = await prisma.watchlistItem.findMany({
    where: { userId: userID },
  });
  return watchlist;
};

export const deleteItemFromWatchlistService = async (
  userID: string,
  watchlistItemID: number,
) => {
  try {
    await prisma.watchlistItem.delete({
      where: {
        userId_movieId: { userId: userID, movieId: watchlistItemID },
      },
    });
    return {
      message: "Item removed from watchlist successfully",
    };
  } catch (error: any) {
    if (error.code === "P2025") {
      errorThrower("Item doesn't exist in watchlist", 404);
    }
    throw error;
  }
};
