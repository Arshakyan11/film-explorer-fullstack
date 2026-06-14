import type { SignInUserInfoType } from "../types/formTypes";

export const getLocalUserStrict = (): SignInUserInfoType | null => {
  const user = localStorage.getItem("userInfo");
  if (!user) return null;
  return JSON.parse(user);
};
