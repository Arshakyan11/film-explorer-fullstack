import React from "react";
import { poster } from "../../components/Images";

import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.aboutBoxSection}>
          <div className={styles.background}></div>
          <div className={styles.content}>
            <h1 className={styles.about}>About us</h1>
            <p className={styles.text}>
              Welcome to your ultimate destination for entertainment. We bring
              together an extensive collection of movies and games, offering
              something for every fan. From the latest blockbusters and cult
              classics to immersive games across genres, our platform is
              designed to fuel your passion for all things cinematic and
              interactive.
            </p>
            <p className={styles.text}>
              Our mission is to create a space where stories come to
              life—whether you're watching gripping dramas, thrilling
              adventures, or exploring vast game worlds filled with action,
              mystery, and excitement. We celebrate creativity, storytelling,
              and the thrill of discovery, making it easy for you to find new
              favorites and revisit timeless experiences.
            </p>
            <div className={styles.stats}>
              <div>
                <h3>10,000+</h3>
                <p>Movies</p>
              </div>
              <div>
                <h3>5,000+</h3>
                <p>Games</p>
              </div>
            </div>
          </div>
          <div className={styles.images}>
              <img src={poster} alt="Poster" className={styles.poster} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
