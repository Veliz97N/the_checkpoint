import React,{useContext, useState} from 'react'
import { AiOutlineHome, AiFillHome } from "react-icons/ai"; //Si esta hover, hacer esas caracteristicas
import { GrCatalogOption, GrCatalog } from "react-icons/gr"; //Utilizada para catalogo
import { RiBankLine, RiBankFill } from "react-icons/ri"; //Ventas
import { AiOutlineLineChart, AiOutlineAreaChart } from "react-icons/ai"; //Estadisticas
import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";

import UserContext from '../UserContext/UserContext';
import Tarjeta_Usuario_Activo from './Tarjeta_Usuario_Activo'; //Se importa la tarjeta de usuario, de modo que si no se muestra en topbar lo hara en sidebar

import { Link } from "react-router-dom";

const Sidebar = () => {

    const activo = {
        width: '13rem',
        overflow: 'hidden',
        transition: "all ease .5s",       
      };
      const no_activo ={
          width: '3.5rem',
          overflow: 'hidden',
          transition: "all ease .5s",
      };

    const {user, isDesplegado}= useContext(UserContext); //se anade informacion global referente al usuario y a si tiene desplegado el toggle
    
    return (
        <div className="sidebar" style={!isDesplegado ? activo : no_activo}>
            <ul className="nav-li">
                <li>
                    <Link to="/Inicio" >
                        <AiOutlineHome className="iconos_menu_lateral" />
                        <span className="texto_menu_lateral">Inicio</span>
                    </Link>
                </li>



                <li>
                    <Link to="/" >
                        <RiBankLine className="iconos_menu_lateral" />
                        <span className="texto_menu_lateral">Ventas</span>
                    </Link>
                </li>
                <li>
                    <Link to="/Catalogo_PaginaPrincipal" >
                        <GrCatalogOption className="iconos_menu_lateral" />
                        <span className="texto_menu_lateral">Catalogo</span>

                    </Link>
                </li>

                <li>
                    <Link to="/" >
                        <AiOutlineLineChart className="iconos_menu_lateral" />
                        <span className="texto_menu_lateral">Estadisticas</span>
                    </Link>
                </li>

            </ul>
            <div className="footer_sidebar" >
                {!isDesplegado ? <Tarjeta_Usuario_Activo user={user} /> : ""} {/* Esta madre debo arreglarla */}
            </div>
        </div>
    )
}

export default Sidebar
