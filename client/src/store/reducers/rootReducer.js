import { combineReducers } from "redux";
import paginationReducer from "./paginationReducer";
import EachFilmReducer from "../EachFilmSlice/EachFilmSlice.ts";
import allDataReducer from "../AllFilmDataSlice/AllFilmDataSlice.ts";
import registrationReducer from "../RegistrationSlice/RegistrationSlice.ts";
import loginReducer from "../LoginSlice/LoginSlice.ts";
import plansReducer from "../PlansSlice/PlansSlice.ts";
import profileReducer from "../ProfileSlice/ProfileSlice.ts";
import AuthReducer from "../AuthSlice/AuthSlice.ts";
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
  authentication: AuthReducer,
});
export default reducers;
