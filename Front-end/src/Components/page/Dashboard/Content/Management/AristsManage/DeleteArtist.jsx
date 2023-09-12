// Component delete artist by slug. When click delete will delete data to database

import axios from "axios";
import { useState } from "react";
import { HiX } from "react-icons/hi";

const DeleteArists = ({ isVisible, handleDelete, artist }) => {
  const [closeDelete, setCloseDelete] = useState(false);
  

  const toggleClose = () => {
    setCloseDelete(!closeDelete);
    handleDelete();
  };

  const deleteArtist = async (slug) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API}/api/artists/${slug}`
      );
      if (response.status === 200) {
        alert("Artist deleted successfully!");
        window.location.reload();
      } else {
        console.error("Failed to delete artist.");
      }
    } catch (error) {
      console.error("An error occurred while deleting artist:", error);
    }
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
          <h1 className="text-center uppercase">Delete artists</h1>

          <div>
            <p>{artist.artist_name}</p>
          </div>
          <div className="my-2">
            <p>{artist.genre_name}</p>
          </div>
          <div>
            <img src={artist.artist_image} alt={artist.artist_image} />
          </div>
          <div className="flex justify-evenly mt-2">
            <button
              onClick={() => deleteArtist(artist.slug)}
              className="px-4 py-3 rounded-lg bg-blue-700 text-white hover:bg-blue-800"
            >
              Confirm
            </button>
            <button
              onClick={toggleClose}
              className="px-4 py-3 rounded-lg bg-red-700 text-white hover:bg-red-800"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteArists;
