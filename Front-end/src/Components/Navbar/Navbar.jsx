import logo from "../../images/showroomlogowhite.png";
import { NavLink, Link } from "react-router-dom";
import { getAdminId, getClientId, logout } from "../Auth/services/autherize";
import { FaBars } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  // click anywhere outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="fixed w-full border-gray-200 z-50 bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800">
        <div
          className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
          ref={menuRef}
        >
          <Link to="/" className="flex items-center">
            <img src={logo} className="h-5" alt="Flowbite Logo" />
          </Link>
          <button
            className="text-xl text-gray-200 block md:hidden"
            onClick={() => setShowMenu(!showMenu)}
          >
            <FaBars />
          </button>
          <div
            className={`${showMenu ? "" : "hidden"} w-full md:block md:w-auto`}
          >
            <ul className=" flex flex-col  p-4 md:p-0 mt-4 border border-amber-300 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
              <li>
                <NavLink
                  to="/"
                  className="navbar-li-mobile md:hover:border-none md:hover:text-amber-400 md:p-0"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events"
                  className="navbar-li-mobile  md:hover:border-none md:hover:text-amber-400 md:p-0"
                >
                  Event
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shop"
                  className="navbar-li-mobile md:hover:border-none md:hover:text-amber-400 md:p-0"
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/news"
                  className="navbar-li-mobile md:hover:border-none md:hover:text-amber-400 md:p-0"
                >
                  News
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="navbar-li-mobile md:hover:border-none md:hover:text-amber-400 md:p-0"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div
            className={`${showMenu ? "" : "hidden"} w-full md:block md:w-auto`}
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-amber-300 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
              {!getClientId() && !getAdminId() ? (
                <>
                  <li>
                    <NavLink
                      to="/login"
                      className="navbar-li-mobile md:hover:border-none md:hover:text-amber-400 md:p-0"
                    >
                      Sign In
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/register"
                      className="navbar-li-mobile md:hover:border-none md:hover:text-amber-400 md:p-0"
                    >
                      Sign Up
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  {getAdminId() && (
                    <li>
                      <NavLink
                        to="/dashboard"
                        className="navbar-li-mobile md:hover:border-none md:hover:text-amber-400 md:p-0"
                      >
                        Controls
                      </NavLink>
                    </li>
                  )}
                  <li>
                    <NavLink
                      to="/user/profile"
                      className="navbar-li-mobile md:hover:border-none md:hover:text-amber-400 md:p-0"
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() => logout(() => (window.location = "/"))}
                      className=" navbar-li-mobile md:hover:border-none md:hover:text-amber-400 md:p-0"
                    >
                      Log Out
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
