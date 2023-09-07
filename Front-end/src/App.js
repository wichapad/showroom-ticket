import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/page/HomePage/Home";
import Events from "./Components/page/EventsPage/Events";
import EventInfo from "./Components/page/EventsPage/EventInfo";
import Zone from "./Components/page/EventsPage/Ticket/Zone";
import Shop from "./Components/page/ShopPage/Shop";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import LayoutDashboard from "./Components/page/Dashboard/LayoutDashboard/LayoutDashboard";
import AllEvents from "./Components/page/Dashboard/Content/Events/AllEvents";
import Dashboard from "./Components/page/Dashboard/Content/Chart/ChartDashboard";
import UpdateEvent from "./Components/page/Dashboard/Content/Events/UpdateEvent";
import { getAdminId } from "./Components/Auth/services/autherize";
import Notfound from "./Components/page/ErrorPage/Notfound";
import TicketLayout from "./Components/page/EventsPage/Ticket/TicketLayout";
import Profile from "./Components/page/ProfilePage/Profile";
import { SeatRow } from "./Components/page/EventsPage/Ticket/SeatRow";
import PageLayout from "./Components/Navbar/PageLayout";
import NoTicket from "./Components/page/EventsPage/NoTicketPage/NoTicket";
import LayoutProfile from "./Components/page/ProfilePage/LayoutProfile";
import MyTicket from "./Components/page/ProfilePage/MyTicket";
import Purchase from "./Components/page/ProfilePage/Purchase";
import ChangePassword from "./Components/page/ProfilePage/ChangePassword";
import Tickets from "./Components/page/Dashboard/Content/Tickets/Tickets";
import EventsLayout from "./Components/page/EventsPage/EventsLayout";

const App = () => {
  return (
    <Routes>
      {/* Route home component */}
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />

        {/* Route events Component */}
        <Route path="events" element={<EventsLayout />}>
          <Route index element={<Events />} />
        </Route>
        <Route path="events/:slug" element={<EventInfo />} />

        {/* Route Booking Ticket seat */}
        <Route path="booking/:slug" element={<TicketLayout />}>
          <Route index element={<Zone />} />
          <Route path=":id" element={<SeatRow />} />
          <Route path="notfound" element={<NoTicket />} />
        </Route>

        {/* Route Shopping Components */}
        <Route path="shop" element={<Shop />} />

        <Route path="user" element={<LayoutProfile />}>
          <Route path="profile" element={<Profile />} />
          <Route path="myticket" element={<MyTicket />} />
          <Route path="purchase" element={<Purchase />} />
          <Route path="changepassword" element={<ChangePassword />} />
        </Route>
      </Route>

      {/* Route Login & Register */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      {/* Route Dashbord */}
      {getAdminId() ? (
        <Route path="/dashboard" element={<LayoutDashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="events" element={<AllEvents />}>
            <Route path=":slug" element={<UpdateEvent />} />
          </Route>
   
          <Route path="tickets" element={<Tickets />} />
        </Route>
      ) : (
        <Route path="/dashboard/*" element={<Notfound />} />
      )}
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default App;
