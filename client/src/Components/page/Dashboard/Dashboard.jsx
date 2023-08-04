import { useState } from "react";
import NavDashboard from "./Navbar/NavDashboard";
import SideMenubar from "./Navbar/SideMenubar";
import AllEvents from "./Content/Events/AllEvents";
import ChartDashboard from "./Content/Chart/ChartDashboard";
import { ApiProvider } from "../../UseContext/ApiContext";
import { Routes, Route } from "react-router-dom";

const Dashboard = () => {
  const [isSidebarOpen, setSideBarOpen] = useState(false);

  const toggleMenu = () => {
    setSideBarOpen(!isSidebarOpen);
  };

  return (
    <ApiProvider>
      <div>
        <NavDashboard onToggleBar={toggleMenu} />
        <div className="pt-[3.2rem] overflow-hidden flex">
          <SideMenubar isOpen={isSidebarOpen} />
          <div className="overflow-y-auto w-full h-full"></div>
        </div>
      </div>
    </ApiProvider>
  );
};

export default Dashboard;
