import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Cart, Demo, Error404, Menu } from "./pages";
import App from "./App.tsx";
import "./index.css";
import Layout from "./layout/Layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Menu /> },
      { path: "/cart", element: <Cart /> },
      { path: "/demo", element: <Demo /> },
    ],
  },
  { path: "*", element: <Error404 /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
);
