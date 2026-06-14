import type {
  RegisterUserType,
  ResetPasswordSendingType,
  SignInUserSendingType,
} from "../types/formTypes";
import { apiClient } from "./instance";

export const loginService = async (data: SignInUserSendingType) => {
  const res = await apiClient.post(
    `${import.meta.env.VITE_BACKEND_LINK}/auth/login`,
    data,
  );
  return res.data;
};

export const registerService = async (data: RegisterUserType) => {
  const res = await apiClient.post(
    `${import.meta.env.VITE_BACKEND_LINK}/auth/registration`,
    data,
  );
  return res.data;
};

export const resetPasswordService = async (data: ResetPasswordSendingType) => {
  const res = await apiClient.patch(
    `${import.meta.env.VITE_BACKEND_LINK}/auth/resetPassword`,
    data,
  );
  return res.data;
};

export const getUserInfoService = async () => {
  const res = await apiClient.get(
    `${import.meta.env.VITE_BACKEND_LINK}/auth/profile`,
  );
  return res.data;
};
