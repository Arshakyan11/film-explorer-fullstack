import {
  GETPAGEDATA,
  GETPAGEDATAFOOTER,
  SEND_DATA,
} from "../types/allDataTypes";

const initialValues = {
  userInfo: [],
  data: {
    mainData: [],
    footerData: [],
  },
  currentPage: 1,
  currentID: 278,
};
export const allDataReducer = (state = initialValues, action) => {
  switch (action.type) {
    case GETPAGEDATA:
      const payload = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          mainData: payload.data,
        },
        currentPage: payload.currentPage,
        currentID: payload.currentID,
      };
    case GETPAGEDATAFOOTER:
      return {
        ...state,
        data: {
          ...state.data,
          footerData: action.payload,
        },
      };
    case SEND_DATA:
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return state;
  }
};
