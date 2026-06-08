import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import {
  editSubscriptionToProfile,
  getSubscriptions,
} from "../controllers/subscription.service";

const route = express.Router();
route.get("/", authMiddleware, getSubscriptions);
route.patch("/", authMiddleware, editSubscriptionToProfile);

export default route;
