//  แสดงข้อมูลที่ส่งมาจาก database โดย จะให้ไปแสดงใน home component จะแสดง รูปภาพ และชื่อ

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const EventsHome = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_USERS}/api/events`)

      .then((response) => {
        console.log(response.data.event);
        setEvents(response.data.event);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  return (
    <div className="max-w-screen-xl ">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {events.map((event) => {
          return (
            <div key={event._id} className=" relative bg-gray-900 rounded-md m-4 group">
              <Link  to={`/events/${event.slug}`}>
                <img
                  className="absulute w-full aspect-video rounded-md  object-cover hover:opacity-50 duration-300"
                  src={event.images.band_image}
                  alt=""
                />
              </Link>
              <div className="absolute opacity-0 left-4 bottom-4 text-white group-hover:opacity-100">
                <p className="">{event.band.artist}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventsHome;
