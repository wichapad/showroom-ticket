//API By Slug

import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ApiContextSlug = createContext();

const ApiProvider = ({ children }) => {
  const { slug } = useParams();
  const [singleEvent, setSingleEvent] = useState([]);

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_USERS}/api/events/${slug}`)
      .then((response) => {
        console.log(response.data);
        setSingleEvent(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ApiContextSlug.Provider value={{ singleEvent }}>
      {children}
    </ApiContextSlug.Provider>
  );
};

export { ApiContextSlug, ApiProvider };
