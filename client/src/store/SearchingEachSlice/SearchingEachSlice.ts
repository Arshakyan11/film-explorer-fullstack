import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { getFilmsByQueryThunk } from "../api/api";

export type SearchingEachSliceType = {
  isLoading: boolean;
  error: null | string;
  allFilmsInSearchingNAV: any[];
  allFilmsInSearchingMAIN: any[];
  searchingResult: any[];
  queryName: string;
};
const initialState: SearchingEachSliceType = {
  allFilmsInSearchingNAV: [],
  allFilmsInSearchingMAIN: [],
  searchingResult: [],
  queryName: "",
  isLoading: false,
  error: null,
};

const SearchingEachSlice = createSlice({
  name: "searchingEach",
  initialState,
  reducers: {
    setingSearchResult(state, action) {
      state.searchingResult = action.payload;
    },
    setingSearchResultALlData(state, action) {
      state.allFilmsInSearchingMAIN = action.payload;
    },
    transferData(state) {
      state.allFilmsInSearchingMAIN = state.allFilmsInSearchingNAV;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFilmsByQueryThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getFilmsByQueryThunk.fulfilled, (state, action) => {
      const { queryName, films, searchType } = action.payload;
      state.queryName = queryName;
      if (searchType === "navigationSearch") {
        state.allFilmsInSearchingNAV = films;
      } else {
        state.allFilmsInSearchingMAIN = films;
      }
    });

    builder.addCase(getFilmsByQueryThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ?? "Something Went Wrong!!!";
    });
  },
});

export default SearchingEachSlice.reducer;
export const { setingSearchResult, setingSearchResultALlData, transferData } =
  SearchingEachSlice.actions;
export const globalSearchingEach = (state: RootState) => state.searchingEach;
export const searchingEachQuerryName = (state: RootState) =>
  state.searchingEach.queryName;
export const searchingEachData = (state: RootState) =>
  state.searchingEach.allFilmsInSearchingNAV;
export const searchingEachDataMAIN = (state: RootState) =>
  state.searchingEach.allFilmsInSearchingMAIN;
export const searchingEachResult = (state: RootState) =>
  state.searchingEach.searchingResult;
