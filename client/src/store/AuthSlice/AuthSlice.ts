import { createSlice } from "@reduxjs/toolkit";
import type { SignInUserInfoType } from "../../types/formTypes";
import type { RootState } from "../../app/store";
import { getCurretUserInfoThunk } from "../api/api";
import { getLocalUserStrict } from "../../helpers/localStorage";

interface AuthSLiceType {
  userInfo: SignInUserInfoType | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthSLiceType = {
  userInfo: getLocalUserStrict(),
  isLoading: false,
  error: null,
};

const AuthSLice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurretUserInfoThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getCurretUserInfoThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.userInfo = action.payload;
    });
    builder.addCase(getCurretUserInfoThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ?? "Something Went Wrong!";
    });
  },
});

export default AuthSLice.reducer;
export const { setUserInfo } = AuthSLice.actions;
export const getUserInfo = (state: RootState) => state.authentication;
