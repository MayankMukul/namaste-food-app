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
import Test from './Testapi.js';
import SignupForm from './Form';
import Profile from './Profile.js'


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
            element:<SignupForm/>,
        },{
            path:"/home",
            element:<Container/>
        },{
            path:"/about",
            element:<About/>,
            children:[{
                path:'profile',
                element:<Profile/>
            }]
        },{
            path:"/contact",
            element:<Contact/>,
        },{
            path:'/Restaurant/:resname',
            element:<RestrauntMenu />,
        },{
            path:"/test",
            element:<Test/>,
        }
    ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>) 
