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
            <p>{event.dates[0].localDate}</p>
            <p>{event.locations[0].venue}</p>
            <p>{event.ticket[0].ticket_type}</p>
            <p>{event.ticket[0].price}</p>s
            <hr/>
          </div>
          
        );
      })}
    </div>
  );
};

export default AdminControl;
