import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

export const SeatRow = () => {
  const { id, slug } = useParams();
  const [seatRows, setSeatRows] = useState([]);
  const [checkRows, setChechRows] = useState(false);

  const seatRowsData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_USERS}/api/tickets/${slug}/${id}`
      );
      console.log(response.data);
      setSeatRows(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    seatRowsData();
  }, [id, slug]);

  

  return (
    <div className="flex justify-center  m-4">
      <div className="bg-gray-900 w-[400px] flex flex-col p-4 items-center">
        <div className="flex justify-center items-center  border-2 border-purple-500 w-[300px] h-[50px] rounded">
          <p className="text-white text-lg uppercase">Stage</p>
        </div>
        {seatRows.map((item) => (
          <div key={item.event_id} className="flex p-2">
            {item.seats.map((rows) => (
              <div key={rows.ticket_id}>
                <NavLink>
                  <div className="flex justify-center items-center bg-purple-500 hover:bg-purple-600 h-[45px] w-[45px] m-[0.5rem] rounded-full">
                    <p className="text-sm text-white">{rows.seat}</p>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
