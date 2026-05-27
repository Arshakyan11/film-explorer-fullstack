import React, { useEffect } from "react";
import FilmsBoxLine from "../../components/FilmsBoxLine/FilmsBoxLine";
import { ROUTES } from "../../routes/Routes";
import {
  NEW_MOVIES,
  POPULAR_MOVIES,
  RECOMENDED_MOVIES,
} from "../../store/types/paginationTypes";
import { useDispatch, useSelector } from "react-redux";
import { gettingGlobal } from "../../store/selectors/allDataSelector";
import { gettingAllDataOnly } from "../../store/actions/allDataAction";

import styles from "./Movies.module.scss";

const Movies = () => {
  let forMoviesOnly = true;
  const dispatch = useDispatch();
  let { data, currentID } = useSelector(gettingGlobal);
  data = data.mainData;
  useEffect(() => {
    dispatch(gettingAllDataOnly(7, 11324));
  }, []);

  return (
    <section className={styles.movieS}>
      <div className={styles.container}>
        <div className={styles.movieSection}>
          <div className={styles.movieBox}>
            {data
              .filter((elm) => elm.id === currentID)
              .map((item) => {
                return (
                  <div key={item.id} className={styles.movieSection_info}>
                    <div className={styles.movieSection_info_text}>
                      <h2>{item.original_title}</h2>
                      <p>{item.overview}</p>
                    </div>
                    <img
                      src={`https://image.tmdb.org/t/p/w185/${item.backdrop_path}`}
                      alt="film"
                    />
                  </div>
                );
              })}
          </div>
          <div className={styles.movieSection_filmsBox}>
            <FilmsBoxLine
              moviesCategory="Popular Movies"
              currentP={1}
              forMoviesOnly={forMoviesOnly}
              typofMovieSection={`/${ROUTES.POPULARMOVIES}`}
              dataType="popularMovies"
              requestType={POPULAR_MOVIES}
            />
            <FilmsBoxLine
              moviesCategory="New Movies"
              currentP={2}
              forMoviesOnly={forMoviesOnly}
              typofMovieSection={`/${ROUTES.NEWMOVIES}`}
              dataType="newMovies"
              requestType={NEW_MOVIES}
            />
            <FilmsBoxLine
              moviesCategory="Recomended Movies"
              currentP={3}
              forMoviesOnly={forMoviesOnly}
              typofMovieSection={`/${ROUTES.RECOMENDEDMOVIES}`}
              dataType="recomendedMovies"
              requestType={RECOMENDED_MOVIES}
              forRecomndOnly={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movies;
