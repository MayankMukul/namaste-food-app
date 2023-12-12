import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorElement = ()=>{
    const error = useRouteError();
    // console.log(error);
    return (
      <div className='bg-gray-300 p-4 h-screen'>
        <h1 className='text-4xl bg-black text-white p-3'>Error</h1>
        <h1 className='text-xl'>OOPS!...</h1>
        <h2 className='text-2xl'>Page Not Found</h2>
        
        
        
      </div>
    );
}

export default ErrorElement;
