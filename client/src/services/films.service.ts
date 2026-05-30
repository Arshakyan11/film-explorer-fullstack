import { mainInstance } from "./instance";

export const getFilmByWantedPageService = async (pageArg: number) => {
  const res = await mainInstance({
    url: `top_rated?language=en-US&page=${pageArg ? pageArg : 1}`,
  });
  return res.data;
};

export const getFilmTrailerService = async (movieID: number) => {
  const res = await mainInstance({
    baseURL: `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,
  }); 
  return res.data;
};
