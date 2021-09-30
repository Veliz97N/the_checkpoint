import React,{useContext, useState} from 'react'
import Sidebar from '../Folder_SideBar_TopBar/Sidebar'
import UserContext from '../UserContext/UserContext';


const ContenidoGeneral = () => {
    const {user, isDesplegado}= useContext(UserContext);
    const activo = {
        position: 'absolute',
        top: '75px',
        paddingLeft: '14rem',
        transition: "all ease .5s"
    };
    
      const no_activo ={
        position: 'absolute',
        top:'75px',
        paddingLeft: '6rem',
        transition: "all ease .5s"
      };

    return (
        <div className="contenidoGeneral">
            <Sidebar></Sidebar>
            <div className="container-fluid" style={!isDesplegado?activo:no_activo}>
                
            </div> 
        </div>
    )
}

export default ContenidoGeneral
