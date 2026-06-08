import type { Request, Response, NextFunction } from "express";
import {
  editSubscriptionToProfileService,
  getSubscriptionsService,
} from "../services/subscription.service";

export const getSubscriptions = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await getSubscriptionsService();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
export const editSubscriptionToProfile = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userID = req.user!.id;
    const data = req.body;
    const result = await editSubscriptionToProfileService(userID, data);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
