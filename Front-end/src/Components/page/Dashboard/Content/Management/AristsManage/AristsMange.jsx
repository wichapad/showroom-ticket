// Component in show data all artists

import React, { useState, useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { ApiContext } from "../../../../../UseContext/ApiContext";
import CreateArtists from "./CreateArtists";
import UpdateArtists from "./UpdateArtists";
import DeleteArists from "./DeleteArtist";
import { DashboardContext } from "../../../../../UseContext/DashboardContext";

const AristsMange = () => {
  const { artistsList } = useContext(ApiContext);
  const { state, dispatch } = useContext(DashboardContext);
  const [word, setWord] = useState("");

  const [selectedArtist, setSelectedArtist] = useState([]);

  // Search Data by artist name
  const searchData = () => {
    return artistsList.filter((item) => {
      return item.artist_name.toLowerCase().includes(word.toLowerCase());
    });
  };

  // Start value is false when click create button will show CreateArtists component
  const handleCreate = () => {
    dispatch({ type: "TOGGLE_CREATE" });
  };
  // Start value is false when click update button will show UpdateArtists for slug name
  const handleUpdate = (slug) => {
    dispatch({ type: "TOGGLE_UPDATE" });
    const artist = artistsList.find((item) => item.slug === slug);
    setSelectedArtist(artist);
  };

  // Start value is false when click delete button will show DeleteArtist for slug name
  const handleDelete = (slug) => {
    dispatch({ type: "TOGGLE_DELETE" });
    const artist = artistsList.find((item) => item.slug === slug);
    setSelectedArtist(artist);
  };

  return (
    <div className="relative">
      <div className="flex flex-col">
        <div className="flex justify-between items-center py-[1rem] pr-[1.2rem]">
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
          <div>
            <div>
              <div
                className={`${
                  state.isCreate ? "translate-x-0 " : "translate-x-full"
                } fixed top-0 left-0 z-50 h-full w-full bg-[rgba(0,0,0,0.5)] `}
              >
                <CreateArtists />
              </div>
              <div
                className={`${
                  state.isUpdate ? "translate-x-0 " : "translate-x-full"
                } fixed top-0 left-0 z-50 h-full w-full  bg-[rgba(0,0,0,0.5)]`}
              >
                <UpdateArtists artist={selectedArtist} />
              </div>
              <div
                className={`${
                  state.isDelete ? "translate-x-0 " : "translate-x-full"
                } fixed top-0 left-0 z-50 h-full w-full  bg-[rgba(0,0,0,0.5)]`}
              >
                <DeleteArists artist={selectedArtist} />
              </div>
            </div>
            <button
              onClick={handleCreate}
              className="px-4 py-2 rounded-lg bg-purple-700 text-white hover:bg-purple-800"
            >
              + Create
            </button>
          </div>
        </div>
        <div className="flex flex-col pr-[1rem]  whitespace-nowrap">
          <table>
            <thead className="bg-slate-800 border-2 rounded">
              <tr className=" text-sm font-medium text-center text-gray-200 uppercase">
                <th className="p-4 w-[30%]">Artist</th>
                <th className="p-4">genre</th>
                <th className="p-4 w-[20%]"></th>
              </tr>
            </thead>
            {searchData().map((item) => (
              <tbody
                key={item.artist_id}
                className="bg-white border-2 shadow trasition duration-500"
              >
                <tr className="text-center border-b-2 hover:bg-gray-100">
                  <td className="p-2 text-sm font-normal text-gray-900 ">
                    {item.artist_name}
                  </td>
                  <td className="p-2 text-sm font-normal text-gray-500 ">
                    {item.genre_name}
                  </td>

                  <td className="p-2 flex justify-center text-sm font-normal text-gray-500 ">
                    <div className="pr-2">
                      <button
                        onClick={() => handleUpdate(item.slug)}
                        className="px-4 py-3 rounded-lg bg-blue-700 text-white hover:bg-blue-800"
                      >
                        Update
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => handleDelete(item.slug)}
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
    </div>
  );
};

export default AristsMange;
