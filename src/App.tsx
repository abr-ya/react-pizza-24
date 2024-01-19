import { Suspense, lazy } from "react";
import axios from "axios";
import { RouterProvider, createBrowserRouter, defer } from "react-router-dom";

import { Cart, Demo, Error404, Login, Product, Register, Zustand } from "./pages";
import "./index.css";
import Layout from "./layout/Layout.tsx";
import { API_URL } from "./constants.ts";
import { AuthLayout } from "./layout/AuthLayout.tsx";

const Menu = lazy(() => import("./pages/Menu/Menu.tsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<>Загрузка меню...</>}>
            <Menu />
          </Suspense>
        ),
      },
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
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  { path: "*", element: <Error404 /> },
]);

const App = () => <RouterProvider router={router} />;

export default App;
