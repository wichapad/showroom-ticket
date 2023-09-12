// Component in show data all artists
import React, { useState, useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { ApiContext } from "../../../../../UseContext/ApiContext";
import CreateArtists from "./CreateArtists";
import UpdateArtists from "./UpdateArtists";
import axios from "axios";
import DeleteArists from "./DeleteArtist";

const AristsMange = () => {
  const slug = useParams();
  const { artistsList } = useContext(ApiContext);
  const [word, setWord] = useState("");

  // State create component
  const [isCreate, setIsCreate] = useState(false);
  // State update component
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateSlug, setUpdateSlug] = useState(null);
  // State delete component
  const [isDelte, setIsDelte] = useState(false);
  const [deleteSlug, setDeleteSlug] = useState(null);

  const [selectedArtist, setSelectedArtist] = useState([]);

  // Search Data by artist name
  const searchData = () => {
    return artistsList.filter((item) => {
      return item.artist_name.toLowerCase().includes(word.toLowerCase());
    });
  };

  // Start value is false when click create button will show CreateArtists component
  const handleCreate = () => {
    setIsCreate(!isCreate);
  };
  // Start value is false when click update button will show UpdateArtists for slug name
  const handleUpdate = (slug) => {
    setIsUpdate(!isUpdate);
    setUpdateSlug(slug);
    const artist = artistsList.find((item) => item.slug === slug);
    setSelectedArtist(artist);
  };

  // Start value is false when click delete button will show DeleteArtist for slug name
  const handleDelete = (slug) => {
    setIsDelte(!isDelte);
    setDeleteSlug(slug);
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
                  isCreate ? "translate-x-0 " : "translate-x-full"
                } fixed top-0 left-0 z-50 h-full w-full bg-[rgba(0,0,0,0.5)] `}
              >
                <CreateArtists
                  isVisible={isCreate}
                  handleCreate={handleCreate}
                />
              </div>
              <div
                className={`${
                  isUpdate ? "translate-x-0 " : "translate-x-full"
                } fixed top-0 left-0 z-50 h-full w-full  bg-[rgba(0,0,0,0.5)]`}
              >
                <UpdateArtists
                  isVisible={isUpdate}
                  handleUpdate={handleUpdate}
                  artist={selectedArtist}
                />
              </div>
              <div
                className={`${
                  isDelte ? "translate-x-0 " : "translate-x-full"
                } fixed top-0 left-0 z-50 h-full w-full  bg-[rgba(0,0,0,0.5)]`}
              >
                <DeleteArists
                  isVisible={isDelte}
                  handleDelete={() => handleDelete()}
                  artist={selectedArtist}
                />
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
