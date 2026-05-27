import {
  NEW_MOVIES,
  POPULAR_MOVIES,
  RECOMENDED_MOVIES,
} from "../types/paginationTypes";

const initialState = {
  postsPerPage: 0,
  currentPage: 0,
  data: {
    popularMovies: [],
    newMovies: [],
    recomendedMovies: [],
  },
  firstIndex: 0,
};

const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULAR_MOVIES:
      const popularPayload = action.payload;
      const data = {
        ...state,
        firstIndex: popularPayload.lastIndex - popularPayload.postsPerPage,
      };
      return {
        ...state,
        data: {
          ...state.data,
          popularMovies: popularPayload.data.slice(
            data.firstIndex,
            popularPayload.lastIndex
          ),
        },
      };
    case RECOMENDED_MOVIES:
      const recomendedPayload = action.payload;
      const recomendedDataPayload = {
        ...state,
        firstIndex:
          recomendedPayload.lastIndex - recomendedPayload.postsPerPage,
      };
      return {
        ...state,
        data: {
          ...state.data,
          recomendedMovies: recomendedPayload.data.slice(
            recomendedDataPayload.firstIndex,
            recomendedPayload.lastIndex
          ),
        },
      };
    case NEW_MOVIES:
      const newMoviePayload = action.payload;
      const newMovieDataPayloadd = {
        ...state,
        firstIndex: newMoviePayload.lastIndex - newMoviePayload.postsPerPage,
      };
      return {
        ...state,
        data: {
          ...state.data,
          newMovies: newMoviePayload.data.slice(
            newMovieDataPayloadd.firstIndex,
            newMoviePayload.lastIndex
          ),
        },
      };
    default:
      return state;
  }
};

export default paginationReducer;
