import { jwtDecode } from "jwt-decode";

export const clearAuthStorage = () => {
  localStorage.removeItem("idToken");
  localStorage.removeItem("userInfo");
};

type JWTPaylod = {
  id: string;
  email: string;
  exp: number;
};

export const isTokenValid = () => {
  const token = localStorage.getItem("idToken");
  if (!token) {
    return false;
  }
  try {
    const decoded = jwtDecode<JWTPaylod>(token);
    const isExpired = decoded.exp * 1000 <= Date.now();
    if (isExpired) {
      clearAuthStorage();
      return false;
    }
    return true;
  } catch (error) {
    clearAuthStorage();
    return false;
  }
};
