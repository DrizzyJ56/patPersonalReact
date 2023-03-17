import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesMaker from "./components/RoutesMaker";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <Router>
    <RoutesMaker />
  </Router>
);
