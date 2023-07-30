import React, { Children, lazy, Suspense, useState } from "react"; //suspense take care of lazy component and prevent from the error
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer"
import About from "./components/About";
import Error from "./components/Error";
import Restraunt from "./components/Restraunt";
import Cart from "./components/Cart";
import Simmer from "./components/Simmer";
// import Instamart from "./components/Instamart";
//chunking
//code spliting
//dynamic bundling
//lazy loading
//on demad loading
//dynamic import

// const [user,setUser] = useState[{
//   name: "Rakesh",
//   email: "rakesh@gmail.com"
// }]

const Instamart = lazy(() => import('./components/Instamart')); //generally our whole code bundles in an index.js file but if we use lazy loading then code for that  component will be bundled separtely
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
      {
        path:"/cart",
        element: <Cart />
      },
      {
        path:"/instamart",
        element: <Suspense fallback={<Simmer/>}>
          <Instamart />
        </Suspense>
      }
    ]
  }
  // {
  //   path:"/about",
  //   element: <About />
  // }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
