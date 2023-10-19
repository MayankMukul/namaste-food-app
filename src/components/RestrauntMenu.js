

import {useParams} from "react-router-dom"

const RestrauntMenu = ()=>{

    const { resid } = useParams();
    console.log({resid}) ;

    return(
        <>
        <h1>This is restraunt menu</h1>
        <h2>menu for restraunt </h2>
        <h2>Restraunt id : { resid }</h2>
        <h2>Restraunt id : restraurant menu</h2>
        </>
    )
}

export default RestrauntMenu;