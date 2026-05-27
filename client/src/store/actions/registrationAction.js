import { notifyForSmth } from "../../helpers/notifyUser";
import { LocalAxios } from "../api/api";
import {
  REGISTRATION_ONLY,
  REGISTRATION_SEEPASWORD,
} from "../types/registrationTypes";

export const RegistrationDataGetting = (dataArgument) => {
  return (dispatch) => {
    LocalAxios.addUserToLocalPageAndData(dataArgument).then((res) => {
      dispatch({
        type: REGISTRATION_ONLY,
        payload: { data: res.data },
      });
    });
    notifyForSmth("Success! You Registered Account");
  };
};

export const seeHidenPasswordOnReg = (isHidenArgument) => {
  return {
    type: REGISTRATION_SEEPASWORD,
    payload: isHidenArgument,
  };
};
