// ดึง card slide news footer component มาแสดง

import ShopHome from "./ShopHome";

import Header from "./Header";

import EventsHome from "./EventsHome";
import NewsHome from "./NewsHome";

const Home = () => {
  return (
    <div className=" flex flex-col justify-center items-center m-auto ">
      <Header />
      <div className="max-w-screen-2xl">
        <p className="text-2xl py-2 px-3 ">Concert</p>
        <EventsHome />
        <p className="text-2xl py-2 px-3 ">Merch</p>
        <ShopHome />
        <p className="text-2xl py-2 px-3 ">News</p>
        <NewsHome />
      </div>
    </div>
  );
};

export default Home;
