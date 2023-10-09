import React from "react";

const History = () => {
  return (
    <div className="p-4">
      <div className="text-center text-[1.5rem]">
        <p>Select date</p>
      </div>
      <div className="flex justify-center text-center p-2">
        <div className="p-2">
          <label>From date</label>
          <input type="date" className="border p-2 rounded"/>
        </div>
        <div className="p-2">
          <label>To date</label>
          <input type="date" className="border p-2 rounded"/>
        </div>
      </div>
      <div className="text-center my-4">
        <button className=" uppercase text-base font-bold py-3 px-4 text-gray-200 rounded-md bg-gradient-to-r from-purple-600 via-violet-700 to-purple-600 active:scale-95">
          Search
        </button>
      </div>
    </div>
  );
};

export default History;
