import React from "react";
import ReactDOM from "react-dom/client";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";
import { configureStore } from "./store.js";
import App from "./App";

const store = configureStore();
const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>}   persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
