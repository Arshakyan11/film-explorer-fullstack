import React from "react";
import AllFilmsSorted from "../../components/AllFilmsSorted/AllFilmsSorted";

import styles from "./NewMovies.module.scss";

const NewMovies = () => {
  return (
    <section className={styles.newM}>
      <div className={styles.container}>
        <div className={styles.newMoviesSection}>
          <AllFilmsSorted idByPagesMovies={21} />
        </div>
      </div>
    </section>
  );
};

export default NewMovies;
