import { useState, useEffect } from "react";

function useDebounce<T>(value:T, delay?:number): T{
    const [debouncedVal, setDebouncedVal] = useState(value);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebouncedVal(value);
        }, delay || 500);
        return () => {
            clearTimeout(timer);
        }
    }, [value, delay]);
    return debouncedVal;
};
export default useDebounce;