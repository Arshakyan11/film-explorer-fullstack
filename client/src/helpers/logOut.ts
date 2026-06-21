import type { NavigateFunction } from "react-router-dom";
import { ROUTES } from "../routes/Routes";

export const LogoutFromAccount = (navigate: NavigateFunction) => {
  localStorage.clear();
  navigate(ROUTES.HOME);
  window.location.reload();
};
