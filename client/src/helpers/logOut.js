import { ROUTES } from "../routes/Routes";

export const LogoutFromAccount = (navigate, dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("idToken");
  navigate(ROUTES.HOME);
  window.location.reload();
};
