import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { registerUserThunk } from "../api/api";

export type RegistrationSliceType = {
  isLoading: boolean;
  error: null | string;
  isHiden: boolean;
  initialValues: {
    username: string;
    phone: string;
    email: string;
    password: string;
    passwordRepeat: string;
  };
};
const initialState: RegistrationSliceType = {
  isLoading: false,
  error: null,
  isHiden: true,
  initialValues: {
    username: "",
    phone: "",
    email: "",
    password: "",
    passwordRepeat: "",
  },
};

export const RegistrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    seeHidenPasswordOnReg(state, action) {
      state.isHiden = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUserThunk.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(registerUserThunk.fulfilled, (state) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(registerUserThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ?? "Something Went Wrong!!!";
    });
  },
});

export default RegistrationSlice.reducer;
export const getAllRegInfo = (state: RootState) => state.registration;
export const { seeHidenPasswordOnReg } = RegistrationSlice.actions;
