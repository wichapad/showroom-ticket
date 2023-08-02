//  แสดงข้อมูลที่ส่งมาจาก database โดย จะให้ไปแสดงใน home component จะแสดง รูปภาพ และชื่อ

import Navbar from "../Navbar";
import Footer from "../HomeComponents/Footer";
import Header from "../HomeComponents/Header";
import Events from "./Events";
import { ApiProvider } from "../UseContext/ApiContext";

const EventsPage = () => {
  return (
    <>
      <ApiProvider>
        <Navbar />
        <Header />
        <Events />
        <Footer />
      </ApiProvider>
    </>
  );
};

export default EventsPage;
