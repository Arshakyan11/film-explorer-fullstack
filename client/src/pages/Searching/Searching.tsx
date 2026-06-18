import { HandleSearchMAIN } from "../../helpers/searchHelper";
import { filmNotFound, searchImg, star } from "../../components/Images";
import { ROUTES } from "../../routes/Routes";
import {
  recivingDataMAIN,
  setingSearchResult,
} from "../../store/actions/searchingEachAction";
import { Link, NavLink } from "react-router-dom";
import { searchingEachDataMAIN } from "../../store/selectors/searchingEachSelector";

import styles from "./Searching.module.scss";
import { isTokenValid } from "../../helpers/checkToken";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { addItemTotheWatchlistHelper } from "../../helpers/createUserFrom";

const Searching = () => {
  const dispatch = useAppDispatch();
  const searchResults = useAppSelector(searchingEachDataMAIN);
  const isLogged = isTokenValid();
  return (
    <section className={styles.searchSection}>
      <div className={styles.container}>
        <div className={styles.allSection}>
          <div className={styles.searchBox}>
            <img src={searchImg} alt="searchIcon" />
            <input
              type="text"
              placeholder="Search movies..."
              onChange={(e) => {
                HandleSearchMAIN(e.target.value, dispatch, recivingDataMAIN);
              }}
            />
          </div>
          <div className={styles.results}>
            {searchResults.length > 0 ? (
              searchResults.map((movie) => {
                return (
                  <div
                    key={movie.id}
                    className={styles.filmsLineSection_eachBox}
                  >
                    <img
                      className={styles.img1}
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
                          : filmNotFound
                      }
                      alt="film"
                    />
                    <p className={styles.eachBox_languageType}>
                      {movie.original_language}
                    </p>
                    <div className={styles.filmsLineSection_eachBox_info}>
                      <span>Title:</span>
                      <h3>{movie.original_title}</h3>
                      <div
                        className={styles.filmsLineSection_eachBox_info_starBox}
                      >
                        <span>Rating:</span>
                        <div className={styles.starBox_bottom}>
                          <h4>{movie.vote_average.toFixed(2)}/10</h4>
                          <img className={styles.starImg} src={star} alt="" />
                        </div>
                      </div>
                      <Link
                        className={styles.link1}
                        to={`/${ROUTES.SEARCHING}/${movie.id}`}
                        state={{ title: movie.title }}
                        onClick={() => {
                          dispatch(setingSearchResult([movie]));
                          localStorage.setItem(
                            "searchResult",
                            JSON.stringify([searchResults, [movie]]),
                          );
                        }}
                      >
                        See More
                      </Link>
                      {isLogged ? (
                        <button
                          onClick={() =>
                            addItemTotheWatchlistHelper(movie, dispatch)
                          }
                          className={styles.link2}
                        >
                          Add to Watchlist
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className={styles.noResultError}>
                <span className={styles.noResultImg}>🔍</span>
                <h2>No Results Found</h2>
                <p>
                  Sorry, we couldn’t find any movies matching your search. Try
                  using different keywords, checking for types, or explore our
                  popular movies bellow!
                </p>
                <div className={styles.allfilmsSection_links}>
                  <NavLink to={`/${ROUTES.POPULARMOVIES}`}>
                    Popular Movies
                  </NavLink>
                  <NavLink to={`/${ROUTES.NEWMOVIES}`}>New Movies</NavLink>
                  <NavLink to={`/${ROUTES.RECOMENDEDMOVIES}`}>
                    Recomended Movies
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Searching;
