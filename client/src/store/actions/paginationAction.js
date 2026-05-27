import { Axios } from "../api/api";
export const paginationGetting = (type, posts, page) => {
  return async (dispatch) => {
    Axios.getFromFirstPage().then((res) => {
      dispatch({
        type: type,
        payload: {
          data: res.data.results,
          postsPerPage: posts,
          currentPage: page,
          lastIndex: posts * page,
        },
      });
    });
  };
};
