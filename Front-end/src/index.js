import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";

import { ApiProvider } from "./Components/UseContext/ApiContext";
import { BrowserRouter } from "react-router-dom";
import { DashboardProvider } from "./Components/UseContext/DashboardContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ApiProvider>
    <DashboardProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DashboardProvider>
  </ApiProvider>
);
