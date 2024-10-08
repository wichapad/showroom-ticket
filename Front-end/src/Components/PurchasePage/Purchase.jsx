import React from "react";
import { useLocation } from "react-router-dom";
import CreditCard from "../../images/PaymentsImg/Creditcard.png";
import Banking from "../../images/PaymentsImg/banking.png";
import TrueMoney from "../../images/PaymentsImg/truemoneywallet.png";
import { FaLocationDot } from "react-icons/fa6";
import FormCreditCard from "./FormPayment/FormCreditCard";
import { useState } from "react";

const Purchase = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const artist = queryParams.get("artist");
  const eventName = queryParams.get("eventName");
  const venueName = queryParams.get("venueName");
  const venueCity = queryParams.get("venueCity");
  const venueState = queryParams.get("venueState");
  const zone = queryParams.get("zone");
  const selectedSeats = queryParams.get("seats");
  const totalPrice = queryParams.get("totalPrice");
  const showTime = queryParams.get("showTime");

  const [credit, setCredit] = useState(false);
  const toggleForm = () => {
    setCredit(!credit);
  };

  return (
    <div className="pt-[4rem] pb-[2rem]">
      <div className="sm:max-w-screen-xl sm:mx-auto md:flex">
        {/* Payment method */}
        <div className=" sm:max-w-screen-7xl sm:mx-auto">
          <div className="border border-gray-400 rounded-[5px] m-2">
            <div className="p-2 rounded-t bg-gradient-to-r from-purple-600 via-violet-700 to-purple-600">
              <p className="text-white">Payment method</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-3 place-items-center gap-2 lg:flex lg:justify-evenly">
                <div
                  className={`payment-method-container w-full lg:w-[200px] text-[12px] sm:text-[14px] ${
                    credit ? "bg-gray-200 " : ""
                  }`}
                  onClick={toggleForm}
                >
                  <img
                    className="w-[50px] sm:w-[70px]"
                    src={CreditCard}
                    alt=""
                  />
                  <p>Credit Card </p>
                </div>
                <div className="my-3 payment-method-container w-full lg:w-[200px] text-[12px] sm:text-[14px]">
                  <img className="w-[50px] sm:w-[70px]" src={Banking} alt="" />
                  <p>Mobile Banking </p>
                </div>
                <div className="payment-method-container w-full lg:w-[200px] text-[12px] sm:text-[14px]">
                  <img
                    className="w-[50px] sm:w-[70px]"
                    src={TrueMoney}
                    alt=""
                  />
                  <p>TrueMoney Wallet </p>
                </div>
              </div>
              {credit && (
                <div>
                  <FormCreditCard />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Detail concert */}
        <div className=" sm:w-[450px] sm:mx-auto">
          <div className=" border border-gray-400 rounded-[5px] m-2">
            <div className="p-2 rounded-t bg-gradient-to-r from-purple-600 via-violet-700 to-purple-600">
              <p className="text-white">Booking details</p>
            </div>
            <div className="p-2 text-[14px]">
              {/* Artist */}
              <div className="flex justify-center ">
                <p>{artist}</p>
                <p className="px-1">{eventName}</p>
              </div>
              {/* Location */}
              <div className="flex justify-center items-center text-[10px] text-gray-400">
                <p>
                  <FaLocationDot />
                </p>
                <p>{venueName}</p>
                <p className="px-1">{venueCity}</p>
                <p>{venueState}</p>
              </div>
              {/* Showtime */}
              <div className="text-center my-2 p-1  border rounded-[5px]">
                <p className="text-purple-800">{showTime}</p>
              </div>
              <div className="flex justify-between border-b py-1">
                <p className="text-gray-400">Zone</p>
                <p>{zone}</p>
              </div>
              <div className="flex justify-between border-b py-1">
                <p className="text-gray-400">Seat number</p>
                <p>{selectedSeats}</p>
              </div>
              <div className="flex justify-between border-b py-1">
                <p className="text-gray-400">Price</p>
                <p>${totalPrice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
