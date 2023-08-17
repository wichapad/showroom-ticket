//Global API Database

import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  // API all Events
  const [itemsEvent, setitemsEvent] = useState([]);

  //API Artists List
  const [artistsList, setArtistsList] = useState([]);
  //API Venues List
  const [venuesList, setVenuesList] = useState([]);

  // API Ticket
  const [allTicket, setAllticket] = useState([]);

  //ดึงข้อมูล จาก database collection events
  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_USERS}/api/events`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setitemsEvent(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchDataArtists = () => {
    axios
      .get(`${process.env.REACT_APP_USERS}/api/artists`)
      .then((response) => {
        setArtistsList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchDataVenues = () => {
    axios
      .get(`${process.env.REACT_APP_USERS}/api/venues`)
      .then((response) => {
        setVenuesList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Get database tickets
  const ticketData = () => {
    axios
      .get(`${process.env.REACT_APP_USERS}/api/tickets`)
      .then((response) => {
        setAllticket(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
    fetchDataArtists();
    fetchDataVenues();
    ticketData();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        itemsEvent,
        artistsList,
        venuesList,
        allTicket,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export { ApiContext, ApiProvider };
