import {useState, useEffect } from 'react';


const useIsOnline = ()=>{
    const [isOnline, setisOnline]=useState(true);
    const handleOnline = ()=>{
        setisOnline(true);
    }
    const handleOffline = ()=>{
        setisOnline(false);
    }

    useEffect(()=>{
        window.addEventListener("online",handleOnline);
        window.addEventListener("offline",handleOffline);

        return ()=>{
            window.removeEventListener('online',handleOnline);
            window.removeEventListener('Offline',handleOffline);
        }
    },[])
    
    return isOnline;
}

export default useIsOnline