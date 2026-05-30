import axios from "axios";

export const mainInstance = axios.create({
  baseURL: import.meta.env.VITE_FILM_MAIN_URL,
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_FILM_TOKEN,
  },
});

export const extractErrorMessage = (
  error: unknown,
  manualErrorMessage: string,
) => {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message ?? manualErrorMessage;
  }
  return "Something Went Wron!!";
};
