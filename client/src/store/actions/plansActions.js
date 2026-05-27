import { notifyForSmth } from "../../helpers/notifyUser";
import { ROUTES } from "../../routes/Routes";
import { LocalAxios, LocalAxiosPlans } from "../api/api";
import {
  Export_Plan,
  Geting_Plans,
  Select_Plans_Current,
  UPDATE_DATA,
} from "../types/plansTypes";

export const plansGettingData = () => {
  return (dispatch) => {
    LocalAxiosPlans.gettAllPlans().then((res) =>
      dispatch({
        type: Geting_Plans,
        payload: {
          plans: res.data,
        },
      })
    );
  };
};

export const exportingSelectedPlan = (userIdRcv, dataRcv, navigate) => {
  return (dispatch) => {
    LocalAxios.patchingPlans(userIdRcv, dataRcv)
      .then(() => {
        dispatch({ type: Export_Plan, payload: dataRcv });
        setTimeout(() => {
          navigate(`/${ROUTES.PROFILE}`);
        }, 100);
        notifyForSmth("Selected Plan has ban changed");
      })
      .catch((err) => console.error("Error", err));
  };
};

export const selectedCurrentPlan = (planArgument, price) => {
  return {
    type: Select_Plans_Current,
    payload: {
      selectedPlans: planArgument,
      total: price,
    },
  };
};

export const makeUserData = (payload) => {
  return {
    type: UPDATE_DATA,
    payload: payload,
  };
};
