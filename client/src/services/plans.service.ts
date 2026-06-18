import type { SavePlanOfTheAccountResType } from "../types/apiHandlingTypes";
import { apiClient } from "./instance";

export const getAllPlansService = async () => {
  const res = await apiClient.get(
    `${import.meta.env.VITE_BACKEND_LINK}/subscription`,
  );
  return res.data;
};

export const saveNewPlanOfAccountService = async (
  data: SavePlanOfTheAccountResType,
) => {
  const res = await apiClient.patch(
    `${import.meta.env.VITE_BACKEND_LINK}/subscription`,
    data,
  );
  return res.data;
};
