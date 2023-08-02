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

const SideMunubar = ({ isOpen }) => {
  const [productBar, setProductBar] = useState(false);
  const [userBar, setUserBar] = useState(false);

  const toggleSubmenu = (menu) => {
    if (menu === "product") {
      setProductBar(!productBar);
    } else if (menu === "user") {
      setUserBar(!userBar);
    }
   
  };
  return (
    <div className={`fixed z-20 md:visible md:static  ${isOpen ? "" : "hidden"}`}>
      <div className="w-[230px] h-[100vh] overflow-auto  rounded-b-r bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800">
        <ul className="p-2">
          <li>
            <form className="md:hidden">
              <label>
                <div className="relative">
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
                  toggleSubmenu("product");
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
                  toggleSubmenu("user");
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
              <p className="text-lg text-white font-light">GitHub Repository</p>
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
  );
};

export default SideMunubar;
