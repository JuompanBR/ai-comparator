import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Compare from "../pages/Compare";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/compare", element: <Compare /> },
]);

export default router;