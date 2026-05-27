import { LocalAxios } from "../api/api";
import {
  PROFILE_DATA,
  PROFILE_EDITING,
  PROFILE_SEEPASWORD,
  UPDATE_DATA,
} from "../types/profileTypes";

export const profilePasswordSee = (payload) => {
  return {
    type: PROFILE_SEEPASWORD,
    payload,
  };
};

export const profileEditing = (payload) => {
  return {
    type: PROFILE_EDITING,
    payload,
  };
};
export const profileDataSending = (userIdRcv, dataArgument) => {
  return (dispatch) => {
    LocalAxios.changingUserInfo(userIdRcv, dataArgument).then(() => {
      dispatch({ type: PROFILE_DATA, payload: dataArgument });
    });
  };
};
export const datagetForProfile = (payload) => {
  return {
    type: UPDATE_DATA,
    payload: payload,
  };
};
