import express from "express";
import {
  getUserInfo,
  loginUser,
  registerUser,
  resetPassword,
} from "../controllers/auth.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const route = express.Router();
route.post("/registration", registerUser);
route.post("/login", loginUser);
route.patch("/resetPassword", authMiddleware, resetPassword);
route.get("/profile", authMiddleware, getUserInfo);

export default route;
