import axios from "axios";
import React, { useEffect, useState } from "react";
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? "0" + day : day}-${
      month < 10 ? "0" + month : month
    }-${year}`;
  };

  return (
    <div className="max-w-screen-xl  mx-4">
      <div className="border-b-2 border-black w-full my-4">
        <span className="text-2xl">Showroom Events</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 ">
        {events.map((event) => {
          return (
            <div
              key={event._id}
              className="max-w-xs overflow-hidden rounded shadow-lg m-6"
            >
              <img
                className="w-full aspect-square object-cover"
                src={event.images.poster_image}
                alt=""
              />
              <div className="px-6 py-4">
                <p className="text-sm mb-3 h-8 font-semibold">
                  {event.locations[0].name_show}
                </p>
                <p className="text-sm font-medium mb-3">
                  Date : {formatDate(event.dates[0].localDate)}
                </p>
                <p className="text-gray-500 text-sm h-8">
                  Location : {event.locations[0].venue},
                  {event.locations[0].state}
                </p>
              </div>
              <div className="flex justify-center my-2.5 px-3.5">
                <button className="button-container ">Ticket</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
