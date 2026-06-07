import jwt from "jsonwebtoken";
import { errorThrower } from "../utils/errorThrower";
import type { Request, Response, NextFunction } from "express";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return errorThrower("Authorization Header is measing!", 401);
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
      errorThrower("Token doesnt found!", 401);
    }
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      return errorThrower("Secret doesnt found!", 401);
    }
    const decoded = jwt.verify(token, secret) as {
      id: string;
      email: string;
    };
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
