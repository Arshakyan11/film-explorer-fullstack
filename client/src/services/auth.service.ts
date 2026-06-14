import axios from "axios";

export const loginService = async (data) => {
  const res = await axios.post(
    `${import.meta.env.VITE_BACKEND_LINK}/auth/login`,
    data,
  );
  return res.data;
};

export const registerService = async (data) => {
  const res = await axios.post(
    `${import.meta.env.VITE_BACKEND_LINK}/auth/registration`,
  );
  return res.data;
};

export const resetPasswordService = async (data) => {
  const res = await axios.post(
    `${import.meta.env.VITE_BACKEND_LINK}/auth/registration`,
    data,
  );
  return res.data;
};
