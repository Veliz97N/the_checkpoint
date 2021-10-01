import React, { createContext, useState } from 'react';

const UserContext = createContext();

const usuario = { username: "Juan Carlos", password: "Juanito1", permiso: "Administrador", tema: "Dark", Fuente: { tipo: "Arial", tamano: 48, titulo_sidebar: true }, isFacebook: false, isGoogle: false }
const productos=[{nombreProducto:"Modelo",codigodebarras:"8888888888",categoria:"Abarrotes",valorUnidad:"1100",stockDisponible:"82"},
                {nombreProducto:"Corona",codigodebarras:"555555555555",categoria:"Abarrotes",valorUnidad:"1100",stockDisponible:"82"},
                {nombreProducto:"Papas Fritas",codigodebarras:"444444444",categoria:"Abarrotes",valorUnidad:"1100",stockDisponible:"82"},
                {nombreProducto:"Chocman",codigodebarras:"12312313",categoria:"Abarrotes",valorUnidad:"1100",stockDisponible:"82"}]
//Se pasa usuario, productos como variable global para simular la obtencion de la informacion proveniente de la base de datos

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(usuario)
    const [isDesplegado, setIsDesplegado] = useState(false) 
    const [isLogged, setIsLogged] = useState(false)
   
    const toggleIsDesplegado = (booleano) => {
        setIsDesplegado(booleano)
        console.log(isDesplegado)
    }

    const data = { user, productos, isDesplegado, toggleIsDesplegado}

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}
export { UserProvider }
export default UserContext;