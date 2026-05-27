import React, { useEffect } from "react";
import styles from "./Watchlist.module.scss";
import { ROUTES } from "../../routes/Routes";
import { Link } from "react-router-dom";
import ProfileNavBar from "../../components/ProfileNavBar/ProfileNavBar";
import { useDispatch, useSelector } from "react-redux";
import {
  updateMovie,
  watchlistRemovingToUser,
} from "../../store/actions/watchlistAction";
import { globalData } from "../../store/selectors/watchlistSelector";
import { notifyforRemoving } from "../../helpers/notifyUser";
import { filmNotFound } from "../../components/Images";

const Watchlist = () => {
  const userData = JSON.parse(localStorage.getItem("usersInfo")) || [];
  const dispatch = useDispatch();
  const { watchlist } = useSelector(globalData);

  useEffect(() => {
    let x = JSON.parse(localStorage.getItem("usersInfo"));
    dispatch(updateMovie(x));
  }, []);
  return (
    <section className={styles.sectionWatchlist}>
      <div className={styles.container}>
        <ProfileNavBar userData={userData} forWhich={"forWhatchlist"} />
        <div className={styles.watchlist}>
          <p>Your Watchlist</p>
          <div className={styles.watchlistBox}>
            {watchlist?.map((movie) => {
              return (
                <div key={movie.id} className={styles.eachWatchlistBox}>
                  <img
                    src={
                      movie.img
                        ? `https://image.tmdb.org/t/p/w185/${movie.img}`
                        : filmNotFound
                    }
                    alt="film"
                  />
                  <div className={styles.watchlistTextBox}>
                    <span>Title:</span>
                    <h3> {movie.title}</h3>
                    <Link
                      className={styles.link1}
                      to={`/${ROUTES.MOVIES}/${movie.page}/${movie.id}`}
                    >
                      See More
                    </Link>
                    <button
                      className={styles.link2}
                      onClick={() => {
                        notifyforRemoving();
                        dispatch(watchlistRemovingToUser(userData.id, movie));
                      }}
                    >
                      Remove from <br /> Watchlist
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Watchlist;
