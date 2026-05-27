import { Axios } from "../api/api";
import {
  GETPAGEDATA,
  GETPAGEDATAFOOTER,
  SEND_DATA,
} from "../types/allDataTypes";

export const gettingAllDataOnly = (pageArgument, idArgument) => {
  return (dispatch) => {
    Axios.getDataByWantedPage(pageArgument).then((res) =>
      dispatch({
        type: GETPAGEDATA,
        payload: {
          data: res.data.results,
          currentPage: pageArgument,
          currentID: idArgument ? idArgument : 278,
        },
      })
    );
  };
};

export const gettingAllDataOnlyFooter = (pageArgument) => {
  return (dispatch) => {
    Axios.getDataByWantedPage(pageArgument).then((res) =>
      dispatch({
        type: GETPAGEDATAFOOTER,
        payload: res.data.results,
      })
    );
  };
};

export const sendingData = (payload) => {
  return {
    type: SEND_DATA,
    payload,
  };
};
