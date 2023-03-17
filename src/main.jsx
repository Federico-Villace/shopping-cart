import React from "react";
import ReactDOM from "react-dom/client";
import { FiltersProvider } from "./context/filters";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Root } from "./routes/Root/Root";
import { Account } from "./components/Account";
import { Landing } from "./routes/Lading.jsx/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },

  {
    path: "/Account",
    element: <Account />,
  },
  {
    path: "/Landing",
    element: <Landing />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <FiltersProvider>
    <RouterProvider router={router} />
  </FiltersProvider>
);
