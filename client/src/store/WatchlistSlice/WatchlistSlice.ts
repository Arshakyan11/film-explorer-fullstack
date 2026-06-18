import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import {
  addItemtoWatchlistThunk,
  getWatchlistThunk,
  removeItemOfWatchlistThunk,
} from "../api/api";

export type WatchlistType = {
  isLoading: boolean;
  error: null | string;
  watchlist: any[];
};
const initialState: WatchlistType = {
  isLoading: false,
  error: null,
  watchlist: [],
};

const WatchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get Watchlist
    builder.addCase(getWatchlistThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.watchlist = action.payload;
    });
    builder.addCase(addItemtoWatchlistThunk.fulfilled, (state) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(removeItemOfWatchlistThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.watchlist = state.watchlist.filter(
        (item) => item.movieId !== action.payload.movieId,
      );
    });

    builder.addMatcher(
      isPending(
        getWatchlistThunk,
        addItemtoWatchlistThunk,
        removeItemOfWatchlistThunk,
      ),
      (state) => {
        state.isLoading = true;
        state.error = null;
      },
    );
    builder.addMatcher(
      isRejected(
        getWatchlistThunk,
        addItemtoWatchlistThunk,
        removeItemOfWatchlistThunk,
      ),
      (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? "Something Went Wrong!!!";
      },
    );
  },
});

export default WatchlistSlice.reducer;
export const getAllWatchlistInfo = (state: RootState) => state.watchlist;
