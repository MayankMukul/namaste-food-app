
import React from 'react';
import { useState, useEffect } from "react";
import {useParams, useLocation} from "react-router-dom";
import { useDispatch} from "react-redux";
import { addItem } from "../utils/cartSlice";
import CONSTANT_MENU from "../utils/CONSTANT_MENU";


const RestrauntMenu = ()=>{

    
    const [ resdata, setresdata] = useState([]);
    const [ resname, setresname] = useState("");
    const { resid } = useParams();
    const location = useLocation()
    const dispatch = useDispatch();

    let resurl = "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId="+resid+"&submitAction=ENTER"
    // console.log(resid) ;
    
    useEffect(()=>{
        getRestraurantMenu();
    },[]);

    async function getRestraurantMenu(){
        
        try {
            const data = await fetch(resurl);
        const json = await data.json(); 
        setresdata(json.data.cards[3].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
        setresname(json.data.cards[0].card.card.info.name);
        // console.log(json.data.cards[3].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);

        } catch (error) {
            console.log(error);
            const json = CONSTANT_MENU;
            setresdata(json.data.cards[3].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
            setresname(location.state.name);

        }
    }
    
    function dispatchaddItem(item){
        dispatch(addItem(item));
    }


    function MenuItems(props){
        // console.log(props.res.card.info.ratings.aggregatedRating.rating);
        return (
        <div className="p-2 mx-auto my-3 bg-slate-200 w-1/2" data-testid="menu-items">
        <span className="font-bold">{props.res.card.info.name}</span>
        <button className="float-right m-3 p-1 rounded bg-black text-white"
        data-testid="add-btn"
        onClick={()=>{
            // dispatchaddItem(props.res.card.info.name);
            dispatchaddItem(props.res.card.info);
            // console.log(props.res.card.info);
        }}>+Add</button>
        {(props.res.card.info.price==null)? null : <h1>Price : ₹{(props.res.card.info.price)/100}</h1>}
        {(props.res.card.info.ratings.aggregatedRating.rating==null)?null:<h1>Ratings : {props.res.card.info.ratings.aggregatedRating.rating}</h1>}
        </div>)
    }

    return(
        <div className="bg-slate-300 m-5 p-4">
        <h1 className="bg-black text-white p-2 font-bold">Welcome To {resname}</h1>
        <h2 className="text-lg italic">Order your favourite food from {resname}</h2>
        {/* <h2>Restraunt id : { resid }</h2> */}
        <h2><span className="font-bold">Restraunt Name </span>: {resname}</h2>
        <h2 className="font-bold text-center bg-black text-white p-1 w-1/2 m-auto">Menu List</h2>
        {resdata.map((res)=>{
            return (
                <MenuItems key={res.card.info.id} res={res}/>
            )
        })}
        </div>
    )
}

export default RestrauntMenu;