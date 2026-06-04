import express from "express";
import { registerUser } from "../controllers/auth.controller.ts";
// import { loginUser } from "../controllers/auth.controller";

const route = express.Router();
route.post("/registration", registerUser);
// route.post("/login", loginUser);

export default route;
