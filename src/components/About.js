import React from 'react';
import Profile from './Profile.js'
// import {Outlet} from 'react-router-dom';
const About = ()=>{
    return (
      <>
        <h1 className='text-center font-bold text-xl'>ABOUT PAGE</h1>
        <h2 className='text-center font-semibold text-lg'>This is about us page.</h2>
        <Profile />
        {/* <Outlet></Outlet> */}
      </>
    );
}

export default About;