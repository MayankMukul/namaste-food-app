

import {useParams} from "react-router-dom";



const RestrauntMenu = ()=>{

    const { resname } = useParams();
    // console.log({resname}) ;
    

    return(
        <div className="bg-slate-300 m-5 p-4">
        <h1 className="bg-black text-white p-2 font-bold">Welcome To {resname}</h1>
        <h2 className="text-lg font-semibold">Order Food from</h2>
        {/* <h2>Restraunt id : { resid }</h2> */}
        <h2><span className="font-bold">Restraunt Name </span>: {resname}</h2>
        </div>
    )
}

export default RestrauntMenu;