import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FiltersProvider } from "./context/filters";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Auth } from "./components/Authentication";
import "./index.css";
import { Account } from "./components/Account";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/Account",
    element: <Account />,
  },
  {
    path: "/Dashboard",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <FiltersProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </FiltersProvider>
);
