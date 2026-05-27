import React from "react";
import AllFilmsSorted from "../../components/AllFilmsSorted/AllFilmsSorted";

import styles from "./PopularMovies.module.scss";

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
