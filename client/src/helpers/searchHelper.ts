import type { AppDispatch } from "../app/store";
import { getFilmsByQueryThunk } from "../store/api/api";
import type { Dispatch, SetStateAction } from "react";

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
export const HandleSearch = (
  arg: string,
  dispatch: AppDispatch,
  setIsOpenSearchResult?: Dispatch<SetStateAction<boolean>>,
) => {
  const isAllowed = arg.length >= 2 && !bannedWords.includes(arg);
  dispatch(
    getFilmsByQueryThunk({
      query: isAllowed ? arg : "",
      searchType: "navigationSearch",
    }),
  ).then(() => {
    setIsOpenSearchResult?.(true);
  });
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
