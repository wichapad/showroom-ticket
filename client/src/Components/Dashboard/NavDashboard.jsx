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
  HiSupport,
} from "react-icons/hi";
import { FaGithub,FaMicrophone } from "react-icons/fa";

const NavDashboard = () => {
  const [menuBar, setMenuBar] = useState(false);
  const [productBar, setProductBar] = useState(false);
  const [userBar, setUserBar] = useState(false);

  const toggleMenu = (menu) => {
    if (menu === "menu") {
      setMenuBar(!menuBar);
    } else if (menu === "product") {
      setProductBar(!productBar);
    } else if (menu === "user") {
      setUserBar(!userBar);
    }
  };

  return (
    <div className="fixed z-50 w-full">
      <div className="flex justify-between items-center p-2 bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800">
        <div className="flex items-center px-2">
          <button
            className="text-2xl text-white mr-4 "
            type="button"
            onClick={() => {
              toggleMenu("menu");
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
      {/* Menu Bars */}
      <div
        className={`${menuBar ? "" : "hidden"} `}
        style={{ background: "rgba(0,0,0,0.7)" }}
      >
        <div className=" w-[250px] h-[100vh] overflow-auto  rounded-b-r bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800">
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
            <li className="my-2">
              <div className="flex p-2 items-center text-slate-200 hover:text-white transition duration-300 ease-in-out hover:bg-slate-800 rounded-lg cursor-pointer">
                <HiChartPie className="text-2xl mr-2" />
                <p className="text-lg text-white font-light">Dashboard</p>
              </div>
            </li>
            {/* Inbox Menu*/}
            <li>
              <div className="flex p-2 items-center text-slate-200 hover:text-white transition duration-300 ease-in-out hover:bg-slate-800 rounded-lg cursor-pointer">
                <HiInboxIn className="text-2xl  mr-2" />
                <p className="text-lg text-white font-light">Inbox</p>
              </div>
            </li>
            <li>
              <div className="flex p-2 items-center text-slate-200 hover:text-white transition duration-300 ease-in-out hover:bg-slate-800 rounded-lg cursor-pointer">
                <FaMicrophone className="text-2xl  mr-2" />
                <p className="text-lg text-white font-light">Events</p>
              </div>
            </li>

            {/* Products Menu*/}
            <li className="my-2">
              <div className="flex p-2  text-slate-200 hover:text-white transition duration-300 ease-in-out hover:bg-slate-800 rounded-lg cursor-pointer">
                <button
                  className="flex justify-between items-center w-full"
                  type="button"
                  onClick={() => {
                    toggleMenu("product");
                  }}
                >
                  <div className="flex">
                    <HiShoppingBag className="text-2xl  mr-2" />
                    <p className="text-lg text-white font-light">Products</p>
                  </div>
                  <HiChevronDown />
                </button>
              </div>
              {!productBar ? (
                ""
              ) : (
                <ul className="text-lg text-gray-900 font-light">
                  <li>
                    <div className="flex p-2 justify-between items-center text-slate-200 hover: transition duration-300 ease-in-out hover:bg-slate-800 rounded-lg cursor-pointer">
                      <p className="pl-8 text-lg text-white font-light">
                        Tickets
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex p-2 justify-between items-center text-slate-200 hover: transition duration-300 ease-in-out hover:bg-slate-800 rounded-lg cursor-pointer">
                      <p className="pl-8 text-lg text-white font-light">Shop</p>
                    </div>
                  </li>
                </ul>
              )}
            </li>
            {/* Users Menu*/}
            <li>
              <div className="flex p-2  text-slate-200 hover:text-white transition duration-300 ease-in-out hover:bg-slate-800 rounded-lg cursor-pointer">
                <button
                  className="flex justify-between items-center w-full"
                  type="button"
                  onClick={() => {
                    toggleMenu("user");
                  }}
                >
                  <div className="flex">
                    <HiUsers className="text-2xl  mr-2" />
                    <p className="text-lg text-white font-light">Users</p>
                  </div>
                  <HiChevronDown />
                </button>
              </div>
              {!userBar ? (
                ""
              ) : (
                <ul className="text-lg text-white font-light">
                  <li>
                    <div className="flex p-2 justify-between items-center text-slate-200 hover:text-gray-900 transition duration-300 ease-in-out hover:bg-slate-800 rounded-lg cursor-pointer">
                      <p className="pl-8 text-lg text-white font-light">
                        Users List
                      </p>
                    </div>
                  </li>
                </ul>
              )}
            </li>
            <div className="my-2 border opacity-25"></div>
            <li>
              <div className="flex p-2 items-center text-slate-200 hover:text-white transition duration-300 ease-in-out hover:bg-slate-800 rounded-lg cursor-pointer">
                <FaGithub className="text-2xl  mr-2" />
                <p className="text-lg text-white font-light">
                  GitHub Repository
                </p>
              </div>
            </li>
            <li className="my-2">
              <div className="flex p-2 items-center text-slate-200 hover:text-white transition duration-300 ease-in-out hover:bg-slate-800 rounded-lg cursor-pointer">
                <HiSupport className="text-2xl  mr-2" />
                <p className="text-lg text-white font-light">Support</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavDashboard;
