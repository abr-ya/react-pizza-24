import { RouterProvider, createBrowserRouter, defer } from "react-router-dom";

import { Cart, Demo, Error404, Menu, Product, Zustand } from "./pages";
import "./index.css";
import Layout from "./layout/Layout.tsx";
import axios from "axios";
import { API_URL } from "./constants.ts";

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
        errorElement: <>Ошибка</>,
        loader: async ({ params }) => {
          return defer({
            data: new Promise((resolve, reject) => {
              setTimeout(() => {
                axios
                  .get(`${API_URL}/products/${params.id}`)
                  .then((data) => resolve(data))
                  .catch((e) => reject(e));
              }, 1000);
            }),
          });
        },
      },
    ],
  },
  { path: "*", element: <Error404 /> },
]);

const App = () => <RouterProvider router={router} />;

export default App;
