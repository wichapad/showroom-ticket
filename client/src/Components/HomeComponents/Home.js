import React from "react";
import Card from "./Cards";
import Slide from "./Slides";
import News from "./News";

const Home = () => {
  return (
    <>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
        <div className="home-background">
          <img
            className=" home-background-img "
            src="https://images.unsplash.com/photo-1577648875929-894904f7b051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="bg-home"
          />
        </div>
      </div>
      <Card />
      <Slide />
      <News />
    </>
  );
};

export default Home;
