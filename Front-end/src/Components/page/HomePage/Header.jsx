import React from "react";
import Video from "../../../images/Spotify(fan made).mp4";
const Header = () => {
  return (
    <div className="w-full pt-[3rem]">
      <div className="relative home-background ">
        <img
          className=" home-background-img "
          src="https://images.unsplash.com/photo-1577648875929-894904f7b051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="bg-home"
        />
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <div className="flex justify-center">
            <video
              src={Video}
              className="rounded-lg"
              width="480"
              height="300"
              loop
              autoPlay
              controls
              muted
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
