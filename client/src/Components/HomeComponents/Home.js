// ดึง card slide news footer component มาแสดง
import React from "react";
import Card from "./Cards";
import ShopHome from "./ShopHome";
import News from "./News";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
  return (
    <div className=" flex flex-wrap mx-auto ">
      <Header />
      <div className="mt-4 mx-4">
        <span className="text-2xl border-b-2 border-gray-900">
          Showroom Concert
        </span>
      </div>
      <Card />
      <ShopHome />
      <News />
      <Footer />
    </div>
  );
};

export default Home;
