import React,{useContext, useState} from 'react'
import Sidebar from '../Folder_SideBar_TopBar/Sidebar'
import UserContext from '../UserContext/UserContext';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from '../Login';
import Inicio from '../Componentes/Inicio';
import CreateUser from '../Componentes/CrearUsuario';
import Estadisticas from '../Componentes/Estadisticas';

import IngresarNuevoProducto from "../Vistas/Catalogo/IngresarNuevoProducto";
import { IoLogoInstagram } from 'react-icons/io5';

const ContenidoGeneral = () => {
    const {user, isDesplegado}= useContext(UserContext);
    const activo = {
        position: 'absolute',
        top: '75px',
        paddingLeft: '14rem',
        transition: "all ease .5s"
    };
    
  const no_activo = {
    position: 'absolute',
    top: '75px',
    paddingLeft: '6rem',
    transition: "all ease .5s"
  };

  return (
    <div className="contenidoGeneral">
      <BrowserRouter>
        <Sidebar></Sidebar>
        
        <Switch>
          <div className="container-fluid" style={!isDesplegado ? activo : no_activo}>

            <Route exact path="/" component={Estadisticas} />
            
            <Route exact path="/Catalogo_IngresarNuevoProducto" component={IngresarNuevoProducto} />



          </div>
        </Switch>
      </BrowserRouter>
    </div>


                

    )
}

export default ContenidoGeneral
