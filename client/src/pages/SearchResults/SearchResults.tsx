import { useEffect } from "react";
import { Link } from "react-router-dom";
import { filmNotFound, star } from "../../components/Images";
import { ROUTES } from "../../routes/Routes";

import styles from "./SearchResults.module.scss";
import {
  getHaveTrailerBollean,
  getTrailerKey,
} from "../../store/EachFilmSlice/EachFilmSlice";
import { fetchTrailerThunk } from "../../store/api/api";
import { setingSearchResult } from "../../store/SearchingEachSlice/SearchingEachSlice";
import { useAppDispatch, useAppSelector } from "../../app/store";

const SearchResults = () => {
  const dispatch = useAppDispatch();
  const strData = localStorage.getItem("searchResult");
  if (!strData) return null;
  const selectedMovie = JSON.parse(strData);
  const haveTrailer = useAppSelector(getHaveTrailerBollean);
  const trailerKey = useAppSelector(getTrailerKey);
  useEffect(() => {
    dispatch(setingSearchResult(selectedMovie));
    dispatch(fetchTrailerThunk(selectedMovie.id));
  }, [haveTrailer, selectedMovie.id]);
  return (
    <section>
      <div className={styles.eachFilmSection}>
        <div key={selectedMovie.id} className={styles.eachFilmSection_data}>
          <div className={styles.eachBox_left}>
            <div className={styles.eachBoxMainLeft}>
              <img
                className={styles.img1}
                src={
                  selectedMovie.poster_path
                    ? `https://image.tmdb.org/t/p/w185/${selectedMovie.poster_path}`
                    : filmNotFound
                }
                alt="film"
              />
              <div className={styles.oneLine}>
                <div className={styles.left_Title}>
                  <span>Title:</span>
                  <h3>{selectedMovie.original_title}</h3>
                </div>
                <p className={styles.right_language}>
                  <span>Lang:</span>
                  {selectedMovie.original_language}
                </p>
                <p className={styles.right_release}>
                  <span>Release:</span>
                  {selectedMovie.release_date}
                </p>
                <p className={styles.right_popularity}>
                  <span>Popularity:</span>
                  {selectedMovie.popularity.toFixed(2)}
                </p>
                <div className={styles.filmsLineSection_eachBox_info_starBox}>
                  <span>Rating:</span>
                  <div className={styles.starBox_bottom}>
                    <h4>{selectedMovie.vote_average.toFixed(2)}/10</h4>
                    <img className={styles.starImg} src={star} alt="starLogo" />
                  </div>
                </div>
              </div>
            </div>
            <p className={styles.right_overview}>{selectedMovie.overview}</p>
          </div>

          <div className={styles.eachBox_right}>
            {haveTrailer ? (
              <iframe
                className={styles.iframe}
                src={`https://www.youtube.com/embed/${trailerKey}`}
                title="trailer"
                allowFullScreen
              ></iframe>
            ) : (
              ""
            )}
            <p className={styles.right_overview}>{selectedMovie.overview}</p>

            <p className={styles.right_voteCount}>
              <span>Voting Count:</span>
              {selectedMovie.vote_count} times
            </p>
          </div>
        </div>
        <Link className={styles.link2} to={ROUTES.HOME}>
          GO TO HOME
        </Link>
        <Link className={styles.link1} to={`/${ROUTES.SEARCHING}`}>
          EXPLORE RELATED FILMS
        </Link>
      </div>
    </section>
  );
};

export default SearchResults;
