import React from "react";
import { useContext } from "react";
import { HiX } from "react-icons/hi";
import { ApiContext } from "../../../../../UseContext/ApiContext";

const CreateArtists = () => {
  const { artistsList } = useContext(ApiContext);

  return (
    <>
      <div className=" h-screen bg-white">
        <div className="flex flex-col  p-4">
          <div className="text-[1.5rem] flex justify-end cursor-pointer">
            <HiX />
          </div>
          <h1 className="text-center uppercase">Create artists</h1>
          <div>
            <label>Artist</label>
            <input
              type="text"
              className="border border-gray-300 rounded p-[0.35rem]  focus:border-gray-700 outline-none appearance-none "
            />
          </div>
          <div className="my-2">
            <label>Genre</label>
            <select
              type="text"
              className="w-full border border-gray-300 rounded p-[0.35rem] focus:border-gray-700 outline-none appearance-none "
            >
              <option>Select genre</option>
              {artistsList.map((artist) => (
                <option key={artist.genre_id} value={artist.genre_id}>
                  {artist.genre_name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Arist Image</label>
            <input
              type="text"
              className="border border-gray-300 rounded p-[0.35rem]  focus:border-gray-700 outline-none appearance-none "
            />
          </div>
          <div className="flex justify-evenly mt-2">
            <button className="px-4 py-3 rounded-lg bg-blue-700 text-white hover:bg-blue-800">
              Create
            </button>
            <button className="px-4 py-3 rounded-lg bg-red-700 text-white hover:bg-red-800">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateArtists;
