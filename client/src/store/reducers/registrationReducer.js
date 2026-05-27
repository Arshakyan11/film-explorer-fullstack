import {
  REGISTRATION_ONLY,
  REGISTRATION_SEEPASWORD,
} from "../types/registrationTypes";
export const initialValuesAll = {
  isHiden: true,
  data: [],
  initialValues: {
    personName: "",
    phone: "",
    email: "",
    password: "",
    passwordRepeat: "",
  },
};

export const registrationReducer = (state = initialValuesAll, action) => {
  switch (action.type) {
    case REGISTRATION_ONLY:
      const payload = action.payload;
      return { ...state, data: payload.data };
    case REGISTRATION_SEEPASWORD:
      return {
        ...state,
        isHiden: action.payload,
      };
    default:
      return state;
  }
};
