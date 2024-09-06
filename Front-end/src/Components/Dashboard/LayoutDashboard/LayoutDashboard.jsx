import React from "react";
import NavDashboard from "./Navbar/NavDashboard";
import SideMenubar from "./Sidebars/SideMenubar";
import { Outlet } from "react-router-dom";

const LayoutDashboard = () => {
  return (
    <>
      <div>
        <div className="tobbars_container">
          <NavDashboard/>
        </div>
        <div className="flex">
          <div>
            <SideMenubar/>
          </div>
          <div className="w-[100%] mt-[60px] flex-grow-1">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutDashboard;
