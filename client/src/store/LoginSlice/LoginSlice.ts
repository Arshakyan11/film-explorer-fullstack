import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import type {
  SignInDataRecievingType,
  SignInUserSendingType,
} from "../../types/formTypes";
import { loginUserThunk } from "../api/api";

export type LoginSliceType = {
  userInfo: SignInDataRecievingType | null;
  initialValues: SignInUserSendingType;
  isHiden: boolean;
  isLoading: boolean;
  error: string | null;
};

const initialState: LoginSliceType = {
  userInfo: null,
  initialValues: { email: "", password: "" },
  isHiden: true,
  isLoading: false,
  error: null,
};
export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogVisiblePass: (state, action: PayloadAction<boolean>) => {
      state.isHiden = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUserThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(loginUserThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.userInfo = action.payload;
    });
    builder.addCase(loginUserThunk.rejected, (state, action) => {
      state.isLoading = false;
      // state.error = action.payload ?? "Something Went Wrong!";
    });
  },
});

export default LoginSlice.reducer;
export const { setLogVisiblePass } = LoginSlice.actions;
export const loginGlobal = (state: RootState) => state.login;
