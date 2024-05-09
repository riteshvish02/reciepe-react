import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RecepieContext from "./contexts/RecepieContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <RecepieContext>
        <App />
      </RecepieContext>
    </BrowserRouter>
);
