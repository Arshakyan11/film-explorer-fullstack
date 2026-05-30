export type GetFilmByWantedPageThunkTType = {
  data: [];
  currentPage: number;
  currentID: number;
};

export type GetFilmByWantedPageReqType = {
  pageArgument: number;
  idArgument?: number;
};
