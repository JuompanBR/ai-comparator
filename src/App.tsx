import { RouterProvider } from "react-router-dom";
import React from "react";
import { router } from "./routes/router";

export const App = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
