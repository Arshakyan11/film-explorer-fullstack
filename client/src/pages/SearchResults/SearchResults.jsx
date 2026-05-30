import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { filmNotFound, star } from "../../components/Images";
import { ROUTES } from "../../routes/Routes";
import { useDispatch, useSelector } from "react-redux";
import { searchingEachResult } from "../../store/selectors/searchingEachSelector";
import {
  setingSearchResult,
  setingSearchResultALlData,
} from "../../store/actions/searchingEachAction";

import styles from "./SearchResults.module.scss";
import {
  getHaveTrailerBollean,
  getTrailerKey,
} from "../../store/EachFilmSlice/EachFilmSlice";
import { fetchTrailerThunk } from "../../store/api/api";

const SearchResults = () => {
  const dispatch = useDispatch();
  const localSearchResult = JSON.parse(localStorage.getItem("searchResult"));
  const searchResults = useSelector(searchingEachResult);
  const haveTrailer = useSelector(getHaveTrailerBollean);
  const trailerKey = useSelector(getTrailerKey);
  useEffect(() => {
    dispatch(setingSearchResult(localSearchResult[1]));
    dispatch(setingSearchResultALlData(localSearchResult[0]));
    dispatch(fetchTrailerThunk(localSearchResult[1][0].id));
  }, [localSearchResult[1][0].id, haveTrailer]);
  return (
    <section>
      <div className={styles.eachFilmSection}>
        {searchResults?.map((elm) => {
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
                    src={`https://www.youtube.com/embed/${trailerKey}`}
                    title="trailer"
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
