import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import CarDetailPage from "../pages/CarDetailPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "shop/item/:id", element: <CarDetailPage /> },
      { path: "shoppingcart", element: <ShoppingCartPage /> },
    ],
  },
]);

export default router;
