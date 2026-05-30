import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

const initialState = {
  data: [],
  initialValues: { personName: "", password: "" },
  isExisting: true,
  isHiden: true,
};
export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default LoginSlice.reducer;
export const loginGlobal = (state : RootState) => state.login;
