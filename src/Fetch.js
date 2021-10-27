import { useEffect, useState } from "react";

export const Fetch_productos = () => {
    const [state, setState] = useState([]);
    useEffect(() => {
        fetch("https://3000-gray-tiglon-p4zyj6wv.ws-us18.gitpod.io/productos")
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
export const Fetch_categorias = (toggleSetCategorias) => {
    const [state, setState] = useState([])
    
    useEffect(() => {
        fetch("https://3000-gray-tiglon-p4zyj6wv.ws-us18.gitpod.io/categoria")
            .then( response =>{
                return response.json();
            })
            .then( data => {
                setState(data);
                toggleSetCategorias(data)
                console.log(data);
            })
    }, [])
    return state;
}

export const Fetch_usuarios = () => {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        fetch("https://3000-gray-tiglon-p4zyj6wv.ws-us18.gitpod.io/users")
            .then( response =>{
                return response.json();
            })
            .then( data => {
                setUsers(data);
                console.log(data);
            })
    }, [])
    return [users, setUsers];
}

export const Fetch_roles = () => {
    const [state, setState] = useState([])
    useEffect(() => {
        fetch("https://3000-gray-tiglon-p4zyj6wv.ws-us18.gitpod.io/role")
        .then(response=> {
            return response.json();
        })
        .then(data=> {
            setState(data);
            console.log(data);
        })
    }, [])
    return state
}