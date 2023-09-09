import React, { useState } from "react";
import { useContext } from "react";
import { HiX } from "react-icons/hi";
import { ApiContext } from "../../../../../UseContext/ApiContext";
// import axios from "axios";

const UpdateArtists = ({ isVisible, handleUpdate }) => {
  const { genreList } = useContext(ApiContext);
  const [closeCreate, setCloseCreate] = useState(false);

  //close Add event page
  const toggleClose = () => {
    setCloseCreate(!closeCreate);
    handleUpdate();
  };

  return (
    <>
      <div
        className={`${
          isVisible ? "translate-x-0" : "translate-x-full"
        } fixed z-50 top-0 right-0 h-full  w-full overflow-y-auto bg-white transition-transform ease-in-out duration-300 `}
        style={{ width: "300px" }}
      >
        <div className="flex flex-col  p-4">
          <div
            onClick={toggleClose}
            className="text-[1.5rem] flex justify-end cursor-pointer"
          >
            <HiX />
          </div>
          <h1 className="text-center uppercase">Update artists</h1>
          <form>
            <div>
              <label>Artist</label>
              <input
                className="border border-gray-300 rounded p-[0.35rem]  focus:border-gray-700 outline-none appearance-none "
                type="text"
              />
            </div>
            <div className="my-2">
              <label>Genre</label>
              <select
                className="w-full border border-gray-300 rounded p-[0.35rem] focus:border-gray-700 outline-none appearance-none "
                type="text"
              >
                <option>Select genre</option>
                {genreList.map((genre) => (
                  <option key={genre.genre_id} value={genre.genre_id}>
                    {genre.genre_name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>Arist Image</label>
              <input
                className="border border-gray-300 rounded p-[0.35rem]  focus:border-gray-700 outline-none appearance-none "
                type="text"
              />
            </div>
            <div className="flex justify-evenly mt-2">
              <button
                type="submit"
                className="px-4 py-3 rounded-lg bg-blue-700 text-white hover:bg-blue-800"
              >
                Update
              </button>
              <button
                onClick={toggleClose}
                className="px-4 py-3 rounded-lg bg-red-700 text-white hover:bg-red-800"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateArtists;
