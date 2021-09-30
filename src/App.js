import React,{useContext, useState} from 'react';

import Inicio from './Componentes/Inicio';
import CreateUser from './Componentes/CrearUsuario';
import Temas from './Componentes/Temas'


import Sidebar from "./Folder_SideBar_TopBar/Sidebar";
import Topbar from "./Folder_SideBar_TopBar/Topbar";
import UserContext, {UserProvider} from '../src/UserContext/UserContext';
import ContenidoGeneral from "./Folder_Contenido_General/ContenidoGeneral";

function App() {
  
  return (
    <div className="App">
    <UserProvider>
      <Topbar></Topbar>
      <ContenidoGeneral/>
      <Temas />
    </UserProvider>
    </div>
  );
}

export default App;
