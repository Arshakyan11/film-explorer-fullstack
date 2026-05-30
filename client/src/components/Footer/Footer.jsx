import { Link, NavLink, useNavigate } from "react-router-dom";
import { logo } from "../Images";
import {
  FaApple,
  FaFacebookF,
  FaGooglePlay,
  FaInstagram,
  FaRegUserCircle,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { ROUTES } from "../../routes/Routes";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Footer.module.scss";
import { getFooterDataThunk, getOneMovieThunk } from "../../store/api/api";
import { gettingDataPageFooter } from "../../store/AllFilmDataSlice/AllFilmDataSlice";

const Footer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let data = useSelector(gettingDataPageFooter);
  const isLogged = JSON.parse(localStorage.getItem("usersInfo"));

  const footerMovies = data.slice(0, 8);
  useEffect(() => {
    dispatch(getFooterDataThunk(32));
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerBox}>
          <div className={styles.left}>
            <img
              className={styles.logo}
              src={logo}
              alt="Logo"
              onClick={() => navigate(ROUTES.HOME)}
            />
            <p className={styles.description}>
              Hi, We offer original, exclusive <br /> and premium stories.
              Everything you <br /> want to watch, anytime, anywhere and <br />{" "}
              as much.
            </p>
            <div className={styles.downloadButtons}>
              <button className={styles.appButton}>
                <FaApple className={styles.appIcon} />
                <div className={styles.text}>
                  <a href="https://appstore.com" target="_blank">
                    Download on the <br />
                    <span className={styles.app}>App Store</span>
                  </a>
                </div>
              </button>

              <button className={styles.appButton}>
                <FaGooglePlay className={styles.appIcon} />
                <div className={styles.text}>
                  <a href="https://googleplay.com" target="_blank">
                    Get it on <br />
                    <span className={styles.app}>Google Play</span>
                  </a>
                </div>
              </button>
            </div>
            <div className={styles.socialIcons}>
              <span className={styles.iconWrapper}>
                <a
                  href="https://www.facebook.com/share/18UMZzsAgy/?mibextid=wwXIfrnp"
                  target="_blank"
                >
                  <FaFacebookF className={styles.icon} />
                </a>
              </span>
              <span className={styles.iconWrapper}>
                <a
                  href="https://www.instagram.com/erhamindustry?igsh=cXVrdjJobWt1cWc5&utm_source=qr"
                  target="_blank"
                >
                  <FaInstagram className={styles.icon} />
                </a>
              </span>
              <span className={styles.iconWrapper}>
                <a href="https://x.com/erhamindustry?s=21" target="_blank">
                  <FaTwitter className={styles.icon} />
                </a>
              </span>
              <span className={styles.iconWrapper}>
                <a
                  href="https://youtube.com/@erham.industry?si=7ZBDgjGpKEpkkq9f"
                  target="_blank"
                >
                  <FaYoutube className={styles.icon} />
                </a>
              </span>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.section}>
              {isLogged ? (
                <ul className={styles.profileLinks}>
                  <h3>
                    <FaRegUserCircle /> <Link to={ROUTES.PROFILE}>Profile</Link>
                  </h3>
                  <li>
                    <Link to={ROUTES.PROFILE}>Personal data</Link>
                  </li>
                  <li>
                    <Link to={`/profile/${ROUTES.PLANS}`}>Choosing a Plan</Link>
                  </li>
                  <li>
                    <Link to={`/profile/${ROUTES.WATCHLIST}`}>Watchlist</Link>
                  </li>
                </ul>
              ) : (
                <ul className={styles.accesingSite}>
                  <h3>
                    <FaRegUserCircle />
                    <Link to={ROUTES.REGISTRATION}>Sign Up</Link>
                  </h3>
                  <h3>
                    <FaRegUserCircle />
                    <Link to={ROUTES.LOGIN}>Sign In</Link>
                  </h3>
                </ul>
              )}
            </div>
            <div className={styles.movieAndGames}>
              <div className={styles.section}>
                <h3>
                  <Link to={ROUTES.MOVIES}>Movies</Link>
                </h3>
                <ul>
                  {footerMovies.length > 0 ? (
                    footerMovies.map((movie) => (
                      <li
                        key={movie.id}
                        onClick={() =>
                          dispatch(
                            getOneMovieThunk({
                              pageArgument: 32,
                              idArgument: movie.id,
                            }),
                          )
                        }
                      >
                        <Link to={`/${ROUTES.MOVIES}/32/${movie.id}`}>
                          {movie.title}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li>Loading movies...</li>
                  )}
                </ul>
              </div>
              <div className={styles.section}>
                <h3>Games</h3>
                <ul>
                  <li>Games</li>
                  <li>Games</li>
                  <li>Games</li>
                  <li>Games</li>
                  <li>Games</li>
                  <li>Games</li>
                  <li>Games</li>
                  <li>Games</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.footerBottom} ${styles.fotterBottomFirst}`}>
          <NavLink to={ROUTES.TERMSOFUSE}>Terms of use</NavLink>
          <NavLink to={ROUTES.PRIVACYPAGE}>Privacy Policy</NavLink>
          <NavLink to={ROUTES.HOME}>SiteMap</NavLink>
          <NavLink to={ROUTES.ABOUTUS}>About Us</NavLink>
        </div>
        <p className={styles.footerBottom}>
          Copyright © 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
