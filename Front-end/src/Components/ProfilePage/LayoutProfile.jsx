import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Blackdrop from "../Blackdrop";
import Header from "../HomePage/Header";

const LayoutProfile = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

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
    <div className=" flex flex-col  items-center">
      <Header />
      <div className="p-4">
        <div className=" border-b-2 uppercase md:hidden">
          <div className="relative text-center p-2  n" ref={menuRef}>
            <button
              className="border uppercase rounded-lg py-2 px-3"
              onClick={() => setShowMenu(!showMenu)}
            >
              Menu
            </button>
          </div>
          {/* mobile menu layout */}
          <div className={`${showMenu ? "" : "hidden"} `}>
            <div className="fixed z-[50] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
              <div className="flex flex-col items-center w-[350px] bg-white rounded-xl">
                <NavLink
                  to="/user/profile"
                  className="menu-mobile border-b border-gray-300"
                >
                  Profile
                </NavLink>
                <NavLink
                  to="/user/myticket"
                  className="menu-mobile border-b border-gray-300"
                >
                  My Ticket
                </NavLink>
                <NavLink
                  to="/user/history"
                  className="menu-mobile border-b border-gray-300"
                >
                  Purchase History
                </NavLink>
                <NavLink to="/user/changepassword" className="menu-mobile ">
                  Change Password
                </NavLink>
              </div>
            </div>
            <Blackdrop />
          </div>
        </div>
        {/* laptop - desktop menu layout */}
        <div className="hidden md:block">
          <div className="p-2 border-b-2 ">
            <NavLink to="/user/profile" className="p-2 hover:text-purple-600">
              Profile
            </NavLink>
            <NavLink to="/user/myticket" className="p-2 hover:text-purple-600">
              My Ticket
            </NavLink>
            <NavLink to="/user/history" className="p-2 hover:text-purple-600">
              Purchase History
            </NavLink>
            <NavLink
              to="/user/changepassword"
              className=" p-2 hover:text-purple-600"
            >
              Change Password
            </NavLink>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutProfile;
