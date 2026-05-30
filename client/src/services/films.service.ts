import { mainInstance } from "./instance";

export const getFilmByWantedPageService = async (pageArg: number) => {
  const res = await mainInstance({
    url: `top_rated?language=en-US&page=${pageArg ? pageArg : 1}`,
  });
  return res.data;
};
