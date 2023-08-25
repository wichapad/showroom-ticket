//Global API Database

import { createContext, useState, useEffect } from "react";
import axios from "axios";
const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  // State all Users
  const [allUsers, setAllUsers] = useState([]);

  // State all Events
  const [itemsEvent, setitemsEvent] = useState([]);

  //State Artists List
  const [artistsList, setArtistsList] = useState([]);
  //State Venues List
  const [venuesList, setVenuesList] = useState([]);

  // State Ticket
  const [allTicket, setAllticket] = useState([]);

  useEffect(() => {
    const UsersData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/users`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setAllUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    UsersData();
  }, []);

  //Get database collection events
  useEffect(() => {
    const EventsData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/api/events`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setitemsEvent(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    EventsData();
  }, []);

  // Get all ArtistsData
  useEffect(() => {
    const ArtistsData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/api/artists`
        );
        setArtistsList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    ArtistsData();
  }, []);

  // Get all venuesData
  useEffect(() => {
    const VenuesData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/api/venues`
        );
        setVenuesList(response.data);
      } catch (error) {
        console.log(error);
      }
      VenuesData();
    };
  }, []);

  // Get database all tickets
  useEffect(() => {
    const ticketData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/api/tickets`
        );

        setAllticket(response.data);
      } catch (error) {
        console.log(error);
      }
      ticketData();
    };
  }, []);

  return (
    <ApiContext.Provider
      value={{
        allUsers,
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
