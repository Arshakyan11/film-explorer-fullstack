import type { AddItemToWatchlistReqType } from "../types/apiHandlingTypes";
import { apiClient } from "./instance";

export const getWatchlistService = async () => {
  const res = await apiClient.get(
    `${import.meta.env.VITE_BACKEND_LINK}/watchlist`,
  );
  return res.data;
};

export const addItemtoWatchlistService = async (
  data: AddItemToWatchlistReqType,
) => {
  const res = await apiClient.post(
    `${import.meta.env.VITE_BACKEND_LINK}/watchlist`,
    data,
  );
  return res.data;
};

export const removeItemOfWatchlistService = async (movieId: string) => {
  const res = await apiClient.delete(
    `${import.meta.env.VITE_BACKEND_LINK}/watchlist/${movieId}`,
  );
  return res.data;
};
