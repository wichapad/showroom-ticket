import React from "react";
import Navbar from "./Navbar";
import Footer from "../HomePage/Footer";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default PageLayout;
