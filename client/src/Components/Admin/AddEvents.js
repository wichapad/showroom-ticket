import { useState } from "react";
import axios from "axios";
import logo from "../../images/showroomlogo.png";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddEvents = () => {
  const navigate = useNavigate();
  //สร้าง state เก็บข้อมูลที่จะ input ค่ามา
  const [band, setBand] = useState({ artist: "", description: "", genre: "" });
  const [images, setImages] = useState({ band_image: "", poster_image: "" });
  const [dates, setDates] = useState([{ localDate: "", localTime: "" }]);
  const [locations, setLocation] = useState([
    { name_show: "", venue: "", state: "", city: "" },
  ]);
  const [ticket, setTicket] = useState([
    {
      ticket_type: "",
      ticket_price: "",
    },
  ]);

  //สร้างinput เพื่อเก็บค่า dates และlocation แยกไว้ เพื่อนำไปใช้ใน onChange
  const inputDates = (index, field, value) => {
    //index เข้าถึง array dates ที่ต้องการ update field ใช้เรียก field ใน dates มี localdate, localtime ,value ค่าที่จะกำหนดไปใหม่
    const updateDates = [...dates];
    updateDates[index][field] = value;
    setDates(updateDates);
  };
  const inputLocation = (index, field, value) => {
    const updateLocation = [...locations];
    updateLocation[index][field] = value;
    setLocation(updateLocation);
  };

  const addSchedule = () => {
    setDates([...dates, { localDate: "", localTime: "" }]);
    setLocation([
      ...locations,
      { name_show: "", venue: "", state: "", city: "" },
    ]);
  };

  const sendData = async (e) => {
    e.preventDefault();
    const storeEvents = {
      band,
      images,
      dates,
      locations,
      ticket,
    };
    await axios
      .post(`${process.env.REACT_APP_USERS}/api/events/addEvent`, storeEvents)
      .then((response) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Save data success",
          showConfirmButton: true,
          timer: 3000,
        });

        navigate("/admincontrol");
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: err.response.data.error,
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  return (
    <div className="flex flex-col justify-center  w-full max-w-2xl bg-white shadow-md rounded  m-auto">
      <div className="flex justify-center">
        <img className="w-40 mt-6 flex " src={logo} alt="showroom" />
      </div>
      <form onSubmit={sendData} className="px-6 pt-6 pb-8 mb-4">
        <div className="flex">
          {/* Add Band form */}
          <div className="mb-2 w-full pr-2">
            <h1 className="text-center">Band</h1>
            <div>
              <label className="block text-gray-700 text-sm font-bold ">
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
              <label className="block text-gray-700 text-sm font-bold ">
                Description:
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={band.description}
                onChange={(e) =>
                  setBand({ ...band, description: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold ">
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
              <label className="block text-gray-700 text-sm font-bold ">
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
              <label className="block text-gray-700 text-sm font-bold ">
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
        {/* Date */}
        <div className="flex my-2">
          <div className="w-2/4 mr-2">
            <h1 className="text-center">Date</h1>
            {dates.map((item, index) => (
              <div className="mt-2" key={index}>
                <div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold">
                      Date: (MM-DD-YYYY)
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full text-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      value={item.localDate}
                      onChange={(e) =>
                        inputDates(index, "localDate", e.target.value)
                      }
                    />
                  </div>
                  <div className="mt-2">
                    <label className="block text-gray-700 text-sm font-bold">
                      Time:
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      value={item.localTime}
                      onChange={(e) =>
                        inputDates(index, "localTime", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full">
            <h1 className="text-center">Locations</h1>
            {/* Location */}
            {locations.map((item, index) => (
              <div className="mt-2" key={index}>
                <div className="grid grid-cols-2">
                  <div className="mr-2">
                    <label className="block text-gray-700 text-sm font-bold ">
                      name_show:
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      value={item.name_show}
                      onChange={(e) =>
                        inputLocation(index, "name_show", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold ">
                      Venue:
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      value={item.venue}
                      onChange={(e) =>
                        inputLocation(index, "venue", e.target.value)
                      }
                    />
                  </div>
                  <div className="mt-2 mr-2">
                    <label className="block text-gray-700 text-sm font-bold ">
                      State:
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      value={item.state}
                      onChange={(e) =>
                        inputLocation(index, "state", e.target.value)
                      }
                    />
                  </div>
                  <div className="mt-2">
                    <label className="block text-gray-700 text-sm font-bold ">
                      City:
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      value={item.city}
                      onChange={(e) =>
                        inputLocation(index, "city", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center my-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold  py-2 px-8  rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={addSchedule}
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
                  type="number"
                  value={item.ticket_price}
                  onChange={(e) =>
                    setTicket((prevTicket) => {
                      const updateTicket = [...prevTicket];
                      updateTicket[index].ticket_price = Number([
                        e.target.value,
                      ]);
                      return updateTicket;
                    })
                  }
                />
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center my-2">
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
