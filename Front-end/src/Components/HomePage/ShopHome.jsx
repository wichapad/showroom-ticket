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
      <div className="max-w-screen-xl mx-auto p-2 lg:flex">
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

        <div className="mt-[1rem] mx-2 lg:mt-0 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {/* item 1 */}
          <div className="home-shop-container">
            <div>
              <img
                className="w-[150px] h-full object-cover rounded-s-md cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/en/b/b0/Yoasobi_-_Idol.png"
                alt=""
              />
            </div>
            <div className="home-shop-text-container">
              <span className="w-[40px] bg-red-600 text-white rounded p-1">New</span>
              <div className="pt-2 font-light text-white hover:text-amber-400 cursor-pointer">
                <p>Yoasobi</p>
                <p>Album: Yoru ni Kakeru</p>
              </div>
              <div className="pt-2 text-white font-bold">
                <span>$29.99</span>
              </div>
            </div>
          </div>

          {/* item 2 */}
          <div className=" home-shop-container">
            <div>
              <img
                className="w-[150px] h-full object-cover rounded-s-md cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/en/f/ff/Harry_Styles_-_As_It_Was.png"
                alt=""
              />
            </div>
            <div className="home-shop-text-container">
              <span className="w-[40px] bg-red-600 text-white rounded p-1">New</span>
              <div className="pt-2 font-light text-white hover:text-amber-400 cursor-pointer">
                <p>Harry Style</p>
                <p>Album: As It Was</p>
              </div>
              <div className="pt-2 text-white font-bold">
                <span>$39.99</span>
              </div>
            </div>
          </div>

          {/* item 3 */}
          <div className="home-shop-container">
            <div>
              <img
                className="w-[150px] h-full object-cover rounded-s-md cursor-pointer"
                src="https://e.snmc.io/i/600/s/71735f0d244ec9c5261daedf23b1a85e/8993070/annalynn-a-conversation-with-evil-Cover-Art.jpg"
                alt=""
              />
            </div>
            <div className="home-shop-text-container">
              <span className="w-[40px] bg-red-600 text-white rounded p-1">New</span>
              <div className="pt-2 text-sm font-light text-white hover:text-amber-400 cursor-pointer">
                <p>Annalynn</p>
                <p>Album: A Conversation With Evil</p>
              </div>
              <div className="pt-2 text-white font-bold">
                <span>$29.99</span>
              </div>
            </div>
          </div>

          {/* item 4 */}
          <div className="home-shop-container">
            <div>
              <img
                className="w-[150px] h-full object-cover rounded-s-md cursor-pointer"
                src="https://upload.wikimedia.org/wikipedia/en/4/41/IU_-_Lilac.png"
                alt=""
              />
            </div>
            <div className="home-shop-text-container">
              <span className="w-[40px] bg-red-600 text-white rounded p-1">New</span>
              <div className="pt-2 font-light text-white hover:text-amber-400 cursor-pointer">
                <p>IU</p>
                <p>Album:LILAC</p>
              </div>
              <div className="pt-2 text-white font-bold">
                <span>$59.99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopHome;
