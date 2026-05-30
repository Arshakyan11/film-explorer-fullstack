import React, { useEffect } from "react";
import { star } from "../Images";
import { Link, NavLink } from "react-router-dom";
import Pagination from "../Pagination/Pagination";

import { useDispatch, useSelector } from "react-redux";
import { watchlistAddingToUser } from "../../store/actions/watchlistAction";
import "./AllFilmsSorted.scss";
import { ROUTES } from "../../routes/Routes";
import {
  gettingCurrentPage,
  gettingDataPage,
  gettingUserData,
  sendingData,
} from "../../store/AllFilmDataSlice/AllFilmDataSlice";
import { getFilmByWantedPageThunk } from "../../store/api/api";

const AllFilmsSorted = ({ idByPagesMovies = 1 }) => {
  const isLogged = useSelector(gettingUserData);
  const dispatch = useDispatch();
  const data = useSelector(gettingDataPage);
  const currentPage = useSelector(gettingCurrentPage);
  useEffect(() => {
    dispatch(
      getFilmByWantedPageThunk({
        pageArgument: idByPagesMovies,
      }),
    );
    dispatch(sendingData(JSON.parse(localStorage.getItem("usersInfo"))));
  }, []);

  return (
    <section>
      <div className="allfilmsSection">
        <div className={"allfilmsSection_links"}>
          <NavLink to={`/${ROUTES.POPULARMOVIES}`}>Popular Movies</NavLink>
          <NavLink to={`/${ROUTES.NEWMOVIES}`}>New Movies</NavLink>
          <NavLink to={`/${ROUTES.RECOMENDEDMOVIES}`}>
            Recomended Movies
          </NavLink>
        </div>
        <Pagination currentPage={currentPage} idByPages={idByPagesMovies} />
        <div className={"allfilmsSection_data"}>
          {data.map((elm) => {
            return (
              <div key={elm.id} className={"allfilmsSection_data_eachBox"}>
                <div className={"eachBox_left"}>
                  <img
                    src={`https://image.tmdb.org/t/p/w185/${elm.poster_path}`}
                    alt="film"
                  />
                </div>
                <div className={"eachBox_right"}>
                  <div className={"right_Title"}>
                    <span>Title:</span>
                    <h3>{elm.original_title}</h3>
                  </div>
                  <p className={"right_language"}>
                    <span>Lang:</span>
                    {elm.original_language}
                  </p>
                  <p className={"right_release"}>
                    <span>Release:</span>
                    {elm.release_date}
                  </p>
                  <div className={"filmsLineSection_eachBox_info_starBox"}>
                    <span>Rating:</span>
                    <div className={"starBox_bottom"}>
                      <h4>{elm.vote_average}</h4>
                      <img className={"starImg"} src={star} alt="starLogo" />
                    </div>
                  </div>
                  <p className={"right_voteCount"}>
                    <span>Voting Count:</span>
                    {elm.vote_count}
                  </p>
                  <Link to={`/${ROUTES.MOVIES}/${currentPage}/${elm.id}`}>
                    See More
                  </Link>
                  {isLogged ? (
                    <button
                      onClick={() =>
                        dispatch(
                          watchlistAddingToUser(isLogged.id, {
                            page: currentPage,
                            id: elm.id,
                            title: elm.original_title,
                            img: elm.poster_path,
                          }),
                        )
                      }
                      className="link2"
                    >
                      Add to Watchlist
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <Pagination currentPage={currentPage} idByPages={idByPagesMovies} />
      </div>
    </section>
  );
};

export default AllFilmsSorted;
