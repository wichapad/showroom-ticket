import React, { useState, useContext } from "react";
import { BsSearch } from "react-icons/bs";

import { ApiContext } from "../../../../../UseContext/ApiContext";

const VenuesManage = () => {
  const { venuesList } = useContext(ApiContext);
  const [word, setWord] = useState("");

  // Search Data by artist name
  const searchData = () => {
    return venuesList.filter((item) => {
      return item.venue_state.toLowerCase().includes(word.toLowerCase());
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
              <th className="p-4">Name</th>
              <th className="p-4">City</th>
              <th className="p-4">State</th>
              <th className="p-4">Capacity</th>
            </tr>
          </thead>
          {searchData().map((item) => (
            <tbody
              key={item.venue_id}
              className="bg-white border-2 shadow trasition duration-500"
            >
              <tr className="text-center border-b-2 hover:bg-gray-100">
                <td className="p-4 text-sm font-normal text-gray-900 ">
                  {item.venue_name}
                </td>
                <td className="p-4 text-sm font-normal text-gray-500 ">
                  {item.venue_city}
                </td>
                <td className="p-4 text-sm font-normal text-gray-500 ">
                  {item.venue_state}
                </td>
                <td className="p-4 text-sm font-normal text-gray-500 ">
                  {item.venue_capacity}
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
