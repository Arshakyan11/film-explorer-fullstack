import { combineReducers } from "redux";
import paginationReducer from "./paginationReducer";
import { EachFilmReducer } from "./EachFilmReducer";
import allDataReducer from "../AllFilmDataSlice/AllFilmDataSlice.ts";
import { registrationReducer } from "./registrationReducer";
import { loginReducer } from "./loginReducer";
import { plansReducer } from "./plansReducer";
import { profileReducer } from "./profileReducer";
import { watchlistReducer } from "./watchlistReducer";
import { searchingEachReducer } from "./searchingEachReducer";

const reducers = combineReducers({
  pagination: paginationReducer,
  databyPages: EachFilmReducer,
  allFilmsData: allDataReducer,
  registration: registrationReducer,
  login: loginReducer,
  plans: plansReducer,
  profile: profileReducer,
  watchlist: watchlistReducer,
  searchingEach: searchingEachReducer,
});
export default reducers;
