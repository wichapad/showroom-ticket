import { useState } from "react";
import logo from "../../../../images/showroomlogowhite.png";
import { HiOutlineSearch, HiMenuAlt1, HiX } from "react-icons/hi";
import SideMunubar from "./SideMenubar";

const NavDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="fixed w-full z-50">
      <div className="relative z-[999] flex justify-between items-center p-2 bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800">
        <div className="flex items-center px-2">
          <button
            className="text-2xl text-white mr-4 "
            type="button"
            onClick={toggleSidebar}
          >
            {!isSidebarOpen ? <HiMenuAlt1 /> : <HiX />}
          </button>
          <a href="/" className="flex items-center">
            <img src={logo} className="h-5" alt="Flowbite Logo" />
          </a>
        </div>
        <form className="hidden md:flex  ">
          <label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center text-xl text-gray-500 pl-3">
                <HiOutlineSearch />
              </div>
              <input
                type="text"
                className="py-2 pl-[2.5rem] w-[250px] rounded-lg text-md font-normal "
                placeholder="Search"
              />
            </div>
          </label>
        </form>
        <div className="flex items-center px-2">
          <div className="text-xl text-white mr-2 md:hidden">
            <HiOutlineSearch className="cursor-pointer" />
          </div>

          <div className="bg-gray-900 w-[35px] h-[35px] rounded-full"></div>
        </div>
      </div>
      <SideMunubar isOpen={isSidebarOpen} />
    </div>
  );
};

export default NavDashboard;
