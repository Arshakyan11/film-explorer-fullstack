import React, { useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { star } from "../Images";
import { ROUTES } from "../../routes/Routes";
import { useDispatch, useSelector } from "react-redux";

import styles from "./EachFilmSection.module.scss";
import { fetchTrailerThunk, getOneMovieThunk } from "../../store/api/api";
import {
  getHaveTrailerBollean,
  gettDataAllofPage,
  getTrailerKey,
} from "../../store/EachFilmSlice/EachFilmSlice";

const EachFilmSection = () => {
  const { page, id } = useParams();
  const { eachData } = useSelector(gettDataAllofPage);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const haveTrailer = useSelector(getHaveTrailerBollean);
  const trailerKey = useSelector(getTrailerKey);
  useEffect(() => {
    if (!Number.isNaN(Number(page)) && !Number.isNaN(Number(id))) {
      dispatch(
        getOneMovieThunk({
          pageArgument: Number(page),
          idArgument: Number(id),
        }),
      );
      dispatch(fetchTrailerThunk(id));
    } else {
      navigate(`${ROUTES.ERROR}`);
    }
  }, [haveTrailer]);

  return (
    <section>
      <div className={styles.eachFilmSection}>
        {eachData?.map((elm) => {
          return (
            <div key={elm.id} className={styles.eachFilmSection_data}>
              <div className={styles.eachBox_left}>
                <div className={styles.eachBoxMainLeft}>
                  <img
                    className={styles.img1}
                    src={`https://image.tmdb.org/t/p/w185/${elm.poster_path}`}
                    alt="film"
                  />
                  <div className={styles.oneLine}>
                    <div className={styles.left_Title}>
                      <span>Title:</span>
                      <h3>{elm.original_title}</h3>
                    </div>
                    <p className={styles.right_language}>
                      <span>Lang:</span>
                      {elm.original_language}
                    </p>
                    <p className={styles.right_release}>
                      <span>Release:</span>
                      {elm.release_date}
                    </p>
                    <p className={styles.right_popularity}>
                      <span>Popularity:</span>
                      {elm.popularity.toFixed(2)}
                    </p>
                    <div
                      className={styles.filmsLineSection_eachBox_info_starBox}
                    >
                      <span>Rating:</span>
                      <div className={styles.starBox_bottom}>
                        <h4>{elm.vote_average.toFixed(2)}/10</h4>
                        <img
                          className={styles.starImg}
                          src={star}
                          alt="starLogo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <p className={styles.right_overview}>{elm.overview}</p>
              </div>

              <div className={styles.eachBox_right}>
                {haveTrailer ? (
                  <iframe
                    className={styles.iframe}
                    title="trailer"
                    src={`https://www.youtube.com/embed/${trailerKey}`}
                    allowFullScreen
                  ></iframe>
                ) : (
                  ""
                )}
                <p className={styles.right_overview}>{elm.overview}</p>

                <p className={styles.right_voteCount}>
                  <span>Voting Count:</span>
                  {elm.vote_count} times
                </p>
              </div>
            </div>
          );
        })}
        <Link to={ROUTES.HOME}>GO TO HOME</Link>
      </div>
    </section>
  );
};

export default EachFilmSection;
