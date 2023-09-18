import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import _styles from "../styles/ponente.module.scss";
import "../css/ponentes.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import wilber from "../assets/wilber-ramos.jpg";

function Ponentes() {
  return (
    <section id="organizacion" className={_styles.ponente}>
      <h2>Ponentes</h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={wilber} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={wilber} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={wilber} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={wilber} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={wilber} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={wilber} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={wilber} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={wilber} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </section>
  );
}

export default Ponentes;
