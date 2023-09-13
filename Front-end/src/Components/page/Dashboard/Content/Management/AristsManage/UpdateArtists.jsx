// Component update artist by slug. When input new values in the input attribute or select velues in select arttribute will keep values in state artistsForm.
// After click update will send new value keep back to database
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { HiX } from "react-icons/hi";
import { ApiContext } from "../../../../../UseContext/ApiContext";
import axios from "axios";
// import axios from "axios";

const UpdateArtists = ({ isVisible, handleUpdate, artist }) => {
  const { genreList } = useContext(ApiContext);
  const [closeUpdate, setCloseUpdate] = useState(false);
  // Create state to keep value artists

  const [artistsForm, setArtistsForm] = useState({
    artist_name: "",
    genre_id: "",
    artist_image: "",
  });

  // Use react hook useEffect to keep data artist by slug from click update
  useEffect(() => {
    setArtistsForm({
      artist_name: artist.artist_name,
      genre_id: artist.genre_id,
      artist_image: artist.artist_image,
    });
  }, [artist]);
  //Function store new value in state artistsForm
  const inputValueArtists = (e) => {
    const { name, value } = e.target;
    setArtistsForm({
      ...artistsForm,
      [name]: value,
    });
  };

  // HTTP put artists
  const updateArtist = async (e, slug) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API}/api/artists/${slug}`,
        artistsForm
      );
      if (response.status === 200) {
        alert("Artist update is successfully");
        window.location.reload()
      } else {
        console.error("Fail to update artist");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //close update event page
  const toggleClose = () => {
    setCloseUpdate(!closeUpdate);
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
          <form onSubmit={(e) => updateArtist(e, artist.slug)}>
            <div>
              <label>Artist</label>
              <input
                className="border border-gray-300 rounded p-[0.35rem]  focus:border-gray-700 outline-none appearance-none "
                type="text"
                name="artist_name"
                value={artistsForm.artist_name || ""}
                onChange={inputValueArtists}
              />{" "}
            </div>
            <div className="my-2">
              <label>Genre</label>
              <select
                className="w-full border border-gray-300 rounded p-[0.35rem] focus:border-gray-700 outline-none appearance-none "
                value={artistsForm.genre_id || ""}
                name="genre_id"
                onChange={inputValueArtists}
              >
                <option>{artistsForm.genre_name}</option>
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
                name="artist_image"
                value={artistsForm.artist_image || ""}
                onChange={inputValueArtists}
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
