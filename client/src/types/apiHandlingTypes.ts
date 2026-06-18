export type GetFilmByWantedPageThunkType = {
  data: any[];
  currentPage: number;
  currentID: number;
};

export type GetFilmByWantedPageReqType = {
  pageArgument: number;
  idArgument?: number;
};

export type GetFilmsForSectionResponseType = {
  films: any[];
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

export type AllPlansResponseType = {
  id: string;
  name: string;
  price: number;
};

export type SavePlanOfTheAccountResType = {
  subscriptionId: string;
};

export type AddItemToWatchlistReqType = {
  movieId: string;
  title: string;
  img: string;
  page: number;
};
