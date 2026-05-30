import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { fetchTrailerThunk, getOneMovieThunk } from "../api/api";

export type EachFilmSliceType = {
  loading: boolean;
  error: string | null;
  pagee: number;
  currentID: number | null;
  eachData: any[];
  haveTrailer: boolean;
  trailerKey: string | null;
};

const initialValue: EachFilmSliceType = {
  loading: false,
  error: null,
  pagee: 1,
  currentID: null,
  eachData: [],
  haveTrailer: false,
  trailerKey: null,
};

export const EachFilmSlice = createSlice({
  name: "databyPages",
  initialState: initialValue,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOneMovieThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getOneMovieThunk.fulfilled, (state, action) => {
      const { data, page, id } = action.payload;
      state.loading = false;
      state.error = null;
      state.eachData = data.filter((elm) => elm.id === +id);
      state.currentID = id;
      state.pagee = page ? page : 1;
    });
    builder.addCase(getOneMovieThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ?? "Something Went Wrong";
    });
    //for Trailer
    builder.addCase(fetchTrailerThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchTrailerThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.haveTrailer = action.payload.hasTrailer;
      state.trailerKey = action.payload.trailerKey;
    });
    builder.addCase(fetchTrailerThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ?? "Something Went Wrong";
    });
  },
});

export default EachFilmSlice.reducer;
export const gettDataAllofPage = (state: RootState) => state.databyPages;
export const getHaveTrailerBollean = (state: RootState) =>
  state.databyPages.haveTrailer;
export const getTrailerKey = (state: RootState) => state.databyPages.trailerKey;
