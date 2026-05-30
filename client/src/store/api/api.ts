import axios from "axios";
import { notifyforAdding, notifyforisExisting } from "../../helpers/notifyUser";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFilmByWantedPageService } from "../../services/films.service";
import type {
  GetFilmByWantedPageReqType,
  GetFilmByWantedPageThunkTType,
} from "../../types/apiHandlingTypes";
import { extractErrorMessage } from "../../services/instance";

const instance = axios.create({
  baseURL: import.meta.env.VITE_FILM_MAIN_URL,
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_FILM_TOKEN,
  },
});

export const getFilmByWantedPageThunk = createAsyncThunk<
  GetFilmByWantedPageThunkTType,
  GetFilmByWantedPageReqType,
  {
    rejectValue: string;
  }
>(
  "allFilmsData/getFilmByWantedPageThunk",
  async ({ pageArgument, idArgument }, { rejectWithValue }) => {
    try {
      const res = await getFilmByWantedPageService(pageArgument);
      return {
        data: res.results,
        currentPage: pageArgument,
        currentID: idArgument ?? 278,
      };
    } catch (error) {
      return rejectWithValue(
        extractErrorMessage(error, "Error while getting Film Data"),
      );
    }
  },
);

export const getFooterDataThunk = createAsyncThunk<
  any[],
  number,
  { rejectValue: string }
>(
  "allFilmsData/getFooterDataThunk",
  async (pageArgument, { rejectWithValue }) => {
    try {
      const res = await getFilmByWantedPageService(pageArgument);
      return res.results;
    } catch (error) {
      return rejectWithValue(
        extractErrorMessage(error, "Error while getting Film Data for footer"),
      );
    }
  },
);

export const Axios = {
  getFromFirstPage() {
    return instance({ url: "top_rated?language=en-US&page=7" });
  },
  getDataByWantedPage(pageRcv) {
    return instance({
      url: `top_rated?language=en-US&page=${pageRcv ? pageRcv : 1}`,
    });
  },
  getDataByQuery(querry) {
    return instance({
      baseURL: `https://api.themoviedb.org/3/search/movie?query=${querry}&include_adult=false`,
    });
  },
  getTrailer(movieId) {
    return instance({
      baseURL: `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
    });
  },
};

//local querry Users start
const localInstanceUsers = axios.create({
  baseURL: "http://localhost:8000/users",
});

export const LocalAxios = {
  addUserToLocalPageAndData(dataRcv) {
    return localInstanceUsers({
      method: "POST",
      data: dataRcv,
    });
  },
  checkingLocalData() {
    return localInstanceUsers({ method: "GET" });
  },
  patchingPlans(userId, dataRcv) {
    const object = {
      selectedPlans: dataRcv,
    };
    return localInstanceUsers({
      url: `/${userId}`,
      method: "PATCH",
      data: object,
    });
  },
  patchingWatchList(userId, dataRcv) {
    return localInstanceUsers({
      url: `/${userId}`,
      method: "GET",
    }).then((res) => {
      const previousWatchlist = res.data.watchlist || [];
      const object = {
        watchlist: [...previousWatchlist, dataRcv],
      };
      const isAddeed = previousWatchlist?.every((elm) => elm.id !== dataRcv.id);
      if (isAddeed) {
        notifyforAdding();
        return localInstanceUsers({
          url: `/${userId}`,
          method: "PATCH",
          data: object,
        });
      } else {
        notifyforisExisting();
      }
    });
  },
  removingWatchlist(userId, dataRcv) {
    return localInstanceUsers({
      url: `/${userId}`,
      method: "GET",
    }).then((res) => {
      const allWatchlist = res.data.watchlist || [];
      if (allWatchlist) {
        const updatedWatchlist = allWatchlist?.filter(
          (item) => item.id !== dataRcv.id,
        );
        const object = {
          watchlist: updatedWatchlist,
        };
        return localInstanceUsers({
          url: `/${userId}`,
          method: "PATCH",
          data: object,
        });
      }
    });
  },
  changingUserInfo(userId, dataRcv) {
    return localInstanceUsers({
      url: `/${userId}`,
      method: "PUT",
      data: dataRcv,
    });
  },
};

//local querry plans start

const localInstancePlans = axios.create({
  baseURL: "http://localhost:8000/plans",
});

export const LocalAxiosPlans = {
  gettAllPlans() {
    return localInstancePlans({ method: "GET" });
  },
};
