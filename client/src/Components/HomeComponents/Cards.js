import axios from "axios";
import React, { useEffect, useState } from "react";
const Card = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_USERS}/api/events`)
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 w-full">
      {events.map((event) => {
        return (
          <div
            key={event.id}
            className="max-w-xs overflow-hidden rounded shadow-lg m-6"
          >
            <img
              className="w-full object-cover"
              src={event.Image}
              alt={event.NameArtlist}
            />
            <div className="px-6 py-4">
              <p className="text-xs mb-3 h-8 font-semibold">
                Name : {event.NameArtlist}
              </p>
              <p className="text-xs font-medium mb-3">Date : {event.Date}</p>
              <p className="text-gray-500 text-xs h-8">
                Location : {event.Location}
              </p>
            </div>
            <div className="flex justify-center my-2.5 px-3.5">
              <button className="button-container ">Ticket</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
