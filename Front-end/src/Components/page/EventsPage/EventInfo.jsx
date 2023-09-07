//  แสดงข้อมูลแบบ single ขอข้อมูลที่ส่งมาจาก database
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { BsFillCalendarEventFill, BsFillClockFill } from "react-icons/bs";
import { FormatDateTime } from "../../FormatDateTime";

const EventInfo = () => {
  const { slug } = useParams();
  const [singleEvent, setSingleEvent] = useState([]);
  const { formatDate, formatTime } = FormatDateTime();

  const singleEventData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/api/events/artist/${slug}`
      );
      setSingleEvent(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    singleEventData();
    // eslint-disable-next-line
  }, [slug]);

  return (
    <div>
      {/* Header */}
      {singleEvent.map((event) => (
        <div key={event.artist_id}>
          <div className="relative flex bg-black overflow-hidden">
            <div className="brightness-50 w-full filter blur-sm  h-[280px]">
              <img
                className="w-full h-full object-cover"
                src={event.artist_image}
                alt="bandImage"
              />
            </div>
            <div className="absolute left-8 bottom-8  ">
              <div className="flex ">
                <img
                  className=" aspect-video rounded-md object-cover w-[200px] md:w-[250px]"
                  src={event.artist_image}
                  alt="bandImage"
                />
                <div className="pl-8 text-2xl text-white font-black md:text-3xl ">
                  <p className="text-lg ">{event.genre_name}</p>
                  <p className="text-[1.2rem] md:text-[1.5rem]">{event.artist_name}</p>
                </div>
              </div>
            </div>
          </div>
          {/* List Events */}
          <div className="my-6 md:mx-[2rem]">
            <div className="m-2 w-36 border-b-2 border-black">
              <p className="text-2xl font-bold uppercase">list events</p>
            </div>
            {event.events
              .slice()
              .sort((a, b) => a.event_id - b.event_id)
              .map((item, index) => (
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
                          <p>{item.venue_name},</p>
                        </div>
                        <div className="mx-2">
                          <p>{item.city},</p>
                        </div>
                        <div>
                          <p>{item.state}</p>
                        </div>
                      </div>
                    </div>
                    <div className="my-2">
                      <div>
                        <NavLink
                          to={`/booking/${item.slug_event}`}
                          className="uppercase text-sm font-bold py-3 px-4 text-gray-200 rounded-md bg-gradient-to-r from-purple-600 via-violet-700 to-purple-600 active:scale-95"
                        >
                          Get Ticket
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventInfo;
