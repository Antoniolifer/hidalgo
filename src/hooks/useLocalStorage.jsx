/* eslint-disable no-unused-vars */
import { useState } from "react";


const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        
            const localVal = window.localStorage.getItem(key);
            if (localVal) {
                return JSON.parse(localVal)
            } else {
                localStorage.setItem(key, JSON.stringify(defaultValue));
                return defaultValue
            }
        
    });
    //window.localStorage.getItem
    // window.localStorage.setItem
    // window.localStorage.clear
    const setLocalValue = (valueOrFn) => {

        let newValue;
        if (typeof valueOrFn === 'function') {
            const fn = valueOrFn;
            newValue = fn(value)
        }
        else {
            newValue = valueOrFn;
        }
        window.localStorage.setItem(key, JSON.stringify(newValue));
        setValue(newValue);
    }
    
    const clearLocalValues = () => {
        window.localStorage.clear();
        setValue(null);
    }


    return [value, setLocalValue];
}

export default useLocalStorage;