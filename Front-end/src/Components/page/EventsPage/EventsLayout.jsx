import React from "react";
import Header from "../HomePage/Header";
import { Outlet } from "react-router-dom";

const EventsLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default EventsLayout;
