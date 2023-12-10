import React, { useContext, useState } from "react";
import  logo  from "../assests/food.svg";
import { Link, useNavigate} from "react-router-dom";
import UserContext from '../utils/UserContext.js';
import { useSelector, useDispatch } from "react-redux";
import useIsOnline from "../utils/useIsOnline.js";
import { logging } from "../utils/logstatus.js";
 

function Navbar() {
    const {user,setuser} = useContext(UserContext);
    const cartItems = useSelector(store=>store.cart.items);
    const logStatus = useSelector(store=>store.loginStatus.items);
    const isOnline = useIsOnline();
    const dispatch = useDispatch();
    
    const [isopen, setisopen]=useState(false);
    function togglemenu(){
      setisopen(!isopen);
      console.log(isopen);
    }

    const navigate = useNavigate();
    
    const log = ()=>{
      navigate("/Signup");
      dispatch(logging("Login"));
    }

    return (
      <div className="md:flex bg-neutral-300 md:bg-slate-400 justify-between p-2">
        <div className="max-md:flex max-md:justify-between ">
          <div className=" max-md:flex max-md:items-center text-center">
          <img src={logo} data-testid="logo" className="h-20" alt="logo" />
          <h1 className="text-lg font-bold "> Food App</h1>
        </div>
        <button className="md:hidden m-2" onClick={()=>togglemenu()}>{(isopen)?"X":"Menu"}</button>
        </div>
        <div className="max-md:text-center max-md:hidden">
          <ul className="md:flex ">
            <p className="m-1 p-1">
              Welcome,
              <span className="font-bold"> {user.name}</span>
            </p>
            <p className="my-1 p-1">{isOnline ? "🟢" : "🔴"}</p>
            <p className="m-1 p-1 max-md:hidden">|</p>
            <Link to="/">
              <li className="p-2 font-semibold hover:bg-black hover:text-white hover:rounded">
                Home
              </li>
            </Link>
            <Link to="/About">
              <li className="p-2 font-semibold hover:bg-black hover:text-white hover:rounded">
                About
              </li>
            </Link>
            <Link to="/Contact">
              <li className="p-2 font-semibold hover:bg-black hover:text-white hover:rounded">
                Contact
              </li>
            </Link>
            <Link to="/instamart">
              <li className="p-2 font-semibold hover:bg-black hover:text-white hover:rounded">
                Instamart
              </li>
            </Link>
            <Link data-testid="cart-items" to="/Cart">
              <li className="p-2 font-semibold hover:bg-black hover:text-white hover:rounded">
                Cart {cartItems.length == 0 ? null : cartItems.length}
              </li>
            </Link>
            <button
              className=" bg-black text-white rounded-md p-2 mx-1"
              onClick={() => {
                log();
              }}
            >
              {logStatus}
            </button>
          </ul>
        </div>

        {isopen && (<div className="max-md:text-center md:hidden ">
            <p className="m-1 p-1">
              Welcome,
              <span className="font-bold"> {user.name}</span>
            </p>
            <p className="my-1 p-1">{isOnline ? "🟢 Online" : "🔴 Offline"}</p>
            <p className="m-1 p-1 max-md:hidden">|</p>
          <ul className=" ">
            <Link to="/">
              <li className="p-2 font-semibold hover:bg-black hover:text-white hover:rounded">
                Home
              </li>
            </Link>
            <Link to="/About">
              <li className="p-2 font-semibold hover:bg-black hover:text-white hover:rounded">
                About
              </li>
            </Link>
            <Link to="/Contact">
              <li className="p-2 font-semibold hover:bg-black hover:text-white hover:rounded">
                Contact
              </li>
            </Link>
            <Link to="/instamart">
              <li className="p-2 font-semibold hover:bg-black hover:text-white hover:rounded">
                Instamart
              </li>
            </Link>
            <Link data-testid="cart-items" to="/Cart">
              <li className="p-2 font-semibold hover:bg-black hover:text-white hover:rounded">
                Cart {cartItems.length == 0 ? null : cartItems.length}
              </li>
            </Link>
            <button
              className=" bg-black text-white rounded-md p-2 m-1"
              onClick={() => {
                log();
              }}
            >
              {logStatus}
            </button>
          </ul>
        </div>)}
        
      </div>
    );
}

export default Navbar;