import React,{useState} from 'react'

const Tarjeta_Usuario_Activo = (props) => {

    const activo_tarjeta_usuario = {
        width:'13rem',
        display:'flex',
        justifyContent:'center',
        borderRadius: '25px',   
        border: '1px solid black',
        backgroundColor:'#80ED99',
        transition: "all ease .5s",   
      };
      const no_activo_tarjeta_usuario = {
        border: 'none',
        width:'13rem',
        display:'flex',
        justifyContent:'center', 
        transition: "all ease .5s", 
      };
      const estilo_dropdownmenuNuevo ={
          zIndex: '2000'
      }

      const [isHover, setIsHover] = useState(null)

    return (
        

        <div style={isHover ? activo_tarjeta_usuario : no_activo_tarjeta_usuario}
            className="usuario btn-group d-sm-none d-md-flex"
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}>
            
            <button class="btn dropdown-toggle d-md-flex" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            
            <div className="datos_usuario me-4 d-flex flex-column my-auto">
                <div className="nombre_usuario mx-auto">
                    {props.user.username}
                </div>

                <div className="permiso_usuario mx-auto">
                    <small className="text-white">{props.user.permiso}</small>
                </div>

            </div>

            <div className="foto_usuario">
                <i class="fas fa-users fa-3x"></i>
                <div>
                {/* <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    ⬇
                </button> */}
                
            </div>
            </div>
            
            </button>
            <div style={estilo_dropdownmenuNuevo} class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Cerrar Sesion</a>
                    <a class="dropdown-item" href="#">Crear Usuario</a>
                    <a class="dropdown-item" href="#">Modificar Usuario</a>
                </div>
        </div>

    )
}

export default Tarjeta_Usuario_Activo
