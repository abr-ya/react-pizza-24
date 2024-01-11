import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Cart, Demo, Error404, Menu, Product, Zustand } from "./pages";
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
      { path: "/zustand", element: <Zustand /> },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
  { path: "*", element: <Error404 /> },
]);

const App = () => <RouterProvider router={router} />;

export default App;
