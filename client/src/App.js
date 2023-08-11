import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/page/HomePage/Home";
import Events from "./Components/page/EventsPage/Events";
import EventInfo from "./Components/page/EventsPage/EventInfo";
import Seat from "./Components/page/EventsPage/Ticket/Seat";
import Shop from "./Components/page/ShopPage/Shop";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import LayoutDashboard from "./Components/page/Dashboard/LayoutDashboard/LayoutDashboard";
import AllEvents from "./Components/page/Dashboard/Content/Events/AllEvents";
import Dashboard from "./Components/page/Dashboard/Content/Chart/ChartDashboard";
import UpdateEvent from "./Components/page/Dashboard/Content/Events/UpdateEvent";
import { getAdminId } from "./Components/Auth/services/autherize";
import Notfound from "./Components/page/ErrorPage/Notfound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:slug" element={<EventInfo />} />
      <Route path="/booking/:slug" element={<Seat />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {getAdminId() ? (
        <Route path="/dashboard" element={<LayoutDashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="events" element={<AllEvents />}>
            <Route path=":slug" element={<UpdateEvent />} />
          </Route>
        </Route>
      ) : (
        <Route path="/dashboard/*" element={<Notfound />} />
      )}
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default App;
