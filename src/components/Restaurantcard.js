import React from "react";
import {Link } from 'react-router-dom';

function Restaurantcard (props) {

    const imgurl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

     return (
          <div className="card bg-slate-300 p-4 m-4 w-56">
              
              <Link to={"/Restaurant/"+ props.info.id} state={{name : props.info.name}}>
              <img className='h-32 m-auto' src={imgurl + props.info.cloudinaryImageId} alt="not rendered" />
  
              <h3 className='text-lg font-bold'>{props.info.name}</h3>
              <h3>{props.info.cuisines.join(", ")}</h3>
              <h4>{props.info.avgRating}</h4>
              </Link>
  
          </div>
      )
  
}

export default Restaurantcard