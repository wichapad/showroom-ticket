// แสดง รายการสินค้า ต่างๆที่วางขายในเพจ

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "./customSwiper.css";

const ShopHome = () => {
  return (
    <div className="slide-bg-image ">
      <div className="flex flex-col md:flex-col lg:flex-row max-w-screen-xl mx-auto p-2">
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

        <div className=" grid w-full grid-cols-1 gap-3 mt-2 md:mt-2 lg:mt-0 md:grid-cols-2 lg:grid-cols-2  lg:mx-4 ">
          {/* item 1 */}

          <div className="flex border border-slate-500 rounded">
            <div className="w-72">
              <img
                className="w-full h-full"
                src="https://upload.wikimedia.org/wikipedia/en/b/b0/Yoasobi_-_Idol.png"
                alt=""
              />
            </div>
            <div className="text-sm  text-white w-full p-4">
              <span className="bg-red-600 rounded p-1">New</span>
              <p className="my-3">Yoasobi</p>
              <p className="h-10 my-3">Album: Yoru ni Kakeru</p>
              <span>29.99 $</span>
            </div>
          </div>

          {/* item 2 */}

          <div className="flex border border-slate-500 rounded">
            <div className="w-72">
              <img
                className="w-full h-full"
                src="https://upload.wikimedia.org/wikipedia/en/f/ff/Harry_Styles_-_As_It_Was.png"
                alt=""
              />
            </div>
            <div className="text-sm  text-white w-full p-4">
              <span className="bg-red-600 rounded p-1">New</span>
              <p className="my-3">Harry Style</p>
              <p className="h-10 my-3">Album: As It Was</p>
              <span>39.99 $</span>
            </div>
          </div>

          {/* item 3 */}

          <div className="flex  border border-slate-500 rounded">
            <div className="w-72">
              <img
                className="w-full h-full"
                src="https://e.snmc.io/i/600/s/71735f0d244ec9c5261daedf23b1a85e/8993070/annalynn-a-conversation-with-evil-Cover-Art.jpg"
                alt=""
              />
            </div>
            <div className="text-sm text-white w-full p-4">
              <span className="bg-red-600 rounded p-1">New</span>
              <p className=" my-3">Annalynn </p>
              <p className="h-10 my-3">Album: A Conversation With Evil</p>
              <span>29.99 $</span>
            </div>
          </div>

          {/* item 4 */}

          <div className="flex border  border-slate-500 rounded">
            <div className="w-72">
              <img
                className="w-full h-full"
                src="https://upload.wikimedia.org/wikipedia/en/4/41/IU_-_Lilac.png"
                alt=""
              />
            </div>
            <div className="text-sm text-white w-full p-4">
              <span className="bg-red-600 rounded p-1">New</span>
              <p className="my-3">IU</p>
              <p className="h-10 my-3">LILAC</p>
              <span>59.99 $</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopHome;
