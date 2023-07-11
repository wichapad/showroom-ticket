//  แสดงข้อมูลที่ส่งมาจาก database โดย จะให้ไปแสดงใน home component จะแสดง รูปภาพ และชื่อ
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from '../HomeComponents/Footer'

const Events = () => {
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
    <>
      <Navbar />
      <div className="max-w-screen-xl">
        <img
          className=" home-background-img "
          src="https://images.unsplash.com/photo-1577648875929-894904f7b051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="bg-home"
        />
      </div>
      <div className="mx-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {events.map((event) => {
            return (
              <Link key={event._id} to={`/events/${event.slug}`}>
                <div className=" relative bg-gray-900 rounded-md m-4 group">
                  <img
                    className="absulute w-full aspect-video rounded-md  object-cover hover:opacity-50 duration-300"
                    src={event.images.band_image}
                    alt=""
                  />
                  <div className="absolute opacity-0 left-4 bottom-4 text-white group-hover:opacity-100">
                    <p className="">{event.band.artist}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Events;
