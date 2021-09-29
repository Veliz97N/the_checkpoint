import React,{useContext, useState} from 'react'
import { BsFillGridFill } from "react-icons/bs"; //Grid que acompana texto Dashboard
import UserContext from '../UserContext/UserContext';
import Tarjeta_Usuario_Activo from './Tarjeta_Usuario_Activo';

const Topbar = () => {
    const nombre_empresa = "The CheckPoint"
    const {user, isDesplegado, toggleIsDesplegado}= useContext(UserContext); //se anade informacion global referente al usuario y a si tiene desplegado el toggle

    return (
        <nav className="navbar navbar-expand-lg navbar-light mb-3 p-0 w-100">
            <div className= "boton_toggle ms-5 " onClick={()=>toggleIsDesplegado(!isDesplegado)}>
                <BsFillGridFill className="iconos_menu_lateral" />
            </div>
            
            <div className="container">             
                    <div className="nombre_empresa">
                        <h3 >{nombre_empresa}</h3>
                    </div> 
                {isDesplegado? <Tarjeta_Usuario_Activo user={user}/>:""}
            </div>
        </nav>
    )
}

export default Topbar