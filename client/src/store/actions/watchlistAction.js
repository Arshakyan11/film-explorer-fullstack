import { LocalAxios } from "../api/api";
import {
  ADDINGFILM,
  REMOVINGFILM,
  UPDATE_MOVIES,
} from "../types/watchlistTypes";

export const watchlistAddingToUser = (useridArg, dataRcvArg) => {
  return (dispatch) => {
    LocalAxios.patchingWatchList(useridArg, dataRcvArg).then(() => {
      dispatch({ type: ADDINGFILM, payload: dataRcvArg });
    });
  };
};

export const watchlistRemovingToUser = (useridArg, dataRcvArg) => {
  return (dispatch) => {
    LocalAxios.removingWatchlist(useridArg, dataRcvArg).then(() => {
      dispatch({ type: REMOVINGFILM, payload: dataRcvArg });
    });
  };
};

export const updateMovie = (payload) => {
  return {
    type: UPDATE_MOVIES,
    payload,
  };
};
