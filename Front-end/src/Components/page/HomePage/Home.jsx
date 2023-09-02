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
        <p className="text-2xl p-2  border-gray-900">Showroom events</p>
        <EventsHome />
        <ShopHome />
        <p className="text-2xl p-2 border-gray-900">Showroom news</p>
        <NewsHome />
      </div>
    </div>
  );
};

export default Home;
