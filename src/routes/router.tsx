import { createBrowserRouter } from "react-router-dom";
import { Home, Compare } from "../pages";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/compare", element: <Compare /> },
]);

export default router;