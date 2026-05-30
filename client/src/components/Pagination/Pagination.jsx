import React from "react";
import { useDispatch } from "react-redux";
import "./Pagination.scss";

const Pagination = ({ currentPage, idByPages = 1 }) => {
  const pages = Array.from({ length: 10 }, (_, i) => i + idByPages);
  const dispatch = useDispatch();
  return (
    <div className="btns">
      <button
        className="arrows"
        disabled={currentPage === idByPages}
        onClick={() =>
          dispatch(
            getFilmByWantedPageThunk({
              pageArgument: currentPage - 1,
            }),
          )
        }
      >
        {"<"}
      </button>
      {pages.map((elm, index) => (
        <button
          key={elm}
          className={currentPage - idByPages + 1 === index + 1 ? "active" : ""}
          onClick={() =>
            dispatch(
              dispatch(
                getFilmByWantedPageThunk({
                  pageArgument: elm,
                }),
              ),
            )
          }
        >
          {index + 1}
        </button>
      ))}
      <button
        className="arrows"
        disabled={currentPage === idByPages + 9}
        onClick={() =>
          dispatch(
            dispatch(
              getFilmByWantedPageThunk({
                pageArgument: currentPage + 1,
              }),
            ),
          )
        }
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
