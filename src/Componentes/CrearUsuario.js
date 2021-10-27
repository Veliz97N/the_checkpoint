import React,{useContext, useState} from 'react'

import Layout from '../Folder_Contenido_General/Layout'
import { useMediaQuery } from "react-responsive";
import UserContext from '../UserContext/UserContext';

const CrearUsuario = () => {
    const {users} = useContext(UserContext)
    const isChiquito = useMediaQuery({
        query: "(max-width: 577px)",
      });   
    const input_ingresarNuevoProducto = {
        backgroundColor: '#667ea0',
        color: 'black',
        fontSize: '1.3rem'     
      };
      const label_ingresarNuevoProducto={
        color: 'white',
        fontSize: '1.3rem',
        
      }
      const input_ingresarFotografia = { //Esto no funciona papiiiii
        backgroundColor: '#667ea0',
        color: 'black',
        fontSize: '1.3rem',
        borderRadius: '35px',
        transition: "all ease .5s",
        
            ":hover": {
        backgroundColor: "yellow",
        color: "red"
        }
    }
    const visible = {
        visibility:'visible'
    }
    const no_visible = {
        visibility:'hidden'
    }

    const contenedorfotografia={
    width: '250px',
        height:'250px',
    }
    const imagen_Ingresar_Modificar_Producto={
        borderRadius: '50%',
        width: '100%',
        height:'100%',
        objectFit: 'contain',
    }
    const overFlow = {
        overflow:'hidden'
    }
    const [fileUrl, setFileUrl] = useState(null);
    function processImage(event){
        const imageFile = event.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setFileUrl(imageUrl)
     }
  

    const [nombre_nuevoUsuario, setNombre_nuevoUsuario] = useState('')
    const [apellido_nuevoUsuario, setApellido_nuevoUsuario] = useState('')
    const [username_nuevoUsuario, setUsername_nuevoUsuario] = useState('')
    const [password_nuevoUsuario, setPassword_nuevoUsuario] = useState('')
    const [confirm_password_nuevoUsuario, setConfirm_password_nuevoUsuario] = useState('')

    const [booleano_feliz_nombre, setBooleano_feliz_nombre]= useState(null)
    const [booleano_feliz_apellido, setBooleano_feliz_apellido]= useState(null)
    const [booleano_feliz_username, setBooleano_feliz_username]= useState(null)
    const [booleano_feliz_password, setBooleano_feliz_password]= useState(null)
    const [booleano_feliz_confirm_password,setBooleano_feliz_confirm_password]= useState(null)
    //const usuario = { nombre:"Juan Carlos", apellido: "Gonzalez",username: "juankaX", password: "juan123", permiso: "Administrador", tema: "Dark", Fuente: { tipo: "Arial", tamaño: 48, titulo_sidebar: true }, isFacebook: false, isGoogle: false }
    const funcionPublicarUsuario = () => {
        let contador = 0
        if (
            nombre_nuevoUsuario != "" &&
            nombre_nuevoUsuario.length > 2 &&
            apellido_nuevoUsuario != "" &&
            apellido_nuevoUsuario.length > 2 &&
            username_nuevoUsuario != "" &&
            username_nuevoUsuario.length > 3 &&
            password_nuevoUsuario != "" &&
            password_nuevoUsuario.length > 2 &&
            confirm_password_nuevoUsuario != "" &&
            confirm_password_nuevoUsuario === password_nuevoUsuario
        ){          
            for (let x = 0; x < users.length; x++){
                if (users[x].username === username_nuevoUsuario){
                    contador += 1
                }    
            }
            if (contador !== 0){
            alert("Nombre de usuario ya existe")
            }
            if (contador === 0){
                console.log("LGTM = Looks Good To Me")
                //ACA HAREMOS EL POST DEL NUEVO USUARIO PAPI
                console.log("Que haga el POST dice....")
                const mail = "test@test.cl"
                const nuevo_usuario = {
                    name: nombre_nuevoUsuario,
                    last_name: apellido_nuevoUsuario,
                    password: password_nuevoUsuario,
                    username: username_nuevoUsuario,
                    email: mail
                }
                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(nuevo_usuario),
                  };
                const urlUsuarios = "https://3000-amber-gerbil-mp7pfq6s.ws-us18.gitpod.io/users"
                fetch(urlUsuarios, requestOptions)
                .then((response) => response.json())
                .then((data) => console.log(data, nuevo_usuario))
                .catch((err)=> console.log(err))

            }
        }
    }
    
    
    
    const FuncionValidarFormulario = (e) => {
        e.preventDefault();

        if(nombre_nuevoUsuario !=='' && nombre_nuevoUsuario.length>2 ){ //Falta que solo acepte letras y no numeros
            setBooleano_feliz_nombre(true)
        } 
        else{
            setBooleano_feliz_nombre(false)
        }

        if(apellido_nuevoUsuario!=='' && apellido_nuevoUsuario.length>2 ){
            setBooleano_feliz_apellido(true)
        }
        else{
            setBooleano_feliz_apellido(false)
        }

        if(username_nuevoUsuario !== '' && username_nuevoUsuario.length>3){
            setBooleano_feliz_username(true)
        }
        else{
            setBooleano_feliz_username(false)
        }

        if(password_nuevoUsuario!=='' &&password_nuevoUsuario.length>5) { //Falta validarla para que contenga letras, numeros y una mayuscula
            setBooleano_feliz_password(true)
        }
        else{
            setBooleano_feliz_password(false)
            
        }

        if(confirm_password_nuevoUsuario!=='' && confirm_password_nuevoUsuario===password_nuevoUsuario){
            setBooleano_feliz_confirm_password(true)
        }
        else{
            setBooleano_feliz_confirm_password(false)
        }   
        funcionPublicarUsuario()

    }


    return (
        <Layout hasNavbar hasSidebar>
        {!isChiquito?
            <div className="crearUsuario">
               
                <div className="row">
                    <div className="h3 col-12 d-flex justify-content-center py-3 mb-4 ">
                        <div className="titulo crearUsuarioTitulo col-6 py-2 d-flex justify-content-center">
                            Crear Nuevo Usuario
                        </div>
                    </div>
                </div>
                
                <form >
                   
                    <div className="row">
                        <div className="col-md-6 col-sm-12">

                            <div className="fuera my-2 mb-4">
                                <div className="caja_contenedora_label_input form-group">
                                    <label style={label_ingresarNuevoProducto} className="col-md-4 col-sm-12 ps-2" for="exampleInputEmail1">Nombre</label>
                                    <input style={input_ingresarNuevoProducto} className="col-md-8 col-sm-12" type="text" name="" id="" placeholder="Ingresa tu nombre" onChange={(e) => setNombre_nuevoUsuario(e.target.value)} value={nombre_nuevoUsuario} />
                                </div>
                                {booleano_feliz_nombre===false?<div style={visible} className="invalido d-flex justify-content-end my-0">Nombre Invalido</div>
                                                             :<div style={no_visible} className="invalido d-flex justify-content-end my-0">Nombre Invalido</div>}
                            </div>
                            <div className="fuera my-2 mb-4">
                                <div className="form-group">
                                    <label style={label_ingresarNuevoProducto} className="col-md-4 col-sm-12  ps-2" for="exampleInputPassword1">Apellido</label>
                                    <input style={input_ingresarNuevoProducto} className="col-md-8 col-sm-12" type="text" name="" id="" placeholder="Ingresa tu apellido" onChange={(e) => setApellido_nuevoUsuario(e.target.value)} value={apellido_nuevoUsuario} />
                                </div>
                                {booleano_feliz_apellido===false?<div style={visible} className="invalido d-flex justify-content-end my-0">Apellido Invalido</div>
                                                                :<div style={no_visible} className="invalido d-flex justify-content-end my-0">Apellido Invalido</div>}
                            </div>

                            <div className="fuera my-2 mb-4">
                                <div className="form-group">
                                    <label style={label_ingresarNuevoProducto} className="col-md-4 col-sm-12  ps-2" for="exampleInputPassword1">Nombre de Usuario</label>
                                    <input style={input_ingresarNuevoProducto} className="col-md-8 col-sm-12" type="text" name="" id="" placeholder="Ingresa tu nombre de usuario" onChange={(e) => setUsername_nuevoUsuario(e.target.value)} value={username_nuevoUsuario} />
                                </div>
                                {booleano_feliz_username===false?<div style={visible} className="invalido d-flex justify-content-end my-0">Nombre de Usuario Invalido</div>
                                                                :<div style={no_visible} className="invalido d-flex justify-content-end my-0">Nombre de Usuario Invalido</div>}
                            </div>

                            <div className="fuera my-2 mb-4">
                                <div className="form-group">
                                    <label style={label_ingresarNuevoProducto} className="col-md-4 col-sm-12  ps-2" for="exampleInputPassword1">Contraseña</label>
                                    <input style={input_ingresarNuevoProducto} className="col-md-8 col-sm-12" type='password' name="" id="" placeholder="Ingresa tu contraseña" onChange={(e) => setPassword_nuevoUsuario(e.target.value)} value={password_nuevoUsuario} />
                                </div>
                                {booleano_feliz_password===false?<div style={visible} className="invalido d-flex justify-content-end my-0">Contraseña Invalida</div>
                                                                :<div style={no_visible} className="invalido d-flex justify-content-end my-0">Contraseña Invalida</div>}
                            </div>

                            <div className="fuera my-2 mb-4">
                                <div className="form-group">
                                    <label style={label_ingresarNuevoProducto} className="col-md-4 col-sm-12  ps-2" for="exampleInputPassword1">Confirmar Contraseña</label>
                                    <input style={input_ingresarNuevoProducto} className="col-md-8 col-sm-12" type='password' name="" id="" placeholder="Ingresa nuevamente tu contraseña" onChange={(e) => setConfirm_password_nuevoUsuario(e.target.value)} value={confirm_password_nuevoUsuario} />
                                </div>
                                {booleano_feliz_confirm_password===false?<div style={visible} className="invalido d-flex justify-content-end my-0">Contraseña Invalida</div>
                                                                       :<div style={no_visible} className="invalido d-flex justify-content-end my-0">Contraseña Invalida</div>}
                            </div>

                        </div>
                        <div className="col-md-5 col-sm-12 mt-2 mb-sm-3">
                            <div className="ingresar_foto mb-1 ps-2" style={overFlow}>
                                <label style={label_ingresarNuevoProducto} className=" col-lg-4 col-md-4 col-sm-12 mb-4" for="exampleInputPassword1">Imagen del Usuario </label>
                                <input style={input_ingresarFotografia} type="file" name="" id="" accept="image/*" onChange={processImage} />
                            </div>
                            <div className="contenedorcontenedor justify-content-center d-md-flex d-sm-none ">
                                {fileUrl ? <div style={contenedorfotografia} >
                                    <img style={imagen_Ingresar_Modificar_Producto} src={fileUrl} alt="imagen_nuevo_producto" />
                                </div> : ""}
                            </div>
                        </div>

                    </div>

                    
                    <div className="row">
                        <div className="botonera_AddProducto_O_RemoverProducto d-flex justify-content-center">
                            <button
                                onClick={(e) => FuncionValidarFormulario(e)}
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
            :
            <div className="crearUsuario">

                <div className="row">
                    
                    <div className="h3 col-12 d-flex justify-content-center py-3 mb-4 crearUsuarioTitulo">
                        <div className="titulo col-6 py-2 d-flex justify-content-center">
                            Crear Nuevo Usuario
                        </div>
                    </div>
                </div>
                
                <form >
                    
                    <div className="row">
                        <div className="col-12">

                            <div className="fuera my-2 mb-4">
                                <div className="caja_contenedora_label_input form-group">
                                    <label style={label_ingresarNuevoProducto} className="col-12 d-block" for="exampleInputEmail1">Nombre</label>
                                    <input style={input_ingresarNuevoProducto} className="col-12 d-block" type="text" name="" id="" placeholder="Ingresa tu nombre" onChange={(e) => setNombre_nuevoUsuario(e.target.value)} value={nombre_nuevoUsuario} />
                                </div>
                                {booleano_feliz_nombre===false?<div style={visible} className="invalido d-flex justify-content-end my-0">Nombre Invalido</div>
                                                             :<div style={no_visible} className="invalido d-flex justify-content-end my-0">Nombre Invalido</div>}
                            </div>

                            <div className="fuera my-2 mb-4">
                                <div className="form-group">
                                    <label style={label_ingresarNuevoProducto} className="col-12 d-block  ps-2" for="exampleInputPassword1">Apellido</label>
                                    <input style={input_ingresarNuevoProducto} className="col-12 d-block" type="text" name="" id="" placeholder="Ingresa tu apellido" onChange={(e) => setApellido_nuevoUsuario(e.target.value)} value={apellido_nuevoUsuario} />
                                </div>
                                {booleano_feliz_apellido===false?<div style={visible} className="invalido d-flex justify-content-end my-0">Apellido Invalido</div>
                                                                :<div style={no_visible} className="invalido d-flex justify-content-end my-0">Apellido Invalido</div>}
                            </div>

                            <div className="fuera my-2 mb-4">
                                <div className="form-group">
                                    <label style={label_ingresarNuevoProducto} className="col-12 d-block ps-2" for="exampleInputPassword1">Nombre de Usuario</label>
                                    <input style={input_ingresarNuevoProducto} className="col-12 d-block" type="text" name="" id="" placeholder="Ingresa tu nombre de usuario" onChange={(e) => setUsername_nuevoUsuario(e.target.value)} value={username_nuevoUsuario} />
                                </div>
                                {booleano_feliz_username===false?<div style={visible} className="invalido d-flex justify-content-end my-0">Nombre de Usuario Invalido</div>
                                                                :<div style={no_visible} className="invalido d-flex justify-content-end my-0">Nombre de Usuario Invalido</div>}
                            </div>

                            <div className="fuera my-2 mb-4">
                                <div className="form-group">
                                    <label style={label_ingresarNuevoProducto} className="col-12 d-block  ps-2" for="exampleInputPassword1">Contrasena</label>
                                    <input style={input_ingresarNuevoProducto} className="col-12 d-block" type='password' name="" id="" placeholder="Ingresa tu contrasena" onChange={(e) => setPassword_nuevoUsuario(e.target.value)} value={password_nuevoUsuario} />
                                </div>
                                {booleano_feliz_password===false?<div style={visible} className="invalido d-flex justify-content-end my-0">Contrasena Invalida</div>
                                                                :<div style={no_visible} className="invalido d-flex justify-content-end my-0">Contrasena Invalida</div>}
                            </div>

                            <div className="fuera my-2 mb-4">
                                <div className="form-group">
                                    <label style={label_ingresarNuevoProducto} className="col-12 d-block  ps-2" for="exampleInputPassword1">Confirmar Contrasena</label>
                                    <input style={input_ingresarNuevoProducto} className="col-12 d-block" type='password' name="" id="" placeholder="Ingresa nuevamente tu contrasena" onChange={(e) => setConfirm_password_nuevoUsuario(e.target.value)} value={confirm_password_nuevoUsuario} />
                                </div>
                                {booleano_feliz_confirm_password===false?<div style={visible} className="invalido d-flex justify-content-end my-0">Contrasena Invalida</div>
                                                                       :<div style={no_visible} className="invalido d-flex justify-content-end my-0">Contrasena Invalida</div>}
                            </div>

                        </div>
                        <div className="col-12">
                            <div className="ingresar_foto mb-1 ps-2" style={overFlow}>
                                <label style={label_ingresarNuevoProducto} className=" col-lg-4 col-md-4 col-sm-12 mb-4" for="exampleInputPassword1">Imagen del Usuario </label>
                                <input style={input_ingresarFotografia} type="file" name="" id="" accept="image/*" onChange={processImage} />
                            </div>
                            <div className="contenedorcontenedor justify-content-center d-md-flex d-sm-none ">
                                {fileUrl ? <div style={contenedorfotografia} >
                                    <img style={imagen_Ingresar_Modificar_Producto} src={fileUrl} alt="imagen_nuevo_producto"/>
                                </div> : ""}
                            </div>
                        </div>

                    </div>

                   
                    <div className="row">
                        <div className="botonera_AddProducto_O_RemoverProducto d-flex justify-content-center">
                            <button
                                onClick={(e) => FuncionValidarFormulario(e)}
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
        }
        </Layout>
    )
}

export default CrearUsuario
