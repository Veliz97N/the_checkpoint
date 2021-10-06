import React, { useState } from 'react'
import { AiOutlineDelete, AiFillDelete } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";
import Layout from '../Folder_Contenido_General/Layout'

const ModificarUsuario = (props) => {
    const titulo = { nuevo: "Ingresar Nuevo Usuario", modificar: "Modificar Usuario Existente" }
    const input_ingresarNuevoUsuario = {
        backgroundColor: '#57CC99',
        color: 'black',
        fontSize: '1.3rem'
    };
    const input_ingresarNuevoUsuario_Desactivado = {
        backgroundColor: '#d8d8d8',
        color: 'black',
        fontSize: '1.3rem'
    }
    const input_ingresarNuevoUsuario_Activado = {
        backgroundColor: '#57CC99',
        color: 'black',
        fontSize: '1.3rem'
    }

    const label_ingresarNuevoUsuario = {
        color: 'black',
        fontSize: '1.3rem',
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
    const contenedorfotografia = {
        width: '250px',
        height: '250px',
    }

    const imagen_Ingresar_Modificar_Usuario = {
        borderRadius: '50%',
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    }

    const [fileUrl, setFileUrl] = useState(null);

    function processImage(event) {
        const imageFile = event.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setFileUrl(imageUrl)
    }
    const handler_Submit = (event) => {
        event.preventDefault()
    }

    const overflow = {
        overflow: 'hidden'
    }

    const visible = {
        visibility: 'visible'
    }
    const no_visible = {
        visibility: 'hidden'
    }

    const [booleano_feliz_nombre, setBooleano_feliz_nombre] = useState(null)
    const [booleano_feliz_apellido, setBooleano_feliz_apellido] = useState(null)
    const [booleano_feliz_username, setBooleano_feliz_username] = useState(null)
    const [booleano_feliz_password, setBooleano_feliz_password] = useState(null)
    const [booleano_feliz_confirm_password, setBooleano_feliz_confirm_password] = useState(null)

    //const usuario = { nombre:"Juan Carlos", apellido: "Gonzalez",username: "juankaX", password: "juan123", permiso: "Administrador", tema: "Dark", Fuente: { tipo: "Arial", tamaño: 48, titulo_sidebar: true }, isFacebook: false, isGoogle: false }

    const FuncionValidarFormulario = (e) => {
        e.preventDefault();

        if (nombre_nuevoUsuario != '' && nombre_nuevoUsuario.length > 2) { //Falta que solo acepte letras y no numeros
            setBooleano_feliz_nombre(true)
        }
        else {
            setBooleano_feliz_nombre(false)
        }

        if (apellido_nuevoUsuario != '' && apellido_nuevoUsuario.length > 2) {
            setBooleano_feliz_apellido(true)
        }
        else {
            setBooleano_feliz_apellido(false)
        }

        if (username_nuevoUsuario != '' && username_nuevoUsuario.length > 3) {
            setBooleano_feliz_username(true)
        }
        else {
            setBooleano_feliz_username(false)
        }

        if (password_nuevoUsuario != '' && password_nuevoUsuario.length > 5) { //Falta validarla para que contenga letras, numeros y una mayuscula
            setBooleano_feliz_password(true)
        }
        else {
            setBooleano_feliz_password(false)

        }

        if (confirm_password_nuevoUsuario != '' && confirm_password_nuevoUsuario == password_nuevoUsuario) {
            setBooleano_feliz_confirm_password(true)
        }
        else {
            setBooleano_feliz_confirm_password(false)
        }

        if (booleano_feliz_nombre && booleano_feliz_apellido && booleano_feliz_username && booleano_feliz_password && booleano_feliz_confirm_password) {

            console.log("LGTM = Looks Good To Me")
            //ACA HAREMOS EL POST DEL NUEVO USUARIO PAPI
            console.log("Que haga el POST dice....")
        }

    }


    const [checkedTrue_nombre, setCheckedTrue_nombre] = useState()
    const handle_CheckedTrue_Nombre= (e) =>{
        
        setCheckedTrue_nombre(e.target.value)
    }

    const [checkedTrue_Apellido, setCheckedTrue_Apellido] = useState()
    const handler_CheckedTrue_Apellido= (e) =>{
        setCheckedTrue_Apellido(e.target.value)
    }

    const [checkedTrue_Username, setCheckedTrue_Username] = useState()
    const handler_CheckedTrue_Username= (e) =>{
        setCheckedTrue_Username(e.target.value)
    }

    const [checkedTrue_Password, setCheckedTrue_Password] = useState()
    const handler_CheckedTrue_Password= (e) =>{
        setCheckedTrue_Password(e.target.value)
    }

    const [checkedTrue_ConfirmarPassword, setCheckedTrue_ConfirmarPassword] = useState()
    const handler_CheckedTrue_ConfirmarPassword= (e) =>{
        setCheckedTrue_ConfirmarPassword(e.target.value)
    }




    const [nombre, setNombre] = useState('')
    const handler_Editar_Nombre=(e)=> {
        if(e.target.checked == true){
            setNombre(true)
        }
        else{
            setNombre(false)
        }
    }

    const [apellido, setApellido] = useState()
    const handle_Editar_Apellido= (e) =>{
        if(e.target.checked == true){
            setApellido(true)
        }
        else{
            setApellido(false)
        }
    }

    const [userName, setUserName] = useState()
    const handle_Editar_Username= (e) =>{
        if(e.target.checked == true){
            setUserName(true)
        }
        else{
            setUserName(false)
        }
    }

    const [password, setPassword] = useState()
    const handle_Editar_Password= (e) =>{
        if(e.target.checked == true){
            setPassword(true)
        }
        else{
            setPassword(false)
        }
    }

    const [confirmarPassword, setConfirmarPassword] = useState()
    const handle_Editar_ConfirmarPassword= (e) =>{
        if(e.target.checked == true){
            setConfirmarPassword(true)
        }
        else{
            setConfirmarPassword(false)
        }
        
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
                            <div className="fuera my-2 mb-4">
                                <div className="form-group">
                                    <label style={label_ingresarNuevoUsuario} className="col-md-4 col-sm-12 ps-2" for="exampleInputEmail1">
                                        <div className="row">


                                            <div className="col-8">
                                                Nombre

                                            </div>
                                            <div className="col-4">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={e=>handler_Editar_Nombre(e)}></input>

                                            </div>
                                        </div>

                                    </label>
                                    {nombre?<input disabled = {false} style={input_ingresarNuevoUsuario_Activado} className="       col-md-8 col-sm-12" type="text" name="" id="" placeholder="Ingresa tu nombre" onChange={e=> handle_CheckedTrue_Nombre(e)} value={checkedTrue_nombre}   />
                                            :<input disabled = {true} style={input_ingresarNuevoUsuario_Desactivado} className="       col-md-8 col-sm-12" type="text" name="" id="" placeholder="Ingresa tu nombre" value={props.user.nombre} />  }
                                
                                
                                
                                </div>
                                {booleano_feliz_nombre == false ? <div style={visible} className="invalido d-flex justify-content-end my-0">Nombre Invalido</div>
                                    : <div style={no_visible} className="invalido d-flex justify-content-end my-0">Nombre Invalido</div>}
                            </div>


                            <div className="fuera mb-4">
                                <div className="form-group">

                                    <label style={label_ingresarNuevoUsuario} className="col-md-4 col-sm-12" for="exampleInputPassword1">
                                        <div className="row">


                                            <div className="col-8">
                                                Apellido

                                            </div>
                                            <div className="col-4">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={e=>handle_Editar_Apellido(e)}></input>

                                            </div>
                                        </div>
                                    </label>


                                    {/* <input style={input_ingresarNuevoUsuario} className="col-md-8 col-sm-12" type="text" name="" id="" placeholder="Ingresa tu apellido" value={props.user.apellido} /> */}
                                    {apellido?<input disabled = {false} style={input_ingresarNuevoUsuario_Activado} className="col-md-8 col-sm-12" type="text"  placeholder="Ingresa tu apellido" onChange={e=> handler_CheckedTrue_Apellido(e)} value={checkedTrue_Apellido} />
                                            :<input disabled = {true} style={input_ingresarNuevoUsuario_Desactivado} className="col-md-8 col-sm-12" type="text" placeholder="Ingresa tu apellido" value={props.user.apellido} />  }
                                </div>
                                {booleano_feliz_apellido == false ? <div style={visible} className="invalido d-flex justify-content-end my-0">Apellido Invalido</div>
                                    : <div style={no_visible} className="invalido d-flex justify-content-end my-0">Apellido Invalido</div>}
                            </div>




                            <div className="fuera mb-4">
                                <div className="form-group">
                                    <label style={label_ingresarNuevoUsuario} className="col-md-4 col-sm-12  ps-2" for="exampleInputPassword1">
                                        <div className="row">
                                            <div className="col-8">
                                                Nombre de Usuario

                                            </div>
                                            <div className="col-4">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={e=>handle_Editar_Username(e)}></input>

                                            </div>
                                        </div>

                                    </label>



                                    {userName?<input disabled = {false} style={input_ingresarNuevoUsuario_Activado} className="col-md-8 col-sm-12" type="text"  placeholder="Ingresa tu usuario" onChange={e=> handler_CheckedTrue_Username(e)} value={checkedTrue_Username} />
                                            :<input disabled = {true} style={input_ingresarNuevoUsuario_Desactivado} className="col-md-8 col-sm-12" type="text" placeholder="Ingresa tu usuario" value={props.user.username} />  }
                                </div>
                                {booleano_feliz_username == false ? <div style={visible} className="invalido d-flex justify-content-end my-0">Nombre de Usuario Invalido</div>
                                    : <div style={no_visible} className="invalido d-flex justify-content-end my-0">Nombre de Usuario Invalido</div>}
                            </div>




                            <div className="fuera mb-4">
                                <div className="form-group ">
                                    <label style={label_ingresarNuevoUsuario} className="col-md-4 col-sm-12  ps-2" for="exampleInputPassword1">
                                        <div className="row">
                                            <div className="col-8">
                                                Contraseña

                                            </div>

                                            <div className="col-4">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={e=>handle_Editar_Password(e)}></input>

                                            </div>
                                        </div>
                                    </label>

                                    
                                    {password?<input disabled = {false} style={input_ingresarNuevoUsuario_Activado} className="col-md-8 col-sm-12" type="text"  placeholder="Ingresa tu contraseña" onChange={e=> handler_CheckedTrue_Password(e)} value={checkedTrue_Password} />
                                            :<input disabled = {true} style={input_ingresarNuevoUsuario_Desactivado} className="col-md-8 col-sm-12" type="text" placeholder="Ingresa tu contraseña" value={props.user.password}/> }
                                </div>
                                {booleano_feliz_password == false ? <div style={visible} className="invalido d-flex justify-content-end my-0">Contrasena Invalida</div>
                                    : <div style={no_visible} className="invalido d-flex justify-content-end my-0">Contrasena Invalida</div>}

                            </div>

                            <div className="fuera my-2 mb-4">
                                <div className="form-group">
                                    <label style={label_ingresarNuevoUsuario} className="col-md-4 col-sm-12" for="exampleInputPassword1">                                      
                                                Confirmar Contraseña                                                            
                                    </label>

                                    {password?<input disabled = {false} style={input_ingresarNuevoUsuario_Activado} className="col-md-8 col-sm-12" type="text"  placeholder="Ingresa tu contraseña" onChange={e=> handler_CheckedTrue_ConfirmarPassword(e)} value={checkedTrue_ConfirmarPassword} />
                                            :<input disabled = {true} style={input_ingresarNuevoUsuario_Desactivado} className="col-md-8 col-sm-12" type="text" placeholder="Ingresa tu contraseña" value={props.user.password}/> }
                               
                                </div>
                                {booleano_feliz_confirm_password == false ? <div style={visible} className="invalido d-flex justify-content-end my-0">Contrasena Invalida</div>
                                    : <div style={no_visible} className="invalido d-flex justify-content-end my-0">Contrasena Invalida</div>}
                            </div>

                        </div>

                        <div className="col-md-5 col-sm-12 mt-2">
                            <div className="ingresar_foto mb-1 ps-2">
                                <label style={label_ingresarNuevoUsuario} className=" col-lg-4 col-md-4 col-sm-12 mb-4" for="exampleInputPassword1">Imagen del Usuario </label>
                                <input style={input_ingresarFotografia} className="ingresarArchivo" type="file" name="" id="" accept="image/*" onChange={processImage} />
                            </div>
                            <div className="contenedorcontenedor justify-content-center d-md-flex d-sm-none ">
                                {fileUrl ? <div style={contenedorfotografia} >
                                    <img style={imagen_Ingresar_Modificar_Usuario} src={fileUrl} alt="" />
                                </div> : ""}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="botonera_AddProducto_O_RemoverProducto d-flex justify-content-center">
                            <button
                                onClick={e => handler_Submit(e)}
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
