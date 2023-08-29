//  แสดงข้อมูลที่ส่งมาจาก database โดย จะให้ไปแสดงใน home component จะแสดง รูปภาพ และชื่อ
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ApiContext } from "../../UseContext/ApiContext";
import Header from "../HomePage/Header";


const Events = () => {
  const { itemsEvent } = useContext(ApiContext);
  

  return (
    <div>
      <Header />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {itemsEvent.map((event) => {
          return (
            <div
              key={event.artist_id}
              className=" relative bg-gray-900 rounded-md m-4 group"
            >
              <NavLink to={`/events/${event.slug}`}>
                <img
                  className="absulute w-full aspect-video rounded-md  object-cover hover:opacity-50 duration-300"
                  src={event.artist_image}
                  alt=""
                />
              </NavLink>
              <div className="absolute opacity-0 left-4 bottom-4 text-white group-hover:opacity-100">
                <p className="">{event.artist_name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
