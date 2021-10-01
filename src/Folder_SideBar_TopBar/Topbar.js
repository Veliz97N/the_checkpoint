import React,{useContext, useState} from 'react'
import { BsFillGridFill } from "react-icons/bs"; //Grid que acompana texto Dashboard
import UserContext from '../UserContext/UserContext';
import Tarjeta_Usuario_Activo from './Tarjeta_Usuario_Activo';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Link } from "react-router-dom";

const Topbar = () => {
    const nombre_empresa = "The CheckPoint"
    const {user, isDesplegado, toggleIsDesplegado}= useContext(UserContext); //se anade informacion global referente al usuario y a si tiene desplegado el toggle
    
    const [titulo_Hover, setIstitulo_Hover] = useState(false)


    const titulo_activo = {
        color: '#80ED99',
        transition: "all ease .5s"
      };
    const titulo_no_activo = {
        color: 'black',
        transition: "all ease .5s"
      };

    return (

        <nav className="navbar navbar-expand-lg navbar-light p-0 w-100">
            <div className= "boton_toggle ms-5" 
            onClick={()=>toggleIsDesplegado(!isDesplegado)}
            onMouseOver={() => setIstitulo_Hover(true)}
            onMouseOut={() => setIstitulo_Hover(false)}>
                <BsFillGridFill className="iconos_menu_lateral" />
            </div>
            
            
            <div className="container">             
                    <div className={"nombre_empresa"} style={titulo_Hover?titulo_activo:titulo_no_activo}>
                        <h3 >{nombre_empresa}</h3>
                    </div> 

                {isDesplegado? <Tarjeta_Usuario_Activo user={user}/>:""}
            </div>
        </nav>

    )
}

export default Topbar