import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";
import { FormatDateTime } from "../../../FormatDateTime";

export const SeatRow = () => {
  const { formatDate, formatTime } = FormatDateTime();
  const { id, slug } = useParams();
  const [seatRows, setSeatRows] = useState([]);
  const [checkedRows, setCheckedRows] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const seatRowsData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/api/tickets/${slug}/${id}`
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
      {seatRows.map((item) => (
        <div key={item.event_id} className="block md:flex">
          <div className="bg-gray-900 w-[350px] flex flex-col p-4 items-center">
            <div className="flex justify-center items-center  border-2 border-purple-500 w-[300px]  rounded">
              <p className="text-white text-lg uppercase">Stage</p>
            </div>
            <div className="flex p-2">
              {item.seats.map((rows) => (
                <div key={rows.ticket_id}>
                  <NavLink
                    onClick={() =>
                      setCheckedRows((prevCheck) => {
                        let newCheckRows = { ...prevCheck };
                        newCheckRows[rows.seat] = !newCheckRows[rows.seat];
                        const updateTotalPrice = Object.keys(newCheckRows)
                          .filter((seat) => newCheckRows[seat])
                          .reduce((total) => total + rows.price, 0);
                        setTotalPrice(updateTotalPrice);

                        return newCheckRows;
                      })
                    }
                  >
                    {checkedRows[rows.seat] ? (
                      <div className="flex justify-center items-center bg-purple-700  h-[45px] w-[45px] m-[0.5rem] rounded-full">
                        <p className="text-xl text-white">
                          {" "}
                          <BsCheckLg />
                        </p>{" "}
                      </div>
                    ) : (
                      <div className="flex justify-center items-center bg-purple-500 hover:bg-purple-600 h-[45px] w-[45px] m-[0.5rem] rounded-full">
                        <p className="text-sm text-white">{rows.seat}</p>{" "}
                      </div>
                    )}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 md:mt-0 md:ml-[5rem] md:w-[280px] border rounded border-purple-600">
            <div className="p-2 bg-gradient-to-r from-purple-600 via-violet-700 to-purple-600">
              <p className="text-white">Booking Detail</p>
            </div>
            <div className="p-2">
              <ul>
                <div className="flex justify-between items-center border-b py-2">
                  <li className="mr-2">Show time</li>
                  <div className="text-right">
                    <p className="text-sm">{formatDate(item.event_date)}</p>
                    <p className="text-sm">{formatTime(item.event_time)}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center border-b py-2">
                  <li className="mr-2">Status</li>
                  <p className="border border-green-500 p-1 rounded text-sm text-green-500 uppercase">
                    Available
                  </p>
                </div>
                <div className="flex justify-between border-b py-2">
                  <li className="mr-2">Price</li>
                  <p>{totalPrice.toFixed(2)}$</p>
                </div>
                <div className="flex justify-between border-b py-2">
                  <li className="mr-2">Number of seat</li>
                  <p>{Object.values(checkedRows).filter(Boolean).length}</p>
                </div>
                <div className="flex justify-between py-2">
                  <li>Seat number</li>
                  <p>
                    {Object.keys(checkedRows)
                      .filter((seat) => checkedRows[seat])
                      .join(", ")}
                  </p>
                </div>
              </ul>
            </div>
            <div className="text-center  p-2">
              <button className="w-full p-2 rounded text-white uppercase bg-gradient-to-r from-purple-600 via-violet-700 to-purple-600">
                Confirm
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
