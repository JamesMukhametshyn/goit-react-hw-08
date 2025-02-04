import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
<<<<<<< HEAD
import "./index.css";

import { persistor, store } from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
=======
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store.js";

import "./index.css";
>>>>>>> parent of b782856 (add)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
<<<<<<< HEAD
        <BrowserRouter>
          <App />
        </BrowserRouter>
=======
        <App />
>>>>>>> parent of b782856 (add)
      </PersistGate>
    </Provider>
  </React.StrictMode>
);