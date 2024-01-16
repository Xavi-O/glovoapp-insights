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
        element: <Navigate to="/login" replace />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/stores",
        element: <Stores />,
      },
      {
        path: "/kfc-store",
        element: <Kfc />,
      },
      {
        path: "/logout",
        element: <Logout />,
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
