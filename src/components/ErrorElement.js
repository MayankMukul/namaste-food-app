import { useRouteError } from 'react-router-dom';

const ErrorElement = ()=>{
    const error = useRouteError();
    // console.log(error);
    return (
      <>
        <h1>oops</h1>
        <h2>Something Went Wrong!!!</h2>
        <h3>{error.status +" : "+ error.statusText}</h3>
        <h3>{error.data }</h3>
        
      </>
    );
}

export default ErrorElement;
