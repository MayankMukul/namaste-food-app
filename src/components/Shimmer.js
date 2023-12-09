 import React from "react";

function Shimmer() {
    return ( 
        <>
            <div className="w-11/12  m-auto my-5 p-6   bg-slate-300">
                {/* <input className="self-center"></input> */}
            </div>
            <div className=" flex flex-wrap justify-center items-center " data-testid="shimmer">
                {Array(10).fill("").map((e,id)=><div className="shimmercard w-52 h-52 m-5 p-3 bg-slate-300" key={id}></div>)}
            </div>
        
        </>
     );
}

export default Shimmer;