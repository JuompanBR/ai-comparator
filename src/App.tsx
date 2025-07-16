import { RouterProvider } from "react-router-dom";
import React from "react";
import { router } from "./routes";
import appStore from "./stores/appStore";
import { Provider } from "react-redux";
import { ThemeContextProvider } from "./themes/ThemeContextProvider";

export const App: React.FC = () => (
  <React.StrictMode>
    <ThemeContextProvider>
      <Provider store={appStore}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeContextProvider>
  </React.StrictMode>
);
