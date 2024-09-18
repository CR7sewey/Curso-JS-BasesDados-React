import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Agradecimentos from "./components/Agradecimento";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Agradecimentos />
  </React.StrictMode>
);
