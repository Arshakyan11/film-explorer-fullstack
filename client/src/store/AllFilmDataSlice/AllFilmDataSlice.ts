import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { getFilmByWantedPageThunk, getFooterDataThunk } from "../api/api";

export type AllFilmDataType = {
  userInfo: any[] | null;
  data: {
    mainData: any[] | null;
    footerData: any[] | null;
  };
  currentPage: number;
  currentID: number;
  error: string | null;
  loading: boolean;
};

const initialState: AllFilmDataType = {
  userInfo: [],
  data: {
    mainData: [],
    footerData: [],
  },
  currentPage: 1,
  currentID: 278,
  error: null,
  loading: false,
};

const allFilmDataSlice = createSlice({
  name: "allFilmsData",
  initialState: initialState,
  reducers: {
    sendingData(state, action) {
      state.userInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFilmByWantedPageThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getFilmByWantedPageThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      const payload = action.payload;
      state.data.mainData = payload.data;
      state.currentPage = payload.currentPage;
      state.currentID = payload.currentID;
    });
    builder.addCase(getFilmByWantedPageThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ?? "Something Went Wrong";
    });
    builder.addCase(getFooterDataThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getFooterDataThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      const payload = action.payload;
      state.data.footerData = payload;
    });
    builder.addCase(getFooterDataThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ?? "Something Went Wrong";
    });
    //for Footer
  },
});

export default allFilmDataSlice.reducer;
export const { sendingData } = allFilmDataSlice.actions;
export const gettingDataPage = (state: RootState) =>
  state.allFilmsData.data.mainData;
export const gettingDataPageFooter = (state: RootState) =>
  state.allFilmsData.data.footerData;
export const gettingCurrentPage = (state: RootState) =>
  state.allFilmsData.currentPage;
export const gettingCurrentID = (state: RootState) =>
  state.allFilmsData.currentID;
export const gettingUserData = (state: RootState) =>
  state.allFilmsData.userInfo;
export const gettingGlobal = (state: RootState) => state.allFilmsData;
