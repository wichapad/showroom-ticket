import React, { useState, useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { ApiContext } from "../../../../../UseContext/ApiContext";
import CreateVenues from "./CreateVenues";
import UpdateVenues from "./UpdateVenues";
import DeleteVenues from "./DeleteVenues";
import { DashboardContext } from "../../../../../UseContext/DashboardContext";

const VenuesManage = () => {
  const { state, dispatch } = useContext(DashboardContext);
  const { venuesList } = useContext(ApiContext);
  const [word, setWord] = useState("");

  const [selectedVenue, setSelectedVenue] = useState([]);

  // Search Data by artist name
  const searchData = () => {
    return venuesList.filter((item) => {
      return item.venue_state.toLowerCase().includes(word.toLowerCase());
    });
  };

  // Start value is false when click create button will show CreateArtists component
  const handleCreate = () => {
    dispatch({ type: "TOGGLE_CREATE" });
  };

  const handleUpdate = (id) => {
    dispatch({ type: "TOGGLE_UPDATE" });
    const venue = venuesList.find((item) => item.venue_id === id);
    setSelectedVenue(venue);
  };
  
  const handleDelete = (id) => {
    dispatch({ type: "TOGGLE_DELETE" });
    const venue = venuesList.find((item) => item.venue_id === id);
    setSelectedVenue(venue);
  };
  return (
    <div className="flex flex-col ">
      <div className="flex justify-between items-center p-[1rem]">
        <form className="w-[300px]">
          <div className="relative">
            <div className="absolute  inset-y-0 left-0 flex items-center text-gray-500 pl-3">
              <BsSearch />
            </div>
            <input
              type="search"
              className="block py-2 pl-10 border border-gray-300 rounded-lg  shadow"
              placeholder="Search state..."
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
          </div>
        </form>
        <div>
          <div>
            <div
              className={`${
                state.isCreate ? "translate-x-0 " : "translate-x-full"
              } fixed top-0 left-0 z-50 h-full w-full bg-[rgba(0,0,0,0.5)] `}
            >
              <CreateVenues />
            </div>
            <div
              className={`${
                state.isUpdate ? "translate-x-0 " : "translate-x-full"
              } fixed top-0 left-0 z-50 h-full w-full bg-[rgba(0,0,0,0.5)] `}
            >
              <UpdateVenues venue={selectedVenue} />
            </div>
            <div
              className={`${
                state.isDelete ? "translate-x-0 " : "translate-x-full"
              } fixed top-0 left-0 z-50 h-full w-full bg-[rgba(0,0,0,0.5)] `}
            >
              <DeleteVenues venue={selectedVenue} />
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={handleCreate}
            className="px-4 py-3 rounded-lg bg-purple-700 text-white hover:bg-purple-800"
          >
            + Create
          </button>
        </div>
      </div>
      <div className="flex flex-col pr-[1rem]  whitespace-nowrap">
        <table>
          <thead className="bg-slate-800 border-2 rounded">
            <tr className=" text-xs font-medium text-center text-gray-200 uppercase">
              <th className="p-4">Name</th>
              <th className="p-4">City</th>
              <th className="p-4">State</th>
              <th className="p-4">Capacity</th>
              <th className="p-4 w-[20%]"></th>
            </tr>
          </thead>
          {searchData().map((item) => (
            <tbody
              key={item.venue_id}
              className="bg-white border-2 shadow trasition duration-500"
            >
              <tr className="text-center border-b-2 hover:bg-gray-100">
                <td className="p-2 text-sm font-normal text-gray-900 ">
                  {item.venue_name}
                </td>
                <td className="p-2 text-sm font-normal text-gray-500 ">
                  {item.venue_city}
                </td>
                <td className="p-2 text-sm font-normal text-gray-500 ">
                  {item.venue_state}
                </td>
                <td className="p-2 text-sm font-normal text-gray-500 ">
                  {item.venue_capacity}
                </td>
                <td className="p-2 flex justify-center text-sm font-normal text-gray-500 ">
                  <div className="pr-2">
                    <button
                      onClick={() => handleUpdate(item.venue_id)}
                      className="px-4 py-3 rounded-lg bg-blue-700 text-white hover:bg-blue-800"
                    >
                      Update
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => handleDelete(item.venue_id)}
                      className="px-4 py-3 rounded-lg bg-red-700 text-white hover:bg-red-800"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default VenuesManage;
