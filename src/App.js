
import Sidebar from "./Folder_SideBar_TopBar/Sidebar";
import Topbar from "./Folder_SideBar_TopBar/Topbar";
import UserContext, {UserProvider} from '../src/UserContext/UserContext';
import React,{useContext, useState} from 'react';
import ContenidoGeneral from "./Folder_Contenido_General/ContenidoGeneral";

function App() {
  
  return (
    <div className="App">
    <UserProvider>
      <Topbar></Topbar>
      
      <ContenidoGeneral/>
    </UserProvider>
    </div>
  );
}

export default App;
