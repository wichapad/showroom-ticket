import { Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Events from "./Components/EventsComponents/Events";
import CardInfo from "./Components/HomeComponents/CardInfo";


const MyRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      
      {/* evnets */}
      <Route path="/events"  element={<Events/>}/>
      <Route path="/events/:slug" element={<CardInfo/>} />
    </Routes>
  );
};

export default MyRoute;
