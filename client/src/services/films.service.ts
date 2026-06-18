import { mainInstance } from "./instance";

export const getFilmByWantedPageService = async (pageArg: number = 1) => {
  const res = await mainInstance({
    url: `top_rated?language=en-US&page=${pageArg}`,
  });
  return res.data;
};

export const getFilmTrailerService = async (movieID: number) => {
  const res = await mainInstance({
    baseURL: `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,
  });
  return res.data;
};

export const getFilmsForSectionDisplayService = async () => {
  const res = await mainInstance({
    url: `top_rated?language=en-US&page=7`,
  });
  return res.data;
};
