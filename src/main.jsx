import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RecepieContext from "./contexts/RecepieContext.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
     <Provider store={store}>
     <RecepieContext>
        <App />
      </RecepieContext>
     </Provider>
      
    </BrowserRouter>
);
