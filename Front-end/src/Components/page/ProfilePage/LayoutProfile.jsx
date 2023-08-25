import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Blackdrop from "../Dashboard/LayoutDashboard/Navbar/Blackdrop";

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
    <div className=" pt-[5rem] flex flex-col  items-center">
      <div>
        <div className=" border-b-2 uppercase">
          <div className="relative text-center p-2  sm:hidden" ref={menuRef}>
            <button
              className="border uppercase rounded-lg py-2 px-3"
              onClick={() => setShowMenu(!showMenu)}
            >
              Menu
            </button>
          </div>
          <div className={`${showMenu ? "" : "hidden"}`}>
            <div className="absolute z-[50] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
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
                <NavLink className="menu-mobile border-b border-gray-300">
                  Purchase History
                </NavLink>
                <NavLink className="menu-mobile ">Change Password</NavLink>
              </div>
            </div>
            <Blackdrop />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutProfile;
