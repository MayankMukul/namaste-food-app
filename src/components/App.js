import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import Container from './Container';
import Footer from './Footer';
import ErrorElement from './ErrorElement.js'
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import About from './About.js'
import Contact from './Contact.js';
import RestrauntMenu from './RestrauntMenu.js';


const Applayout = ()=>{
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        errorElement:<ErrorElement/>,
        children:[{
            path:"/",
            element:<Container/>
        },{
            path:"/about",
            element:<About/>
        },{
            path:"/contact",
            element:<Contact/>,
        },{
            path:'/restaurant/:resid',
            element:<RestrauntMenu/>,
        }
    ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>) 
