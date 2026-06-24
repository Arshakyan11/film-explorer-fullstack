import { useEffect } from "react";
import { ROUTES } from "../../routes/Routes.jsx";
import MovieSliderHomePage from "../../components/MovieSliderHomePage/MovieSliderHomePage.js";
import styles from "./Home.module.scss";
import { useAppDispatch } from "../../app/store.js";
import FilmsBoxLine from "../../components/FilmsBoxLine/FilmsBoxLine.js";
import { getFilmsForSectionDisplayThunk } from "../../store/api/api.js";

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getFilmsForSectionDisplayThunk());
  }, [dispatch]);

  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles.homeSection}>
          <div className={styles.serverInfo}>
            ⚡ Demo Notice: Authentication features use a free Render backend.
            The first login or registration request may take up to 1 minute
            after inactivity.
          </div>
          <MovieSliderHomePage />
          <FilmsBoxLine
            moviesCategory="Popular Movies"
            typofMovieSection={ROUTES.POPULARMOVIES}
            dataType="popularMovies"
          />
          <FilmsBoxLine
            moviesCategory="New Movies"
            typofMovieSection={ROUTES.NEWMOVIES}
            dataType="newMovies"
          />
          <FilmsBoxLine
            moviesCategory="Recomended Movies"
            typofMovieSection={ROUTES.RECOMENDEDMOVIES}
            dataType="recomendedMovies"
            forRecomndOnly={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
