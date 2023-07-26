import { useEffect, useState } from "react";

const useOnline = () =>{
    const [isOnline, setIsOnine] = useState(true);

    const handleOnline = () =>{
        setIsOnine(true);
    }
    const handleOffline = () =>{
        setIsOnine(false);
    }
    useEffect(()=>{
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () =>{
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        }
    })
    return isOnline;
}

export default useOnline;