import { ROUTES } from "../../routes/Routes";
import { LocalAxios } from "../api/api";
import { makeUserData } from "./plansActions";
import {
  LOGIN_ERROR,
  LOGIN_ONLY,
  LOGIN_SEEPASSWORD,
} from "../types/loginTypes";
import { notifyForSmth, notifyForSmthBad } from "../../helpers/notifyUser";

export const loginGetting = (personName, passwordd, navigate) => {
  return (dispatch) => {
    LocalAxios.checkingLocalData().then((res) => {
      const exisitingUser = res.data.find(
        (user) => passwordd === user.password && personName === user.username
      );
      if (exisitingUser) {
        dispatch({
          type: LOGIN_ONLY,
          payload: {
            isExisting: true,
            data: exisitingUser,
          },
        });
        localStorage.setItem("usersInfo", JSON.stringify(exisitingUser));
        let usData = localStorage.getItem("usersInfo");
        dispatch(makeUserData(JSON.parse(usData)));
        navigate(`/${ROUTES.PROFILE}`);
        notifyForSmth("Success! You Logged In");
      } else {
        dispatch({
          type: LOGIN_ERROR,
          payload: false,
        });
        notifyForSmthBad("User Doenst Exist !!!!");
      }
    });
  };
};

export const ChangingHidenPassword = (idHidenArgument) => {
  return {
    type: LOGIN_SEEPASSWORD,
    payload: idHidenArgument,
  };
};
