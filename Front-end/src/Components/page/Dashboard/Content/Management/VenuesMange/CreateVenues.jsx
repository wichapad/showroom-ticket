// Component create new Venues. When input values in the input attribute and select velues inselect arttlibute will keep values in state venuesForm.
// After click create will send value keep back to  database

import { useContext, useState } from "react";
import { HiX } from "react-icons/hi";
import { DashboardContext } from "../../../../../UseContext/DashboardContext";
import axios from "axios";

const CreateVenues = () => {
  const { state, dispatch } = useContext(DashboardContext);

  // Create state to keep value venues
  const [venueForm, setVenueForm] = useState([
    {
      venue_name: "",
      venue_city: "",
      venue_state: "",
      venue_capacity: "",
    },
  ]);

  //Function store new value in state venueForm
  const inputValueVenue = (index) => (e) => {
    const { name, value } = e.target;
    const newList = [...venueForm];
    newList[index][name] = value;
    setVenueForm(newList);
  };

  // Add fields new another venues
  const addFields = (e) => {
    e.preventDefault();
    setVenueForm([
      ...venueForm,
      {
        venue_name: "",
        venue_city: "",
        venue_state: "",
        venue_capacity: "",
      },
    ]);
  };

  // Remove fields new another venues
  const removeFields = (index) => {
    const newList = [...venueForm];
    newList.splice(index, 1);
    setVenueForm(newList);
  };

  //HTTP create venues
  const createVenues = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_API}/api/venues/create`,
        venueForm
      );
      setVenueForm([
        {
          venue_name: "",
          venue_city: "",
          venue_state: "",
          venue_capacity: "",
        },
      ]);
      alert("Create venue successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error creating artist", error);
    }
  };

  //close Add event page
  const toggleClose = () => {
    dispatch({ type: "TOGGLE_CREATE" });
  };

  return (
    <>
      <div
        className={`${
          state.isCreate ? "translate-x-0" : "translate-x-full"
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
          <h1 className="text-center uppercase">Create venues</h1>
          <form onSubmit={createVenues}>
            <div>
              {venueForm.map((venue, index) => (
                <div key={index}>
                  {index > 0 && (
                    <div className="text-end">
                      <button type="button" onClick={() => removeFields(index)}>
                        <HiX />
                      </button>
                    </div>
                  )}
                  <div>
                    <label>Venue</label>
                    <input
                      className="manage_input"
                      type="text"
                      name="venue_name"
                      value={venue.venue_name}
                      onChange={inputValueVenue(index)}
                    />
                  </div>
                  <div className="my-2">
                    <label>City</label>
                    <input
                      className="manage_input"
                      type="text"
                      name="venue_city"
                      value={venue.venue_city}
                      onChange={inputValueVenue(index)}
                    />
                  </div>
                  <div>
                    <label>State</label>
                    <input
                      className="manage_input"
                      type="text"
                      name="venue_state"
                      value={venue.venue_state}
                      onChange={inputValueVenue(index)}
                    />
                  </div>
                  <div className="my-2">
                    <label>Capacity</label>
                    <input
                      className="manage_input"
                      type="text"
                      name="venue_capacity"
                      value={venue.venue_capacity}
                      onChange={inputValueVenue(index)}
                    />
                  </div>
                  <hr className="border border-gray-400 my-4 " />
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-2">
              <button
                onClick={addFields}
                className="w-[50px] py-1 text-[1.2rem] rounded-lg border border-purple-700 text-purple-700 hover:text-white hover:bg-purple-800"
              >
                +
              </button>
            </div>
            <div className="my-2">
              <button
                type="submit"
                className="w-full uppercase py-[0.6rem] rounded-lg bg-gray-800 text-white hover:bg-gray-900"
              >
                Update
              </button>
            </div>
          </form>
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

export default CreateVenues;
