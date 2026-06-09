import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import {
  editSubscriptionToProfile,
  getSubscriptions,
} from "../controllers/subscription.service";
import { validate } from "../middlewares/validate.middleware";
import { editSubscriptionSchema } from "../validators/subscription.validator";

const route = express.Router();
route.get("/", authMiddleware, getSubscriptions);
route.patch(
  "/",
  authMiddleware,
  validate(editSubscriptionSchema),
  editSubscriptionToProfile,
);

export default route;
