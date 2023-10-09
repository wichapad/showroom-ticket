// Component delete artist by slug. When click delete will delete data to database

import axios from "axios";
import { useContext } from "react";
import { HiX } from "react-icons/hi";
import { DashboardContext } from "../../../../../UseContext/DashboardContext";

const DeleteArists = ({ artist }) => {
  const { state, dispatch } = useContext(DashboardContext);

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

  const toggleClose = () => {
    dispatch({ type: "TOGGLE_DELETE" });
  };

  return (
    <>
      <div
        className={`${
          state.isDelete ? "translate-x-0" : "translate-x-full"
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
    
            <button
              onClick={() => deleteArtist(artist.slug)}
              className="my-2 py-[0.6rem] uppercase rounded-lg bg-gray-800 text-white hover:bg-gray-900"
            >
              Confirm
            </button>
            <button
              onClick={toggleClose}
              className="py-[0.6rem] uppercase rounded-lg bg-red-700 text-white hover:bg-red-800"
            >
              Cancel
            </button>
      
        </div>
      </div>
    </>
  );
};

export default DeleteArists;
