import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import AllFilmDataReducer from "../store/AllFilmDataSlice/AllFilmDataSlice";
import EachFilmReducer from "../store/EachFilmSlice/EachFilmSlice";
import LoginReducer from "../store/LoginSlice/LoginSlice";
import RegistrationReducer from "../store/RegistrationSlice/RegistrationSlice";
import ProfileReducer from "../store/ProfileSlice/ProfileSlice";
import AuthReducer from "../store/AuthSlice/AuthSlice";
import PlansReducer from "../store/PlansSlice/PlansSlice";
import PaginationReducer from "../store/PaginationSlice/PaginationSlice";
const store = configureStore({
  reducer: {
    allFilmsData: AllFilmDataReducer,
    databyPages: EachFilmReducer,
    login: LoginReducer,
    registration: RegistrationReducer,
    profile: ProfileReducer,
    authentication: AuthReducer,
    plans: PlansReducer,
    pagination: PaginationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
