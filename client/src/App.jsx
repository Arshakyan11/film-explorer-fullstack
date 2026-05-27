import { Route, Routes } from "react-router-dom";
import LayOut from "./LayOut/LayOut";
import styles from "./App.module.scss";
import {
  AboutUs,
  EachFilm,
  ErrorPage,
  Home,
  Login,
  Movies,
  NewMovies,
  PopularMovies,
  Profile,
  RecomendedMovies,
  Registration,
  Plans,
  Watchlist,
  SearchResults,
  Searching,
  TermsOfUse,
  PolicyPage,
} from "./pages/index";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { Bounce, ToastContainer } from "react-toastify";
import { ROUTES } from "./routes/Routes";
function App() {
  return (
    <div>
      <ScrollToTop />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        style={{ zIndex: "1000", top: "100px" }}
        limit={5}
      />
      <Routes>
        <Route path={ROUTES.HOME} element={<LayOut />}>
          <Route index path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.MOVIES} element={<Movies />} />
          <Route
            path={ROUTES.RECOMENDEDMOVIES}
            element={<RecomendedMovies />}
          />
          <Route path={ROUTES.NEWMOVIES} element={<NewMovies />} />
          <Route path={ROUTES.POPULARMOVIES} element={<PopularMovies />} />
          <Route path={ROUTES.ABOUTUS} element={<AboutUs />} />
          <Route path={ROUTES.EACHPRODUCT} element={<EachFilm />} />
          <Route
            path={ROUTES.SEARCHED_RESULT_EACH}
            element={<SearchResults />}
          />
          <Route path={ROUTES.SEARCHING} element={<Searching />} />
          <Route path={ROUTES.PROFILE} element={<Profile />} />
          <Route path={ROUTES.REGISTRATION} element={<Registration />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={`profile/${ROUTES.PLANS}`} element={<Plans />} />
          <Route path={`profile/${ROUTES.WATCHLIST}`} element={<Watchlist />} />
          <Route path={ROUTES.ERROR} element={<ErrorPage />} />
          <Route path={ROUTES.TERMSOFUSE} element={<TermsOfUse />} />
          <Route path={ROUTES.PRIVACYPAGE} element={<PolicyPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
