import { NavLink } from "react-router-dom";

const NoTicket = () => {
  return (
    <div>
      <div className="p-[15rem] flex justify-center items-center">
        <div className="flex flex-col items-center text-lg">
          <p>Sorry, There are currently no seat selections available.</p>
          <p>
            Wait for the announcement of the opening date for the sale of seats
            on the page.
          </p>
          <div>
            <NavLink to='/'>
              <button className="mt-2 px-3 py-2 rounded bg-gradient-to-r from-purple-600 via-violet-700 to-purple-600">
                <p className="text-base text-white">Back to page</p>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoTicket;
