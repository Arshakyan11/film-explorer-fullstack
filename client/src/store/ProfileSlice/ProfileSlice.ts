import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { resetPasswordThunk } from "../api/api";

export type ProfileSliceType = {
  isLoading: boolean;
  isHiden: boolean;
  isEditing: boolean;
  error: null | string;
  initialValues: {
    password: string;
    newPassword: string;
    newPasswordRepeat: string;
  };
};
const initialState: ProfileSliceType = {
  isHiden: true,
  isEditing: false,
  isLoading: false,
  error: null,
  initialValues: {
    password: "",
    newPassword: "",
    newPasswordRepeat: "",
  },
};

const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    profilePasswordSee(state, action) {
      state.isHiden = action.payload;
    },
    profileEditing(state, action) {
      state.isEditing = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetPasswordThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(resetPasswordThunk.fulfilled, (state) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(resetPasswordThunk.rejected, (state, actiion) => {
      state.isLoading = false;
      state.error = actiion.payload ?? "Something Went Wrong!!!";
    });
  },
});

export default ProfileSlice.reducer;
export const getAllProfileInfo = (state: RootState) => state.profile;
export const { profilePasswordSee, profileEditing } = ProfileSlice.actions;
