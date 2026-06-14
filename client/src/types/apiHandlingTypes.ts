export type GetFilmByWantedPageThunkType = {
  data: any[];
  currentPage: number;
  currentID: number;
};

export type GetFilmByWantedPageReqType = {
  pageArgument: number;
  idArgument?: number;
};

export type GetOneMovieThunkType = {
  data: any[];
  page: number;
  id: number;
};
export type GetOneMovieReqType = {
  pageArgument: number;
  idArgument: number;
};

export type TrailerResponseType = {
  hasTrailer: boolean;
  trailerKey: string | null;
};
