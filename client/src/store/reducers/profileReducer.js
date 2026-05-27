import {
  PROFILE_DATA,
  PROFILE_EDITING,
  PROFILE_SEEPASWORD,
  UPDATE_DATA,
} from "../types/profileTypes";

const localData = JSON.parse(localStorage.getItem("usersInfo"));

const initialValues = {
  isHiden: true,
  isEditing: false,
  userData: localData || {
    email: "",
    phone: "",
  },
  initialValues: {
    emailInput: localData ? localData.email : "",
    passwordInput: localData ? localData.password : "",
  },
};

export const profileReducer = (state = initialValues, action) => {
  switch (action.type) {
    case PROFILE_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    case PROFILE_SEEPASWORD:
      return {
        ...state,
        isHiden: action.payload,
        isEditing: true,
      };
    case PROFILE_EDITING:
      return {
        ...state,
        isEditing: action.payload,
      };
    case UPDATE_DATA:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
};
