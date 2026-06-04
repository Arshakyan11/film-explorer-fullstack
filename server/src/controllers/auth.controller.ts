import { registerService } from "../services/auth.service.ts";
import { Request, Response, NextFunction } from "express";
export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;
    const result = await registerService(data);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

// export const loginUser = async (req, res, next) => {
//   try {
//     const data = req.body;
//     const result = await loginService(data);
//     return res.status(200).json(result);
//   } catch (error) {
//     next(error);
//   }
// };
