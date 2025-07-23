import { RouterProvider } from "react-router-dom";
import React from "react";
import { router } from "./routes";
import appStore from "./stores/appStore";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeContextProvider } from "./themes/ThemeContextProvider";
import { QueryClient, QueryClientProvider as TanStackProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const App: React.FC = () => (
  <React.StrictMode>
    <ThemeContextProvider>
      <TanStackProvider client={queryClient}>
        <ReduxProvider store={appStore}>
          <RouterProvider router={router} />
        </ReduxProvider>
      </TanStackProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
