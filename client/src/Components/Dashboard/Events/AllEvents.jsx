import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { BsSearch, BsChevronRight, BsChevronDown } from "react-icons/bs";
import Swal from "sweetalert2";
import UpdateEvent from "./UpdateEvent";

// import { getAdminToken } from "../../services/autherize";

const AllEvents = () => {
  const [itemsEvent, setitemsEvent] = useState([]);
  const [showContent, setShowContent] = useState(null);
  const [word, setWord] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  const fetchData = () => {
    //ดึงข้อมูล จาก database collection events
    axios
      .get(`${process.env.REACT_APP_USERS}/api/events`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        setitemsEvent(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
  const searchData = () => {
    return itemsEvent.filter((item) => {
      return item.artist_name.toLowerCase().includes(word.toLowerCase());
    });
  };

  const handleUpdate = () => {
    setIsUpdate(!isUpdate);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between items-center p-2">
          <div>
            <form className="w-[300px]">
              <div className="relative">
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
          </div>
          {/* div add data */}
          <div>
            <Link
              className="px-3 py-2 text-white text-right bg-violet-600  rounded hover:bg-violet-800"
              to={`/create`}
            >
              Add Events
            </Link>
          </div>
        </div>
        {/* form search data */}

        {/* Table event data */}

        <table>
          <thead className="bg-gray-100 border-2 rounded">
            <tr className=" text-xs font-medium text-center text-gray-500 uppercase">
              <th className="p-4"></th>
              <th className="p-4">Artist</th>
              <th className="p-4">genre</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          {searchData().map((item) => (
            <tbody
              key={item.artist_id}
              className="bg-white border-2 shadow trasition duration-500"
            >
              <tr className="text-center border-b-2 hover:bg-gray-100">
                {/* arrow hide show info data */}
                <td
                  className="p-4 w-4 cursor-pointer "
                  onClick={() =>
                    setShowContent(
                      showContent === item.artist_id ? null : item.artist_id
                    )
                  }
                >
                  {showContent === item.artist_id ? (
                    <BsChevronDown />
                  ) : (
                    <BsChevronRight />
                  )}
                </td>
                <td className="p-4 text-sm font-normal text-gray-900 ">
                  {item.artist_name}
                </td>
                <td className="p-4 text-sm font-normal text-gray-500 ">
                  {item.genre_name}
                </td>
                <td>
                  {/* div edit and delete data */}
                  <div className="flex justify-center items-center">
                    <div
                      className={`${
                        isUpdate ? "translate-x-0" : "translate-x-full"
                      } fixed top-0 left-0 z-50 h-full w-full bg-[rgba(0,0,0,0.5)] `}
                    >
                      <UpdateEvent isVisible={isUpdate} />
                    </div>
                    <button
                      className="px-3 py-2 mr-2 text-sm text-white bg-blue-700 rounded hover:bg-blue-800 duration-300"
                      onClick={handleUpdate}
                    >
                      Update
                    </button>
                    <button className="px-3 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-600 duration-300">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              {/* show info */}
              {showContent === item.artist_id && (
                <tr>
                  <td colSpan={5} className="p-2 ">
                    <p className="text-center uppercase text-gray-500">
                      Event List
                    </p>
                    <div className="flex justify-center text-sm">
                      <div>
                        {item.events.map((event, index) => (
                          <div key={index} className="flex shadow border p-2">
                            <p>{event.event_name}</p>
                            <p className="px-2">{event.date}</p>
                            <p>{event.time}</p>
                          </div>
                        ))}
                      </div>
                      <div>
                        {item.venues.map((venue, index) => (
                          <div key={index} className="flex shadow border p-2">
                            <p>{venue.venue_name}</p>
                            <p className="px-2">{venue.city}</p>
                            <p>{venue.state}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default AllEvents;
