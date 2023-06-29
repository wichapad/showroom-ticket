import { useState, useEffect } from "react";
import axios from "axios";

const AdminControl = () => {
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
    <div>
      {events.map((event) => {
        return (
          <div key={event._id}>
            <p>{event.band.artist}</p>
            <p>{event.band.desciption}</p>
            <p>{event.band.desctiption}</p>
            <p>{event.images.band_image}</p>
            <p>{event.images.poster_image}</p>
            {event.dates.map((date,index) => (
              <div key={index}>
                <p>{formatDate(date.localDate)}</p>
                <p>{date.localTime}</p>
              </div>
            ))}
            {event.locations.map((location,index) => (
              <div key={index}>
                <p>{location.name_show}</p>
                <p>{location.venue}</p>
                <p>{location.state}</p>
                <p>{location.city}</p>
              </div>
            ))}

            {event.ticket.map((t,index) => (
              <div key={index}>
                <p >{t.ticket_type}</p>
                <p >{t.ticket_price}</p>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default AdminControl;
