import { Axios } from "../api/api";
import { GET_ALLDATA, HAVE_TRAILER } from "../types/EachFilmTypes";

export const getData = (pageArg, idArg) => {
  return (dispatch) => {
    Axios.getDataByWantedPage(pageArg).then((res) =>
      dispatch({
        type: GET_ALLDATA,
        payload: { data: res.data.results, page: pageArg, id: idArg },
      })
    );
  };
};

export const fetchTrailer = ({ filmId, iframe }) => {
  return async (dispatch) => {
    const res = await Axios.getTrailer(filmId);
    if (res.data.results.length == 0) {
      dispatch({ type: HAVE_TRAILER, payload: false });
    } else {
      dispatch({ type: HAVE_TRAILER, payload: true });
    }
    await res.data.results.forEach((elm) => {
      iframe?.current?.setAttribute(
        "src",
        `https://www.youtube.com/embed/${elm.key}`
      );
      iframe?.current?.setAttribute("allowFullScreen", true);
    });
  };
};
