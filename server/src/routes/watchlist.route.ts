import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import {
  addWatchlist,
  deleteItemFromWatchlist,
  getWatchlist,
} from "../controllers/watchlist.controller";
import { validate } from "../middlewares/validate.middleware";
import { watchlistSchema } from "../validators/watchlist.validator";

const route = express.Router();

route.post("/", authMiddleware, validate(watchlistSchema), addWatchlist);
route.get("/", authMiddleware, getWatchlist);
route.delete("/:movieId", authMiddleware, deleteItemFromWatchlist);

export default route;
