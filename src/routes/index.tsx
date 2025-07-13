import { createBrowserRouter } from "react-router-dom";
import { Home, Compare } from "../pages";
import ROUTES from "./routes";

const router = createBrowserRouter([
  { path: ROUTES.home, element: <Home /> },
  { path: ROUTES.compare, element: <Compare /> },
]);

export { ROUTES, router };