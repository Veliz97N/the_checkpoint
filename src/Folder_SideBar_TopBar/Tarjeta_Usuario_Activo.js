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

      const [isHover, setIsHover] = useState(null)

    return (

            <div style={isHover ? activo_tarjeta_usuario : no_activo_tarjeta_usuario}
                className="usuario d-sm-none d-md-flex"
                onMouseOver={() => setIsHover(true)}
                onMouseOut={() => setIsHover(false)}>

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
                </div>

            </div>

    )
}

export default Tarjeta_Usuario_Activo
