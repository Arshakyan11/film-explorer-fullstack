import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { star } from "../Images";
import { ROUTES } from "../../routes/Routes";
import { useDispatch, useSelector } from "react-redux";
import { paginationGetting } from "../../store/actions/paginationAction";
import { globalPagination } from "../../store/selectors/paginationSelectors";
import { gettingAllDataOnly } from "../../store/actions/allDataAction";

import styles from "./FilmsBoxLine.module.scss";
import { watchlistAddingToUser } from "../../store/actions/watchlistAction";

const FilmsBoxLine = ({
  moviesCategory,
  currentP,
  forMoviesOnly,
  typofMovieSection,
  requestType,
  dataType,
  forRecomndOnly,
}) => {
  const dispatch = useDispatch();
  const { data } = useSelector(globalPagination);
  const isLogged = JSON.parse(localStorage.getItem("usersInfo"));

  useEffect(() => {
    dispatch(paginationGetting(requestType, 6, currentP));
  }, []);
  return (
    <section>
      <div className={styles.filmsLineSection}>
        <div
          className={`${styles.info} ${
            forRecomndOnly ? styles.forLastSection : ""
          }`}
        >
          <p className={styles.info_text}>{moviesCategory}</p>
          <Link to={typofMovieSection}>View All</Link>
        </div>
        <div className={styles.data}>
          {data[dataType]?.map((elm) => {
            return (
              <div
                key={elm.id}
                className={styles.filmsLineSection_eachBox}
                onClick={() =>
                  forMoviesOnly && dispatch(gettingAllDataOnly(7, elm.id))
                }
              >
                <img
                  src={`https://image.tmdb.org/t/p/w185/${elm.poster_path}`}
                  alt="film"
                />
                <p className={styles.eachBox_languageType}>
                  {elm.original_language}
                </p>
                <div className={styles.filmsLineSection_eachBox_info}>
                  <span>Title:</span>
                  <h3>{elm.original_title}</h3>
                  <div className={styles.filmsLineSection_eachBox_info_starBox}>
                    <span>Rating:</span>
                    <div className={styles.starBox_bottom}>
                      <h4>{elm.vote_average.toFixed(2)}/10</h4>
                      <img className={styles.starImg} src={star} alt="" />
                    </div>
                  </div>
                  <Link
                    className={styles.link1}
                    to={`/${ROUTES.MOVIES}/7/${elm.id}`}
                  >
                    See More
                  </Link>
                  {isLogged ? (
                    <button
                      onClick={() => {
                        dispatch(
                          watchlistAddingToUser(isLogged.id, {
                            page: 7,
                            id: elm.id,
                            title: elm.original_title,
                            img: elm.poster_path,
                          })
                        );
                      }}
                      className={styles.link2}
                    >
                      Add to Watchlist
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FilmsBoxLine;
