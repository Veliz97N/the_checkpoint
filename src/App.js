import React,{useContext, useState} from 'react';

import Inicio from './Componentes/Inicio';
import CreateUser from './Componentes/CrearUsuario';
/*import Temas from './Componentes/Temas'*/


import Sidebar from "./Folder_SideBar_TopBar/Sidebar";
import Topbar from "./Folder_SideBar_TopBar/Topbar";
import UserContext, {UserProvider} from '../src/UserContext/UserContext';
import ContenidoGeneral from "./Folder_Contenido_General/ContenidoGeneral";
import Login from "./Login";

function App() {
  
  const [isLogged, setIsLogged] = useState(false)

  const toggleIsLogged = (booleano) =>{
    setIsLogged(booleano)
  }
  return (
    <div className="App">
    <UserProvider>
      <Login toggleIsLogged={toggleIsLogged}/>
      {isLogged &&
          <div>
            <Topbar></Topbar>
            <ContenidoGeneral />
          
          </div>
      }

    </UserProvider>
    </div>
  );
}

export default App;
