import { useState } from "react";
import logo from "../../images/showroomlogowhite.png";
import {
  HiOutlineSearch,
  HiMenuAlt1,
  HiX,
  HiChartPie,
  HiInboxIn,
  HiShoppingBag,
  HiChevronDown,
  HiUsers,
} from "react-icons/hi";

const NavDashboard = () => {
  const [menuBar, setMenuBar] = useState(false);

  const togglerMenuBar = (bar) => {
    if (bar === "menu") {
      setMenuBar(!menuBar);
    }
  };
  return (
    <div className="fixed w-full">
      <div className="flex justify-between items-center p-2 bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800">
        <div className="flex items-center px-2">
          <button
            className="text-2xl text-white mr-4 "
            type="button"
            onClick={() => {
              togglerMenuBar("menu");
            }}
          >
            {!menuBar ? <HiMenuAlt1 /> : <HiX />}
          </button>
          <a href="/dashboard" className="flex items-center">
            <img src={logo} className="h-5" alt="Flowbite Logo" />
          </a>
        </div>
        <div className="flex items-center px-2">
          <div className="text-xl text-white mr-2">
            <HiOutlineSearch className="cursor-pointer" />
          </div>
          <div className="bg-gray-900 w-[35px] h-[35px] rounded-full"></div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800">
        <ul className="p-4">
          <li>
            <form>
              <label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center text-xl text-gray-500 pl-3">
                    <HiOutlineSearch />
                  </div>
                  <input
                    type="text"
                    id="mobile-search"
                    className="pl-10 text-md font-normal focus:ring-1  focus:ring-gray-800"
                    placeholder="Search"
                  />
                </div>
              </label>
            </form>
          </li>
          <li>
            <div className="flex p-2 items-center text-slate-200 hover:text-white transition duration-300 ease-in-out hover:bg-slate-800 rounded-lg cursor-pointer">
              <HiChartPie className="text-2xl mr-2" />
              <p className="text-lg text-white font-light">Dashboard</p>
            </div>
          </li>
          {/* Inbox Menu*/}
          <li>
            <div className="flex p-2 items-center text-slate-200 hover:text-gray-900 transition duration-300 ease-in-out hover:bg-slate-800 rounded-lg cursor-pointer">
              <HiInboxIn className="text-2xl  mr-2" />
              <p className="text-lg text-white font-light">Inbox</p>
            </div>
          </li>

          {/* Products Menu*/}
          <li>
            <div className="flex p-2 justify-between items-center text-slate-200 hover:text-gray-900 transition duration-300 ease-in-out hover:bg-slate-800 rounded-lg cursor-pointer">
              <button className="flex">
                <HiShoppingBag className="text-2xl  mr-2" />
                <p className="text-lg text-white font-light">Products</p>
              </button>
              <HiChevronDown />
            </div>
            <ul className="text-lg text-gray-900 font-light">
              <li>
                <div className="flex p-2 justify-between items-center text-slate-200 hover:text-gray-900 transition duration-300 ease-in-out hover:bg-slate-800 rounded-lg cursor-pointer">
                  <a className="pl-8 text-lg text-white font-light">Tickets</a>
                </div>
              </li>
              <li>
                <div className="flex p-2 justify-between items-center text-slate-200 hover:text-gray-900 transition duration-300 ease-in-out hover:bg-slate-800 rounded-lg cursor-pointer">
                  <a className="pl-8 text-lg text-white font-light">Shop</a>
                </div>
              </li>
            </ul>
          </li>
          {/* Users Menu*/}
          <li>
            <div className="flex p-2 justify-between items-center text-slate-200 hover:text-gray-900 transition duration-300 ease-in-out hover:bg-slate-800 rounded-lg cursor-pointer">
              <button className="flex">
                <HiUsers className="text-2xl  mr-2" />
                <p className="text-lg text-white font-light">Users</p>
              </button>
              <HiChevronDown />
            </div>
            <ul className="text-lg text-white font-light">
              <li>
                <div className="flex p-2 justify-between items-center text-slate-200 hover:text-gray-900 transition duration-300 ease-in-out hover:bg-slate-800 rounded-lg cursor-pointer">
                  <a className="pl-8 text-lg text-white font-light">
                    Users List
                  </a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavDashboard;
