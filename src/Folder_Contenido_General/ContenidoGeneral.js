import React,{useContext, useState} from 'react'
import UserContext from '../UserContext/UserContext';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from '../Componentes/Inicio';
import CreateUser from '../Componentes/CrearUsuario';
import IngresarNuevoProducto from "../Vistas/Catalogo/IngresarNuevoProducto";
import ModificarProducto from "../Vistas/Catalogo/Modificar_NuevoProducto";
import Catalogo_PaginaPrincipal from "../Vistas/Catalogo/Catalogo_PaginaPrincipal";
import ModificarUsuario from '../Componentes/ModificarUsuario';
import Login from '../Login';


const ContenidoGeneral = () => {
    const {user, isDesplegado}= useContext(UserContext);
    const activo = {
        paddingLeft: '14rem',
        transition: "all ease .5s"
    };
    
  const no_activo = {

    paddingLeft: '6rem',
    transition: "all ease .5s"
  };

  return (
    <BrowserRouter>
        <Switch>
          <div className="container-fluid" style={!isDesplegado ? activo : no_activo}>
            <Route exact path="/inicio" component={Inicio} />
            <Route exact path="/catalogo_paginaprincipal" component={Catalogo_PaginaPrincipal} />
            <Route exact path="/catalogo_ingresarnuevoproducto" component={IngresarNuevoProducto} /> 
            <Route exact path="/catalogo_modificarproducto" component={ModificarProducto} />
            {/* <Route exact path="/ventas" component={ventas} /> */}
            <Route exact path="/usuario_crearusuario" component={CreateUser}/>
            <Route exact path="/modificarusuario" component={ModificarUsuario} /> 
            {/* <Route exact path="/estadisticas" component={Estadisticas} /> */}
            <Route exact path="/" component={Login} /> 
          </div>
        </Switch>
    </BrowserRouter>


                

    )
}

export default ContenidoGeneral
