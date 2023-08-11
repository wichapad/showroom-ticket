import {
  HiOutlineSearch,
  HiChartPie,
  HiInboxIn,
  HiShoppingBag,
  HiChevronDown,
  HiUsers,
  HiSupport,
} from "react-icons/hi";
import { FaGithub, FaMicrophone } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Blackdrop from "./Blackdrop";

const SideMunubar = ({ isOpen }) => {
  const [productBar, setProductBar] = useState(false);
  const [userBar, setUserBar] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSubmenu = (menu) => {
    if (menu === "product") {
      setProductBar(!productBar);
    } else if (menu === "user") {
      setUserBar(!userBar);
    }
  };
  // eslint-disable-next-line 
  const hoverSidebar = () => setShowSidebar(!showSidebar);

  return (
    <>
      <div
        className={`fixed z-20  md:flex ${isOpen ? "" : "hidden"}`}
      >
        <aside
          className={`relative z-20 ${
            showSidebar ? "md:w-[250px]" : "md:w-[50px] md:hover:w-[250px]"
          } w-[250px] h-[100vh] overflow-auto  rounded-b-r bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800`}
          style={{ transition: "width 0.2s ease-in-out" }}
        >
          <ul className="mt-2 px-[0.35rem] py-2">
            <li>
              <form className="md:hidden">
                <label>
                  <div className="relative p-1">
                    <div className="absolute inset-y-0 left-0 flex items-center text-xl text-gray-500 pl-3">
                      <HiOutlineSearch />
                    </div>
                    <input
                      type="text"
                      id="mobile-search"
                      className="py-2 pl-[2.5rem] rounded-lg shadow text-md font-normal "
                      placeholder="Search"
                    />
                  </div>
                </label>
              </form>
            </li>
            <li>
              <NavLink to="/dashboard">
                <div className="flex text-slate-200 hover:text-white transition duration-300 ease-in-out hover:bg-slate-800 rounded-lg cursor-pointer">
                  <div className="flex items-center px-2 py-3">
                    <div>
                      <HiChartPie className=" text-2xl mr-3" />
                    </div>
                    <div>
                      <div className="text-lg text-white font-light">
                        Dashboard
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </li>
            {/* Inbox Menu*/}
            <li>
              <NavLink to="#">
                <div className="flex text-slate-200 hover:text-white transition duration-300 ease-in-out hover:bg-slate-800 rounded-lg cursor-pointer">
                  <div className="flex items-center px-2 py-3">
                    <div>
                      <HiInboxIn className=" text-2xl mr-3" />
                    </div>
                    <div>
                      <div className="text-lg text-white font-light">Inbox</div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/events">
                <div className="flex text-slate-200 hover:text-white transition duration-300 ease-in-out hover:bg-slate-800 rounded-lg cursor-pointer">
                  <div className="flex items-center px-2 py-3">
                    <div>
                      <FaMicrophone className=" text-2xl mr-3" />
                    </div>
                    <div>
                      <div className="text-lg text-white font-light">
                        Events
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </li>

            {/* Products Menu*/}
            <li>
              <div className="flex px-2 py-3  text-slate-200 hover:text-white transition duration-300 ease-in-out hover:bg-slate-800 rounded-lg cursor-pointer">
                <button
                  className="flex justify-between items-center w-full"
                  type="button"
                  onClick={() => {
                    toggleSubmenu("product");
                  }}
                >
                  <div className="flex">
                    <HiShoppingBag className="text-2xl  mr-3" />
                    <p className="text-lg text-white font-light">Products</p>
                  </div>
                  <HiChevronDown className="text-xl" />
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
                      <p className="pl-8 text-lg text-white font-light">
                        Merch
                      </p>
                    </div>
                  </li>
                </ul>
              )}
            </li>
            {/* Users Menu*/}
            <li>
              <div className="flex px-2 py-3  text-slate-200 hover:text-white transition duration-300 ease-in-out hover:bg-slate-800 rounded-lg cursor-pointer">
                <button
                  className="flex justify-between items-center w-full"
                  type="button"
                  onClick={() => {
                    toggleSubmenu("user");
                  }}
                >
                  <div className="flex">
                    <HiUsers className="text-2xl  mr-3" />
                    <p className="text-lg text-white font-light">Users</p>
                  </div>
                  <HiChevronDown className="text-xl" />
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
            <div className="my-2 border opacity-25 "></div>
            <li>
              <NavLink to="#">
                <div className="flex text-slate-200 hover:text-white transition duration-300 ease-in-out hover:bg-slate-800 rounded-lg cursor-pointer">
                  <div className="flex items-center px-2 py-3">
                    <div>
                      <FaGithub className=" text-2xl mr-3" />
                    </div>
                    <div>
                      <div className="text-lg whitespace-nowrap text-white font-light">
                        Github Repository
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <div className="flex text-slate-200 hover:text-white transition duration-300 ease-in-out hover:bg-slate-800 rounded-lg cursor-pointer">
                  <div className="flex items-center px-2 py-3">
                    <div>
                      <HiSupport className=" text-2xl mr-3" />
                    </div>
                    <div>
                      <div className="text-lg text-white font-light">
                        Support
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </li>
          </ul>
        </aside>
        <Blackdrop />
      </div>
    </>
  );
};

export default SideMunubar;
