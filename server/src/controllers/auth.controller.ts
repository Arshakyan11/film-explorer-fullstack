import {
  deleteUserAccountService,
  getUserInfoService,
  loginService,
  registerService,
  resetPasswordService,
} from "../services/auth.service";
import type { Request, Response, NextFunction } from "express";
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

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;
    const result = await loginService(data);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const resetPassword = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userID = req.user!.id;
    const data = req.body;
    const result = await resetPasswordService(userID, data);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getUserInfo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userID = req.user!.id;
    const result = await getUserInfoService(userID);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const deleteUserAccount = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userID = req.user!.id;
    const result = await deleteUserAccountService(userID);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
