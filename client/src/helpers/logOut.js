import { selectedCurrentPlan } from "../store/actions/plansActions";
import { ROUTES } from "../routes/Routes";

export const LogoutFromAccount = (navigate,dispatch) => {
  localStorage.removeItem("usersInfo");
  navigate(ROUTES.HOME);
  dispatch(selectedCurrentPlan(null, 0));
  window.location.reload();
};
