import Profile from './Profile.js'
import {Outlet} from 'react-router-dom';
const About = ()=>{
    return (
      <>
        <h1>ABOUT PAGE</h1>
        <h2>This is about us page</h2>
        {/* <Profile></Profile> */}
        <Outlet></Outlet>
      </>
    );
}

export default About;