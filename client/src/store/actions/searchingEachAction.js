import { Axios } from "../api/api";
import {
  LOCALSEARCHSETTING,
  RCVDATA,
  RCVDATAMAIN,
  SETEACHDATA,
  SETEACHDATAALLDATA,
  TRANSFERINGDATA,
} from "../types/searchingEachTypes";

export const recivingData = (querryRcv) => {
  return (dispatch) => {
    Axios.getDataByQuery(querryRcv).then((res) => {
      dispatch({
        type: RCVDATA,
        payload: {
          queryName: querryRcv,
          allFilmsInSearchingNAV: res.data.results,
        },
      });
    });
  };
};

export const recivingDataMAIN = (querryRcv) => {
  return (dispatch) => {
    Axios.getDataByQuery(querryRcv).then((res) => {
      dispatch({
        type: RCVDATAMAIN,
        payload: {
          queryName: querryRcv,
          allFilmsInSearchingMAIN: res.data.results,
        },
      });
    });
  };
};

export const setingSearchResult = (payload) => {
  return {
    type: SETEACHDATA,
    payload,
  };
};

export const setingSearchResultALlData = (payload) => {
  return {
    type: SETEACHDATAALLDATA,
    payload,
  };
};

export const transferData = () => {
  return {
    type: TRANSFERINGDATA,
  };
};
