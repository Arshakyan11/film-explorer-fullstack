import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/Routes";
import { useDispatch, useSelector } from "react-redux";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./MovieSliderHomePage.scss";
import { gettingDataPage } from "../../store/AllFilmDataSlice/AllFilmDataSlice";
import { getFilmByWantedPageThunk } from "../../store/api/api";

export default function Movies() {
  const dispatch = useDispatch();
  const data = useSelector(gettingDataPage);
  useEffect(() => {
    dispatch(
      getFilmByWantedPageThunk({
        pageArgument: 31,
      }),
    );
  }, []);
  return (
    <div className="moviesBox">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={13}
        coverflowEffect={{
          rotate: 50,
          stretch: 10,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 1000,
          stopOnLastSlide: false,
          pauseOnMouseEnter: true,
        }}
        pagination={true}
        navigation={true}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((elm) => (
          <SwiperSlide key={elm.id}>
            <Link to={`/${ROUTES.MOVIES}/31/${elm.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w185/${elm.poster_path}`}
                alt="poster"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
