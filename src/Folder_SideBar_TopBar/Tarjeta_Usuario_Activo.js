import React from 'react'

const Tarjeta_Usuario_Activo = (props) => {
    
    return (
        <div className="usuario_global d-sm-none d-md-flex" >
            <div className="datos_usuario me-4 d-flex flex-column my-auto">
                <div className="nombre_usuario mx-auto">
                    {props.user.username}
                </div>
                <div className="permiso_usuario mx-auto">
                    <small className="text-muted">{props.user.permiso}</small>
                </div>
            </div>
            <div className="foto_usuario">
                <i class="fas fa-users fa-4x"></i>
            </div>
        </div>
    )
}

export default Tarjeta_Usuario_Activo
