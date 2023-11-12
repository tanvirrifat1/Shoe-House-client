import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/signIn/SignIn";
import Secret from "../pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import MainContact from "../components/contact/MainContact";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/DashBoard/MyCart/MyCart";
import WatchCardID from "../components/sectionTitle/watchCard/WatchCardID";
import AllUser from "../pages/DashBoard/AllUsers/AllUser";
import ManageWatch from "../pages/DashBoard/ManageWatch/ManageWatch";
import ManageSingleWatch from "../pages/DashBoard/ManageWatch/ManageSingleWatch";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/contact",
        element: <MainContact />,
      },
      {
        path: "/detailsPage/:id",
        element: <WatchCardID />,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashBoard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "mycart",
        element: <MyCart />,
      },
      {
        path: "allUsers",
        element: <AllUser />,
      },
      {
        path: "manageWatch",
        element: <ManageWatch />,
      },
      {
        path: "singleWatch/:id",
        element: <ManageSingleWatch />,
      },
    ],
  },
]);
