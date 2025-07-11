import { RouterProvider } from "react-router-dom";
import React from "react";
import router from "./routes/router";
import appStore from "./stores/appStore";
import { Provider } from "react-redux";

export const App = () => (
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
