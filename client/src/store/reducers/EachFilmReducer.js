import { GET_ALLDATA, HAVE_TRAILER } from "../types/EachFilmTypes";

const initialValue = {
  pagee: 1,
  currentID: null,
  eachData: [],
  haveTrailer: null,
};

export const EachFilmReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_ALLDATA:
      const payload = action.payload;
      return {
        ...state,
        currentID: payload.id,
        eachData: payload.data.filter((elm) => elm.id === +payload.id),
        pagee: payload.page ? payload.page : 1,
      };
    case HAVE_TRAILER:
      return {
        ...state,
        haveTrailer: action.payload,
      };
    default:
      return state;
  }
};
