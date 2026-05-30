import axios from "axios";

export const loginService = async (data) => {
  const res = await axios.post(import.meta.env.VITE_BACKEND_LINK);
  return res.data;
};
