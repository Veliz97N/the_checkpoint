import React,{useContext, useState} from 'react'

const Topbar = () => {


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <div className="container px-5">
                <div className="nombre_empresa border border-primary w-75 d-flex justify-content-center">
                    The CheckPoint
                </div>
                <div className="usuario border border-primary">
                    <div className="nombre_usuario">
                        Admin
                    </div>
                    <div className="foto_usuario">
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Topbar