// Component create new artist. When input values in the input attribute and select velues inselect arttlibute will keep values in state artistsForm.
// After click create will send value keep back to  database

import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { HiX } from "react-icons/hi";
import { ApiContext } from "../../../../../UseContext/ApiContext";
import { DashboardContext } from "../../../../../UseContext/DashboardContext";
import axios from "axios";

const UpdateEvents = ({ event }) => {
  const { artistsList, venuesList } = useContext(ApiContext);
  const { state, dispatch } = useContext(DashboardContext);

  // Create state to keep value venues
  const [eventForm, setEventForm] = useState({
    event_name: "",
    event_date: "",
    event_time: "",
    artist_id: "",
    venue_id: "",
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    return `${year}/${formattedMonth}/${formattedDay}`;
  };

  // Use react hook useEffect to keep data event by id from click update
  useEffect(() => {
    setEventForm({
      event_name: event.event_name,
      event_date: event.event_date,
      event_time: event.event_time,
      artist_id: event.artist_id,
      venue_id: event.venue_id,
    });
  }, [event]);

  //Function store new value in state eventForm
  const inputValueEvents = (e) => {
    const { name, value } = e.target;
    setEventForm({
      ...eventForm,
      [name]: value,
    });
  };

  //HTTP update event
  const updateEvent = async (e, id) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API}/api/events/${id}`,
        eventForm
      );
      if (response.status === 200) {
        alert("Event update is successfully");
        window.location.reload();
      } else {
        console.error("Fail to update Event");
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
          <h1 className="text-center uppercase">Update events</h1>
          <form onSubmit={(e) => updateEvent(e, event.event_id)}>
            <div>
              <div>
                <div className="flex flex-col">
                  <label>Event</label>
                  <input
                    className="manage_input "
                    type="text"
                    name="event_name"
                    value={eventForm.event_name || ""}
                    onChange={inputValueEvents}
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <label>Date</label>
                    <input
                      className="manage_input "
                      type="text"
                      name="event_date"
                      value={formatDate(eventForm.event_date || "")}
                      onChange={inputValueEvents}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label>Time</label>
                    <input
                      className="manage_input "
                      type="time"
                      name="event_time"
                      value={eventForm.event_time || ""}
                      onChange={inputValueEvents}
                    />
                  </div>
                </div>
                <div className="my-2">
                  <div className="flex flex-col">
                    <label>Artist</label>
                    <select
                      className="w-full manage_input"
                      name="artist_id"
                      value={eventForm.artist_id || ""}
                      onChange={inputValueEvents}
                    >
                      <option>Select artist</option>
                      {artistsList.map((artist) => (
                        <option key={artist.artist_id} value={artist.artist_id}>
                          {artist.artist_name}
                        </option>
                      ))}
                    </select>
                    <label>Venue</label>
                    <select
                      className="w-full manage_input"
                      name="venue_id"
                      value={eventForm.venue_id || ""}
                      onChange={inputValueEvents}
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
              </div>
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

export default UpdateEvents;
