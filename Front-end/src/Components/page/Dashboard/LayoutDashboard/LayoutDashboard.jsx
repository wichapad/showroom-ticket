import React from "react";
import NavDashboard from "./Navbar/NavDashboard";
import SideMenubar from "./Navbar/SideMenubar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const LayoutDashboard = () => {
  const [isSidebarOpen, setSideBarOpen] = useState(false);

  const toggleMenu = () => {
    setSideBarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <NavDashboard onToggleBar={toggleMenu} />
      <div className="flex  pt-[3.2rem]">
        <SideMenubar isOpen={isSidebarOpen} />
        <div className="w-full md:ml-[4rem]">
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
