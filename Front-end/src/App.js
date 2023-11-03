import "./App.css";
import { Routes, Route } from "react-router-dom";
import PageLayout from "./Components/Navbar/PageLayout";
import { getAdminId } from "./Components/Auth/services/autherize";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";

import Home from "./Components/page/HomePage/Home";
import Shop from "./Components/page/ShopPage/Shop";

import EventsLayout from "./Components/page/EventsPage/EventsLayout";
import Events from "./Components/page/EventsPage/Events";
import EventInfo from "./Components/page/EventsPage/EventInfo";
import Notfound from "./Components/page/ErrorPage/Notfound";
import TicketLayout from "./Components/page/EventsPage/Ticket/TicketLayout";
import { SeatRow } from "./Components/page/EventsPage/Ticket/SeatRow";
import Zone from "./Components/page/EventsPage/Ticket/Zone";
import Purchase from "./Components/page/PurchasePage/Purchase";
import NoTicket from "./Components/page/EventsPage/NoTicketPage/NoTicket";

import LayoutProfile from "./Components/page/ProfilePage/LayoutProfile";
import Profile from "./Components/page/ProfilePage/Profile";
import MyTicket from "./Components/page/ProfilePage/MyTicket";
import History from "./Components/page/ProfilePage/History";
import ChangePassword from "./Components/page/ProfilePage/ChangePassword";

import LayoutDashboard from "./Components/page/Dashboard/LayoutDashboard/LayoutDashboard";
import Dashboard from "./Components/page/Dashboard/Content/Chart/ChartDashboard";
import AllEvents from "./Components/page/Dashboard/Content/Events/AllEvents";
import Tickets from "./Components/page/Dashboard/Content/Tickets/Tickets";
import ArtistsManage from "./Components/page/Dashboard/Content/Management/AristsManage/AristsMange";
import EventsMange from "./Components/page/Dashboard/Content/Management/EventsMange/EventsManage";
import VenuesManage from "./Components/page/Dashboard/Content/Management/VenuesMange/VenuesMange";
import Contact from "./Components/page/ContactUsPage/Contact";

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
          <Route path=":id" element={<SeatRow />} >
            
          </Route>
          <Route path="notfound" element={<NoTicket />} />
        </Route>
        <Route path="purchase" element={<Purchase />} />

        {/* Route Shopping Components */}
        <Route path="shop" element={<Shop />} />

        <Route path="user" element={<LayoutProfile />}>
          <Route path="profile" element={<Profile />} />
          <Route path="myticket" element={<MyTicket />} />
          <Route path="history" element={<History />} />
          <Route path="changepassword" element={<ChangePassword />} />
        </Route>

        <Route path="contact" element={<Contact/>}/>
      </Route>


      {/* Route Login & Register */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      {/* Route Dashbord */}
      {getAdminId() ? (
        <Route path="/dashboard" element={<LayoutDashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="tour" element={<AllEvents />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="artists" element={<ArtistsManage />} />
          <Route path="events" element={<EventsMange />} />
          <Route path="venues" element={<VenuesManage />} />
        </Route>
      ) : (
        <Route path="/dashboard/*" element={<Notfound />} />
      )}
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default App;
