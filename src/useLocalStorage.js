import { useEffect, useState } from "react";
//Todo nice
function getSavedValue(key,initalValue){
    const savedValue=JSON.parse(window.localStorage.getItem(key))
    
    if(savedValue) return savedValue
    if(initalValue instanceof Function) return initalValue()
    return initalValue
}

export default function useLocalStorage(key, initialValue){
    const [value, setValue] = useState(()=>{
        return getSavedValue(key,initialValue)
    })

    useEffect(()=>{
        window.localStorage.setItem(key, JSON.stringify(value))
    },[value])
    return [value, setValue]
}