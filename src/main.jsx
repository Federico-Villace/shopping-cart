import React from "react";
import ReactDOM from "react-dom/client";
import { FiltersProvider } from "./context/filters";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Account } from "./components/Account";
import { Landing } from "./routes/Landing/Landing";
import { Auth } from "./components/Authentication";
import { HomePage } from "./routes/HomePage/HomePage";
import { ProductPage } from "./routes/ProductPage";
import CheckoutPage from "./routes/CheckoutPage";
import { AfterPurchase } from "./routes/AfterPurchase";

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
  {
    path: "/Product",
    element: <ProductPage />,
  },
  {
    path: "/CheckoutPage",
    element: <CheckoutPage />,
  },
  {
    path: "/AfterPurchase",
    element: <AfterPurchase />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <FiltersProvider>
    <RouterProvider router={router} />
  </FiltersProvider>
);
