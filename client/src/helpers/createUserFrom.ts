import { nanoid } from "nanoid";
import type { SignInUserSendingType } from "../types/formTypes";
import type { AppDispatch } from "../app/store";
import type { NavigateFunction } from "react-router-dom";
import { useAsyncAction } from "../hooks/useAsyncAction";
import { loginUserThunk } from "../store/api/api";

export const createUserFromRegistration = (evemt) => {
  const { personName, phone, email, password } = evemt;
  return {
    id: nanoid(3),
    username: personName,
    phone: phone,
    email: email,
    password: password,
    watchlist: [],
  };
};

const run = useAsyncAction();
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
    // dispatch(setUserInfo(result.user));
    navigate("/");
  }
};

export const editiingProfileInfo = (event, userData) => {
  const { emailInput, passwordInput } = event;
  return {
    ...userData,
    email: emailInput,
    password: passwordInput,
  };
};
