import axios from "axios";
import { useContext, useState } from "react";
import { HiX } from "react-icons/hi";
import { ApiContext } from "../../../../UseContext/ApiContext";

const AddEvents = ({ isVisible, handleCreate }) => {
  const { artistsList, venuesList } = useContext(ApiContext);
  const [closeCreate, setCloseCreate] = useState(false);
  const [eventList, setEventList] = useState([
    {
      event_name: "",
      event_date: "",
      event_time: "",
      artist_id: "",
      venue_id: "",
    },
  ]);

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

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_USERS}/api/events/create`,
        eventList
      );
      setEventList([
        {
          event_name: "",
          event_date: "",
          event_time: "",
          artist_id: "",
          venue_id: "",
        },
      ]);
    } catch (error) {
      console.log("Error creating event", error);
    }
  };

  //close Add event page
  const toggleClose = () => {
    setCloseCreate(!closeCreate);
    handleCreate();
  };

  return (
    <div
      className={`${
        isVisible ? "translate-x-0" : "translate-x-full"
      } fixed top-0 right-0 h-full  w-full overflow-y-auto bg-white  `}
      style={{ width: "300px" }}
    >
      <div className="p-2">
        <div className="flex justify-between px-2">
          <p className="text-gray-500  uppercase">Add new Event</p>
          <button
            onClick={toggleClose}
            className="block text-2xl text-gray-700"
          >
            {" "}
            <HiX />
          </button>
        </div>

        <div className="p-2 w-full">
          <form onSubmit={submitForm}>
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
                Create
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

export default AddEvents;
