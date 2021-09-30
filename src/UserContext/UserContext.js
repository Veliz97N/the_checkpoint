import React, { createContext, useState } from 'react';

const UserContext = createContext();

const usuario = { username: "Juan Carlos", password: "Juanito1", permiso: "Administrador", tema: "Dark", Fuente: { tipo: "Arial", tamano: 48, titulo_sidebar: true }, isFacebook: false, isGoogle: false }

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(usuario)
    const [isDesplegado, setIsDesplegado] = useState(false)
   
    const toggleIsDesplegado = (booleano) => {
        setIsDesplegado(booleano)
        console.log(isDesplegado)
    }

    const data = { user, isDesplegado, toggleIsDesplegado}

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}
export { UserProvider }
export default UserContext;