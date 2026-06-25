import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getFilmByWantedPageService,
  getFilmsByQueryService,
  getFilmsForSectionDisplayService,
  getFilmTrailerService,
} from "../../services/films.service";
import type {
  AddItemToWatchlistReqType,
  AllPlansResponseType,
  GetFilmByWantedPageReqType,
  GetFilmByWantedPageThunkType,
  GetOneMovieReqType,
  GetOneMovieThunkType,
  SavePlanOfTheAccountResType,
  TrailerResponseType,
} from "../../types/apiHandlingTypes";
import { extractErrorMessage } from "../../services/instance";
import {
  getUserInfoService,
  loginService,
  registerService,
  resetPasswordService,
} from "../../services/auth.service";
import type {
  RegisterUserSendingType,
  ResetPasswordSendingType,
  SignInDataRecievingType,
  SignInUserInfoType,
  SignInUserSendingType,
} from "../../types/formTypes";
import {
  getAllPlansService,
  saveNewPlanOfAccountService,
} from "../../services/plans.service";
import {
  addItemtoWatchlistService,
  getWatchlistService,
  removeItemOfWatchlistService,
} from "../../services/watchlist.service";
import type { MovieType, WatchlistItemType } from "../../types/dataTypes";

export const getFilmByWantedPageThunk = createAsyncThunk<
  GetFilmByWantedPageThunkType,
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
  MovieType[],
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

export const getOneMovieThunk = createAsyncThunk<
  GetOneMovieThunkType,
  GetOneMovieReqType,
  {
    rejectValue: string;
  }
>(
  "databyPages/getOneMovieThunk",
  async ({ pageArgument, idArgument }, { rejectWithValue }) => {
    try {
      const res = await getFilmByWantedPageService(pageArgument);
      return {
        data: res.results,
        page: pageArgument,
        id: idArgument,
      };
    } catch (error) {
      return rejectWithValue(
        extractErrorMessage(
          error,
          "Error while getting Film Data for seperate page",
        ),
      );
    }
  },
);

export const fetchTrailerThunk = createAsyncThunk<
  TrailerResponseType,
  number,
  { rejectValue: string }
>("databyPages/fetchTrailerThunk", async (filmId, { rejectWithValue }) => {
  try {
    const res = await getFilmTrailerService(filmId);
    if (!res.results.length) {
      return {
        hasTrailer: false,
        trailerKey: null,
      };
    }
    return {
      hasTrailer: true,
      trailerKey: res.results[0].key,
    };
  } catch (error) {
    return rejectWithValue(
      extractErrorMessage(error, "Error while getting trailer"),
    );
  }
});

export const loginUserThunk = createAsyncThunk<
  SignInDataRecievingType,
  SignInUserSendingType,
  { rejectValue: string }
>("login/loginUserThunk", async (data, { rejectWithValue }) => {
  try {
    const res = await loginService(data);
    return res;
  } catch (error: any) {
    if (!error.response) {
      return rejectWithValue(
        "Server is waking up, please wait a few seconds and try again.",
      );
    }
    return rejectWithValue(extractErrorMessage(error, "Error while login"));
  }
});

export const registerUserThunk = createAsyncThunk<
  string,
  RegisterUserSendingType,
  { rejectValue: string }
>("registration/registerUserThunk", async (data, { rejectWithValue }) => {
  try {
    await registerService(data);
    return "Account Registered Successfuly";
  } catch (error: any) {
    if (!error.response) {
      return rejectWithValue(
        "Server is waking up, please wait a few seconds and try again.",
      );
    }
    return rejectWithValue(
      extractErrorMessage(error, "Error while registration"),
    );
  }
});

export const resetPasswordThunk = createAsyncThunk<
  { message: string },
  ResetPasswordSendingType,
  { rejectValue: string }
>("profile/resetPasswordThunk", async (data, { rejectWithValue }) => {
  try {
    const res = await resetPasswordService(data);
    return res;
  } catch (error) {
    return rejectWithValue(
      extractErrorMessage(error, "Error while reseting password"),
    );
  }
});

export const getAllPlansThunk = createAsyncThunk<
  AllPlansResponseType[],
  void,
  { rejectValue: string }
>("plans/getAllPLansThunk", async (_, { rejectWithValue }) => {
  try {
    const res = await getAllPlansService();
    return res;
  } catch (error) {
    return rejectWithValue(
      extractErrorMessage(error, "Error while getting plans"),
    );
  }
});

export const saveNewPlanOfAccountThunk = createAsyncThunk<
  { message: string },
  SavePlanOfTheAccountResType,
  { rejectValue: string }
>("plans/saveNewPlanOfAccountThunk", async (data, { rejectWithValue }) => {
  try {
    const res = await saveNewPlanOfAccountService(data);
    return res;
  } catch (error) {
    return rejectWithValue(
      extractErrorMessage(error, "Error while saving plan"),
    );
  }
});

export const getCurretUserInfoThunk = createAsyncThunk<
  SignInUserInfoType,
  void,
  { rejectValue: string }
>("authentication/getCurretUserInfoThunk", async (_, { rejectWithValue }) => {
  try {
    const res = await getUserInfoService();
    return res;
  } catch (error) {
    return rejectWithValue(
      extractErrorMessage(error, "Error while getting trailer"),
    );
  }
});

export const getFilmsForSectionDisplayThunk = createAsyncThunk<
  MovieType[],
  void,
  { rejectValue: string }
>(
  "pagination/getFilmsForSectionDisplayThunk",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getFilmsForSectionDisplayService();
      return res.results;
    } catch (error) {
      return rejectWithValue(
        extractErrorMessage(error, "Error while getting films for sections"),
      );
    }
  },
);

export const getWatchlistThunk = createAsyncThunk<
  WatchlistItemType[],
  void,
  { rejectValue: string }
>("watchlist/getWatchlistThunk", async (_, { rejectWithValue }) => {
  try {
    const res = await getWatchlistService();
    return res;
  } catch (error) {
    return rejectWithValue(
      extractErrorMessage(error, "Error while getting watchlist"),
    );
  }
});

export const addItemtoWatchlistThunk = createAsyncThunk<
  { message: string },
  AddItemToWatchlistReqType,
  { rejectValue: string }
>("watchlist/addItemtoWatchlistThunk", async (data, { rejectWithValue }) => {
  try {
    const res = await addItemtoWatchlistService(data);
    return res;
  } catch (error) {
    return rejectWithValue(
      extractErrorMessage(error, "Error while adding watchlist"),
    );
  }
});

export const removeItemOfWatchlistThunk = createAsyncThunk<
  { message: string; movieId: number },
  string,
  { rejectValue: string }
>(
  "watchlist/removeItemOfWatchlistThunk",
  async (movieId, { rejectWithValue }) => {
    try {
      const res = await removeItemOfWatchlistService(movieId);
      return res;
    } catch (error) {
      return rejectWithValue(
        extractErrorMessage(error, "Error while adding watchlist"),
      );
    }
  },
);

export const getFilmsByQueryThunk = createAsyncThunk<
  {
    queryName: string;
    films: MovieType[];
    searchType: "navigationSearch" | "mainSearch";
  },
  {
    query: string;
    searchType: "navigationSearch" | "mainSearch";
  },
  { rejectValue: string }
>("searchingEach/getFilmsByQueryThunk", async (data, { rejectWithValue }) => {
  try {
    const res = await getFilmsByQueryService(data.query);
    return {
      queryName: data.query,
      films: res.results,
      searchType: data.searchType,
    };
  } catch (error) {
    return rejectWithValue(
      extractErrorMessage(error, "Error while searching films"),
    );
  }
});
