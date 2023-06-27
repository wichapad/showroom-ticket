import { useState } from "react";

const AddEvents = () => {
  const [date, setDate] = useState(""); // เพิ่ม state สำหรับเก็บค่า localDate
  const [time, setTime] = useState(""); // เพิ่ม state สำหรับเก็บค่า localTime
  const [formData, setFormData] = useState({
    band: {
      artist: "",
      description: "",
      genre: "",
    },
    images: {
      band_image: "",
      poster_image: "",
    },
    showschedule: [
      {
        dates: [{ localDate: "", localTime: "" }],
        location: [{ name_show: "", venue: "", state: "", city: "" }],
      },
    ],
    ticket: [{ ticket_type: "", ticket_price: "" }],
  });

  const inputValue = (e) => {
    const { id, value } = e.target; //ดึงค่า id และ value ของ element ที่เกิดการ onChange
    const feild = id.split("."); // ทำการแยก id เป็น สองส่วน
    if (feild.length === 2) {
      //เช็คว่า ค่า id ที่ใส่อยู่่ตรง element มีสองส่วนหรือไม่ เช่น band-artist, band-description
      const [section, subField] = feild; //section เก็บ ส่วนแรกของ id => band , subfield เก็บ ส่วนสองของ id => artist
      if (section === "localDate") {
        setDate(value); // อัปเดตค่า state สำหรับ localDate
      }

      if (section === "localTime") {
        setTime(value); // อัปเดตค่า state สำหรับ localTime
      }
      setFormData((prevState) => ({
        //setformdata อัพเดตค่าใน formdata
        ...prevState,
        [section]: { ...prevState[section], [subField]: value }, // ใช้ section เก็บค่า id ส่วนแรก เป็น key value  และ ใช้ ...prevState[section] เก็บค่า id ส่วนสอง และ subfield รับค่า ที่ กรอกใน input เข้ามา
      }));
    }
  };

  const addDate = () => {
    if (date && time) {
      setFormData((prevState) => ({
        ...prevState,
        showschedule: [
          ...prevState.showschedule,
          {
            dates: [{ localDate: date, localTime: time }],
            location: [{ name_show: "", venue: "", state: "", city: "" }],
          },
        ],
      }));
      setDate(""); // เคลียร์ค่า state สำหรับ localDate
      setTime(""); // เคลียร์ค่า state สำหรับ localTime
    }
  };
  

  return (
    <div className="flex flex-col justify-center  w-full max-w-lg m-auto">
      {JSON.stringify(formData)}
      <h1 className="text-center">Showroom Events</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* Add Band form */}
        <div className="mb-4">
          <h1 className="text-center">Band</h1>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Artist:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="band.artist"
              type="text"
              onChange={inputValue}
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="band.description"
              type="text"
              onChange={inputValue}
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Genre:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="band.genre"
              type="text"
              onChange={inputValue}
            />
          </div>
        </div>
        <hr />
        {/* Add Image form */}
        <div className="my-4">
          <h1 className="text-center">Image</h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Band_Image:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="images.band_image"
              type="text"
              onChange={inputValue}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Poster_Image:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="images.poster_image"
              type="text"
              onChange={inputValue}
            />
          </div>
        </div>
        <hr />
        {/* Add Showschedule form */}
        <div className="my-2">
          {/* Date */}
          <h1 className="text-center">Date</h1>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Date:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="localDate"
              type="date"
              onChange={inputValue}
              value={date} // กำหนดค่าให้ input ของ localDate
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Time:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="localTime"
              type="time"
              onChange={inputValue}
              value={time} // กำหนดค่าให้ input ของ localDate
            />
          </div>

          <div className="flex justify-end mb-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold  py-2 px-2  rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={addDate} // เรียกใช้งานฟังก์ชัน addDate เมื่อคลิกที่ปุ่ม Add Date
            >
              Add Date
            </button>
          </div>

          <hr />
          {/* Location */}
          <h1 className="mt-2 text-center">Location</h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              name_show:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nameShow"
              type="text"
              onChange={inputValue}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Venue:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="venue"
              type="text"
              onChange={inputValue}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              State:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="state"
              type="text"
              onChange={inputValue}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              City:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="city"
              type="text"
              onChange={inputValue}
            />
          </div>
          <div className="flex justify-end ">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold  py-2 px-2  rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Add Location
            </button>
          </div>
        </div>
        <hr />
        {/* Add Ticket form */}
        <div className="my-2">
          <h1 className="text-center">Ticket</h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Ticket_Type:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="ticketType"
              type="text"
              onChange={inputValue}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Ticket_price:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="ticketPrice"
              type="text"
              onChange={inputValue}
            />
          </div>
          <div className="flex justify-end mt-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold  py-2 px-2  rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Add Ticket
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between ">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save Data
          </button>
        </div>
      </form>

      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
};

export default AddEvents;
