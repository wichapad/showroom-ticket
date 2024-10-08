import {
  HiChartPie,
  HiInboxIn,
  HiShoppingBag,
  HiChevronDown,
  HiUsers,
  HiSupport,
  HiDatabase,
} from "react-icons/hi";
import { FaGithub, FaTable } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const SideMunubar = () => {
  const [productBar, setProductBar] = useState(false);
  const [userBar, setUserBar] = useState(false);
  const [manage, setManage] = useState(false);


  const toggleSubmenu = (menu) => {
    if (menu === "product") {
      setProductBar(!productBar);
    } else if (menu === "user") {
      setUserBar(!userBar);
    } else if (menu === "manage") {
      setManage(!manage);
    }
  };

  return (
    <>
      <div className="mt-[3rem]">
        <aside
          className="sidebar_container"
        >
          <ul className="mt-2 px-[0.35rem] py-2">
            <li>
              <NavLink to="/dashboard">
                <div className="menu-sidebar-container">
                  <div className="menu-sidebar-inside">
                    <div>
                      <HiChartPie className=" icons-sidebar" />
                    </div>
                    <div>
                      <div className="text-sidebar">Dashboard</div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </li>
            {/* Inbox Menu*/}
            <li>
              <NavLink to="#">
                <div className="menu-sidebar-container">
                  <div className="menu-sidebar-inside">
                    <div>
                      <HiInboxIn className=" icons-sidebar" />
                    </div>
                    <div>
                      <div className="text-sidebar">Inbox</div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/tour">
                <div className="menu-sidebar-container">
                  <div className="menu-sidebar-inside">
                    <div>
                      <FaTable className=" icons-sidebar" />
                    </div>
                    <div>
                      <div className="text-sidebar">Schedule</div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </li>
            {/* Products Menu*/}
            <li>
              <div className="sidebar-dropdown-container">
                <button
                  className="sidebar-dropdown-button"
                  type="button"
                  onClick={() => {
                    toggleSubmenu("product");
                  }}
                >
                  <div className="flex">
                    <HiShoppingBag className="icons-sidebar" />
                    <p className="text-sidebar">Products</p>
                  </div>
                  <HiChevronDown className="text-xl" />
                </button>
              </div>

              {!productBar ? (
                ""
              ) : (
                <ul className="text-sidebar">
                  <li>
                    <NavLink
                      to="/dashboard/tickets"
                      className="sidebar-dropdown-li"
                    >
                      <p className="pl-8 text-sidebar">Tickets</p>
                    </NavLink>
                  </li>
                  <li>
                    <div className="sidebar-dropdown-li">
                      <p className="pl-8 text-sidebar">Merch</p>
                    </div>
                  </li>
                </ul>
              )}
            </li>
            {/* Users Menu*/}
            <li>
              <div className="sidebar-dropdown-container">
                <button
                  className="sidebar-dropdown-button"
                  type="button"
                  onClick={() => {
                    toggleSubmenu("user");
                  }}
                >
                  <div className="flex">
                    <HiUsers className="icons-sidebar" />
                    <p className="text-sidebar">Users</p>
                  </div>
                  <HiChevronDown className="text-xl" />
                </button>
              </div>

              {!userBar ? (
                ""
              ) : (
                <ul className="text-sidebar">
                  <li>
                    <div className="sidebar-dropdown-li">
                      <p className="pl-8 text-sidebar">Users List</p>
                    </div>
                  </li>
                </ul>
              )}
            </li>
            <div className="my-2 border opacity-25 "></div> {/* underline  */}
            <li>
              <div className="sidebar-dropdown-container">
                <button
                  className="sidebar-dropdown-button"
                  type="button"
                  onClick={() => {
                    toggleSubmenu("manage");
                  }}
                >
                  <div className="flex">
                    <HiDatabase className="icons-sidebar" />
                    <p className="text-sidebar">Management</p>
                  </div>
                  <HiChevronDown className="text-xl" />
                </button>
              </div>

              {!manage ? (
                ""
              ) : (
                <ul className="text-sidebar">
                  <li>
                    <NavLink
                      to="/dashboard/artists"
                      className="sidebar-dropdown-li"
                    >
                      <p className="pl-8 text-sidebar">Artists</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/events"
                      className="sidebar-dropdown-li"
                    >
                      <p className="pl-8 text-sidebar">Events</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/venues"
                      className="sidebar-dropdown-li"
                    >
                      <p className="pl-8 text-sidebar">Venues</p>
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink to="#">
                <div className="menu-sidebar-container">
                  <div className="menu-sidebar-inside">
                    <div>
                      <FaGithub className=" icons-sidebar" />
                    </div>
                    <div>
                      <div className="text-sidebar whitespace-nowrap ">
                        Github Repository
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <div className="menu-sidebar-container">
                  <div className="menu-sidebar-inside">
                    <div>
                      <HiSupport className=" icons-sidebar" />
                    </div>
                    <div>
                      <div className="text-sidebar">Support</div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
};

export default SideMunubar;
