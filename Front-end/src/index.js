import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";

import { ApiProvider } from "./Components/UseContext/ApiContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ApiProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApiProvider>
);
