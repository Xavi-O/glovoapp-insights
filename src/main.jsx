import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Root from "./pages/root.jsx";
import Home from "./pages/home.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Stores from "./pages/stores.jsx";
import Kfc from "./pages/kfc.jsx";
import ErrorPage from "./pages/error-page.jsx";
import Logout from "./pages/logout.jsx";
import Login from "./pages/login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to={window.location = "https://glovoapp-insights-app.vercel.app/"} replace />,
      },
      {
        path: "/home",
        element: <Navigate to={window.location = "https://glovoapp-insights-app.vercel.app/"} replace />,
      },
      {
        path: "/dashboard",
        element: <Navigate to={window.location = "https://glovoapp-insights-app.vercel.app/"} replace />,
      },
      {
        path: "/stores",
        element: <Navigate to={window.location = "https://glovoapp-insights-app.vercel.app/"} replace />,
      },
      {
        path: "/kfc-store",
        element: <Navigate to={window.location = "https://glovoapp-insights-app.vercel.app/"} replace />,
      },
      {
        path: "/logout",
        element: <Navigate to={window.location = "https://glovoapp-insights-app.vercel.app/"} replace />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
