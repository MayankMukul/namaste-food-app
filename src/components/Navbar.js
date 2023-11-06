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
      <div className="flex bg-neutral-300 justify-between p-2">
        <div className="title ">
        <img src={logo} className="h-20" alt="logo" />
          <h1 className="text-lg font-bold text-center"> Food App</h1>
        </div>
        
        <div className="">
          <ul className="flex">
            <button 
              className=" bg-black text-white rounded-md p-2"
              onClick={() => {
                logging();
              }}
            >
              {logged}
            </button>
            <li className="p-2 font-semibold"><Link to="/home">Home</Link></li>
            <li className="p-2 font-semibold"><Link to="/About">About</Link></li>
            <li className="p-2 font-semibold"><Link to="/Contact">Contact</Link></li>
            <li className="p-2 font-semibold"><Link to="/instamart">Instamart</Link></li>
            <li className="p-2 font-semibold"><Link to="/Test">Test</Link></li>
            <li className="p-2 font-semibold">Cart</li>
          </ul>
        </div>
      </div>
    );
}

export default Navbar;