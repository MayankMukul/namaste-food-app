function Shimmer() {
    console.log("loading shimmer");
    return ( 
        <>
        {/* // <div className="shimmer"> */}
            <div className="shimmerSearch w-5/6 h-10 mx-auto my-5 bg-slate-300"></div>
            <div className=" flex flex-wrap m-auto w-11/12">
                {Array(10).fill("").map((e,id)=><div className="shimmercard w-52 h-48 m-5 p-3 bg-slate-300" key={id}></div>)}
            </div>
        {/* // </div> */}
        
        </>
     );
}

export default Shimmer;