import React from "react";
import { useLocation } from "react-router-dom";
import CreditCard from "../../../images/PaymentsImg/Creditcard.png";
import Banking from "../../../images/PaymentsImg/banking.png";
import TrueMoney from "../../../images/PaymentsImg/truemoneywallet.png";

const Purchase = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const artist = queryParams.get("artist");
  const eventName = queryParams.get("eventName");
  const selectedSeats = queryParams.get("seats");
  const totalPrice = queryParams.get("totalPrice");
  const showTime = queryParams.get("showTime");
  return (
    <div className="pt-[4rem]">
      <div className="p-4 ">
        <div className="border border-gray-400 rounded-[5px] my-2">
          <div className="p-2 rounded-t bg-gradient-to-r from-purple-600 via-violet-700 to-purple-600">
            <p className="text-white">Payment method</p>
          </div>
         <div className="p-2">
         <p>{artist}</p>
          <p>{eventName}</p>
          <p>{selectedSeats}</p>
          <p>${totalPrice}</p>
          <p>{showTime}</p>
         </div>
        </div>
        <div className="border border-gray-400 rounded-[5px] my-2">
          <div className="p-2 rounded-t bg-gradient-to-r from-purple-600 via-violet-700 to-purple-600">
            <p className="text-white">Payment method</p>
          </div>
          <div className="p-2">
            <div className="">
              <div className="payment-method-container">
                <img src={CreditCard} alt="" />
                <p>Credit/Debit card payment</p>
              </div>
              <div className="my-3 payment-method-container">
                <img src={Banking} alt="" />
                <p>Mobile banking payment</p>
              </div>
              <div className="payment-method-container">
                <img src={TrueMoney} alt="" />
                <p>TrueMoney wallet payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
