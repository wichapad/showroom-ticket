import { useState } from "react";
import logo from "../../../../../images/showroomlogowhite.png";
import { HiOutlineSearch, HiMenuAlt1, HiX } from "react-icons/hi";

const NavDashboard = ({ onToggleBar }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    onToggleBar(!isSidebarOpen);
  };

  return (
    <div className="fixed z-40 w-full">
      <div className="flex justify-between items-center p-2 bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800">
        <div className="flex items-center px-2">
          <button
            className="text-2xl text-white mr-4 "
            type="button"
            onClick={toggleSidebar}
          >
            {!isSidebarOpen ? (
              <HiMenuAlt1 className="md:hidden" />
            ) : (
              <HiX className="md:hidden" />
            )}
          </button>
          <a href="/" className="flex items-center">
            <img src={logo} className="h-5" alt="Flowbite Logo" />
          </a>
        </div>

        <div className="flex items-center px-2">
          <div className="bg-gray-900 w-[35px] h-[35px] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default NavDashboard;
