import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Card = () => {
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

  // const formatDate = (dateString) => {
  //   const date = new Date(dateString);
  //   const day = date.getDate();
  //   const month = date.getMonth() + 1;
  //   const year = date.getFullYear();
  //   return `${day < 10 ? "0" + day : day}-${
  //     month < 10 ? "0" + month : month
  //   }-${year}`;
  // };

  return (
    <div className="max-w-screen-xl  mx-4">
      <div className="border-b-2 border-black w-full my-4">
        <span className="text-2xl">Showroom Events</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {events.map((event) => {
          return (
            <Link key={event._id} to={event.slug}>
              <div
                className=" relative bg-gray-900 rounded-md m-4 group"
              >
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
  );
};

export default Card;
