import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import AllFilmDataReducer from "../store/AllFilmDataSlice/AllFilmDataSlice";
import EachFilmReducer from "../store/EachFilmSlice/EachFilmSlice";

const store = configureStore({
  reducer: {
    allFilmsData: AllFilmDataReducer,
    databyPages: EachFilmReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const AppDispatch = useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
