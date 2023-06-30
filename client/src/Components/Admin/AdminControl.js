import { useState, useEffect } from "react";
import axios from "axios";
import { BsSearch, BsChevronRight, BsChevronDown } from "react-icons/bs";

const AdminControl = () => {
  const [events, setEvents] = useState([]);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_USERS}/api/events`)

      .then((response) => {
        console.log(response.data.event);
        setEvents(response.data.event);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? "0" + day : day}-${
      month < 10 ? "0" + month : month
    }-${year}`;
  };
  return (
    <div className="flex flex-col justify-center w-full max-w-4xl mt-6 m-auto">
      <form>
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 flex items-center text-gray-500 pl-3">
            <BsSearch />
          </div>
          <input
            type="search"
            className="block w-full pl-10 border-slate-300 shadow"
          />
        </div>
      </form>
      <table className="table-auto text-sm ">
        <thead className="bg-slate-100 border-2  h-10">
          <tr className="text-gray-500">
            <th></th>
            <th>Band</th>
            <th>Create Date</th>
            <th>Update Date</th>
            <td></td>
          </tr>
        </thead>
        {events.map((event) => (
          <tbody key={event._id} className="border-2 ">
            <tr className="text-center border-b-2 h-10">
              <td
                className="pl-2 w-8 cursor-pointer"
                onClick={() => setShowContent(!showContent)}
              >
                {showContent ? <BsChevronDown /> : <BsChevronRight />}
              </td>
              <td className="text-blue-600">{event.band.artist}</td>
              <td>{formatDate(event.createdAt)}</td>
              <td>{formatDate(event.updatedAt)}</td>
              <td>
                <div className="flex justify-center text-xs items-center">
                  <button className="px-3 py-2 mr-2 text-white bg-green-500 rounded hover:bg-green-600 duration-300">
                    Edit
                  </button>
                  <button className="px-3 py-2 text-white bg-red-500 rounded hover:bg-red-600 duration-300">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            {showContent && (
              <td colSpan={5} className="py-2 px-4">
                <div>
                  <p className="text-gray-500">
                    Description:{" "}
                    <span className="text-black">{event.band.description}</span>
                  </p>

                  <p className=" my-2 text-gray-500">
                    Genre:{" "}
                    <span className="text-black">{event.band.genre}</span>
                  </p>
                  <p>Images</p>
                  <p className="text-gray-500">
                    Band:{" "}
                    <span className="text-black">
                      {event.images.band_image}
                    </span>
                  </p>
                  <p className=" my-2 text-gray-500">
                    Poster:{" "}
                    <span className="text-black">
                      {event.images.poster_image}
                    </span>
                  </p>
                  <div>
                    Tour:
                    {event.dates.map((date, index) => (
                      <div className="flex border-2 mb-2 py-2" key={index}>
                        <p>{formatDate(date.localDate)}</p>
                        <p className="px-2">{date.localTime}</p>
                        <p>{event.locations[index].name_show},</p>
                        <p className="px-2">{event.locations[index].venue},</p>
                        <p>{event.locations[index].state},</p>
                        <p className="pl-2">{event.locations[index].city}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex">
                  {event.ticket.map((t, index) => (
                    <div className="px-2" key={index}>
                      <p>{t.ticket_type}</p>
                      <p>{t.ticket_price}</p>
                    </div>
                  ))}
                </div>
              </td>
            )}
          </tbody>
        ))}
      </table>

      {/* {events.map((event) => {
        return (
          <div key={event._id}>
            <p>{event.band.artist}</p>
            <p>{event.band.desciption}</p>
            <p>{event.band.desctiption}</p>
            <p>{event.images.band_image}</p>
            <p>{event.images.poster_image}</p>
            {event.dates.map((date,index) => (
              <div key={index}>
                <p>{formatDate(date.localDate)}</p>
                <p>{date.localTime}</p>
              </div>
            ))}
            {event.locations.map((location,index) => (
              <div key={index}>
                <p>{location.name_show}</p>
                <p>{location.venue}</p>
                <p>{location.state}</p>
                <p>{location.city}</p>
              </div>
            ))}

            {event.ticket.map((t,index) => (
              <div key={index}>
                <p >{t.ticket_type}</p>
                <p >{t.ticket_price}</p>
              </div>
            ))}
          </div>
        );
      })}*/}
    </div>
  );
};

export default AdminControl;