import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube, Pagination } from "swiper";
import "swiper/css";
import '../../App.css'
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { useEffect } from "react";

const Slide = () => {

  return (
    <div className="slide-bg-image">
      <div className="flex ">
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, EffectCube, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://pbs.twimg.com/media/FoIK24XXkAEODKj.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://pbs.twimg.com/media/FiIGvfqaEAA6z8Z.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://pbs.twimg.com/media/C2DFgzrXEAE7Gu1.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://pbs.twimg.com/media/CVcmkLbUkAEHxpJ.jpg" alt="" />
          </SwiperSlide>
        </Swiper>

        <div className="">
          <img
            className="w-32"
            src="https://pbs.twimg.com/media/FoIK24XXkAEODKj.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Slide;
