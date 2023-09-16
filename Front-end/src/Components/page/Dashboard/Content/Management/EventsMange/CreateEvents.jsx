// Component create new artist. When input values in the input attribute and select velues inselect arttlibute will keep values in state artistsForm.
// After click create will send value keep back to  database

import React, { useState } from "react";
import { useContext } from "react";
import { HiX } from "react-icons/hi";
import { ApiContext } from "../../../../../UseContext/ApiContext";
import { DashboardContext } from "../../../../../UseContext/DashboardContext";
import axios from "axios";

const CreateEvents = () => {
  const { artistsList, venuesList } = useContext(ApiContext);
  const { state, dispatch } = useContext(DashboardContext);

  // Create state to keep value venues
  const [eventForm, setEventForm] = useState([
    {
      event_name: "",
      event_date: "",
      event_time: "",
      artist_id: "",
      venue_id: "",
    },
  ]);

  //Function store new value in state venueForm
  const inputValueEvents = (index) => (e) => {
    const { name, value } = e.target;
    const newList = [...eventForm];
    newList[index][name] = value;
    setEventForm(newList);
  };

  // Add fields new another venues
  const addFields = (e) => {
    e.preventDefault();
    setEventForm([
      ...eventForm,
      {
        event_name: "",
        event_date: "",
        event_time: "",
        artist_id: "",
        venue_id: "",
      },
    ]);
  };

  // Remove fields new another venues
  const removeFields = (index) => {
    const newList = [...eventForm];
    newList.splice(index, 1);
    setEventForm(newList);
  };

  //HTTP create events
  const createEvents = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_API}/api/events/create`,
        eventForm
      );
      setEventForm([
        {
          event_name: "",
          event_date: "",
          event_time: "",
          artist_id: "",
          venue_id: "",
        },
      ]);
      alert("Create venue successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error creating events", error);
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
          <h1 className="text-center uppercase">Create events</h1>
          <form onSubmit={createEvents}>
            <div>
              {eventForm.map((event, index) => (
                <div key={index}>
                  {index > 0 && (
                    <div className="text-end">
                      <button type="button" onClick={() => removeFields(index)}>
                        <HiX />
                      </button>
                    </div>
                  )}
                  <div className="flex flex-col">
                    <label>Event</label>
                    <input
                      className="manage_input "
                      type="text"
                      name="event_name"
                      value={event.event_name}
                      onChange={inputValueEvents(index)}
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <label>Date</label>
                      <input
                        className="manage_input "
                        type="date"
                        name="event_date"
                        value={event.event_date}
                        onChange={inputValueEvents(index)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label>Time</label>
                      <input
                        className="manage_input "
                        type="time"
                        name="event_time"
                        value={event.event_time}
                        onChange={inputValueEvents(index)}
                      />
                    </div>
                  </div>
                  <div className="my-2">
                    <div className="flex flex-col">
                      <label>Artist</label>
                      <select
                        className="w-full manage_input"
                        name="artist_id"
                        value={event.artist_id}
                        onChange={inputValueEvents(index)}
                      >
                        <option>Select artist</option>
                        {artistsList.map((artist) => (
                          <option
                            key={artist.artist_id}
                            value={artist.artist_id}
                          >
                            {artist.artist_name}
                          </option>
                        ))}
                      </select>
                      <label>Venue</label>
                      <select
                        className="w-full manage_input"
                        name="venue_id"
                        value={event.venue_id}
                        onChange={inputValueEvents(index)}
                      >
                        <option>Select venue</option>
                        {venuesList.map((venue) => (
                          <option key={venue.venue_id} value={venue.venue_id}>
                            {venue.venue_name}
                          </option>
                        ))}
                      </select>
                    </div>
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
            <div className="flex justify-evenly mt-3">
              <button
                type="submit"
                className="px-4 py-3 rounded-lg bg-blue-700 text-white hover:bg-blue-800"
              >
                Create
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

export default CreateEvents;
