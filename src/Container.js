// import React from 'react';

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

// const restaurantlist = [
//   {
//     "info": {
//       "id": "614573",
//       "name": "Subway",
//       "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
//       "locality": "Sector 11",
//       "areaName": "Rohini",
//       "costForTwo": "₹350 for two",
//       "cuisines": [
//         "Salads",
//         "Snacks",
//         "Desserts",
//         "Beverages"
//       ],
//       "avgRating": 3.9,
//       "feeDetails": {
//         "restaurantId": "614573",
//         "fees": [
//           {
//             "name": "BASE_DISTANCE",
//             "fee": 6300
//           },
//           {
//             "name": "BASE_TIME"
//           },
//           {
//             "name": "ANCILLARY_SURGE_FEE"
//           }
//         ],
//         "totalFee": 6300
//       },
//       "parentId": "2",
//       "avgRatingString": "3.9",
//       "totalRatingsString": "500+",
//       "promoted": true,
//       "adTrackingId": "cid=8774140~p=1~eid=0000018b-0b7d-b6c2-5209-00e000580101~srvts=1696704870082~45995",
//       "sla": {
//         "deliveryTime": 22,
//         "lastMileTravel": 4.8,
//         "serviceability": "SERVICEABLE",
//         "slaString": "22 mins",
//         "lastMileTravelString": "4.8 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2023-10-08 01:00:00",
//         "opened": true
//       },
//       "badges": {
//         "textExtendedBadges": [
//           {
//             "iconId": "guiltfree/GF_Logo_android_3x",
//             "shortDescription": "options available",
//             "fontColor": "#7E808C"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textExtendedBadges": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "iconId": "guiltfree/GF_Logo_android_3x",
//                   "description": "",
//                   "shortDescription": "options available",
//                   "fontColor": "#7E808C"
//                 }
//               }
//             ]
//           },
//           "textBased": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "40% OFF",
//         "subHeader": "UPTO ₹80"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=614573",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "498382",
//       "name": "Burger King",
//       "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
//       "locality": "M2K Mall",
//       "areaName": "Rohini",
//       "costForTwo": "₹350 for two",
//       "cuisines": [
//         "Burgers",
//         "American"
//       ],
//       "avgRating": 4.4,
//       "feeDetails": {
//         "restaurantId": "498382",
//         "fees": [
//           {
//             "name": "BASE_TIME"
//           },
//           {
//             "name": "BASE_DISTANCE",
//             "fee": 4000
//           },
//           {
//             "name": "ANCILLARY_SURGE_FEE"
//           }
//         ],
//         "totalFee": 4000
//       },
//       "parentId": "166",
//       "avgRatingString": "4.4",
//       "totalRatingsString": "1K+",
//       "sla": {
//         "deliveryTime": 20,
//         "lastMileTravel": 2,
//         "serviceability": "SERVICEABLE",
//         "slaString": "20 mins",
//         "lastMileTravelString": "2.0 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2023-10-08 03:00:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "textBased": {
            
//           },
//           "imageBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "EVERY ITEM",
//         "subHeader": "@ ₹129"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "swiggy://menu?restaurant_id=498382",
//       "text": "RESTAURANT_MENU",
//       "type": "DEEPLINK"
//     }
//   }]

function Restaurantcard (props) {

  const imgurl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
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
            
            <img src={imgurl + props.info.cloudinaryImageId} alt="not rendered" />
            <h3>{props.info.name}</h3>
            <h3>{props.info.cuisines.join(", ")}</h3>
            <h4>{props.info.avgRating}</h4>

            {/* {console.log(props)} */}

        </div>
    )
}


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

    // console.log("render",allrestaurant);
    // setrestaurant(allrestaurant);
    useEffect(()=>{
      getRestaurants();
    },[])

    async function getRestaurants(){
      const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=28.7040592&lng=77.10249019999999");
      const json = await data.json();
      // console.log(json.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
      setallrestaurant(json.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
      setrestaurant(json.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
      // console.log("Use Effect");
    }

    // console.log("container",allrestaurant);
    
    // not rendered component (early return)
    // if(restaurant?.length === 0 ){
    //   return <h1>NO Search Found!</h1>
    // }

    return ( allrestaurant.length===0 )?<Shimmer></Shimmer>:
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
              // console.log(a,restaurant)
              const data = filterRestaurant(a,allrestaurant);
              // console.log(data);
              // setallrestaurant(data);
              setrestaurant(data);
            }}
          >
            Search
          </button>
        </div>

        <div className="container">
          {/* <Restaurantcard restaurant = {restaurantlist}/> */}
            {(restaurant.length==0)?<h1>No Search Result Found </h1>:(restaurant.map((res) => {
            return <Restaurantcard {...res} key={res.info.id} />;
          })) }
          {  
          (restaurant.map((res) => {
            return <Restaurantcard {...res} key={res.info.id} />;
          }))
          }
        </div>
      </>
    
}

export default Container;