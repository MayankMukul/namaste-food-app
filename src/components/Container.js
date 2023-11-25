
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
import Restaurantcard from './Restaurantcard';
import CONST_RESTAURANT_LIST from "../utils/CONST_RESTAURANT_LIST.JS";


function filterRestaurant(a,allrestaurant){
  //  console.log(a,restaurants);
  
  
    const data = allrestaurant.filter((restaurant)=>{
      // console.log(restaurant.name,restaurant.name.includes(a));
      return restaurant?.info?.name?.toLowerCase().includes(a.toLowerCase());
    });
  
        // console.log(data)

        return data;   
}



function Container() {
    const [allrestaurant, setallrestaurant] = useState([])
    const [restaurant,setrestaurant] = useState();
    const [a,seta] = useState("");

    

    useEffect(()=>{
      getRestaurants();
    },[])

    async function getRestaurants(){
      try {
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=28.7040592&lng=77.10249019999999");
        const json = await data.json();
        setallrestaurant(json.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        setrestaurant(json.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants); 
        
      } catch (error) {
        console.log("Unable to fetch data from API",error);
        const json = (CONST_RESTAURANT_LIST);
        setallrestaurant(json.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        setrestaurant(json.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants); 
      }
    }

    const isOnline = useIsOnline();
    if(!isOnline){
      return <h1>Offline ! you are offline</h1>
    }

   

    return allrestaurant.length === 0 ? (
      <Shimmer />
    ) : (
      <>
        <div className="search bg-slate-300 m-5 p-2 text-center">
          <input
            className="p-1 rounded w-1/2"
            type="text"
            value={a}
            onChange={(e) => {
              seta(e.target.value);
            }}
          ></input>
          <button
            className="bg-black text-white rounded-md p-1 mx-2 hover:bg-slate-600"
            onClick={() => {
              const data = filterRestaurant(a, allrestaurant);
              setrestaurant(data);
            }}
          >
            Search
          </button>
        </div>

        <div className="container flex flex-wrap m-auto">
          {restaurant.length == 0 ? (
            <h1>No Search Result Found </h1> //early return
          ) : (
            restaurant.map((res) => {
              return <Restaurantcard {...res} key={res.info.id} />;
            })
          )}
        </div>
      </>
    );
    
}

export default Container;