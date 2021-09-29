import Sidebar from "./Folder_SideBar_TopBar/Sidebar";
import Topbar from "./Folder_SideBar_TopBar/Topbar";
import UserContext, {UserProvider} from '../src/UserContext/UserContext';
import React,{useContext, useState} from 'react';

function App() {
  
  return (
    <UserProvider>
      <Topbar></Topbar>
      <div className="contenedor_sidebar_vistasPrograma">
        <Sidebar></Sidebar>
        {/* <div className={isDesplegado?"vistas_desplegadas":"vistas_no_desplegadas"}>
          Hola  asdlasdasdasdasasd
        </div> */}
      </div>

    </UserProvider>
  );
}

export default App;
