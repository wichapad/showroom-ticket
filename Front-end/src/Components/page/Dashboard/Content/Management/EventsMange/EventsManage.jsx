import React, { useState, useContext } from "react";
import { BsSearch } from "react-icons/bs";

import { ApiContext } from "../../../../../UseContext/ApiContext";
import { FormatDateTime } from "../../../../../FormatDateTime";
import { DashboardContext } from "../../../../../UseContext/DashboardContext";
import CreateEvents from "./CreateEvents";

const EventsManage = () => {
  const { state, dispatch } = useContext(DashboardContext);
  const { eventsList } = useContext(ApiContext);
  const { formatDate, formatTime } = FormatDateTime();
  const [word, setWord] = useState("");

  // Search Data by artist name
  const searchData = () => {
    return eventsList.filter((item) => {
      return item.event_name.toLowerCase().includes(word.toLowerCase());
    });
  };

  const handleCreate = () => {
    dispatch({ type: "TOGGLE_CREATE" });
  };
  return (
    <div className="flex flex-col whitespace-nowrap">
      <div className="flex justify-between items-center  p-[1rem]">
        <form className="w-[300px]">
          <div className="relative">
            <div className="absolute  inset-y-0 left-0 flex items-center text-gray-500 pl-3">
              <BsSearch />
            </div>
            <input
              type="search"
              className="block py-2 pl-10 border border-gray-300 rounded-lg  shadow"
              placeholder="Search event name..."
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
              <CreateEvents />
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={handleCreate}
            className="px-4 py-2 rounded-lg bg-purple-700 text-white hover:bg-purple-800"
          >
            + Create
          </button>
        </div>
      </div>
      <div className="flex flex-col pr-[1rem]  ">
        <table>
          <thead className="bg-slate-800 border-2 rounded">
            <tr className=" text-xs font-medium text-center text-gray-200 uppercase">
              <th className="p-4 w-[30%]">event</th>
              <th className="p-4">date</th>
              <th className="p-4">time</th>
              <th className="p-4 w-[20%]"></th>
            </tr>
          </thead>
          {searchData().map((item) => (
            <tbody
              key={item.event_id}
              className="bg-white border-2 shadow trasition duration-500"
            >
              <tr className="text-center border-b-2 hover:bg-gray-100">
                <td className="p-4 text-sm font-normal text-gray-900 ">
                  {item.event_name}
                </td>
                <td className="p-4 text-sm font-normal text-gray-500 ">
                  {formatDate(item.event_date)}
                </td>
                <td className="p-4 text-sm font-normal text-gray-500 ">
                  {formatTime(item.event_time)}
                </td>
               
                <td className="p-4 flex justify-center text-sm font-normal text-gray-500 ">
                  <div className="pr-2">
                    <button className="px-4 py-3 rounded-lg bg-blue-700 text-white hover:bg-blue-800">
                      Update
                    </button>
                  </div>
                  <div>
                    <button className="px-4 py-3 rounded-lg bg-red-700 text-white hover:bg-red-800">
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

export default EventsManage;
