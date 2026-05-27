import React from "react";
import { Link } from "react-router-dom";

import styles from "./Error.module.scss";

const Error = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>We cant find that page</p>
      <div>
        <Link to="/" className={styles.button}>
          Go to home
        </Link>
      </div>
    </div>
  );
};

export default Error;
