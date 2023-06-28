import { useState } from "react";

const AddEvents = () => {
  const [band, setBand] = useState({
    artist: "",
    description: "",
    genre: "",
  });
  const [images, setImages] = useState({
    bandImage: "",
    posterImage: "",
  });
  const [showSchedule, setShowSchedule] = useState([
    {
      dates: [{ localDate: "", localTime: "" }],
      location: [{ name_show: "", venue: "", state: "", city: "" }],
    },
  ]);
  const [tickets, setTickets] = useState([
    { ticket_type: "", ticket_price: 0 },
  ]);

  const inputValue = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("band.")) {
      setBand((prevState) => ({
        ...prevState,
        [name.split(".")[1]]: value,
      }));
    } else if (name.startsWith("images.")) {
      setImages((prevState) => ({
        ...prevState,
        [name.split(".")[1]]: value,
      }));
    }
  };

  const inputDatesValue = (index, field, value) => {
    setShowSchedule((prevState) => {
      const updatedSchedule = [...prevState];
      updatedSchedule[index].dates[0][field] = value;
      return updatedSchedule;
    });
  };

  const addDates = () => {
    setShowSchedule((prevState) => {
      const updatedShowSchedule = [...prevState];
      updatedShowSchedule[0] = {
        ...updatedShowSchedule[0],
        dates: [
          ...updatedShowSchedule[0].dates,
          { localDate: "", localTime: "" },
        ],
      };
      return updatedShowSchedule;
    });
  };

  const inputLocationValue = (index, field, value) => {
    setShowSchedule((prevState) => {
      const updatedSchedule = [...prevState];
      updatedSchedule[index].location[0][field] = value;
      return updatedSchedule;
    });
  };

  const addLocation = () => {
    setShowSchedule((prevState) => {
      const updatedShowSchedule = [...prevState];
      updatedShowSchedule[0] = {
        ...updatedShowSchedule[0],
        location: [
          ...updatedShowSchedule[0].location,
          { name_show: "", venue: "", state: "", city: "" },
        ],
      };
      return updatedShowSchedule;
    });
  };

  const inputTicketValue = (index, field, value) => {
    setTickets((prevState) => {
      const updateTickets = [...prevState];
      updateTickets[index][field] = value;
      return updateTickets;
    });
  };

  const addTicket = () => {
    setTickets((prevState) => [
      ...prevState,
      { ticket_type: "", ticket_price: 0 },
    ]);
  };

  return (
    <div className="flex flex-col justify-center  w-full max-w-lg m-auto">
      {JSON.stringify(band)}
      <h1 className="text-center">Showroom Events</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* Add Band form */}
        <div className="mb-4">
          <h1 className="text-center">Band</h1>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Artist:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="band.artist"
              type="text"
              value={band.artist}
              onChange={inputValue}
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="band.description"
              type="text"
              value={band.description}
              onChange={inputValue}
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Genre:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="band.genre"
              type="text"
              value={band.genre}
              onChange={inputValue}
            />
          </div>
        </div>
        <hr />
        {/* Add Image form */}
        {JSON.stringify(images)}
        <div className="my-4">
          <h1 className="text-center">Image</h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Band_Image:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="images.bandImage"
              type="text"
              value={band.bandImage}
              onChange={inputValue}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Poster_Image:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="images.posterImage"
              type="text"
              value={band.posterImage}
              onChange={inputValue}
            />
          </div>
        </div>
        <hr />
        {/* Add Showschedule form */}
        {JSON.stringify(showSchedule[0].dates)}
        <div className="my-2">
          {/* Date */}
          <h1 className="text-center">Date</h1>
          {showSchedule.map((show, index) => (
            <div key={index}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Date:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                  value={show.dates[0].localDate}
                  onChange={(e) =>
                    inputDatesValue(index, "localDate", e.target.value)
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Time:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={show.dates[0].localTime}
                  onChange={(e) =>
                    inputDatesValue(index, "localTime", e.target.value)
                  }
                />
              </div>
            </div>
          ))}

          <div className="flex justify-end mb-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold  py-2 px-2  rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={addDates}
            >
              Add Date
            </button>
          </div>

          <hr />
          {/* Location */}
          {JSON.stringify(showSchedule[0].location)}
          <h1 className="mt-2 text-center">Location</h1>
          {showSchedule.map((show, index) => (
            <div key={index}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  name_show:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={show.location[0].name_show}
                  onChange={(e) =>
                    inputLocationValue(index, "name_show", e.target.value)
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Venue:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={show.location[0].venue}
                  onChange={(e) =>
                    inputLocationValue(index, "venue", e.target.value)
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  State:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={show.location[0].state}
                  onChange={(e) =>
                    inputLocationValue(index, "state", e.target.value)
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  City:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={show.location[0].city}
                  onChange={(e) =>
                    inputLocationValue(index, "city", e.target.value)
                  }
                />
              </div>
            </div>
          ))}
          <div className="flex justify-end ">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold  py-2 px-2  rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={addLocation}
            >
              Add Location
            </button>
          </div>
        </div>
        <hr />
        {/* Add Ticket form */}
        <div className="my-2">
          {JSON.stringify(tickets)}
          <h1 className="text-center">Ticket</h1>
          {tickets.map((ticket, index) => (
            <div key={index}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Ticket_Type:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={ticket.ticket_type}
                  onChange={(e) =>
                    inputTicketValue(index, "ticket_type", e.target.value)
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Ticket_price:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={ticket.ticket_price}
                  onChange={(e) =>
                    inputTicketValue(index, "ticket_price", e.target.value)
                  }
                />
              </div>
            </div>
          ))}

          <div className="flex justify-end mt-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold  py-2 px-2  rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={addTicket}
            >
              Add Ticket
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between ">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save Data
          </button>
        </div>
      </form>

      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
};

export default AddEvents;
