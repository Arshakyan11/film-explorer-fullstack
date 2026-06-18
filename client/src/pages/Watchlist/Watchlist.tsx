import { useEffect } from "react";
import styles from "./Watchlist.module.scss";
import { ROUTES } from "../../routes/Routes";
import { Link } from "react-router-dom";
import { notifyforRemoving } from "../../helpers/notifyUser";
import { filmNotFound } from "../../components/Images";
import ProfileNavBar from "../../components/ProfileNavBar/ProfileNavBar";
import { getAllWatchlistInfo } from "../../store/WatchlistSlice/WatchlistSlice";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { getUserInfo } from "../../store/AuthSlice/AuthSlice";
import {
  getWatchlistThunk,
  removeItemOfWatchlistThunk,
} from "../../store/api/api";

const Watchlist = () => {
  const { userInfo } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const { watchlist } = useAppSelector(getAllWatchlistInfo);

  useEffect(() => {
    dispatch(getWatchlistThunk());
  }, []);

  if (!userInfo) return null;
  return (
    <section className={styles.sectionWatchlist}>
      <div className={styles.container}>
        <ProfileNavBar userInfo={userInfo} forWhich={"forWhatchlist"} />
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
                      to={`/${ROUTES.MOVIES}/${movie.page}/${movie.movieId}`}
                    >
                      See More
                    </Link>
                    <button
                      className={styles.link2}
                      onClick={() => {
                        notifyforRemoving();
                        dispatch(
                          removeItemOfWatchlistThunk(String(movie.movieId)),
                        );
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
