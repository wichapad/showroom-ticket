import React, { useState, useContext } from "react";
import { BsSearch } from "react-icons/bs";

import { ApiContext } from "../../../../UseContext/ApiContext";

const AristsMange = () => {
  const { artistsList } = useContext(ApiContext);
  const [word, setWord] = useState("");

  // Search Data by artist name
  const searchData = () => {
    return artistsList.filter((item) => {
      return item.artist_name.toLowerCase().includes(word.toLowerCase());
    });
  };
  return (
    <div className="flex flex-col p-2">
      <div>
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
      </div>
      <table>
        <thead>
            <tr>
                <th>Band</th>
                <th>Genre</th>
            </tr>
        </thead>
      {searchData().map((artist) => (
        <tbody key={artist.artist_id}>
          <tr>
            <td>{artist.artist_name}</td>
            <td>{artist.genre_name}</td>
          </tr>
        </tbody>
      ))}
      </table>
      
    </div>
  );
};

export default AristsMange;
