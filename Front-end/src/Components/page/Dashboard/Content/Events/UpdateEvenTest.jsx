import axios from "axios";
import { useState, useEffect, useContext } from "react";

import { useParams } from "react-router-dom";

const UpdateEvent = () => {
  const { id } = useParams();
 
  const [artistEvent, setArtistEvent] = useState([]);
  

  const eventGroup = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/api/events/${id}`
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    eventGroup();
  }, [id]);


  return <div>test</div>;
};

export default UpdateEvent;
