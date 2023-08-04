import React from "react";
import Navbar from '../../Navbar/Navbar'
import Footer from "../HomePage/Footer";
import { Link } from "react-router-dom";

const shop = () => {
  return (
    <div>
      <Navbar/>
      <div className="flex justify-center pt-20 pb-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <div className=" w-[230px] bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to="#">
              <img
                className="rounded-t w-full "
                src="https://upload.wikimedia.org/wikipedia/en/b/b0/Yoasobi_-_Idol.png"
                alt=""
              />
            </Link>
            <div className="p-5">
              <p className="mb-1 text-xs text-gray-700 dark:text-gray-400">
                Albums
              </p>
              <h1 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Yoasobi
              </h1>
              <p className="mb-3 text-sm h-10 text-gray-700 dark:text-gray-400">
                Album: Yoru ni Kakeru
              </p>
              <p className="mb-3 font-normal tracking-tight text-gray-900 dark:text-white">
                29.99 $
              </p>
              <div className="text-center">
                <button className="uppercase text-xs font-bold py-2 px-4 text-gray-200 rounded-md bg-gradient-to-r from-purple-600 via-violet-700 to-purple-600 active:scale-95">
                  Buy now
                </button>
              </div>
            </div>
          </div>
          <div className=" w-[230px] bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to="#">
              <img
                className="rounded-t-lg w-full "
                src="https://shopeu.hstyles.co.uk/cdn/shop/products/whiterabbit.png?v=1662118076"
                alt=""
              />
            </Link>
            <div className="p-5">
              <p className="mb-1 text-xs text-gray-700 dark:text-gray-400">
                T-shirt
              </p>
              <h1 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Harry Style
              </h1>
              <p className="mb-3 text-sm h-10 text-gray-700 dark:text-gray-400">
                Love On Tour Bunny TV Longsleeve - White
              </p>
              <p className="mb-3 font-normal tracking-tight text-gray-900 dark:text-white">
                60.00 $
              </p>
              <div className="text-center">
                <button className="uppercase text-xs font-bold py-2 px-4 text-gray-200 rounded-md bg-gradient-to-r from-purple-600 via-violet-700 to-purple-600 active:scale-95">
                  Buy now
                </button>
              </div>
            </div>
          </div>
          <div className=" w-[230px] bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to="#">
              <img
                className="rounded-t w-full "
                src="https://e.snmc.io/i/600/s/71735f0d244ec9c5261daedf23b1a85e/8993070/annalynn-a-conversation-with-evil-Cover-Art.jpg"
                alt=""
              />
            </Link>
            <div className="p-5">
              <p className="mb-1 text-xs text-gray-700 dark:text-gray-400">
                Albums
              </p>
              <h1 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Annalynn
              </h1>
              <p className="mb-3 text-sm h-10 text-gray-700 dark:text-gray-400">
                Album: A Conversation With Evil
              </p>
              <p className="mb-3 font-normal tracking-tight text-gray-900 dark:text-white">
                29.99 $
              </p>
              <div className="text-center">
                <button className="uppercase text-xs font-bold py-2 px-4 text-gray-200 rounded-md bg-gradient-to-r from-purple-600 via-violet-700 to-purple-600 active:scale-95">
                  Buy now
                </button>
              </div>
            </div>
          </div>
          <div className=" w-[230px] bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to="#">
              <img
                className="rounded-t w-full "
                src="https://ryzm.imgix.net/sites/1f46106e-0d50-4f79-8418-1f8e72db18c8/images/608451fa-5d67-452b-bd16-e54dcb963a82?fit=crop&fill=blur&w=800&h=800"
                alt=""
              />
            </Link>
            <div className="p-5">
              <p className="mb-1 text-xs text-gray-700 dark:text-gray-400">
                T-shirt
              </p>
              <h1 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Coldrain
              </h1>
              <p className="mb-3 text-sm h-10 text-gray-700 dark:text-gray-400">
                RE:ADMISSION” 80's Crack T-Shirts
              </p>
              <p className="mb-3 font-normal tracking-tight text-gray-900 dark:text-white">
                31.99 $
              </p>
              <div className="text-center">
                <button className="uppercase text-xs font-bold py-2 px-4 text-gray-200 rounded-md bg-gradient-to-r from-purple-600 via-violet-700 to-purple-600 active:scale-95">
                  Buy now
                </button>
              </div>
            </div>
          </div>
          <div className=" w-[230px] bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to="#">
              <img
                className="rounded-t w-full "
                src="https://shop-us.bmthofficial.com/cdn/shop/files/T-shirt.jpg?v=1686329205&width=1000"
                alt=""
              />
            </Link>
            <div className="p-5">
              <p className="mb-1 text-xs text-gray-700 dark:text-gray-400">
                T-shirt
              </p>
              <h1 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Bring me the horizon
              </h1>
              <p className="mb-3 text-sm h-10 text-gray-700 dark:text-gray-400">
                Post Human:Next Gen Tee
              </p>
              <p className="mb-3 font-normal tracking-tight text-gray-900 dark:text-white">
                30.00 $
              </p>
              <div className="text-center">
                <button className="uppercase text-xs font-bold py-2 px-4 text-gray-200 rounded-md bg-gradient-to-r from-purple-600 via-violet-700 to-purple-600 active:scale-95">
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default shop;
