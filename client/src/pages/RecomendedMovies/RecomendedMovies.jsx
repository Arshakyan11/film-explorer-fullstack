import React from "react";

import styles from "./RecomendedMovies.module.scss";
import AllFilmsSorted from "../../components/AllFilmsSorted/AllFilmsSorted";

const RecomendedMovies = () => {
  return (
    <section className={styles.reccomendedM}>
      <div className={styles.container}>
        <div className={styles.RecomendedMoviesSection}>
          <AllFilmsSorted idByPagesMovies={11} />
        </div>
      </div>
    </section>
  );
};

export default RecomendedMovies;
