import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import type { AllPlansResponseType } from "../../types/apiHandlingTypes";
import { getAllPlansThunk, saveNewPlanOfAccountThunk } from "../api/api";
export type PlansSliceType = {
  isLoading: boolean;
  error: null | string;
  plansList: AllPlansResponseType[] | null;
};
const initialState: PlansSliceType = {
  isLoading: false,
  error: null,
  plansList: null,
};

const PlansService = createSlice({
  name: "plans",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get Plans
    builder.addCase(getAllPlansThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllPlansThunk.fulfilled, (state, action) => {
      state.plansList = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getAllPlansThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ?? "Something Went Wrong!!!";
    });
    //save plans
    builder.addCase(saveNewPlanOfAccountThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(saveNewPlanOfAccountThunk.fulfilled, (state) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(saveNewPlanOfAccountThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ?? "Something Went Wrong!!!";
    });
  },
});

export default PlansService.reducer;
export const allPlansInfo = (state: RootState) => state.plans;
