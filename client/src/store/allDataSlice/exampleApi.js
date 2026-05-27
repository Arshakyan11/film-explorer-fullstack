import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_FILM_MAIN_URL,
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_FILM_TOKEN,
  },
});

export const getDataByWantedPage = createAsyncThunk(
  "allData/getDataByWantedPage",
  async ({ pageRcv, idArgument }, { rejectWithValue }) => {
    try {
      let data = await instance({
        url: `top_rated?language=en-US&page=${pageRcv ? pageRcv : 3}`,
      }).then((res) => res.data.results);
      return {
        data: data,
        currentPage: pageRcv,
        currentID: idArgument ? idArgument : 278,
      };
    } catch (error) {
      return rejectWithValue("Didnt Find");
    }
  },
);
