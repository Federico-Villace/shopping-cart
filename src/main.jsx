import React from "react";
import ReactDOM from "react-dom/client";
import { FiltersProvider } from "./context/filters";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Root } from "./routes/root";
import { Account } from "./components/Account";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },

  {
    path: "/Account",
    element: <Account />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <FiltersProvider>
    <RouterProvider router={router} />
  </FiltersProvider>
);
