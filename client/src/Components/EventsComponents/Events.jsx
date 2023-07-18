//  แสดงข้อมูลที่ส่งมาจาก database โดย จะให้ไปแสดงใน home component จะแสดง รูปภาพ และชื่อ

import Navbar from "../Navbar";
import Footer from "../HomeComponents/Footer";
import Header from "../HomeComponents/Header";
import Card from "../HomeComponents/EventsHome";

const Events = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Card />
      <Footer />
    </>
  );
};

export default Events;
