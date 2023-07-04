import { Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./Components/Login";
import Register from "./Components/Register";
import CardInfo from "./Components/HomeComponents/CardInfo";


const MyRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      
      {/* evnets */}
      <Route path="/:slug" element={<CardInfo />} />
    </Routes>
  );
};

export default MyRoute;
