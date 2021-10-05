import React,{useState} from 'react'
import { AiOutlineDelete, AiFillDelete } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";
import Layout from '../Folder_Contenido_General/Layout'

const ModificarUsuario = (props) => {
    const titulo ={nuevo:"Ingresar Nuevo Usuario", modificar:"Modificar Usuario Existente"}
    const input_ingresarNuevoUsuario = {
        backgroundColor: '#57CC99',
        color: 'black',
        fontSize: '1.3rem'     
      };
      const label_ingresarNuevoUsuario={
        color: 'black',
        fontSize: '1.3rem',
        marginBottom: '1rem'
      }

      const input_ingresarFotografia = { //Esto no funciona papiiiii
        backgroundColor: '#57CC99',
        color: 'black',
        fontSize: '1.3rem',
        borderRadius: '35px',
        transition: "all ease .5s",
        transition: "all ease .5s",
            ":hover": {
        backgroundColor: "yellow",
        color: "red"
        }
    }
    const contenedorfotografia={
        width: '250px',
        height:'250px',
    }

    const imagen_Ingresar_Modificar_Usuario={
        borderRadius: '50%',
        width: '100%',
        height:'100%',
        objectFit: 'contain',
    }

    const [fileUrl, setFileUrl] = useState(null);

    function processImage(event){
        const imageFile = event.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setFileUrl(imageUrl)
     }
     const handler_Submit = (event) => {
        event.preventDefault()
     }

    return (
        <Layout hasNavbar hasSidebar>
        <div className="crearUsuario">
            <div className="row">
                <div className="h3 col-12 d-flex justify-content-center py-3 mb-4">
                    <div className="titulo col-6 py-2 d-flex justify-content-center">
                        Ver Perfil de Usuario
                    </div>
                </div>
            </div>
            <form >
                <div className="row">
                    <div className="col-md-7 col-sm-12">
                        <div className="caja_contenedora_label_input form-group my-2 mb-4">
                            <label style={label_ingresarNuevoUsuario} className="col-md-4 col-sm-12 ps-2" for="exampleInputEmail1">Nombre</label>
                            <input style={input_ingresarNuevoUsuario} className="col-md-8 col-sm-12" type="text" name="" id="" placeholder="Ingresa tu nombre" value={props.user.nombre}/>
                        </div>
                        <div className="form-group mb-4">
                            <label style={label_ingresarNuevoUsuario} className="col-md-4 col-sm-12  ps-2" for="exampleInputPassword1">Apellido</label>
                            <input style={input_ingresarNuevoUsuario}  className="col-md-8 col-sm-12" type="text" name="" id="" placeholder="Ingresa tu apellido" value={props.user.apellido}/>
                        </div>
                        <div className="form-group mb-4">
                            <label style={label_ingresarNuevoUsuario} className="col-md-4 col-sm-12  ps-2" for="exampleInputPassword1">Nombre de Usuario</label>
                            <input style={input_ingresarNuevoUsuario}  className="col-md-8 col-sm-12" type="text" name="" id="" placeholder="Ingresa tu nombre de usuario" value={props.user.username}/>
                        </div>
                        <div className="form-group mb-4">
                            <label style={label_ingresarNuevoUsuario} className="col-md-4 col-sm-12  ps-2" for="exampleInputPassword1">Contraseña</label>
                            <input style={input_ingresarNuevoUsuario} className="col-md-8 col-sm-12" type='password' name="" id="" placeholder="Ingresa tu contraseña"/>
                        </div>
                        <div className="form-group mb-4">
                            <label style={label_ingresarNuevoUsuario} className="col-md-4 col-sm-12  ps-2" for="exampleInputPassword1">Confirmar Contraseña</label>
                            <input style={input_ingresarNuevoUsuario} className="col-md-8 col-sm-12" type='password' name="" id="" placeholder="Ingresa nuevamente tu contraseña"/>
                        </div>
                    </div>

                    <div className="col-md-5 col-sm-12 mt-2">
                        <div className="ingresar_foto mb-1 ps-2">
                            <label style={label_ingresarNuevoUsuario} className=" col-lg-4 col-md-4 col-sm-12 mb-4" for="exampleInputPassword1">Imagen del Usuario </label>
                            <input style={input_ingresarFotografia} className="ingresarArchivo" type="file" name="" id="" accept="image/*" onChange={processImage}/>
                        </div>
                        <div className="contenedorcontenedor justify-content-center d-md-flex d-sm-none "> 
                        {fileUrl?<div style={contenedorfotografia} > 
                                <img style={imagen_Ingresar_Modificar_Usuario} src={fileUrl} alt="" />
                            </div>:""}
                        </div>
                    </div>
                </div>

                <div className="row">
                <div className="botonera_AddProducto_O_RemoverProducto d-flex justify-content-center">
                            <button
                                onClick={e=>handler_Submit(e)}
                                type="submit"
                                class="btn btn-primary mx-5"
                            >
                                Crear Nuevo Usuario
                            </button>
                            <button
                                type="reset"
                                
                                class="btn btn-danger mx-5"
                            >
                                Cancelar
                            </button>
                        </div>
                </div>
            </form>
        </div>
        </Layout>
    )
}

export default ModificarUsuario
