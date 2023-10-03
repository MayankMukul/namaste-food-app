import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import Container from './Container';
import Footer from './Footer';

const Applayout = (
    <>
    <Navbar></Navbar>
    <Container></Container>
    <Footer></Footer>
    
    </>

);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Applayout) 