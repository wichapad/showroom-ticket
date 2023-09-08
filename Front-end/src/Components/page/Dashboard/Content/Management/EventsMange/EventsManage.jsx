import React, { useState, useContext } from "react";
import { BsSearch } from "react-icons/bs";

import { ApiContext } from "../../../../../UseContext/ApiContext";

const EventsManage = () => {
  const { eventsList } = useContext(ApiContext);
  const [word, setWord] = useState("");

  // Search Data by artist name
  const searchData = () => {
    return eventsList.filter((item) => {
      return item.event_name.toLowerCase().includes(word.toLowerCase());
    });
  };
  return (
    <div className="flex flex-col ">
      <div className="p-2">
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
      </div>
      <div className="flex flex-col pr-[1rem]  whitespace-nowrap">
        <table>
          <thead className="bg-slate-800 border-2 rounded">
            <tr className=" text-xs font-medium text-center text-gray-200 uppercase">
              <th className="p-4">event</th>
              <th className="p-4">date</th>
              <th className="p-4">time</th>
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
                  {item.event_date}
                </td>
                <td className="p-4 text-sm font-normal text-gray-500 ">
                  {item.event_time}
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
