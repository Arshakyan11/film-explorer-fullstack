import React, { useEffect } from "react";
import "./App.scss";
import CubicBlazer from "./components/CubicBlazer/CubicBlazer";
import { useDispatch, useSelector } from "react-redux";
import {
  gettingCurrentPage,
  gettingDataPage,
  gettingUserData,
  sendingData,
} from "./Store/allDataSlice/allDataSlice";
import { getDataByWantedPage } from "./Store/api/api";
const App = () => {
  const dispatch = useDispatch();
  const data = useSelector(gettingDataPage);
  const currentPage = useSelector(gettingCurrentPage);
  useEffect(() => {
    dispatch(getDataByWantedPage({ pageRcv: 3 }));
    dispatch(
      sendingData({
        name: "Ero",
        lastname: "Arshakyan",
        age: 33,
      })
    );
  }, []);

  return <div></div>;
};

export default App;
