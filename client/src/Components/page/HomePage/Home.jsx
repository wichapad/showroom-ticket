// ดึง card slide news footer component มาแสดง
import React, { useContext } from "react";
import ShopHome from "./ShopHome";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "../../Navbar/Navbar";
import EventsHome from './EventsHome'
import NewsHome from "./NewsHome";

const Home = () => {
  return (
    <div className=" flex flex-wrap mx-auto ">
      <Navbar />
      <Header />
      <div className="mt-4 mx-4">
        <span className="text-2xl border-b-2 border-gray-900">
          Showroom Concert
        </span>
        <EventsHome />
        <ShopHome />
        <NewsHome />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
