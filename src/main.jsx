import React from "react";
import ReactDOM from "react-dom/client";
import { FiltersProvider } from "./context/filters";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Account } from "./components/Account";
import { Landing } from "./routes/Lading.jsx/Landing";
import { Auth } from "./components/Authentication";
import { HomePage } from "./routes/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },

  {
    path: "/Account",
    element: <Account />,
  },
  {
    path: "/HomePage",
    element: <HomePage />,
  },
  {
    path: "/Authorization",
    element: <Auth />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <FiltersProvider>
    <RouterProvider router={router} />
  </FiltersProvider>
);
