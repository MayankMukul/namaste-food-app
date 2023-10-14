function Shimmer() {
    return ( 
        <>
        {/* // <div className="shimmer"> */}
            <div className="shimmerSearch"></div>
            <div className="container">
                {Array(10).fill("").map((e,id)=><div className="shimmercard" key={id}></div>)}
            </div>
        {/* // </div> */}
        
        </>
     );
}

export default Shimmer;