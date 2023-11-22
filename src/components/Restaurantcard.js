import {Link } from 'react-router-dom';

function Restaurantcard (props) {

    const imgurl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
      return (
          <div className="card bg-slate-300 p-4 m-4 w-56">
              {/* <img src="https://b.zmtcdn.com/data/pictures/5/19136275/c07152265062c9600e3bd6d7bf03fdc6_o2_featured_v2.jpg" alt="Image" />
              <h3>Restaurant Name</h3>
              <h3>Dishes</h3>
              <h4>stars</h4> */}
  
              {/* <img src={restaurantlist[0].img} alt="not rendered" />
              <h3>{restaurantlist[0].name}</h3>
              <h3>{restaurantlist[0].dishes}</h3>
              <h4>{restaurantlist[0].stars}</h4> */}
              
              <img className='h-32 m-auto' src={imgurl + props.info.cloudinaryImageId} alt="not rendered" />
  
              <Link to={"/Restaurant/"+ props.info.id}>
              <h3 className='text-lg font-bold'>{props.info.name}</h3>
              <h3>{props.info.cuisines.join(", ")}</h3>
              <h4>{props.info.avgRating}</h4>
              </Link>
  
          </div>
      )
  
}

export default Restaurantcard