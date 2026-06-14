import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import AllFilmDataReducer from "../store/AllFilmDataSlice/AllFilmDataSlice";
import EachFilmReducer from "../store/EachFilmSlice/EachFilmSlice";
import LoginReducer from "../store/LoginSlice/LoginSlice";
const store = configureStore({
  reducer: {
    allFilmsData: AllFilmDataReducer,
    databyPages: EachFilmReducer,
    login: LoginReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
