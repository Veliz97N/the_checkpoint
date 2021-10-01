import React,{useContext, useState} from 'react'
import Sidebar from '../Folder_SideBar_TopBar/Sidebar'
import UserContext from '../UserContext/UserContext';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from '../Login';

import IngresarNuevoProducto from "../Vistas/Catalogo/IngresarNuevoProducto";
import ModificarProducto from "../Vistas/Catalogo/ModificarProducto";

import Catalogo_PaginaPrincipal from "../Vistas/Catalogo/Catalogo_PaginaPrincipal";

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

        
            <Route exact path="/Catalogo_PaginaPrincipal"component={Catalogo_PaginaPrincipal}/>
            <Route exact path="/Catalogo_IngresarNuevoProducto" > <IngresarNuevoProducto/> </Route>
            <Route exact path="/Catalogo_ModificarProducto" > <ModificarProducto/> </Route>


          </div>
        </Switch>
      </BrowserRouter>
    </div>


                

    )
}

export default ContenidoGeneral
