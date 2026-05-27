import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/Routes";
import { logo, searchImg, signIn } from "../Images";
import { useDispatch, useSelector } from "react-redux";
import { FaAddressCard, FaBars, FaReceipt, FaVideo } from "react-icons/fa";
import { FaHouse, FaMagnifyingGlass, FaRightToBracket } from "react-icons/fa6";
import { searchingEachData } from "../../store/selectors/searchingEachSelector.js";
import {
  recivingData,
  recivingDataMAIN,
  setingSearchResult,
  transferData,
} from "../../store/actions/searchingEachAction.js";
import { LogoutFromAccount } from "../../helpers/logOut.js";
import { HandleSearch } from "../../helpers/searchHelper.js";

import "./NavBar.scss";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogged = JSON.parse(localStorage.getItem("usersInfo"));
  const searchResults = useSelector(searchingEachData);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    const clickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        dispatch(recivingData(""));
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [dispatch]);

  return (
    <nav className="nav">
      <div className="container">
        <div className="navSection">
          <div className="navTopSection">
            <div className="left">
              <div className="logo">
                <img
                  className="logo"
                  src={logo}
                  alt="logoImg"
                  onClick={() => navigate(ROUTES.HOME)}
                />
              </div>
              <ul>
                <li>
                  <NavLink to={ROUTES.HOME}>
                    <FaHouse />
                    <span>Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={ROUTES.MOVIES}>
                    <FaVideo />
                    <span>Movies</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={ROUTES.ABOUTUS}>
                    <FaReceipt />
                    <span>About Us</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={ROUTES.SEARCHING}>
                    <FaMagnifyingGlass />
                    <span>Searching</span>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="right">
              <div className="searchBox" ref={searchRef}>
                <img src={searchImg} alt="searchIcon" />
                <input
                  id="firstInput"
                  type="text"
                  placeholder="Search movies..."
                  ref={inputRef}
                  onChange={(e) =>
                    HandleSearch(e.target.value, dispatch, recivingData)
                  }
                  onClick={(e) =>
                    HandleSearch(e.target.value, dispatch, recivingData)
                  }
                />
                {searchResults.length > 0 && (
                  <ul className="searchResults">
                    {searchResults.slice(0, 5).map((movie) => (
                      <li key={movie.id}>
                        <Link
                          className="eachMovie"
                          to={`/${ROUTES.SEARCHING}/${movie.id}`}
                          state={{ title: movie.title }}
                          onClick={() => {
                            localStorage.setItem(
                              "searchResult",
                              JSON.stringify([searchResults, [movie]])
                            );
                            dispatch(transferData());
                            dispatch(recivingData(""));
                            dispatch(setingSearchResult([movie]));
                            if (inputRef.current) {
                              inputRef.current.value = "";
                            }
                          }}
                        >
                          {movie.title}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        className="exploreMore"
                        to={`/${ROUTES.SEARCHING}`}
                        onClick={() => {
                          dispatch(recivingDataMAIN(inputRef.current.value));
                        }}
                      >
                        EXPLORE RELATED FILMS
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
              {isLogged ? (
                <div className="allRight">
                  <Link to={ROUTES.PROFILE} className="sign profile">
                    <img src={signIn} alt="signIn" />
                    Profile
                  </Link>
                  <div
                    className="sign"
                    onClick={() => LogoutFromAccount(navigate, dispatch)}
                  >
                    <FaRightToBracket />
                    <p>Log Out</p>
                  </div>
                </div>
              ) : (
                <div className="allRight">
                  <Link to={`${ROUTES.REGISTRATION}`} className="sign">
                    <FaAddressCard />
                    Sign Up
                  </Link>
                  <Link to={`${ROUTES.LOGIN}`} className="sign">
                    <FaRightToBracket />
                    Sign In
                  </Link>
                </div>
              )}
            </div>

            <div className="hamburgerNav" onClick={() => setIsOpen(!isOpen)}>
              <FaBars />
            </div>
          </div>

          {/* Hamburger Menu */}
          {isOpen ? (
            <div className="hamburgerMenu">
              <div className="left">
                <ul>
                  <li>
                    <NavLink to={ROUTES.HOME} onClick={() => setIsOpen(false)}>
                      <FaHouse />
                      <span>Home</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={ROUTES.MOVIES}
                      onClick={() => setIsOpen(false)}
                    >
                      <FaVideo />
                      <span>Movies</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={ROUTES.ABOUTUS}
                      onClick={() => setIsOpen(false)}
                    >
                      <FaReceipt />
                      <span>About Us</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={ROUTES.SEARCHING}
                      onClick={() => setIsOpen(false)}
                    >
                      <FaMagnifyingGlass />
                      <span>Searching</span>
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="right">
                {isLogged ? (
                  <div className="allRight">
                    <Link
                      to={ROUTES.PROFILE}
                      className="sign profile"
                      onClick={() => setIsOpen(false)}
                    >
                      <img src={signIn} alt="signIn" />
                      Profile
                    </Link>
                    <div
                      className="sign"
                      onClick={() => {
                        LogoutFromAccount(navigate, dispatch);
                        setIsOpen(false);
                      }}
                    >
                      <FaRightToBracket />
                      <p>Log Out</p>
                    </div>
                  </div>
                ) : (
                  <div className="allRight">
                    <Link
                      to={`${ROUTES.REGISTRATION}`}
                      className="sign"
                      onClick={() => setIsOpen(false)}
                    >
                      <FaAddressCard />
                      Sign Up
                    </Link>
                    <Link
                      to={`${ROUTES.LOGIN}`}
                      className="sign"
                      onClick={() => setIsOpen(false)}
                    >
                      <FaRightToBracket />
                      Sign In
                    </Link>
                  </div>
                )}
                <div className="searchBox" ref={searchRef}>
                  <img src={searchImg} alt="searchIcon" />
                  <input
                    id="firstInput"
                    type="text"
                    placeholder="Search movies..."
                    ref={inputRef}
                    onChange={(e) =>
                      HandleSearch(e.target.value, dispatch, recivingData)
                    }
                    onClick={(e) =>
                      HandleSearch(e.target.value, dispatch, recivingData)
                    }
                  />
                  {searchResults.length > 0 && (
                    <ul className="searchResults">
                      {searchResults.slice(0, 5).map((movie) => (
                        <li key={movie.id}>
                          <Link
                            className="eachMovie"
                            to={`/${ROUTES.SEARCHING}/${movie.id}`}
                            state={{ title: movie.title }}
                            onClick={() => {
                              localStorage.setItem(
                                "searchResult",
                                JSON.stringify([searchResults, [movie]])
                              );
                              dispatch(transferData());
                              dispatch(recivingData(""));
                              dispatch(setingSearchResult([movie]));
                              setIsOpen(false);
                              if (inputRef.current) {
                                inputRef.current.value = "";
                              }
                            }}
                          >
                            {movie.title}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link
                          className="exploreMore"
                          to={`/${ROUTES.SEARCHING}`}
                          onClick={() => {
                            dispatch(recivingDataMAIN(inputRef.current.value));
                            setIsOpen(false);
                            dispatch(recivingData(""));
                          }}
                        >
                          EXPLORE RELATED FILMS
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* Hamburger Menu */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
