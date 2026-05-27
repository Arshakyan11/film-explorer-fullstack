import { createSlice } from "@reduxjs/toolkit";
import { getDataByWantedPage } from "../api/api";

const allDataSlice = createSlice({
  name: "allData",
  initialState: {
    userInfo: [],
    data: {
      mainData: [],
      footerData: [],
    },
    currentPage: 1,
    currentID: 278,
  },
  reducers: {
    sendingData(state, action) {
      state.userInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDataByWantedPage.fulfilled, (state, action) => {
      const payload = action.payload;
      state.data.mainData = payload.data;
      state.currentPage = payload.currentPage;
      state.currentID = payload.currentID;
    });
  },

  selectors: {
    gettingDataPage: (state) => state.data.mainData,
    gettingDataPageFooter: (state) => state.data.footerData,
    gettingCurrentPage: (state) => state.currentPage,
    gettingCurrentID: (state) => state.currentID,
    gettingUserData: (state) => state.userInfo,
    gettingGlobal: (state) => state.allData,
  },
});
export const { sendingData } = allDataSlice.actions;
export const { gettingDataPage, gettingCurrentPage, gettingUserData } =
  allDataSlice.selectors;
export default allDataSlice.reducer;
