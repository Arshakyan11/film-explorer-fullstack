import type { Request, Response, NextFunction } from "express";
import {
  addWatchlistService,
  deleteItemFromWatchlistService,
  getWatchlistService,
} from "../services/watchlist.service";

export const addWatchlist = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;
    const userID = req.user!.id;
    const result = await addWatchlistService(userID, data);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getWatchlist = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userID = req.user!.id;
    const result = await getWatchlistService(userID);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const deleteItemFromWatchlist = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const itemID = Number(req.params.movieId);
    const userID = req.user!.id;
    const result = await deleteItemFromWatchlistService(userID, itemID);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
