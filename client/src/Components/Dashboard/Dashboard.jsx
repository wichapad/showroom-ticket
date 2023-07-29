import { useState } from "react";
import AllEvents from "./Events/AllEvents";
import NavDashboard from "./Navbar/NavDashboard";
import SideMenubar from "./Navbar/SideMenubar";

const Dashboard = () => {
  const [isSidebarOpen, setSideBarOpen] = useState(false);

  const toggleMenu = () => {
    setSideBarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <NavDashboard onToggleBar={toggleMenu} />
      <div className=" pt-[3.5rem] flex whitespace-nowrap">
        <SideMenubar isOpen={isSidebarOpen} />

        <div className="flex-grow">
          <AllEvents />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
