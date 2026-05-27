import {
  RCVDATA,
  RCVDATAMAIN,
  SETEACHDATA,
  SETEACHDATAALLDATA,
  TRANSFERINGDATA,
} from "../types/searchingEachTypes";

const initialValues = {
  allFilmsInSearchingNAV: [],
  allFilmsInSearchingMAIN: [],
  searchingResult: [],
  queryName: "",
};

export const searchingEachReducer = (state = initialValues, action) => {
  switch (action.type) {
    case RCVDATA:
      return {
        ...state,
        allFilmsInSearchingNAV: action.payload.allFilmsInSearchingNAV,
        queryName: action.payload.queryName,
      };
    case RCVDATAMAIN:
      const info = action.payload;
      return {
        ...state,
        allFilmsInSearchingMAIN: info.allFilmsInSearchingMAIN,
        queryName: info.queryName,
      };
    case TRANSFERINGDATA:
      return {
        ...state,
        allFilmsInSearchingMAIN: state.allFilmsInSearchingNAV,
      };
    case SETEACHDATA:
      const newww = {
        ...state,
        searchingResult: action.payload,
      };
      return newww;
    case SETEACHDATAALLDATA:
      const newww2 = {
        ...state,
        allFilmsInSearchingMAIN: action.payload,
      };
      return newww2;
    default:
      return state;
  }
};
