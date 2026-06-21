import type { AppDispatch } from "../app/store";
import { getFilmsByQueryThunk } from "../store/api/api";

let bannedWords = [
  "sex",
  "sexx",
  "sexxx",
  "sexxxx",
  "porn",
  "porno",
  "pornoo",
  "xx",
  "xxx",
  "xxxx",
  "xxxxx",
  "xxxxxx",
  "xxxxxxx",
  "xxxxxxxx",
];
export const HandleSearch = (arg: string, dispatch: AppDispatch) => {
  const isAllowed = arg.length >= 2 && !bannedWords.includes(arg);
  dispatch(
    getFilmsByQueryThunk({
      query: isAllowed ? arg : "",
      searchType: "navigationSearch",
    }),
  );
};

export const HandleSearchMAIN = (arg: string, dispatch: AppDispatch) => {
  const isAllowed = !bannedWords.includes(arg);
  dispatch(
    getFilmsByQueryThunk({
      query: isAllowed ? arg : "",
      searchType: "mainSearch",
    }),
  );
};
