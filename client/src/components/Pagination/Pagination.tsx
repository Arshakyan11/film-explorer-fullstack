import "./Pagination.scss";
import { useAppDispatch } from "../../app/store";
import { getFilmByWantedPageThunk } from "../../store/api/api";

const Pagination = ({ currentPage, idByPages = 1 }) => {
  const pages = Array.from({ length: 10 }, (_, i) => i + idByPages);
  const dispatch = useAppDispatch();
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
              getFilmByWantedPageThunk({
                pageArgument: elm,
              }),
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
            getFilmByWantedPageThunk({
              pageArgument: currentPage + 1,
            }),
          )
        }
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
