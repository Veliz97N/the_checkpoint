import { useEffect, useState } from "react";

export const Fetch_productos = () => {
    const [state, setState] = useState([]);
    useEffect(() => {
        fetch("https://3000-teal-giraffe-j7phjtb3.ws-us18.gitpod.io/productos")
            .then( response =>{
                return response.json();
            })
            .then( data => {
                setState(data);
                console.log(data);
            })
    }, [])
    return state;
}

export const Fetch_usuarios = () => {
    const [state, setState] = useState([])
    useEffect(() => {
        fetch("https://3000-teal-giraffe-j7phjtb3.ws-us18.gitpod.io/users")
            .then( response =>{
                return response.json();
            })
            .then( data => {
                setState(data);
                console.log(data);
            })
    }, [])
    return state;
}