// Component create new artist. When input values in the input attribute and select velues inselect arttlibute will keep values in state artistsForm.
// After click create will send value keep back to  database

import React, { useState } from "react";
import { useContext } from "react";
import { HiX } from "react-icons/hi";
import { ApiContext } from "../../../../UseContext/ApiContext";
import axios from "axios";
import { DashboardContext } from "../../../../UseContext/DashboardContext";

const CreateArtists = () => {
  const { genreList } = useContext(ApiContext);
  const { state, dispatch } = useContext(DashboardContext);

  // Create state to keep value artists
  const [artistsForm, setArtistsForm] = useState({
    artist_name: "",
    genre_id: "",
    artist_image: "",
  });

  //Function store new value in state artistsForm
  const inputValueArtists = (e) => {
    const { name, value } = e.target;
    setArtistsForm({
      ...artistsForm,
      [name]: value,
    });
  };

  //HTTP create artists
  const createArtists = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_API}/api/artists/create`,
        artistsForm
      );
      setArtistsForm({
        artist_name: "",
        genre_id: "",
        artist_image: "",
      });
      alert("Create artist successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error creating artist", error);
    }
  };

  //close Add event page
  const toggleClose = () => {
    dispatch({ type: "TOGGLE_CREATE" });
  };

  return (
    <>
      <div
        className={`${
          state.isCreate ? "translate-x-0" : "translate-x-full"
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
          <h1 className="text-center uppercase">Create artists</h1>
          <form onSubmit={createArtists}>
            <div>
              <label>Artist</label>
              <input
                className="manage_input"
                type="text"
                name="artist_name"
                value={artistsForm.artist_name}
                onChange={inputValueArtists}
              />
            </div>
            <div className="my-2">
              <label>Genre</label>
              <select
                className="w-full manage_input"
                name="genre_id"
                value={artistsForm.genre_id}
                onChange={inputValueArtists}
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
                className="manage_input"
                type="text"
                name="artist_image"
                value={artistsForm.artist_image}
                onChange={inputValueArtists}
              />
            </div>
            <div className="my-2">
              <button
                type="submit"
                className="w-full uppercase py-[0.6rem] rounded-lg bg-gray-800 text-white hover:bg-gray-900"
              >
                Create
              </button>
            </div>
          </form>
          <button
            onClick={toggleClose}
            className=" py-[0.6rem] uppercase rounded-lg bg-red-700 text-white hover:bg-red-800"
          >
            Cancel
          </button>
        </div>
      
      </div>
      
    </>
  );
};

export default CreateArtists;
