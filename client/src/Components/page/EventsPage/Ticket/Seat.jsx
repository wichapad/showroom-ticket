import React, { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../HomePage/Footer";

const Seat = () => {
  const { slug } = useParams();
  const [singleTicket, setSingleTicket] = useState([]);

  const ticketData = () => {
    axios
      .get(`${process.env.REACT_APP_USERS}/api/tickets/${slug}`)
      .then((response) => {
        console.log(response.data);
        setSingleTicket(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    ticketData();
  }, [slug]);

  return (
    <>
      <Navbar />
      {singleTicket.map((ticket)=>{
        <div key={ticket.event_id}>
            <div>{ticket.event_name}</div>
        </div>
      })}
      <Footer />
    </>
  );
};

export default Seat;
