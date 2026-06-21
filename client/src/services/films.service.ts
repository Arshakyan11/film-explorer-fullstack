import { mainInstance } from "./instance";

export const getFilmByWantedPageService = async (pageArg: number = 1) => {
  const res = await mainInstance({
    url: `top_rated?language=en-US&page=${pageArg}`,
  });
  return res.data;
};

export const getFilmTrailerService = async (movieID: number) => {
  const res = await mainInstance({
    url: `${movieID}/videos?language=en-US`,
  });
  return res.data;
};

export const getFilmsForSectionDisplayService = async () => {
  const res = await mainInstance({
    url: `top_rated?language=en-US&page=7`,
  });
  return res.data;
};

export const getFilmsByQueryService = async (query: string) => {
  const res = await mainInstance({
    baseURL: `${import.meta.env.VITE_FILM_SEARCH_URL}/movie?query=${query}&include_adult=false`,
  });
  return res.data;
};
