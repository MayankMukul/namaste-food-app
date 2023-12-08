import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import Container from './Container';
import Footer from './Footer';
import ErrorElement from './ErrorElement.js'
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import About from './About.js'
import Contact from './Contact.js';
import RestrauntMenu from './RestrauntMenu.js';
import SignupForm from './Form';
import Profile from './Profile.js';
import UserContext from '../utils/UserContext.js';
import store from "../utils/store.js";
import { Provider } from "react-redux";
import Cart from './Cart.js';
// import Instamart from './instamart.js';

const Instamart = lazy(()=> import("./instamart"))


const Applayout = ()=>{

    const [user, setuser] = useState({
        name: "Guest",
        email:""
    })
  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setuser: setuser,
        }}
      >
        <div className="flex flex-col h-screen">
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Container />,
      },
      {
        path: "/Signup",
        element: <SignupForm />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Restaurant/:resid",
        element: <RestrauntMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Loading Instamart.......</h1>}>
            <Instamart />,
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>) 
