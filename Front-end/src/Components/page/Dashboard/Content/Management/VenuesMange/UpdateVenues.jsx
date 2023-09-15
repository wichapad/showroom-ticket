// Component update new Venues. When input values in the input attribute and select velues inselect arttlibute will keep values in state venuesForm.
// After click update will send value keep back to  database

import { useContext, useEffect, useState } from "react";
import { HiX } from "react-icons/hi";
import { DashboardContext } from "../../../../../UseContext/DashboardContext";
import axios from "axios";

const UpdateVenues = ({ venue }) => {
  const { state, dispatch } = useContext(DashboardContext);
  const [venueForm, setVenueForm] = useState({
    venue_name: "",
    venue_city: "",
    venue_state: "",
    venue_capacity: "",
  });

  // Use react hook useEffect to keep data venue by id from click update
  useEffect(() => {
    setVenueForm({
      venue_name: venue.venue_name,
      venue_city: venue.venue_city,
      venue_state: venue.venue_state,
      venue_capacity: venue.venue_capacity,
    });
  }, [venue]);

  //Function store new value in state venuesForm
  const inputValueVenues = (e) => {
    const { name, value } = e.target;
    setVenueForm({
      ...venueForm,
      [name]: value,
    });
  };

  //HTTP update venue
  const updateVenue = async (e, id) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API}/api/venues/${id}`,
        venueForm
      );
      if (response.status === 200) {
        alert("Venues update is successfully");
        window.location.reload();
      } else {
        console.error("Fail to update venue");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //close Add event page
  const toggleClose = () => {
    dispatch({ type: "TOGGLE_UPDATE" });
  };

  return (
    <>
      <div
        className={`${
          state.isUpdate ? "translate-x-0" : "translate-x-full"
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
          <h1 className="text-center uppercase">Update venues</h1>
          <form onSubmit={(e) => updateVenue(e, venue.venue_id)}>
            <div>
              <label>Venue</label>
              <input
                className="border border-gray-300 rounded p-[0.35rem]  focus:border-gray-700 outline-none appearance-none "
                type="text"
                name="venue_name"
                value={venueForm.venue_name || ""}
                onChange={inputValueVenues}
              />
            </div>
            <div className="my-2">
              <label>City</label>
              <input
                className="border border-gray-300 rounded p-[0.35rem]  focus:border-gray-700 outline-none appearance-none "
                type="text"
                name="venue_city"
                value={venueForm.venue_city || ""}
                onChange={inputValueVenues}
              />
            </div>
            <div>
              <label>State</label>
              <input
                className="border border-gray-300 rounded p-[0.35rem]  focus:border-gray-700 outline-none appearance-none "
                type="text"
                name="venue_state"
                value={venueForm.venue_state || ""}
                onChange={inputValueVenues}
              />
            </div>
            <div className="my-2">
              <label>Capacity</label>
              <input
                className="border border-gray-300 rounded p-[0.35rem]  focus:border-gray-700 outline-none appearance-none "
                type="text"
                name="venue_capacity"
                value={venueForm.venue_capacity || ""}
                onChange={inputValueVenues}
              />
            </div>

            <div className="flex justify-evenly mt-3">
              <button
                type="submit"
                className="px-4 py-3 rounded-lg bg-blue-700 text-white hover:bg-blue-800"
              >
                Update
              </button>
              <button
                onClick={toggleClose}
                className="px-4 py-3 rounded-lg bg-red-700 text-white hover:bg-red-800"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateVenues;
