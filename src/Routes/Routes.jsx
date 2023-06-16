import {
  createBrowserRouter,
} from "react-router-dom";
import DashBoard from "../Layout/DashBoard";
import Main from "../Layout/Main";
import AddItem from "../pages/dashboard/AddItem/AddItem";
import AdminHome from "../pages/dashboard/AdminHome/AdminHome";
import AllUsers from "../pages/dashboard/AllUsers/AllUsers";
import ManageItems from "../pages/dashboard/ManageItems/ManageItems";
import MyCart from "../pages/dashboard/Mycart/MyCart";
import Payment from "../pages/dashboard/Payment/Payment";
import UserHome from "../pages/dashboard/UserHOme/UserHome";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/order/Order/Order";
import SignUp from "../pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'menu',
        element: <Menu></Menu>
      },
      {
        path: 'order/:category',
        element: <Order></Order>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
    ],
  },
  {
    path: 'dashboard',
    element:
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>,
    children: [
      {
        path: 'myCart',
        element: <MyCart></MyCart>
      },
      {
        path: 'allUsers',
        element:
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
      },
      {
        path: 'addItem',
        element:
          <AdminRoute>
            <AddItem />
          </AdminRoute>
      },
      {
        path: 'manageItems',
        element:
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
      },
      {
        path: 'payment',
        element: <Payment />
      },
      {
        path: 'userHome',
        element: <UserHome />,
      },
      {
        path: 'adminHome',
        element:
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
      }
    ]
  }
]);