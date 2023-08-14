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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const monthString = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const month = monthString[monthIndex];
    const year = date.getFullYear();
    return `${month}  ${day < 10 ? "0" + day : day}  ${year}`;
  };

  return (
    <>
      <Navbar />
      <div className="pt-[5rem]">
        {singleTicket.map((item) => (
          <div key={item.event_id}>
            <div>
              <div>{item.event_name}</div>
              <div>{formatDate(item.event_date)}</div>
              <div>{item.event_time}</div>
            </div>
           <div>
           {item.details.map((seat) => (
              <div key={seat.ticket_id}>
                <div>{seat.description}</div>
              </div>
            ))}
           </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Seat;
