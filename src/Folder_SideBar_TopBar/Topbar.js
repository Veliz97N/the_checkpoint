import React,{useContext, useState} from 'react'

const Topbar = () => {
    const nombre_empresa = "The CheckPoint"
    const usuario={name:"Juanito", cargo: "Administrador"}


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3 p-0 w-100">
            <div className="container">
                <div className="nombre_empresa">
                    <h3 >{nombre_empresa}</h3>
                </div>
                <div className="usuario_global d-sm-none d-md-flex" > 
                    <div className="datos_usuario me-4 d-flex flex-column my-auto">
                        <div className="nombre_usuario mx-auto">
                            {usuario.name}
                        </div>
                        <div className="permiso_usuario mx-auto">
                            <small className="text-muted">{usuario.cargo}</small>
                            
                        </div>
                    </div>
                    <div className="foto_usuario">
                        <i class="fas fa-users fa-4x"></i>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Topbar