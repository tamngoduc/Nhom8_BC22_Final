import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppthemeProvider from "./Theme/AppthemeProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppthemeProvider>
    <App />
  </AppthemeProvider>
);
