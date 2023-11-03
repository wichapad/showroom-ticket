import React from "react";

const Contact = () => {
  return (
    <div className="py-[2rem]">
      <div>
        <img
          className="w-full h-[250px] object-cover object-left-bottom"
          src="https://images.unsplash.com/photo-1479920252409-6e3d8e8d4866?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="px-2 max-w-screen-lg mx-auto">
        <div className="text-[2.5rem]">
          <p>Contact Us</p>
        </div>
        <div className="py-2">
          <p className="text-[1.2rem] uppercase">
            Head office Showroom Company limited
          </p>
        </div>
        <div className="py-2">
          <span className="text-[1.1rem] border-b-2 border-black">
            Showroom Call Center
          </span>
          <p>TEL: +66(0) 1234 5678 FAX: +66(0) 5678 1234</p>
          <p>Working Hours:Monday - Sunday 09:00 - 18:00</p>
          <p>Email: Showroom-ticket@showroom.com</p>
        </div>
        <div>
          <span className="text-[1.1rem] border-b-2 border-black">Address</span>
          <p>65 Ram Intra, Tha Raeng, Bang Khen, Bangkok 10230</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
