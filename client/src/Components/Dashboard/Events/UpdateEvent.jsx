import axios from "axios";
import { useState, useEffect } from "react";
import { HiX } from "react-icons/hi";

const UpdateEvent = ({ isVisible, handleUpdate }) => {
  const [closeUpdate, setCloseUpdate] = useState(false);

  const [eventList, setEventList] = useState([
    {
      event_name: "",
      event_date: "",
      event_time: "",
      artist_id: "",
      venue_id: "",
    },
  ]);

  const [artistsList, setArtistsList] = useState([]);
  const [venuesList, setVenuesList] = useState([]);

  // function ใส่ค่า form  ของ state Eventlist
  const inputEventList = (index) => (e) => {
    const { name, value } = e.target;
    const newList = [...eventList];
    newList[index][name] = value;
    setEventList(newList);
  };

  // increase form EventList ชุดใหม่
  const addFields = (e) => {
    e.preventDefault();
    setEventList([
      ...eventList,
      {
        event_name: "",
        event_date: "",
        event_time: "",
      },
    ]);
  };

  // remove Form Listevent ชุดใหม่ ที่เพิ่มเข้ามา
  const removeEventList = (index) => {
    const newList = [...eventList];
    newList.splice(index, 1);
    setEventList(newList);
  };

  // fetch API database artist
  const fetchDataArtists = () => {
    axios
      .get(`${process.env.REACT_APP_USERS}/api/artists`)
      .then((response) => {
        setArtistsList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // fetch API database venue
  const fetchDataVenues = () => {
    axios
      .get(`${process.env.REACT_APP_USERS}/api/venues`)
      .then((response) => {
        setVenuesList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Call fetchDataArtists,fetchDataVenues
  useEffect(() => {
    fetchDataArtists();
    fetchDataVenues();
  }, []);

  const toggleClose = () => {
    setCloseUpdate(!closeUpdate);
    handleUpdate();
  };

  return (
    <div
      className={`${
        isVisible ? "translate-x-0" : "translate-x-full"
      } fixed top-0 right-0 h-full  w-full overflow-y-auto bg-white  transition-transform ease-in-out duration-300`}
      style={{ width: "300px" }}
    >
      <div className="p-2">
        <div className="flex justify-between px-2">
          <p className="text-gray-500  uppercase">Update Event</p>
          <button
            onClick={toggleClose}
            className="block text-2xl text-gray-700"
          >
            {" "}
            <HiX />
          </button>
        </div>

        <div className="p-2 w-full">
          <form >
            {eventList.map((event, index) => (
              <div key={index}>
                <div>
                  {index > 0 && (
                    <div className="flex justify-end">
                      {" "}
                      <button
                        type="button"
                        onClick={() => removeEventList(index)}
                        className="block mt-2 px-2"
                      >
                        <HiX />
                      </button>
                    </div>
                  )}
                  <div>
                    <label className="block text-left font-light text-sm pb-1">
                      Event Name
                    </label>
                    <input
                      className="py-2 px-3 rounded border border-gray-300 focus:border-gray-700  "
                      type="text"
                      name="event_name"
                      value={event.event_name}
                      onChange={inputEventList(index)}
                    />
                  </div>
                  <div className="flex justify-between mt-4">
                    <div className="pr-2">
                      <label className="block text-left font-light text-sm pb-1">
                        Date
                      </label>
                      <input
                        className="py-2 px-3 rounded border border-gray-300 focus:border-gray-700  "
                        type="date"
                        pattern="\d{4}-\d{2}-\d{2}"
                        required
                        name="event_date"
                        value={event.event_date}
                        onChange={inputEventList(index)}
                      />
                    </div>
                    <div>
                      <label className="block text-left font-light text-sm pb-1">
                        Time
                      </label>
                      <input
                        className="py-2 px-3 rounded border border-gray-300 focus:border-gray-700  "
                        type="time"
                        name="event_time"
                        value={event.event_time}
                        onChange={inputEventList(index)}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex mt-4">
                  <div className="pr-2">
                    <label className="block text-left font-light text-sm pb-1">
                      Artist
                    </label>
                    <select
                      name="artist_id"
                      value={event.artist_id}
                      onChange={inputEventList(index)}
                      className="p-1 w-[130px]  text-sm rounded border border-gray-300 focus:border-gray-700  outline-none appearance-none"
                    >
                      <option value="">Select artist</option>
                      {artistsList.map((artist) => (
                        <option key={artist.artist_id} value={artist.artist_id}>
                          {artist.artist_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-left font-light text-sm pb-1">
                      Venue
                    </label>
                    <select
                      name="venue_id"
                      value={event.venue_id}
                      onChange={inputEventList(index)}
                      className="p-1 w-[130px]  text-sm rounded border border-gray-300 focus:border-gray-700  outline-none appearance-none"
                    >
                      <option value="">Select venue</option>
                      {venuesList.map((venue) => (
                        <option key={venue.venue_id} value={venue.venue_id}>
                          {venue.venue_name}, {venue.venue_city},{" "}
                          {venue.venue_state}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-center mt-4">
              <button
                className=" py-2 px-3 text-sm rounded-lg border border-purple-600  text-purple-600"
                onClick={addFields}
              >
                Add Event
              </button>
            </div>
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 px-6 py-2 mr-6 rounded-lg text-white duration-300"
              >
                Update
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg text-white duration-300"
                onClick={toggleClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateEvent;
