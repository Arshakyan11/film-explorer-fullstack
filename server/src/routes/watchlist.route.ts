import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import {
  addWatchlist,
  deleteItemFromWatchlist,
  getWatchlist,
} from "../controllers/watchlist.controller";

const route = express.Router();

route.post("/", authMiddleware, addWatchlist);
route.get("/", authMiddleware, getWatchlist);
route.delete("/:movieId", authMiddleware, deleteItemFromWatchlist);

export default route;
