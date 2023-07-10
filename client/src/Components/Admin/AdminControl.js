import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  BsSearch,
  BsChevronRight,
  BsChevronDown,
  BsPlusLg,
} from "react-icons/bs";
import Swal from "sweetalert2";

const AdminControl = () => {
  const [events, setEvents] = useState([]);
  const [showContent, setShowContent] = useState(null);

  const fetchData = () => {
    //ดึงข้อมูล จาก database collection events
    axios
      .get(`${process.env.REACT_APP_USERS}/api/events`)
      .then((response) => {
        setEvents(response.data.event);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  //แปลงค่า วันที่
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? "0" + day : day}-${
      month < 10 ? "0" + month : month
    }-${year}`;
  };

  const deleteData = async (eventSlug) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete data?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        axios
          .delete(`${process.env.REACT_APP_USERS}/api/events/${eventSlug}`)
          .then((response) => {
            fetchData();
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  };

  return (
    <div className="flex flex-col justify-center w-full max-w-4xl mt-6 m-auto">
      {/* div add data */}
      <div className="flex justify-end my-2">
        <Link
          className="px-3 py-2 text-white text-right bg-blue-400 rounded hover:bg-blue-500 duration-300"
          to={`/create`}
        >
          <BsPlusLg />
        </Link>
      </div>
      {/* form search data */}
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

      {/* Table show data */}
      <table className="  text-sm">
        <thead className="bg-slate-100 border-2 rounded  h-10">
          <tr className="text-gray-500">
            <th></th>
            <th>Band</th>
            <th>Create Date</th>
            <th>Update Date</th>
            <td></td>
          </tr>
        </thead>
        {/* loop events show data header band.artist , createdated ,updatedated */}
        {events.map(
          (
            event //
          ) => (
            <tbody key={event._id} className="border-2 shadow">
              <tr className="text-center border-b-2 h-10">
                {/* arrow hide show info data */}
                <td
                  className="pl-2 w-8 cursor-pointer "
                  onClick={() =>
                    setShowContent(event._id === showContent ? null : event._id)
                  }
                >
                  {event._id === showContent ? (
                    <BsChevronDown />
                  ) : (
                    <BsChevronRight />
                  )}
                </td>
                <td className="text-blue-600">{event.band.artist}</td>
                <td>{formatDate(event.createdAt)}</td>
                <td>{formatDate(event.updatedAt)}</td>
                <td>
                  {/* div edit and delete data */}
                  <div className="flex justify-center text-xs items-center">
                    <Link
                      className="px-3 py-2 mr-2 text-white bg-green-500 rounded hover:bg-green-600 duration-300"
                      to={`/admincontrol/${event.slug}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="px-3 py-2 text-white bg-red-500 rounded hover:bg-red-600 duration-300"
                      onClick={() => deleteData(event.slug)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              {/* Info data will hide onClick arrow will show info */}
              {showContent === event._id && (
                <tr>
                  <td colSpan={5} className="py-2 px-4 ">
                    <div>
                      <p className="text-gray-500">
                        Description:{" "}
                        <span className="text-black">
                          {event.band.description}
                        </span>
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
                        {event.dates.map(
                          (
                            date,
                            index //map ข้อมูลจาก event ก่อน และเข้าถึง object Dates และ Location
                          ) => (
                            <div
                              className="flex border-2 mb-2 pl-2 py-2 rounded"
                              key={index}
                            >
                              <p>{date.localDate}</p>
                              <p className="px-2">{date.localTime}</p>
                              <p>{event.locations[index].name_show}</p>
                              <p className="px-2">
                                {event.locations[index].venue}
                              </p>
                              <p>{event.locations[index].state}</p>
                              <p className="pl-2">
                                {event.locations[index].city}
                              </p>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div className="flex">
                      {event.ticket.map(
                        (
                          t,
                          index //map ข้อมูลจาก event ก่อน และเข้าถึง object Ticket
                        ) => (
                          <div className="px-2" key={index}>
                            <p>{t.ticket_type}</p>
                            <p>{t.ticket_price}</p>
                          </div>
                        )
                      )}
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          )
        )}
      </table>
    </div>
  );
};

export default AdminControl;
