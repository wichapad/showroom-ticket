//Global API Database

import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  // State all Users
  const [allUsers, setAllUsers] = useState([]);

  // State all Events
  const [artistSchedule, setiartistSchedule] = useState([]);

  //State Artists List
  const [artistsList, setArtistsList] = useState([]);
  //State Venues List
  const [venuesList, setVenuesList] = useState([]);

  useEffect(() => {
    const UsersData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API}/users`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setAllUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    UsersData();
  }, []);

  //Get database collection events
  useEffect(() => {
    const ScheduleData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/api/tour`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setiartistSchedule(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    ScheduleData();
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
    };
    VenuesData();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        allUsers,
        artistSchedule,
        artistsList,
        venuesList,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export { ApiContext, ApiProvider };
