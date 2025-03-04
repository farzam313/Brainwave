import { createRoot } from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import React from "react";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
