import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/page/HomePage/Home";
import { ApiProvider } from "./Components/UseContext/ApiContext";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import Events from "./Components/page/EventsPage/Events";
import EventInfo from "./Components/page/EventsPage/EventInfo";
import Shop from "./Components/page/ShopPage/Shop";
import Dashboard from "./Components/page/Dashboard/Dashboard";
import AllEvents from "./Components/page/Dashboard/Content/Events/AllEvents";

const App = () => {
  return (
    <ApiProvider>
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* evnets */}
        <Route path="/events" element={<Events />} />
        <Route path="/events/:slug" element={<EventInfo />} />

        {/* shop */}
        <Route path="/shop" element={<Shop />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/allevents" element={<AllEvents />} />
      </Routes>
    </ApiProvider>
  );
};

export default App;
