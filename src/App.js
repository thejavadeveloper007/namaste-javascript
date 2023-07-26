import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer"
import About from "./components/About";
import Error from "./components/Error";
import Restraunt from "./components/Restraunt";

const AppLayout = () => {
  return (
    <div className="app">
      <Header /><br></br>
      <Outlet /><br></br>
      <Footer /><br></br>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout />,
    errorElement: <Error />,
    children:[
      {
        path:"/",
        element: <Body />
      },
      {
        path:"/about",
        element: <About />
      },
      {
        path:"/restraunt/:id",
        element: <Restraunt />
      },
    ]
  },
  {
    path:"/about",
    element: <About />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
