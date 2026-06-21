import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { getFilmsForSectionDisplayThunk } from "../api/api";
import type { MovieType } from "../../types/dataTypes";

export type PaginationSliceType = {
  isLoading: boolean;
  error: null | string;
  data: {
    popularMovies: MovieType[];
    newMovies: MovieType[];
    recomendedMovies: MovieType[];
  };
};
const initialState: PaginationSliceType = {
  isLoading: false,
  error: null,
  data: {
    popularMovies: [],
    newMovies: [],
    recomendedMovies: [],
  },
};

const PaginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFilmsForSectionDisplayThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(
      getFilmsForSectionDisplayThunk.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.error = null;
        const films = action.payload;
        state.data.popularMovies = films.slice(0, 6);
        state.data.newMovies = films.slice(6, 12);
        state.data.recomendedMovies = films.slice(12, 18);
      },
    );
    builder.addCase(
      getFilmsForSectionDisplayThunk.rejected,
      (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? "Something Went Wrong!!!";
      },
    );
  },
});

export default PaginationSlice.reducer;
export const getAllPaginationInfo = (state: RootState) => state.pagination;
