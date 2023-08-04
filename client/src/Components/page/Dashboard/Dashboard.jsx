import { useState } from "react";
import NavDashboard from "./Navbar/NavDashboard";
import SideMenubar from "./Navbar/SideMenubar";



const Dashboard = () => {
  const [isSidebarOpen, setSideBarOpen] = useState(false);

  const toggleMenu = () => {
    setSideBarOpen(!isSidebarOpen);
  };

  return (
    
      <div>
        <NavDashboard/>
        {/* <NavDashboard onToggleBar={toggleMenu} />
        <div className="pt-[3.2rem] overflow-hidden flex">
          <SideMenubar isOpen={isSidebarOpen} />
          <div className="overflow-y-auto w-full h-full"></div>
        </div> */}
      </div>

  );
};

export default Dashboard;
