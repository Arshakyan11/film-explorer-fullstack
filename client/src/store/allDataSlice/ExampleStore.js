import { configureStore } from "@reduxjs/toolkit";
import allDataReducer from "./allDataSlice/allDataSlice.js";
const store = configureStore({
  reducer: {
    allData: allDataReducer,
  },
});
export default store;
