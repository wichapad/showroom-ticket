// Component delete Venues by id

import { useContext } from "react";
import { HiX } from "react-icons/hi";
import { DashboardContext } from "../../../../../UseContext/DashboardContext";
import axios from "axios";

const DeleteVenues = ({ venue }) => {
  const { state, dispatch } = useContext(DashboardContext);

  const deleteVenue = async (id) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API}/api/venues/${id}`
      );
      if (response.status === 200) {
        alert("Venue deleted successfully");
        window.location.reload();
      } else {
        console.error("Failed to delete venues.");
      }
    } catch (error) {
      console.error("An error occurred while delete venues", error);
    }
  };

  //close Add event page
  const toggleClose = () => {
    dispatch({ type: "TOGGLE_DELETE" });
  };

  return (
    <>
      <div
        className={`${
          state.isDelete ? "translate-x-0" : "translate-x-full"
        } fixed z-50 top-0 right-0 h-full  w-full overflow-y-auto bg-white transition-transform ease-in-out duration-300 `}
        style={{ width: "300px" }}
      >
        <div className="flex flex-col  p-4">
          <div
            onClick={toggleClose}
            className="text-[1.5rem] flex justify-end cursor-pointer"
          >
            <HiX />
          </div>
          <h1 className="text-center uppercase">Delete venues</h1>

          <div>
            <p>{venue.venue_name}</p>
          </div>
          <div className="my-2">
            <p>{venue.venue_city}</p>
          </div>
          <div>
            <p>{venue.venue_state}</p>
          </div>
          <div className="my-2">
            <p>{venue.venue_capacity}</p>
          </div>

          <button
            onClick={() => deleteVenue(venue.venue_id)}
            className="my-2 py-[0.6rem] uppercase rounded-lg bg-gray-800 text-white hover:bg-gray-900"
          >
            Confirm
          </button>
          <button
            onClick={toggleClose}
            className=" py-[0.6rem] uppercase rounded-lg bg-red-700 text-white hover:bg-red-800"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteVenues;
