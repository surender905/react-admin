import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./styles/global.scss";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Menu from "./components/menu/Menu";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import User from "./pages/user/User";
import Login from "./pages/login/Login";
import Product from "./pages/product/Product";

const queryClient = new QueryClient();

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <h1>Not Found</h1>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
