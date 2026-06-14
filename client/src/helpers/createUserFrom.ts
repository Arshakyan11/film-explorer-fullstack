import type {
  FormHelpers,
  RegisterUserType,
  ResetPasswordSendingType,
  SignInUserSendingType,
} from "../types/formTypes";
import type { AppDispatch } from "../app/store";
import type { NavigateFunction } from "react-router-dom";
import { useAsyncAction } from "../hooks/useAsyncAction";
import {
  loginUserThunk,
  registerUserThunk,
  resetPasswordThunk,
} from "../store/api/api";
import { ROUTES } from "../routes/Routes";
import { setUserInfo } from "../store/AuthSlice/AuthSlice";

const run = useAsyncAction();
export const createUserData = async (
  event: RegisterUserType,
  formik: FormHelpers,
  dispatch: AppDispatch,
  navigate: NavigateFunction,
) => {
  const result = await run({
    action: () => dispatch(registerUserThunk(event)).unwrap(),
    successMessage: (res) => res,
  });
  if (result) {
    navigate(`/${ROUTES.LOGIN}`, {
      state: { successType: "registration" },
    });
  }
  formik.resetForm();
};

export const loginUserHelper = async (
  data: SignInUserSendingType,
  dispatch: AppDispatch,
  navigate: NavigateFunction,
) => {
  const result = await run({
    action: () => dispatch(loginUserThunk(data)).unwrap(),
    successMessage: () => "You are logged in",
  });
  if (result) {
    localStorage.setItem("userInfo", JSON.stringify(result.user));
    localStorage.setItem("idToken", result.token);
    dispatch(setUserInfo(result.user));
    navigate("/");
  }
};

export const editiingProfileInfo = async (
  event: ResetPasswordSendingType,
  form: FormHelpers,
  dispatch: AppDispatch,
) => {
  await run({
    action: () => dispatch(resetPasswordThunk(event)).unwrap(),
    successMessage: (res) => res.message,
  });
  form.resetForm();
};
