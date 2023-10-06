// import React from 'react';

import { useState } from "react";

const restaurantlist = [
    {
      name : "khadai paneer",
        id : 1,
        img: "https://b.zmtcdn.com/data/pictures/5/19136275/c07152265062c9600e3bd6d7bf03fdc6_o2_featured_v2.jpg" ,
        dishes : "north indian, panjabi" ,
        stars : "3",
    },{
      name : "Sardar Ji Da Dhaba",
        id : 2,
        img: "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/8\/3400238\/862f92a8b62d9e1c4c118dfee6e21857_o2_featured_v2.jpg" ,
        dishes : "north indian, panjabi" ,
        stars : "3",
    },{
      name : "Burger King",
        id : 3,
        img: "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/3\/20339183\/8c49ba335683507ba6ddee2dc84966e8_o2_featured_v2.jpg" ,
        dishes : "north indian, panjabi" ,
        stars : "3",
    },{
      name : "Manoj Dhaba",
        id : 4,
        img: "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/8\/3400298\/24f8a6987c97379e5903624a81011cd6_o2_featured_v2.jpg" ,
        dishes : "north indian, panjabi" ,
        stars : "3",
    }
]

function Restaurantcard (props) {
    return (
        <div className="card">
            {/* <img src="https://b.zmtcdn.com/data/pictures/5/19136275/c07152265062c9600e3bd6d7bf03fdc6_o2_featured_v2.jpg" alt="Image" />
            <h3>Restaurant Name</h3>
            <h3>Dishes</h3>
            <h4>stars</h4> */}

            {/* <img src={restaurantlist[0].img} alt="not rendered" />
            <h3>{restaurantlist[0].name}</h3>
            <h3>{restaurantlist[0].dishes}</h3>
            <h4>{restaurantlist[0].stars}</h4> */}
            
            <img src={props.img} alt="not rendered" />
            <h3>{props.name}</h3>
            <h3>{props.dishes}</h3>
            <h4>{props.stars}</h4>

        </div>
    )
}


function filterRestaurant(a,restaurants){
   console.log(a,restaurants);
        const data = restaurants.filter((restaurant)=>{
          console.log(restaurant.name,restaurant.name.includes(a));
          return restaurant.name.includes(a);
        });
        console.log(data)

        return data;   
}

function Container() {
    const [restaurant,setrestaurant] = useState(restaurantlist);
    const [a,seta] = useState("");

    

    return (
      <>
        <div className="search">
          <input
            type="text"
            value={a}
            onChange={(e) => {
              seta(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              console.log(a,restaurant)
              const data = filterRestaurant(a,restaurantlist);
              console.log(data);
              setrestaurant(data);
            }}
          >
            Search
          </button>
        </div>

        <div className="container">
          {/* <Restaurantcard restaurant = {restaurantlist}/> */}

          {restaurant.map((res) => {
            return <Restaurantcard {...res} key={res.id} />;
          })}
        </div>
      </>
    );
}

export default Container;