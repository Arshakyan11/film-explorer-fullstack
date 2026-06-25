import { Link } from "react-router-dom";
import { star } from "../Images";
import { ROUTES } from "../../routes/Routes";

import styles from "./FilmsBoxLine.module.scss";
import { getFilmByWantedPageThunk } from "../../store/api/api";
import { isTokenValid } from "../../helpers/checkToken";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { getAllPaginationInfo } from "../../store/PaginationSlice/PaginationSlice";
import { addItemTotheWatchlistHelper } from "../../helpers/createUserFrom";
import type { MoviesCategoryType, MoviesDataType } from "../../types/dataTypes";

interface FilmsBoxLine {
  moviesCategory: MoviesCategoryType;
  forMoviesOnly?: boolean;
  typofMovieSection: string;
  dataType: MoviesDataType;
  forRecomndOnly?: boolean;
}

const FilmsBoxLine = ({
  moviesCategory,
  forMoviesOnly,
  typofMovieSection,
  dataType,
  forRecomndOnly,
}: FilmsBoxLine) => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector(getAllPaginationInfo);
  const isLogged = isTokenValid();
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
              <div key={elm.id} className={styles.filmsLineSection_eachBox}>
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
                    onClick={() =>
                      forMoviesOnly &&
                      dispatch(
                        getFilmByWantedPageThunk({
                          pageArgument: 31,
                          idArgument: elm.id,
                        }),
                      )
                    }
                  >
                    See More
                  </Link>
                  {isLogged ? (
                    <button
                      onClick={() => addItemTotheWatchlistHelper(elm, dispatch)}
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
