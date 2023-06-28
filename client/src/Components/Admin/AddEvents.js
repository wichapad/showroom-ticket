import { useState } from "react";

const AddEvents = () => {
  const [band, setBand] = useState({ artist: "", description: "", genre: "" });
  const [images, setImages] = useState({ band_image: "", poster_image: "" });
  const [showSchedule, setShowSchedule] = useState([
    {
      dates: [{ localDate: "", localTime: "" }],
      location: [{ name_show: "", venue: "", state: "", city: "" }],
    },
  ]);
  const [ticket, setTicket] = useState([
    {
      ticket_type: "",
      ticket_price: "",
    },
  ]);
  return (
    <div className="flex flex-col justify-center  w-full max-w-2xl m-auto">
      <h1 className="text-center">Showroom Events</h1>
      <form className="bg-white shadow-md rounded px-6 pt-6 pb-8 mb-4">
        <div className="flex">
          {/* Add Band form */}
          <div className="mb-2 w-full pr-2">
            <h1 className="text-center">Band</h1>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Artist:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={band.artist}
                onChange={(e) => setBand({ ...band, artist: e.target.value })}
              />
            </div>
            <div className="my-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Description:
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={band.description}
                onChange={(e) =>
                  setBand({ ...band, description: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Genre:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={band.genre}
                onChange={(e) => setBand({ ...band, genre: e.target.value })}
              />
            </div>
          </div>
          {/* Add Image form */}

          <div className="w-full">
            <h1 className="text-center">Image</h1>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Band_Image:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={images.band_image}
                onChange={(e) =>
                  setImages({ ...images, band_image: e.target.value })
                }
              />
            </div>
            <div className="my-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Poster_Image:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={images.poster_image}
                onChange={(e) =>
                  setImages({ ...images, poster_image: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <hr />
        {/* Add Showschedule form */}
        {showSchedule.map((schedule, index) => (
          <div className="my-2 flex" key={index}>
            {/* Date */}
            <div className="w-full pr-2">
              <h1 className="text-center">Date</h1>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Date:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                  value={schedule.dates[0].localDate}
                  onChange={(e) =>
                    setShowSchedule((prevSchedule) => {
                      const updateSchedule = [...prevSchedule];
                      updateSchedule[index].dates[0].localDate = e.target.value;
                      return updateSchedule;
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Time:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={schedule.dates[0].localTime}
                  onChange={(e) =>
                    setShowSchedule((prevSchedule) => {
                      const updateSchedule = [...prevSchedule];
                      updateSchedule[index].dates[0].localTime = e.target.value;
                      return updateSchedule;
                    })
                  }
                />
              </div>
            </div>
            {/* Location */}
            <div className="w-full">
              <h1 className="text-center">Location</h1>
              <div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    name_show:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    value={schedule.location[0].name_show}
                    onChange={(e) =>
                      setShowSchedule((prevSchedule) => {
                        const updateSchedule = [...prevSchedule];
                        updateSchedule[index].location[0].name_show =
                          e.target.value;
                        return updateSchedule;
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Venue:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    value={schedule.location[0].venue}
                    onChange={(e) =>
                      setShowSchedule((prevSchedule) => {
                        const updateSchedule = [...prevSchedule];
                        updateSchedule[index].location[0].venue =
                          e.target.value;
                        return updateSchedule;
                      })
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
                    value={schedule.location[0].state}
                    onChange={(e) =>
                      setShowSchedule((prevSchedule) => {
                        const updateSchedule = [...prevSchedule];
                        updateSchedule[index].location[0].state =
                          e.target.value;
                        return updateSchedule;
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    City:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    value={schedule.location[0].city}
                    onChange={(e) =>
                      setShowSchedule((prevSchedule) => {
                        const updateSchedule = [...prevSchedule];
                        updateSchedule[index].location[0].city = e.target.value;
                        return updateSchedule;
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="text-center mb-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold  py-2 px-8  rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() =>
              setShowSchedule((prevSchedule) => [
                ...prevSchedule,
                {
                  dates: [{ localDate: "", localTime: "" }],
                  location: [{ name_show: "", venue: "", state: "", city: "" }],
                },
              ])
            }
          >
            Add Schedule
          </button>
        </div>

        <hr />
        {/* Add Ticket form */}
        {ticket.map((item, index) => (
          <div className="my-2" key={index}>
            <h1 className="text-center mb-2">Ticket</h1>
            <div className="flex">
              <div className="w-full pr-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Ticket_Type:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={item.ticket_type}
                  onChange={(e) =>
                    setTicket((prevTicket) => {
                      const updateTicket = [...prevTicket];
                      updateTicket[index].ticket_type = e.target.value;
                      return updateTicket;
                    })
                  }
                />
              </div>
              <div className="w-full">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Ticket_price:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={item.ticket_price}
                  onChange={(e) =>
                    setTicket((prevTicket) => {
                      const updateTicket = [...prevTicket];
                      updateTicket[index].ticket_price = parseInt(
                        e.target.value
                      );
                      return updateTicket;
                    })
                  }
                />
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold   py-2 px-8   rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() =>
              setTicket((prevTicket) => [
                ...prevTicket,
                {
                  ticket_type: "",
                  ticket_price: "",
                },
              ])
            }
          >
            Add Ticket
          </button>
        </div>
        <hr />
        {/* Submit Data */}
        <div className="flex items-center justify-end mt-4 ">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold  py-2 px-10  rounded focus:outline-none focus:shadow-outline"
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
