import { useState } from "react";
import  logo  from "../src/assests/food.svg";

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
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
}

export default Navbar;