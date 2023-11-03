import { useState } from "react";
import  logo  from "../assests/food.svg";
import { Link } from "react-router-dom";
import Contact from './Contact.js'
import About from './About';


function Navbar() {
    const [logged, setlogged] = useState("Login");

    const logging = ()=>{
        if(logged === "Login"){
            setlogged("Logout");
        }else {
            setlogged("Login");
        }
    }
    return (
      <div className="navbar">
        <div className="title">
          <h1><img src={logo} className="logo" alt="logo" /> Food App</h1>
        </div>
        
        <div className="nav-items">
          <ul>
            <button
              onClick={() => {
                logging();
              }}
            >
              {logged}
            </button>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/instamart">Instamart</Link></li>
            <li><Link to="/Test">Test</Link></li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
}

export default Navbar;