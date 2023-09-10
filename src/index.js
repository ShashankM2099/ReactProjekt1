import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root");

//to render app we use react dom in the root
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);
