import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Events from "./Components/page/EventsPage/Events";
import EventInfo from "./Components/page/EventsPage/EventInfo";
import Shop from "./Components/page/ShopPage/Shop";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import { ApiProvider } from "./Components/UseContext/ApiContext";
import Dashboard from "./Components/page/Dashboard/Dashboard";
import AllEvents from "./Components/page/Dashboard/Content/Events/AllEvents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/events/:slug",
    element: <EventInfo />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/events",
    element: <AllEvents />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ApiProvider>
    <RouterProvider router={router} />
  </ApiProvider>
);
