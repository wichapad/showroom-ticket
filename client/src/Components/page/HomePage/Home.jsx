// ดึง card slide news footer component มาแสดง

import ShopHome from "./ShopHome";

import Header from "./Header";

import EventsHome from "./EventsHome";
import NewsHome from "./NewsHome";

const Home = () => {
  return (
    <div className=" flex flex-wrap mx-auto ">
      <Header />
      <div className="mt-4 mx-4">
        <span className="text-2xl border-b-2 border-gray-900">
          Showroom Concert
        </span>
        <EventsHome />
        <ShopHome />
        <NewsHome />
      </div>
    </div>
  );
};

export default Home;
