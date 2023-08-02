import { useState } from "react";
import AllEvents from "./Events/AllEvents";
import NavDashboard from "./Navbar/NavDashboard";
import SideMenubar from "./Navbar/SideMenubar";
import { ApiProvider } from "../UseContext/ApiContext";

const Dashboard = () => {
  const [isSidebarOpen, setSideBarOpen] = useState(false);

  const toggleMenu = () => {
    setSideBarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <NavDashboard onToggleBar={toggleMenu} />
      <div className=" pt-[3.2rem] flex">
        <SideMenubar isOpen={isSidebarOpen} />

        <div className="flex-grow">
          <ApiProvider>
            <AllEvents />
          </ApiProvider>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
