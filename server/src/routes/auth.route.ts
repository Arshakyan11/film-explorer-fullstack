import express from "express";
import {
  deleteUserAccount,
  getUserInfo,
  loginUser,
  registerUser,
  resetPassword,
} from "../controllers/auth.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { validate } from "../middlewares/validate.middleware";
import {
  loginSchema,
  registerSchema,
  resetPasswordSchema,
} from "../validators/auth.validator";

const route = express.Router();
route.post("/registration", validate(registerSchema), registerUser);
route.post("/login", validate(loginSchema), loginUser);
route.patch(
  "/resetPassword",
  validate(resetPasswordSchema),
  authMiddleware,
  resetPassword,
);
route.get("/profile", authMiddleware, getUserInfo);
route.delete("/profile", authMiddleware, deleteUserAccount);

export default route;
