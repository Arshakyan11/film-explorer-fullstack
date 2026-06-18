import React from "react";

import styles from "./PopularMovies.module.scss";
import AllFilmsSorted from "../../components/AllFilmsSorted/AllFilmsSorted";

const PopularMovies = () => {
  return (
    <section className={styles.popularM}>
      <div className={styles.container}>
        <div className={styles.popularMoviesSection}>
          <AllFilmsSorted />
        </div>
      </div>
    </section>
  );
};

export default PopularMovies;
