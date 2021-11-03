import React, { createContext, useState } from 'react';
import { Fetch_productos, Fetch_usuarios, Fetch_roles, Fetch_categorias,Fetch_usuarios2 } from '../Fetch';
import useLocalStorage from '../useLocalStorage';

const UserContext = createContext();



const UserProvider = ({ children }) => {
    const productos = Fetch_productos()

    
    const [users, setUsers] = useLocalStorage('usuarios_existentes',Fetch_usuarios2())
    const toggleSetUsuariosExistentes= (parametro) =>{
        setUsers(parametro)
    }

    const users_fetch = Fetch_usuarios(toggleSetUsuariosExistentes)



     
    const [user, setUser] = useLocalStorage("name","") //🤬no pescar
    
    const toggleSetUser=(valorProvenienteLogin)=>{
        setUser(valorProvenienteLogin)
        console.log(user)
    }

    const[categorias,setCategorias]= useLocalStorage('categorias',"")//❌❌
    const toggleSetCategorias = (parametro) => {//❌❌
        setCategorias(parametro)
    }
    const categorias_fetch = Fetch_categorias(toggleSetCategorias) //❌❌❌
    
    

    // const [usuario, setUsuario] = useLocalStorage('name',()=>Fetch_usuarios())
    const role = Fetch_roles()
    


    const [productoSeleccionado, setProductoSeleccionado] = useLocalStorage('productoSeleccionado',"") //ACA ESTA LA WEA SE SETEA A '' CON CADA REFRESH acaaaa

    
    const [isDesplegado, setIsDesplegado] = useState(false) 
    const [isLogged, setIsLogged] = useLocalStorage('isLogeado',false)

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

    const data = {users_fetch,categorias_fetch,categorias,toggleSetCategorias, toggleSetUsuariosExistentes, user,toggleSetUser,users,productos,role, isDesplegado, toggleIsDesplegado, isLogged, toggleIsLogged, productoSeleccionado, toggleProductoSeleccionado
    ,toggleSetIsDarkMode,isDarkMode}
   
    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}
export { UserProvider }
export default UserContext;