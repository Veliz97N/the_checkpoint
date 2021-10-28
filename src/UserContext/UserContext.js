import React, { createContext, useState } from 'react';
import { Fetch_productos, Fetch_usuarios, Fetch_roles, Fetch_categorias } from '../Fetch';
import useLocalStorage from '../useLocalStorage';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const productos = Fetch_productos()

    const [users, setUsers] = Fetch_usuarios()
    const [user, setUser] = useLocalStorage("name","")
    
    const toggleSetUser=(valorProvenienteLogin)=>{
        setUser(valorProvenienteLogin)
        console.log(user)
    }

    const[categorias,setCategorias]= useLocalStorage('categorias',"")
    const toggleSetCategorias = (parametro) => {
        setCategorias(parametro)
    }

    
    

    // const [usuario, setUsuario] = useLocalStorage('name',()=>Fetch_usuarios())
    const role = Fetch_roles()
    const categorias_fetch = Fetch_categorias(toggleSetCategorias)


    const [productoSeleccionado, setProductoSeleccionado] = useLocalStorage('productoSeleccionado',"") //ACA ESTA LA WEA SE SETEA A '' CON CADA REFRESH acaaaa

    
    const [isDesplegado, setIsDesplegado] = useState(false) 
    const [isLogged, setIsLogged] = useLocalStorage('isLogeado',false)
   
    // const setUsuario = () => {

    // }

   const [isDarkMode, setIsDarkMode] = useState(true)
   
   const toggleSetIsDarkMode=(bool)=>{
       setIsDarkMode(bool);
   }


    const toggleIsDesplegado = (booleano) => {
        setIsDesplegado(booleano)
        console.log(isDesplegado)
        console.log(users);
    }
    const toggleProductoSeleccionado = (valor) =>{
        setProductoSeleccionado(valor)
    }
    

    const toggleIsLogged = (booleano) => {
        setIsLogged(booleano)
        console.log(isLogged, "is logged?");
    }

    const data = {categorias_fetch,categorias,toggleSetCategorias,user,toggleSetUser,users,productos,role, isDesplegado, toggleIsDesplegado, isLogged, toggleIsLogged, productoSeleccionado, toggleProductoSeleccionado
    ,toggleSetIsDarkMode,isDarkMode}
   
    // data de prueba para otro rol
    // const data_vendedor = {vendedor, productos, isDesplegado, toggleIsDesplegado, isLogged, toggleIsLogged}
    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}
export { UserProvider }
export default UserContext;