import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./utilities/languages";
import App from "./App";
import { SettingsProvider } from "./utilities/SettingsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SettingsProvider>
      <App />
    </SettingsProvider>
  </React.StrictMode>
);
