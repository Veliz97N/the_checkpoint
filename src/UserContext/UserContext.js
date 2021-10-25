import React, { createContext, useState } from 'react';
import { Fetch_productos, Fetch_usuarios, Fetch_roles } from '../Fetch';
import useLocalStorage from '../useLocalStorage';

const UserContext = createContext();

// const usuario = { nombre:"Juan Carlos", apellido: "Gonzalez",username: "juankaX", password: "juan123", permiso: "Administrador", tema: "Dark", Fuente: { tipo: "Arial", tamaño: 48, titulo_sidebar: true }, isFacebook: false, isGoogle: false }
// usuario de prueba para otro rol
// const vendedor_prueba = { nombre: "Camilo", apellido:"Miranda", username: "elCamilo", password: "123456", permiso: "Vendedor", tema: "Happy", Fuente: {tipo: "Times New Roman", tamaño: 48, titulo_sidebar:true}, isFacebook: false, isGoogle: false}


// const productos=[{nombreProducto:"Modelo",codigodebarras:"8888888888",categoria:"Cervezas",valorUnidad:"600",imagen:"",stockDisponible:"82"},
//                 {nombreProducto:"Corona",codigodebarras:"555555555555",categoria:"Cervezas",valorUnidad:"1100",imagen:"",stockDisponible:"82"},
//                 {nombreProducto:"Papas Fritas",codigodebarras:"444444444",categoria:"Abarrotes",valorUnidad:"1500",imagen:"",stockDisponible:"82"},
//                 {nombreProducto:"Chocman",codigodebarras:"12312313",categoria:"Abarrotes",valorUnidad:"30",imagen:"",stockDisponible:"82"}]

//Se pasa usuario, productos como variable global para simular la obtencion de la informacion proveniente de la base de datos



const UserProvider = ({ children }) => {
    const productos = Fetch_productos()
    
    const [users, setUsers] = Fetch_usuarios()
    const [user, setUser] = useLocalStorage("name","")
    const toggleSetUser=(valorProvenienteLogin)=>{
        setUser(valorProvenienteLogin)
        console.log(user)
    }
    

    // const [usuario, setUsuario] = useLocalStorage('name',()=>Fetch_usuarios())
    const role = Fetch_roles()



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

    const data = { user,toggleSetUser,users,productos, role, isDesplegado, toggleIsDesplegado, isLogged, toggleIsLogged, productoSeleccionado, toggleProductoSeleccionado
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