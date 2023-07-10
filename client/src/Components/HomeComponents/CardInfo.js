//  แสดงข้อมูลแบบ single ขอข้อมูลที่ส่งมาจาก database
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "./Footer";
import { BsFillCalendarEventFill, BsFillClockFill } from "react-icons/bs";

const CardInfo = () => {
  const { slug } = useParams();
  const [singleEvent, setSingleEvent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${process.env.REACT_APP_USERS}/api/events/${slug}`)
        .then((response) => {
          setSingleEvent(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [slug]);

  //แปลงค่า วันที่
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const monthString = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const month = monthString[monthIndex];
    const year = date.getFullYear();
    return `${month}  ${day < 10 ? "0" + day : day}  ${year}`;
  };

  return (
    <>
      <Navbar />
      <div>
        {/* Header */}
        {singleEvent && (
          <>
            <div className="relative flex bg-black overflow-hidden">
              <div className="brightness-50 w-full filter blur-sm  h-80">
                <img
                  className="w-full h-full object-cover"
                  src={singleEvent.images.band_image}
                  alt="bandImage"
                />
              </div>
              <div className="absolute left-8 bottom-8  ">
                <div className="flex ">
                  <img
                    className="w-48  aspect-video rounded-md object-cover md:w-72"
                    src={singleEvent.images.band_image}
                    alt="bandImage"
                  />
                  <div className="pl-8 text-2xl text-white font-black md:text-3xl ">
                    <p className="text-lg">{singleEvent.band.genre}</p>
                    <p>{singleEvent.band.artist}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* tour */}
            <div className="m-2 w-36 border-b border-black">
              <p className="text-2xl font-bold uppercase">list events</p>
            </div>
            <div className="m-2 md:p-2 border rounded shadow md:max-w-screen-lg ">
              {singleEvent.dates.map((date, index) => (
                <div
                  key={index}
                  className="m-2 p-4 border-b border-gray-400 rounded shadow-sm	 sm:flex justify-between items-center  "
                >
                  <div className="md:flex">
                    <div className="flex items-center md:flex-col ">
                      <div className="text-gray-400 text-xl mr-2">
                        <BsFillCalendarEventFill />
                      </div>
                      <div>
                        <p>{formatDate(date.localDate)}</p>
                      </div>
                    </div>
                    <div className="mt-4 md:ml-8 md:mt-0">
                      <div className="flex items-center text-gray-400 text-xl">
                        <BsFillClockFill />
                        <p className="text-black text-base ml-2">
                          {date.localTime}
                        </p>
                      </div>
                      <div>
                        <p>{singleEvent.locations[index].name_show}</p>
                      </div>

                      <div className="flex text-sm">
                        <p className="text-gray-400">
                          Venue:{" "}
                          <span className="text-black">
                            {singleEvent.locations[index].venue}
                          </span>
                        </p>
                        <p className="mx-2 text-gray-400">
                          State:{" "}
                          <span className="text-black">
                            {singleEvent.locations[index].state}
                          </span>
                        </p>
                        <p className="text-gray-400">
                          City:{" "}
                          <span className="text-black">
                            {singleEvent.locations[index].city}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0">
                   <div>
                   <button  className="uppercase text-sm font-bold py-2 px-4 text-gray-200 rounded-md bg-gradient-to-r from-purple-600 via-violet-700 to-purple-600 active:scale-95">
                      Buy Ticket
                    </button>
                    
                   </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="m-2">
              <div className="w-20 border-b border-black">
                <p className="text-2xl font-bold uppercase">About</p>
              </div>
              <div className="mt-4 max-w-screen-lg">
                <p className="font-light leading-relaxed">{singleEvent.band.description}</p>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CardInfo;
