import {
  ADDINGFILM,
  REMOVINGFILM,
  UPDATE_MOVIES,
} from "../types/watchlistTypes";

const initialValues = {
  watchlist: [],
};

export const watchlistReducer = (state = initialValues, action) => {
  switch (action.type) {
    case UPDATE_MOVIES:
      return {
        ...state,
        watchlist: action.payload.watchlist,
      };
    case ADDINGFILM:
      let userData = JSON.parse(localStorage.getItem("usersInfo"));
      const isAddeed = userData.watchlist?.every(
        (elm) => elm.id !== action.payload.id
      );

      if (isAddeed) {

        localStorage.setItem(
          "usersInfo",
          JSON.stringify({
            ...userData,
            watchlist: [...state.watchlist, action.payload],
          })
        );
        return {
          ...state,
          watchlist: [...state.watchlist, action.payload],
        };
      } else {
        return {
          ...state,
        };
      }
    case REMOVINGFILM:
      let userDataNew = JSON.parse(localStorage.getItem("usersInfo"));

      let newWatchlist = state.watchlist?.filter(
        (elm) => elm.id !== action.payload.id
      );
      localStorage.setItem(
        "usersInfo",
        JSON.stringify({
          ...userDataNew,
          watchlist: newWatchlist,
        })
      );
      return {
        ...state,
        watchlist: newWatchlist,
      };
    default:
      return state;
  }
};
