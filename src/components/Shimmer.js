 import React from "react";

function Shimmer() {
    return ( 
        <>
            <div className="w-11/12  m-auto my-5 p-6   bg-slate-300">
                {/* <input className="self-center"></input> */}
            </div>
            <div className="cnotainer m-auto flex flex-wrap justify-center items-center rounded" data-testid="shimmer">
                {Array(16).fill("").map((e,id)=><div className="shimmercard w-56 h-72 m-5 p-3 bg-slate-300" key={id}></div>)}
            </div>
        
        </>
     );
}

export default Shimmer;