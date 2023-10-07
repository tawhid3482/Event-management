import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Login/Login";
import Register from "../Login/Register";
import Home from "../Home/Home";
import Services from "../Home/Services";
import Fairs from "../Home/Fairs";
import Yoga from "../Home/Yoga";
import Wellness from "../Home/Wellness";
import YogaDetails from "../Home/YogaDetails";
import Store from "../Home/Store";
import WellDetails from "../Home/WellDetails";
import ServiceDetails from "../Home/ServiceDetails";
import PrivateProvider from "../PrivateProvider/PrivateProvider";
import ProductsDetails from "../Home/ProductsDetails";

const AllRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/Services",
        element: <Services></Services>,
        loader: () => fetch("/service.json"),
      },
      {
        path: "/Fairs",
        element: (
          <PrivateProvider>
            <Fairs></Fairs>
          </PrivateProvider>
        ),
      },
      {
        path: "/yoga",
        element: <Yoga></Yoga>,
      },
      {
        path: "/Wellness",
        element: <Wellness></Wellness>,
      },
      {
        path: "/yogaDetails",
        element: (
          <PrivateProvider>
            <YogaDetails></YogaDetails>,
          </PrivateProvider>
        ),
        loader: () => fetch("/yoga.json"),
      },
      {
        path: "/store",
        element: (
          <PrivateProvider>
            <Store></Store>
          </PrivateProvider>
        ),
        loader:()=>fetch('/shop.json')
      },
      {
        path:'/store/:id',
        element:<ProductsDetails></ProductsDetails>,
        loader:()=>fetch('/shop.json')
      },
      {
        path: "/wellnessDetails",
        element: <WellDetails></WellDetails>,
      },
      {
        path: "/service/:id",
        element: (
          <PrivateProvider>
            <ServiceDetails></ServiceDetails>
          </PrivateProvider>
        ),
      },

    ],
  },
]);
export default AllRoutes;
