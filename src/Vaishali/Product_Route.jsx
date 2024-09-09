import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./Product";
import Home from "./Home";
import Boarding from "./Boarding";
import Contact from "./Contact";
import Service from "./Service";
import AboutUs from "./AboutUs";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element:<Boarding/>,
  //   children:[
  //     {
  //       path:"/contact",
  //       element:<Contact/>
  //     },
  //     {
  //       path:"/service",
  //       element:<Service/>
  //     },
  //     {
  //       path:"/aboutus",
  //       element:<AboutUs/>
  //     },

  //   ]
  // },
  {
    path: "/",
    element: <Home />,
  },
]);

const Product_Route = () => {
  return <RouterProvider router={router} />;
};

export default Product_Route;
