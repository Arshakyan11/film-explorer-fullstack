import React from "react";
import FilmsBoxLine from "../../components/FilmsBoxLine/FilmsBoxLine";
import { ROUTES } from "../../routes/Routes";
import MovieSliderHomePage from "../../components/MovieSliderHomePage/MovieSliderHomePage.jsx";
import {
  NEW_MOVIES,
  POPULAR_MOVIES,
  RECOMENDED_MOVIES,
} from "../../store/types/paginationTypes.js";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles.homeSection}>
          <MovieSliderHomePage />
          <FilmsBoxLine
            moviesCategory="Popular Movies"
            currentP={1}
            typofMovieSection={ROUTES.POPULARMOVIES}
            dataType="popularMovies"
            requestType={POPULAR_MOVIES}
          />
          <FilmsBoxLine
            moviesCategory="New Movies"
            currentP={2}
            typofMovieSection={ROUTES.NEWMOVIES}
            dataType="newMovies"
            requestType={NEW_MOVIES}
          />
          <FilmsBoxLine
            moviesCategory="Recomended Movies"
            currentP={3}
            typofMovieSection={ROUTES.RECOMENDEDMOVIES}
            dataType="recomendedMovies"
            requestType={RECOMENDED_MOVIES}
            forRecomndOnly={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
