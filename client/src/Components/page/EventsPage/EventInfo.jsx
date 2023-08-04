//  แสดงข้อมูลแบบ single ขอข้อมูลที่ส่งมาจาก database
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../HomePage/Footer";
// import Footer from "../HomeComponents/Footer";
import { BsFillCalendarEventFill, BsFillClockFill } from "react-icons/bs";

const EventInfo = () => {
  const { slug } = useParams();
  const [singleEvent, setSingleEvent] = useState([]);

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_USERS}/api/events/${slug}`)
      .then((response) => {
        console.log(response.data);
        setSingleEvent(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  //แปลงค่า วันที่
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const monthString = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const month = monthString[monthIndex];
    const year = date.getFullYear();
    return `${month}  ${day < 10 ? "0" + day : day}  ${year}`;
  };

  const formatTime = (time24Hour) => {
    const timeArr = time24Hour.split(":");
    let hours = parseInt(timeArr[0]);
    const minutes = timeArr[1];
    let amPm = "AM";

    if (hours === 0) {
      hours = 12;
    } else if (hours === 12) {
      amPm = "PM";
    } else if (hours > 12) {
      hours -= 12;
      amPm = "PM";
    }

    return `${hours}:${minutes} ${amPm}`;
  };

  return (
    <>
      <Navbar />
      <div>
        {/* Header */}
        {singleEvent.map((event) => (
          <div key={event.artist_id}>
            <div className="relative flex bg-black overflow-hidden">
              <div className="brightness-50 w-full filter blur-sm  h-80">
                <img
                  className="w-full h-full object-cover"
                  src={event.artist_image}
                  alt="bandImage"
                />
              </div>
              <div className="absolute left-8 bottom-8  ">
                <div className="flex ">
                  <img
                    className="w-48  aspect-video rounded-md object-cover md:w-72"
                    src={event.artist_image}
                    alt="bandImage"
                  />
                  <div className="pl-8 text-2xl text-white font-black md:text-3xl ">
                    <p className="text-lg">{event.genre_name}</p>
                    <p>{event.artist_name}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* List Events */}
            <div className="my-6 md:mx-[2rem]">
              <div className="m-2 w-36 border-b-2 border-black">
                <p className="text-2xl font-bold uppercase">list events</p>
              </div>
              {event.event.map((item, index) => (
                <div
                  key={index}
                  className="m-2 border border-violet-400 rounded shadow sm:max-w-screen-md"
                >
                  <div className="py-2 px-4 sm:flex justify-between items-center">
                    <div>
                      <div className="flex">
                        <div className="flex  items-center mr-2">
                          <BsFillCalendarEventFill className="mr-2 text-gray-400" />
                          <p>{formatDate(item.date)}</p>
                        </div>
                        <div className="flex items-center">
                          <BsFillClockFill className="mr-2 text-gray-400" />
                          <p>{formatTime(item.time)}</p>
                        </div>
                      </div>
                      <div className="my-2">
                        <p className="text-[18px] font-[300]">
                          {item.event_name}
                        </p>
                      </div>
                      <div className="sm:flex">
                        <div>
                          <p>{event.venue[index].venue_name},</p>
                        </div>
                        <div className="mx-2">
                          <p>{event.venue[index].city},</p>
                        </div>
                        <div>
                          <p>{event.venue[index].state}</p>
                        </div>
                      </div>
                    </div>
                    <div className="my-2">
                      <div>
                        <button className="uppercase text-sm font-bold py-3 px-4 text-gray-200 rounded-md bg-gradient-to-r from-purple-600 via-violet-700 to-purple-600 active:scale-95">
                          Get Ticket
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default EventInfo;
