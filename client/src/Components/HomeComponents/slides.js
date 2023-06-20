import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

const Slide = () => {
  return (
    <>
      <div className="slide-bg-image">
        <div className="absolute top-6 left-4">
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
            className="mySwiper swiper-container"
          >
            <SwiperSlide>
              <img
                src="https://pbs.twimg.com/media/FoIK24XXkAEODKj.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://pbs.twimg.com/media/FiIGvfqaEAA6z8Z.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://pbs.twimg.com/media/C2DFgzrXEAE7Gu1.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://pbs.twimg.com/media/CVcmkLbUkAEHxpJ.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="w-60 flex">
        <div className="w-full">
          <img src="https://pbs.twimg.com/media/FoIK24XXkAEODKj.jpg" alt="" />
        </div>
        <div>
          <span>New</span>
          <p>Bring Me The Horizon</p>
          <span>59.99 $</span>
        </div>
      </div>
    </>
  );
};

export default Slide;
