

import {useParams} from "react-router-dom";



const RestrauntMenu = ()=>{

    const { resname } = useParams();
    // console.log({resname}) ;
    

    return(
        <>
        <h1>Welcome To {resname}</h1>
        <h2>Order your Food from {resname}</h2>
        {/* <h2>Restraunt id : { resid }</h2> */}
        <h2>Restraunt Name : {resname}</h2>
        </>
    )
}

export default RestrauntMenu;