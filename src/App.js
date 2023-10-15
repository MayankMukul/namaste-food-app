import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import Container from './Container';
import Footer from './Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './About.js'


const Applayout = ()=>{
  return (
    <>
    <Navbar></Navbar>
    <Container></Container>
    <Footer></Footer>
    </>
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>
    },
    {
        path:'/about',
        element:<About/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>) 
