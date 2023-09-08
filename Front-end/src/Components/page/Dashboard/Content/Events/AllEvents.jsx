import { useState, useContext } from "react";
import { BsSearch, BsChevronRight, BsChevronDown } from "react-icons/bs";
import { ApiContext } from "../../../../UseContext/ApiContext";

const AllEvents = () => {
  // get api UseContext
  const { artistSchedule } = useContext(ApiContext);
  const [showContent, setShowContent] = useState(null);
  const [word, setWord] = useState("");

  // Search Data by artist name
  const searchData = () => {
    return artistSchedule.filter((item) => {
      return item.artist_name.toLowerCase().includes(word.toLowerCase());
    });
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="p-2 ">
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
        </div>
        {/* form search data */}

        {/* Table event data */}

        <div className="flex flex-col pr-[1rem]  whitespace-nowrap">
          <table>
            <thead className="bg-slate-800 border-2 rounded">
              <tr className=" text-xs font-medium text-center text-gray-200 uppercase">
                <th className="p-4"></th>
                <th className="p-4">Artist</th>
                <th className="p-4">genre</th>
              </tr>
            </thead>
            {searchData().map((item) => (
              <tbody
                key={item.artist_id}
                className="bg-white border-2 shadow trasition duration-500"
              >
                <tr className="text-center border-b-2 hover:bg-gray-100">
                  {/* arrow hide show info data */}
                  <td
                    className="p-4 w-4 cursor-pointer "
                    onClick={() =>
                      setShowContent(
                        showContent === item.artist_id ? null : item.artist_id
                      )
                    }
                  >
                    {showContent === item.artist_id ? (
                      <BsChevronDown />
                    ) : (
                      <BsChevronRight />
                    )}
                  </td>
                  <td className="p-4 text-sm font-normal text-gray-900 ">
                    {item.artist_name}
                  </td>
                  <td className="p-4 text-sm font-normal text-gray-500 ">
                    {item.genre_name}
                  </td>
                </tr>
                {/* show info */}
                {showContent === item.artist_id && (
                  <tr>
                    <td colSpan={5} className="p-2 ">
                      <p className="text-center uppercase text-gray-500">
                        Event List
                      </p>
                      <div className="flex justify-center items-center ">
                        {/* Map call data in terms of Events data */}
                        {item.events
                          .slice()
                          .sort((a, b) => a.event_id - b.event_id)

                          .map((item, index) => (
                            <div key={index} className="p-2">
                              <div className="flex justify-center ">
                                <div className="p-4 shadow border">
                                  <p className="text-center">
                                    {item.event_name}
                                  </p>
                                  <div className="flex justify-center">
                                    <p className="pr-2">{item.date}</p>
                                    <p>{item.time}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="flex justify-center pt-2">
                                <div className="shadow border p-2">
                                  <p className="text-center">
                                    {item.venue_name}
                                  </p>
                                  <div className="flex justify-center">
                                    <p className="pr-2">{item.city}</p>
                                    <p>{item.state}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default AllEvents;
