// Component create new artist. When input values in the input attribute and select velues inselect arttlibute will keep values in state artistsForm.
// After click create will send value keep back to  database

import { useContext } from "react";
import { HiX } from "react-icons/hi";
import { DashboardContext } from "../../../../../UseContext/DashboardContext";
import axios from "axios";

const DeleteEvents = ({ event }) => {
  const { state, dispatch } = useContext(DashboardContext);

  const deleteEvent = async (id) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API}/api/events/${id}`
      );
      if (response.status === 200) {
        alert("Event deleted successfully!");
        window.location.reload();
      } else {
        console.error("Failed to delete event.");
      }
    } catch (error) {
      console.error("An error occurred while deleting event:", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    return `${year}/${formattedMonth}/${formattedDay}`;
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
          <h1 className="text-center uppercase">Delete events</h1>
          <div>
            <p>{event.event_name}</p>
          </div>
          <div className="my-2">
            <p>{formatDate(event.event_date)}</p>
          </div>
          <div>
            <p>{event.event_time}</p>
          </div>

          <div className="mb-2">
            <button
              onClick={() => deleteEvent(event.event_id)}
              className="w-full uppercase py-[0.6rem] rounded-lg bg-gray-800 text-white hover:bg-gray-900"
            >
              Confirm
            </button>
          </div>

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

export default DeleteEvents;
