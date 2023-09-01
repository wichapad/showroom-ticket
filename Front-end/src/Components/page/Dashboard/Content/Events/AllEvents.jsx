import { useState, useContext } from "react";
import { BsSearch, BsChevronRight, BsChevronDown } from "react-icons/bs";
import UpdateEvent from "./UpdateEvent";
import AddEvents from "./AddEvents";
import { ApiContext } from "../../../../UseContext/ApiContext";
import { NavLink } from "react-router-dom";

const AllEvents = () => {
  // get api UseContext
  const { itemsEvent } = useContext(ApiContext);

  const [showContent, setShowContent] = useState(null);
  const [word, setWord] = useState("");
  const [isCreate, setIsCreate] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  // Search Data by artist name
  const searchData = () => {
    return itemsEvent.filter((item) => {
      return item.artist_name.toLowerCase().includes(word.toLowerCase());
    });
  };

  const handleCreate = () => {
    setIsCreate(!isCreate);
  };

  const handleUpdate = () => {
    setIsUpdate(!isUpdate);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between items-center p-2 ">
          <div>
            <form className="w-[300px]">
              <div className="relative">
                <div className="absolute  inset-y-0 left-0 flex items-center text-gray-500 pl-3">
                  <BsSearch />
                </div>
                <input
                  type="search"
                  className="block py-2 pl-10 border border-gray-300 rounded-lg  shadow"
                  placeholder="Search Artist..."
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                />
              </div>
            </form>
          </div>
          {/* div add data */}
          <div>
            <div
              className={`${
                isCreate ? "translate-x-0 " : "translate-x-full"
              } fixed top-0 left-0 z-50 h-full w-full bg-[rgba(0,0,0,0.5)] `}
            >
              <AddEvents isVisible={isCreate} handleCreate={handleCreate} />
            </div>
            <button
              className="px-3 py-2 mr-2 text-sm text-white bg-purple-700 rounded hover:bg-purple-800 duration-300"
              onClick={handleCreate}
            >
              Add New Events
            </button>
          </div>
        </div>
        {/* form search data */}

        {/* Table event data */}

        <div className="flex flex-col  whitespace-nowrap">
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
                          isUpdate ? "translate-x-0 " : "translate-x-full"
                        } fixed top-0 left-0 z-50 h-full w-full bg-[rgba(0,0,0,0.1)] `}
                      >
                        <UpdateEvent
                          isVisible={isUpdate}
                          handleUpdate={handleUpdate}
                        />
                      </div>
                      <NavLink
                        to={`/dashboard/events/${item.slug}`}
                        className="px-3 py-2 mr-2 text-sm text-white bg-blue-700 rounded hover:bg-blue-800 duration-300"
                        onClick={handleUpdate}
                      >
                        Update
                      </NavLink>
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
                      <div className="flex justify-center items-center ">
                        {/* Map call data in terms of Events data */}
                        {item.events
                          .slice()
                          .sort((a, b) => a.event_id - b.event_id)
                          
                          .map((item, index) => (
                            <div key={index} className="p-2">
                              <div className="flex justify-center ">
                                <div className="p-4 shadow border">
                                  <p className="text-center">
                                    {item.event_name}
                                  </p>
                                  <div className="flex justify-center">
                                    <p className="pr-2">{item.date}</p>
                                    <p>{item.time}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="flex justify-center pt-2">
                                <div className="shadow border p-2">
                                  <p className="text-center">
                                    {item.venue_name}
                                  </p>
                                  <div className="flex justify-center">
                                    <p className="pr-2">{item.city}</p>
                                    <p>{item.state}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default AllEvents;
