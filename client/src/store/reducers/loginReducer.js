import {
  LOGIN_ERROR,
  LOGIN_ONLY,
  LOGIN_SEEPASSWORD,
} from "../types/loginTypes";

const initialState = {
  data: [],
  initialValues: { personName: "", password: "" },
  isExisting: true,
  isHiden: true,
};
export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ONLY:
      const payload = action.payload;
      // localStorage.setItem("usersInfo", JSON.stringify(payload.data));

      return {
        ...state,
        data: payload.data,
        isExisting: payload.isExisting,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isExisting: action.payload,
      };
    case LOGIN_SEEPASSWORD:
      return {
        ...state,
        isHiden: action.payload,
      };
    default:
      return state;
  }
};
