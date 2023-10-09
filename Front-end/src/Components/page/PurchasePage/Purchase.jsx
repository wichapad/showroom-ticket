import React from "react";
import { useLocation } from "react-router-dom";

const Purchase = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const selectedSeats = queryParams.get("seats");
  const totalPrice = queryParams.get("totalPrice");
  const showTime = queryParams.get("showTime");
  return (
    <div className="pt-[4rem]">
      <p>{selectedSeats}</p>
      <p>${totalPrice}</p>
      <p>{showTime}</p>
    </div>
  );
};

export default Purchase;
