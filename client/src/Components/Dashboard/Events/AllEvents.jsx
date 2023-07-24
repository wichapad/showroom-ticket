import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Addevents from "./AddEvents";
import { BsSearch, BsChevronRight, BsChevronDown } from "react-icons/bs";
import Swal from "sweetalert2";

// import { getAdminToken } from "../../services/autherize";

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [showContent, setShowContent] = useState(null);
  const [word, setWord] = useState("");
  const [isAddEventsVisible, setAddEventsVisible] = useState(false);


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

  // button delete data by Slugname
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
          .delete(`${process.env.REACT_APP_USERS}/admin/events/${eventSlug}`, {
            headers: {
              authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODk3NDEwNDAsImV4cCI6MTY4OTgyNzQ0MH0.NgzgmjJyamDqD45HORTzw-L-ktwwmrTqD_rvkqfVojA`,
            },
          })
          .then((response) => {
            fetchData();
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  };
  // Search Data by artist name
  const searchData = (artists) => {
    return artists.filter((item) => {
      return item.band.artist.toLowerCase().includes(word.toLowerCase());
    });
  };

  const handleAddEventsClick = () => {
    setAddEventsVisible(!isAddEventsVisible);
  };

 

  return (
    <>
      <div
       
        className={`${
          isAddEventsVisible ? "translate-x-0" : "translate-x-full"
        } fixed top-0 left-0 z-50 h-full w-full bg-[rgba(0,0,0,0.7)] `}
      >
        <Addevents isVisible={isAddEventsVisible} />
      </div>
      <div className="flex flex-col m-auto pt-14">
        <div className="my-2">
          {/* div add data */}
          <div className="flex">
            <Link
              className="px-3 py-2 text-white text-right bg-violet-600  rounded hover:bg-violet-800 duration-300"
              to={`/create`}
            >
              Add Events
            </Link>
          </div>
        </div>
        {/* form search data */}
        <form className="w-[300px]">
          <div className="relative mb-4">
            <div className="absolute  inset-y-0 left-0 flex items-center text-gray-500 pl-3">
              <BsSearch />
            </div>
            <input
              type="search"
              className="block w-full pl-10 border-slate-300 shadow"
              placeholder="Search Artist..."
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
          </div>
        </form>

        {/* Table show data */}

        <table>
          <thead className="bg-gray-100 border-2 rounded ">
            <tr>
              <th className="p-4"></th>
              <th className="p-4 text-xs font-medium text-center text-gray-500 uppercase">
                Band Name
              </th>
              <th className="p-4 text-xs font-medium text-center text-gray-500 uppercase">
                Create Date
              </th>
              <th className="p-4 text-xs font-medium text-center text-gray-500 uppercase">
                Update Date
              </th>
              <th className="p-4"></th>
            </tr>
          </thead>
          {/* loop events show data header band.artist , createdated ,updatedated */}
          {searchData(events).map(
            (
              event //
            ) => (
              <tbody key={event._id} className="bg-white border-2 shadow">
                <tr className="text-center border-b-2 hover:bg-gray-100">
                  {/* arrow hide show info data */}
                  <td
                    className="p-4 w-4 cursor-pointer "
                    onClick={() =>
                      setShowContent(
                        event._id === showContent ? null : event._id
                      )
                    }
                  >
                    {event._id === showContent ? (
                      <BsChevronDown />
                    ) : (
                      <BsChevronRight />
                    )}
                  </td>
                  <td className="p-4 text sm font-normal text-gray-900 ">
                    {event.band.artist}
                  </td>
                  <td className="p-4 text sm font-normal text-gray-500 ">
                    {formatDate(event.createdAt)}
                  </td>
                  <td className="p-4 text sm font-normal text-gray-500 ">
                    {formatDate(event.updatedAt)}
                  </td>
                  <td>
                    {/* div edit and delete data */}
                    <div className="flex p-4 justify-center items-center">
                      {/* <Link
                      className="px-3 py-2 mr-2 text-sm text-white bg-blue-700 rounded hover:bg-blue-800 duration-300"
                      to={`/admincontrol/${event.slug}`}
                    >
                      Update
                    </Link> */}
                      <button
                        className="px-3 py-2 mr-2 text-sm text-white bg-blue-700 rounded hover:bg-blue-800 duration-300"
                        onClick={handleAddEventsClick}
                      >
                        Update
                      </button>
                      <button
                        className="px-3 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-600 duration-300"
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
    </>
  );
};

export default AllEvents;
