import { useState } from "react";
import logo from "../../../images/showroomlogowhite.png";
import { HiOutlineSearch, HiMenuAlt1, HiX } from "react-icons/hi";

const NavDashboard = ({ onToggleBar }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    onToggleBar(!isSidebarOpen);
  };

  return (
    <div className="fixed w-full z-[30]">
      <div className="flex justify-between items-center p-2 bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800">
        <div className="flex items-center px-2">
          <button
            className="text-2xl text-white mr-4 "
            type="button"
            onClick={toggleSidebar}
          >
            {!isSidebarOpen ? <HiMenuAlt1 /> : <HiX />}
          </button>
          <a href="/dashboard" className="flex items-center">
            <img src={logo} className="h-5" alt="Flowbite Logo" />
          </a>
        </div>
        <form className="hidden md:flex ">
          <label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center text-xl text-gray-500 pl-3">
                <HiOutlineSearch />
              </div>
              <input
                type="text"
                id="mobile-search"
                className="pl-10 text-md leading-[1.25rem] font-normal focus:ring-1  focus:ring-gray-800"
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
    </div>
  );
};

export default NavDashboard;
