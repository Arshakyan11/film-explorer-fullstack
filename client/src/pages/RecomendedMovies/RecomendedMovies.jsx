import React from "react";
import AllFilmsSorted from "../../components/AllFilmsSorted/AllFilmsSorted";

import styles from "./RecomendedMovies.module.scss";

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
