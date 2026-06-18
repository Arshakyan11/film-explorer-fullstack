import React, { useEffect } from "react";
import { ROUTES } from "../../routes/Routes";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Movies.module.scss";
import { gettingGlobal } from "../../store/AllFilmDataSlice/AllFilmDataSlice";
import {
  getFilmByWantedPageThunk,
  getFilmsForSectionDisplayThunk,
} from "../../store/api/api";
import FilmsBoxLine from "../../components/FilmsBoxLine/FilmsBoxLine";

const Movies = () => {
  let forMoviesOnly = true;
  const dispatch = useDispatch();
  let { data, currentID } = useSelector(gettingGlobal);
  data = data.mainData;
  useEffect(() => {
    dispatch(
      getFilmByWantedPageThunk({
        pageArgument: 7,
        idArgument: 11324,
      }),
    );
    dispatch(getFilmsForSectionDisplayThunk());
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
              forMoviesOnly={forMoviesOnly}
              typofMovieSection={`/${ROUTES.POPULARMOVIES}`}
              dataType="popularMovies"
            />
            <FilmsBoxLine
              moviesCategory="New Movies"
              forMoviesOnly={forMoviesOnly}
              typofMovieSection={`/${ROUTES.NEWMOVIES}`}
              dataType="newMovies"
            />
            <FilmsBoxLine
              moviesCategory="Recomended Movies"
              forMoviesOnly={forMoviesOnly}
              typofMovieSection={`/${ROUTES.RECOMENDEDMOVIES}`}
              dataType="recomendedMovies"
              forRecomndOnly={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movies;
