import React, { useContext, useState } from "react";


import Layout from "../Folder_Contenido_General/Layout";

import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import useLocalStorage from "../useLocalStorage";
import UserContext from "../UserContext/UserContext";

const ModificarUsuario = (props) => {
  const {role, users,toggleSetUser} = useContext(UserContext)
  const [users_Recargado, setUsers_Recargado] = useState(users)

  const [nameUsuarioActivo,setNameUsuarioActivo]=useLocalStorage('name',"")
  const isChiquito = useMediaQuery({
    query: "(max-width: 577px)",
  });
  const [email_nuevoUsuario, setEmail_nuevoUsuario] = useState("")
  const [rol_nuevoUsuario, setRol_nuevoUsuario] = useState(props.user.role_id)
  const funcionRecogerRol = (parametro) => {
    setRol_nuevoUsuario(parametro);
    console.log(parametro);
  };

  const input_ingresarNuevoUsuario_Desactivado = {
    backgroundColor: "#0f2b4e",
    color: "white",
    fontSize: "1.3rem",
  };
  const input_ingresarNuevoUsuario_Activado = {
    backgroundColor: "#667ea0",
    color: "black",
    fontSize: "1.3rem",
  };

  const label_ingresarNuevoUsuario = {
    color: "white",
    fontSize: "1.3rem"
  };

  const input_ingresarFotografia = {
    //Esto no funciona papiiiii
    backgroundColor: "#667ea0",
    color: "black",
    fontSize: "1.3rem",
    borderRadius: "35px",
    transition: "all ease .5s",
    ":hover": {
      backgroundColor: "yellow",
      color: "red",
    },
  };
  const contenedorfotografia = {
    width: "250px",
    height: "250px",
  };

  const imagen_Ingresar_Modificar_Usuario = {
    borderRadius: "50%",
    width: "100%",
    height: "100%",
    objectFit: "contain",
  };

  const [fileUrl, setFileUrl] = useState(null);

  function processImage(event) {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setFileUrl(imageUrl);
  }

  const overFlow = {
    overflow: "hidden",
  };

  const visible = {
    visibility: "visible",
  };
  const no_visible = {
    visibility: "hidden",
  };

  const [booleano_feliz_nombre, setBooleano_feliz_nombre] = useState(null);
  const [booleano_feliz_apellido, setBooleano_feliz_apellido] = useState(null);
  const [booleano_feliz_username, setBooleano_feliz_username] = useState(null);
  const [booleano_feliz_password, setBooleano_feliz_password] = useState(null);
  const [booleano_feliz_confirm_password, setBooleano_feliz_confirm_password] =useState(null);
  const [booleano_feliz_rol, setBooleano_feliz_rol] = useState(null)
  const [booleano_feliz_email, setBooleano_feliz_email] = useState(null)

    async function funcionModificarUsuario (usuarioModificado) { 
      if (
        usuarioModificado.name != "" &&
        (usuarioModificado.name).length > 2 &&
        usuarioModificado.last_name != "" &&
        usuarioModificado.last_name.length > 2 &&
        usuarioModificado.username != "" &&
        usuarioModificado.username.length > 3 &&
        usuarioModificado.password!= "" &&
        usuarioModificado.password.length > 2 &&
        usuarioModificado.confirmar_password != "" &&
        usuarioModificado.confirmar_password === usuarioModificado.password &&
        usuarioModificado.email!=="" &&
        usuarioModificado.email.length>=6 &&
        usuarioModificado.email.includes("@")
      ){             

              let existe = {username: false, email: false}
              for(let x=0; x< users_Recargado.length; x++){
                if(usuarioModificado.email === users_Recargado[x].email && usuarioModificado.id !==users_Recargado[x].id){
                  existe.email=true
                }
                if(usuarioModificado.username === users_Recargado[x].username && usuarioModificado.id !==users_Recargado[x].id){
                  existe.username= true
                }
              }
              if(existe.username ===false && existe.email === false){
                const requestOptions = { //TIENE PROBLEMAS DE CORS NO SE QUE VERGA PERO FUNCIONA
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(usuarioModificado),
                  };
                const urlUsuarios = "https://3000-gray-tiglon-p4zyj6wv.ws-us17.gitpod.io/users/"+usuarioModificado.id
                console.log(urlUsuarios)
                fetch(urlUsuarios, requestOptions)
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((err)=> console.log(err))   
                toggleSetUser(usuarioModificado)          
              }
              else{
                alert("Usuario o Correo ya existen en la base de datos")
              }

              const urlUsuarios = "https://3000-gray-tiglon-p4zyj6wv.ws-us17.gitpod.io/users"
              const response = await fetch(urlUsuarios)
              const dataUsers = await response.json()
              setUsers_Recargado(dataUsers)
              
      }
  }
  

  const FuncionValidarFormulario = (e) => {

    let usuarioModificado = { name: props.user.name, last_name: props.user.last_name, username: props.user.username, password: props.user.password, confirmar_password:props.user.password, role_id: props.user.role_id, email:props.user.email, id:props.user.id}
    e.preventDefault();
    
    if (name === true) {
      if (checkedTrue_nombre !== "" && checkedTrue_nombre.length > 2) {
        
        //Falta que solo acepte letras y no numeros
        setBooleano_feliz_nombre(true);
        usuarioModificado.name = checkedTrue_nombre
      } else {
        setBooleano_feliz_nombre(false);
        usuarioModificado.name = props.user.name
        console.log(name);
      }
    }
   
    if (last_name === true) {
      if (checkedTrue_Apellido != "" && checkedTrue_Apellido.length > 2) {
        setBooleano_feliz_apellido(true);
        usuarioModificado.last_name = checkedTrue_Apellido
      } else {
        setBooleano_feliz_apellido(false);
        usuarioModificado.last_name = props.user.last_name
      }
    }

    if (email === true) { //😀 arreglar el email y todas las demas para que pasen de false a true y integrar el checkedTrueEmail

      if (checkedTrue_Email != "" && checkedTrue_Email.length > 3 && checkedTrue_Email.includes("@") ) {
        setBooleano_feliz_email(true);
        usuarioModificado.email = checkedTrue_Email
      } 
      else {
        setBooleano_feliz_email(false);
        usuarioModificado.email = props.user.username //ACA CAMBIARLO
      }
    }

    if (userName === true) {
      if (checkedTrue_Username != "" && checkedTrue_Username.length > 3) {
        setBooleano_feliz_username(true);
        usuarioModificado.username = checkedTrue_Username
      } 
      else {
        setBooleano_feliz_username(false);
        usuarioModificado.username = props.user.username
      }
    }
    if (password === true) {
      if (checkedTrue_Password === "") {
        setBooleano_feliz_password(false);
        usuarioModificado.password = props.user.password
        //Falta validarla para que contenga letras, numeros y una mayuscula
      } else if (checkedTrue_Password != "") {
        if (checkedTrue_Password.length > 5) {
          setBooleano_feliz_password(true);
          usuarioModificado.password = checkedTrue_Password
        } else {
          setBooleano_feliz_password(false)
          usuarioModificado.password = props.user.password
        }
      }
      if (
        checkedTrue_ConfirmarPassword != "" &&
        checkedTrue_ConfirmarPassword == checkedTrue_Password
      ) {
        setBooleano_feliz_confirm_password(true);
        usuarioModificado.confirmar_password = checkedTrue_ConfirmarPassword
      } else {
        setBooleano_feliz_confirm_password(false);
        usuarioModificado.confirmar_password= props.user.password
      }
    }
    if(rol===true){
      console.log(rol_nuevoUsuario)
      if(rol_nuevoUsuario===0){
        console.log("INGRESE AL ROLE")
        usuarioModificado.role_id="1"
        console.log(usuarioModificado.role_id)
      }
      else if(rol_nuevoUsuario===1){
        console.log("INGRESE AL ROLE")
        usuarioModificado.role_id="2"
        console.log(usuarioModificado.role_id)
      }
    }
    
    
    funcionModificarUsuario(usuarioModificado)
  };

  const [checkedTrue_nombre, setCheckedTrue_nombre] = useState("");
  const handle_CheckedTrue_Nombre = (e) => {
    setCheckedTrue_nombre(e.target.value);
  };

  const [checkedTrue_Apellido, setCheckedTrue_Apellido] = useState("");
  const handler_CheckedTrue_Apellido = (e) => {
    setCheckedTrue_Apellido(e.target.value);
  };

  const [checkedTrue_Username, setCheckedTrue_Username] = useState("");
  const handler_CheckedTrue_Username = (e) => {
    setCheckedTrue_Username(e.target.value);
  };

  const [checkedTrue_Password, setCheckedTrue_Password] = useState("");
  const handler_CheckedTrue_Password = (e) => {
    setCheckedTrue_Password(e.target.value);
  };

  const [checkedTrue_ConfirmarPassword, setCheckedTrue_ConfirmarPassword] =useState();
  const handler_CheckedTrue_ConfirmarPassword = (e) => {
    setCheckedTrue_ConfirmarPassword(e.target.value);
  };

  const [checkedTrue_Email, setCheckedTrue_Email] =useState("");
  const handler_CheckedTrue_Email = (e) => {
    setCheckedTrue_Email(e.target.value);
  };
  const [checkedTrue_Role, setCheckedTrue_Role] =useState("");
  const handler_CheckedTrue_Role = (e) => {
    setCheckedTrue_Role(e.target.value);
  };

  const [name, setNombre] = useState();
  const handler_Editar_Nombre = (e) => {
    if (e.target.checked == true) {
      setNombre(true);
      console.log("nombre true")
    } else {
      setNombre(false);
      console.log("nombre false")
    }
  };
  const [rol, setRol] = useState()
  const handler_Editar_Rol= (e) =>{
    if (e.target.checked == true) {
      setRol(true);
    } else {
      setRol(false);
    }
  }
  const [email,setEmaill] = useState()
  const handler_Editar_Email = (e) => {
    if (e.target.checked == true) {
      setEmaill(true);
    } else {
      setEmaill(false);
    }
  };
  

  const [last_name, setApellido] = useState();
  const handle_Editar_Apellido = (e) => {
    if (e.target.checked == true) {
      setApellido(true);
    } else {
      setApellido(false);
    }
  };

  const [userName, setUserName] = useState();
  const handle_Editar_Username = (e) => {
    if (e.target.checked == true) {
      setUserName(true);
    } else {
      setUserName(false);
    }
  };

  const [password, setPassword] = useState();
  const handle_Editar_Password = (e) => {
    if (e.target.checked == true) {
      setPassword(true);
    } else {
      setPassword(false);
    }
  };


  const cancelar_Usuario = (e) => {
    setNombre(false)
    setApellido(false)
    setUserName(false)
    setPassword(false)
    setCheckedTrue_nombre("")
    setCheckedTrue_Apellido("")
    setCheckedTrue_Username("")
    setCheckedTrue_Password("")
    setCheckedTrue_ConfirmarPassword("")
  }

  const borde_titulo = {
    background: "#667ea0",
    borderRadius:"25px"
  }
  let disabled= "disabled"
  let enabled = !disabled

  return (
    <Layout hasNavbar hasSidebar>
      {!isChiquito ? (
        <div className="crearUsuario">
          <div className="alo">
            <div className="h3 col-12 d-flex justify-content-center py-3 mb-4">
              <div
                className="titulo col-6 col-sm-6 py-2 d-flex justify-content-center"
                style={borde_titulo}
              >
                Ver Perfil de Usuario
              </div>
            </div>
          </div>
          <form>
            <div className="alo d-flex">
              <div className="col-md-7 col-sm-12">
                <div className="fuera my-2 mb-4">
                  <div className="form-group">
                    <label
                      style={label_ingresarNuevoUsuario}
                      className="col-md-4 col-sm-12 ps-2"
                      for="exampleInputEmail1"
                    >
                      <div className="row">
                        <div className="col-8">Nombre</div>
                        <div className="col-4">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            onClick={(e) => handler_Editar_Nombre(e)}
                          ></input>
                        </div>
                      </div>
                    </label>
                    {name ? (
                      <input
                        disabled={false}
                        style={input_ingresarNuevoUsuario_Activado}
                        className="col-md-8 col-sm-12"
                        type="text"
                        name=""
                        id=""
                        placeholder="Ingresa tu nombre"
                        onChange={(e) => handle_CheckedTrue_Nombre(e)}
                        value={checkedTrue_nombre}
                      />
                    ) : (
                      <input
                        disabled={true}
                        style={input_ingresarNuevoUsuario_Desactivado}
                        className="col-md-8 col-sm-12"
                        type="text"
                        name=""
                        id=""
                        placeholder="Ingresa tu nombre"
                        value={props.user.name}
                      />
                    )}
                  </div>
                  {booleano_feliz_nombre == false ? (
                    <div
                      style={visible}
                      className="invalido d-flex justify-content-end my-0"
                    >
                      Nombre Invalido
                    </div>
                  ) : (
                    <div
                      style={no_visible}
                      className="invalido d-flex justify-content-end my-0"
                    >
                      Nombre Invalido
                    </div>
                  )}
                </div>

                <div className="fuera mb-4">
                  <div className="form-group">
                    <label
                      style={label_ingresarNuevoUsuario}
                      className="col-md-4 col-sm-12"
                      for="exampleInputPassword1"
                    >
                      <div className="row">
                        <div className="col-8">Apellido</div>
                        <div className="col-4">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            onClick={(e) => handle_Editar_Apellido(e)}
                          ></input>
                        </div>
                      </div>
                    </label>
                    {last_name ? (
                      <input
                        disabled={false}
                        style={input_ingresarNuevoUsuario_Activado}
                        className="col-md-8 col-sm-12"
                        type="text"
                        placeholder="Ingresa tu last_name"
                        onChange={(e) => handler_CheckedTrue_Apellido(e)}
                        value={checkedTrue_Apellido}
                      />
                    ) : (
                      <input
                        disabled={true}
                        style={input_ingresarNuevoUsuario_Desactivado}
                        className="col-md-8 col-sm-12"
                        type="text"
                        placeholder="Ingresa tu last_name"
                        value={props.user.last_name}
                      />
                    )}
                  </div>
                  {booleano_feliz_apellido == false ? (
                    <div
                      style={visible}
                      className="invalido d-flex justify-content-end my-0"
                    >
                      Apellido Invalido
                    </div>
                  ) : (
                    <div
                      style={no_visible}
                      className="invalido d-flex justify-content-end my-0"
                    >
                      Apellido Invalido
                    </div>
                  )}
                </div>

                <div className="fuera mb-4">
                  <div className="form-group">
                    <label
                      style={label_ingresarNuevoUsuario}
                      className="col-md-4 col-sm-12  ps-2"
                      for="exampleInputPassword1"
                    >
                      <div className="row">
                        <div className="col-8">Nombre de Usuario</div>
                        <div className="col-4">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            onClick={(e) => handle_Editar_Username(e)}
                          ></input>
                        </div>
                      </div>
                    </label>

                    {userName ? (
                      <input
                        disabled={false}
                        style={input_ingresarNuevoUsuario_Activado}
                        className="col-md-8 col-sm-12"
                        type="text"
                        placeholder="Ingresa tu usuario"
                        onChange={(e) => handler_CheckedTrue_Username(e)}
                        value={checkedTrue_Username}
                      />
                    ) : (
                      <input
                        disabled={true}
                        style={input_ingresarNuevoUsuario_Desactivado}
                        className="col-md-8 col-sm-12"
                        type="text"
                        placeholder="Ingresa tu usuario"
                        value={props.user.username}
                      />
                    )}
                  </div>
                  {booleano_feliz_username == false ? (
                    <div
                      style={visible}
                      className="invalido d-flex justify-content-end my-0"
                    >
                      Nombre de Usuario Invalido
                    </div>
                  ) : (
                    <div
                      style={no_visible}
                      className="invalido d-flex justify-content-end my-0"
                    >
                      Nombre de Usuario Invalido
                    </div>
                  )}
                </div>

                <div className="fuera mb-4">
                  <div className="form-group ">
                    <label
                      style={label_ingresarNuevoUsuario}
                      className="col-md-4 col-sm-12  ps-2"
                      for="exampleInputPassword1"
                    >
                      <div className="row">
                        <div className="col-8">Contraseña</div>

                        <div className="col-4">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            onClick={(e) => handle_Editar_Password(e)}
                          ></input>
                        </div>
                      </div>
                    </label>

                    {password ? (
                      <input
                        disabled={false}
                        style={input_ingresarNuevoUsuario_Activado}
                        className="col-md-8 col-sm-12"
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        onChange={(e) => handler_CheckedTrue_Password(e)}
                        value={checkedTrue_Password}
                      />
                    ) : (
                      <input
                        disabled={true}
                        style={input_ingresarNuevoUsuario_Desactivado}
                        className="col-md-8 col-sm-12"
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        value={props.user.password}
                      />
                    )}
                  </div>
                  {booleano_feliz_password == false ? (
                    <div
                      style={visible}
                      className="invalido d-flex justify-content-end my-0"
                    >
                      Contraseña Invalida
                    </div>
                  ) : (
                    <div
                      style={no_visible}
                      className="invalido d-flex justify-content-end my-0"
                    >
                      Contraseña Invalida
                    </div>
                  )}
                </div>

                <div className="fuera my-2 mb-4">
                  <div className="form-group">
                    <label
                      style={label_ingresarNuevoUsuario}
                      className="col-md-4 col-sm-12"
                      for="exampleInputPassword1"
                    >
                      Confirmar Contraseña
                    </label>

                    {password ? (
                      <input
                        disabled={false}
                        style={input_ingresarNuevoUsuario_Activado}
                        className="col-md-8 col-sm-12"
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        onChange={(e) =>
                          handler_CheckedTrue_ConfirmarPassword(e)
                        }
                        value={checkedTrue_ConfirmarPassword}
                      />
                    ) : (
                      <input
                        disabled={true}
                        style={input_ingresarNuevoUsuario_Desactivado}
                        className="col-md-8 col-sm-12"
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        value={props.user.password}
                      />
                    )}
                  </div>
                  {booleano_feliz_confirm_password == false ? (
                    <div
                      style={visible}
                      className="invalido d-flex justify-content-end my-0"
                    >
                      Contraseña Invalida
                    </div>
                  ) : (
                    <div
                      style={no_visible}
                      className="invalido d-flex justify-content-end my-0"
                    >
                      Contraseña Invalida
                    </div>
                  )}
                </div>
              </div>

              <div className="col-md-5 col-sm-12 mt-2 mb-sm-4 ps-3 pe-3">
                <div className="ingresar_foto mb-1 ps-2" style={overFlow}>
                  <label
                    style={label_ingresarNuevoUsuario}
                    className=" col-lg-4 col-md-4 col-sm-12 mb-4"
                    for="exampleInputPassword1"
                  >
                    Imagen del Usuario{" "}
                  </label>
                  <input
                    style={input_ingresarFotografia}
                    className="ingresarArchivo"
                    type="file"
                    name=""
                    id=""
                    accept="image/*"
                    onChange={processImage}
                  />
                </div>
                
                <div className="wrap_rol_email">

                <div className="fuera my-2 mb-4">
                  
                  <div className="form-group d-flex">
                  <label
                      style={label_ingresarNuevoUsuario}
                      className="col-md-4 col-sm-12  ps-2"
                      for="exampleInputPassword1"
                    >
                      <div className="row">
                        <div className="col-8">Rol</div>

                        <div className="col-4">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            
                            id="flexCheckDefault"
                            onClick={(e) => handler_Editar_Rol(e)}
                          ></input>
                        </div>
                      </div>
                    </label>
                                        

                    <button
                      className={"btn-roles-disponibles col-md-8 col-sm-12 dropdown-toggle d-md-flex"}
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      disabled = {!rol?disabled:enabled}
                      style={!rol?input_ingresarNuevoUsuario_Desactivado:input_ingresarNuevoUsuario_Activado}
                    >
                      <div className="datos_usuario me-4 d-flex flex-column my-auto py-1">
                        <div className="nombre_usuario mx-auto">
                          {!rol?(parseInt(props.user.role_id)===1?"Administrador":"Vendedor"):(rol_nuevoUsuario===1? "Vendedor":"Administrador")}
                        </div>
                      </div>
                    </button>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      {role.map((elemento, key) => (
                        <li
                          className="dropdown-item"
                          key={key}
                          value={key}
                          onClick={(e) => funcionRecogerRol(e.target.value)}
                        >
                          {elemento.nombre_rol}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {booleano_feliz_rol === false ? (
                    <div
                      style={visible}
                      className="invalido d-flex justify-content-end my-0"
                    >
                      Rol Invalido
                    </div>
                  ) : (
                    <div
                      style={no_visible}
                      className="invalido d-flex justify-content-end my-0"
                    >
                      Rol Invalido
                    </div>
                  )}
                </div>







                <div className="fuera mb-4">
                  <div className="form-group ">
                    <label
                      style={label_ingresarNuevoUsuario}
                      className="col-md-4 col-sm-12  ps-2"
                      for="exampleInputPassword1"
                    >
                      <div className="row">
                        <div className="col-8">Email</div>

                        <div className="col-4">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            onClick={(e) => handler_Editar_Email(e)}
                          ></input>
                        </div>
                      </div>
                    </label>

                    {email ? (
                      <input
                        disabled={false}
                        style={input_ingresarNuevoUsuario_Activado}
                        className="col-md-8 col-sm-12"
                        type="text"
                        placeholder="Ingresa tu Email"
                        onChange={(e) => handler_CheckedTrue_Email(e)}
                        value={checkedTrue_Email}
                      />
                    ) : (
                      <input
                        disabled={true}
                        style={input_ingresarNuevoUsuario_Desactivado}
                        className="col-md-8 col-sm-12"
                        type="text"
                        placeholder="Ingresa tu Email"
                        value={props.user.email}
                      />
                    )}
                  </div>
                  {booleano_feliz_email == false ? (
                    <div
                      style={visible}
                      className="invalido d-flex justify-content-end my-0"
                    >
                      Email Invalido
                    </div>
                  ) : (
                    <div
                      style={no_visible}
                      className="invalido d-flex justify-content-end my-0"
                    >
                      Email Invalido
                    </div>
                  )}
                </div>
  

                </div>
              </div>
            </div>

            <div className="alo">
              <div className="botonera_AddProducto_O_RemoverProducto d-flex justify-content-center">
                <button
                  onClick={(e) => FuncionValidarFormulario(e)}
                  type="submit"
                  class="btn btn-primary mx-5"
                >
                  Modificar Usuario
                </button>
                <button
                  type="reset"
                  onClick={(e) => cancelar_Usuario(e)}
                  class="btn btn-danger mx-5"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="crearUsuario">
          <div className="row">
            <div className="h3 col-12 d-flex justify-content-center py-3 mb-4">
              <div
                className="titulo col-8 py-2 d-flex justify-content-center "
                style={borde_titulo}
              >
                Ver Perfil de Usuario
              </div>
            </div>
          </div>
          <form>
            <div className="row">
              <div className="col-12">
                <div className="fuera my-2 mb-4">
                  <div className="form-group">
                    <label
                      style={label_ingresarNuevoUsuario}
                      className="col-12 d-flex justify-content-between"
                      for="exampleInputEmail1"
                    >
                      <div className="row">
                        <div className="col-8 ">name</div>
                        <div className="col-4">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            onClick={(e) => handler_Editar_Nombre(e)}
                          ></input>
                        </div>
                      </div>
                    </label>
                    {name ? (
                      <input
                        disabled={false}
                        style={input_ingresarNuevoUsuario_Activado}
                        className="col-12 d-block"
                        type="text"
                        name=""
                        id=""
                        placeholder="Ingresa tu name"
                        onChange={(e) => handle_CheckedTrue_Nombre(e)}
                        value={checkedTrue_nombre}
                      />
                    ) : (
                      <input
                        disabled={true}
                        style={input_ingresarNuevoUsuario_Desactivado}
                        className="col-12 d-block"
                        type="text"
                        name=""
                        id=""
                        placeholder="Ingresa tu name"
                        value={props.user.name}
                      />
                    )}
                  </div>
                  {booleano_feliz_nombre == false ? (
                    <div
                      style={visible}
                      className="invalido d-flex justify-content-end my-0"
                    >
                      Nombre Invalido
                    </div>
                  ) : (
                    <div
                      style={no_visible}
                      className="invalido d-flex justify-content-end my-0"
                    >
                      Nombre Invalido
                    </div>
                  )}
                </div>

                <div className="fuera mb-4">
                  <div className="form-group">
                    <label
                      style={label_ingresarNuevoUsuario}
                      className="col-12 d-flex justify-content-between"
                      for="exampleInputPassword1"
                    >
                      <div className="row">
                        <div className="col-8">Apellido</div>
                        <div className="col-4">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            onClick={(e) => handle_Editar_Apellido(e)}
                          ></input>
                        </div>
                      </div>
                    </label>
                    {last_name ? (
                      <input
                        disabled={false}
                        style={input_ingresarNuevoUsuario_Activado}
                        className="col-12"
                        type="text"
                        placeholder="Ingresa tu last_name"
                        onChange={(e) => handler_CheckedTrue_Apellido(e)}
                        value={checkedTrue_Apellido}
                      />
                    ) : (
                      <input
                        disabled={true}
                        style={input_ingresarNuevoUsuario_Desactivado}
                        className="col-12"
                        type="text"
                        placeholder="Ingresa tu last_name"
                        value={props.user.last_name}
                      />
                    )}
                  </div>
                  {booleano_feliz_apellido == false ? (
                    <div
                      style={visible}
                      className="invalido d-flex justify-content-end my-0"
                    >
                      Apellido Invalido
                    </div>
                  ) : (
                    <div
                      style={no_visible}
                      className="invalido d-flex justify-content-end my-0"
                    >
                      Apellido Invalido
                    </div>
                  )}
                </div>

                <div className="fuera mb-4">
                  <div className="form-group">
                    <label
                      style={label_ingresarNuevoUsuario}
                      className="col-12 d-flex justify-content-between"
                      for="exampleInputPassword1"
                    >
                      <div className="row">
                        <div className="col-10">Nombre de Usuario</div>
                        <div className="col-1">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            onClick={(e) => handle_Editar_Username(e)}
                          ></input>
                        </div>
                      </div>
                    </label>

                    {userName ? (
                      <input
                        disabled={false}
                        style={input_ingresarNuevoUsuario_Activado}
                        className="col-12"
                        type="text"
                        placeholder="Ingresa tu usuario"
                        onChange={(e) => handler_CheckedTrue_Username(e)}
                        value={checkedTrue_Username}
                      />
                    ) : (
                      <input
                        disabled={true}
                        style={input_ingresarNuevoUsuario_Desactivado}
                        className="col-12"
                        type="text"
                        placeholder="Ingresa tu usuario"
                        value={props.user.username}
                      />
                    )}
                  </div>
                  {booleano_feliz_username == false ? (
                    <div
                      style={visible}
                      className="invalido d-flex justify-content-end my-0"
                    >
                      Nombre de Usuario Invalido
                    </div>
                  ) : (
                    <div
                      style={no_visible}
                      className="invalido d-flex justify-content-end my-0"
                    >
                      Nombre de Usuario Invalido
                    </div>
                  )}
                </div>

                <div className="fuera mb-4">
                  <div className="form-group ">
                    <label
                      style={label_ingresarNuevoUsuario}
                      className="col-12 d-flex justify-content-between"
                      for="exampleInputPassword1"
                    >
                      <div className="row">
                        <div className="col-8">Contraseña</div>

                        <div className="col-4">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            onClick={(e) => handle_Editar_Password(e)}
                          ></input>
                        </div>
                      </div>
                    </label>

                    {password ? (
                      <input
                        disabled={false}
                        style={input_ingresarNuevoUsuario_Activado}
                        className="col-12"
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        onChange={(e) => handler_CheckedTrue_Password(e)}
                        value={checkedTrue_Password}
                      />
                    ) : (
                      <input
                        disabled={true}
                        style={input_ingresarNuevoUsuario_Desactivado}
                        className="col-12"
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        value={props.user.password}
                      />
                    )}
                  </div>
                  {booleano_feliz_password == false ? (
                    <div
                      style={visible}
                      className="invalido d-flex justify-content-end my-0"
                    >
                      Contraseña Invalida
                    </div>
                  ) : (
                    <div
                      style={no_visible}
                      className="invalido d-flex justify-content-end my-0"
                    >
                      Contraseña Invalida
                    </div>
                  )}
                </div>

                <div className="fuera my-2 mb-4">
                  <div className="form-group">
                    <label
                      style={label_ingresarNuevoUsuario}
                      className="col-12 d-flex justify-content-between"
                      for="exampleInputPassword1"
                    >
                      Confirmar Contraseña
                    </label>

                    {password ? (
                      <input
                        disabled={false}
                        style={input_ingresarNuevoUsuario_Activado}
                        className="col-12"
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        onChange={(e) =>
                          handler_CheckedTrue_ConfirmarPassword(e)
                        }
                        value={checkedTrue_ConfirmarPassword}
                      />
                    ) : (
                      <input
                        disabled={true}
                        style={input_ingresarNuevoUsuario_Desactivado}
                        className="col-12"
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        value={props.user.password}
                      />
                    )}
                  </div>
                  {booleano_feliz_confirm_password == false ? (
                    <div
                      style={visible}
                      className="invalido d-flex justify-content-end my-0"
                    >
                      Contraseña Invalida
                    </div>
                  ) : (
                    <div
                      style={no_visible}
                      className="invalido d-flex justify-content-end my-0"
                    >
                      Contraseña Invalida
                    </div>
                  )}
                </div>
              </div>

              <div className="col-md-5 col-sm-12 mt-2 mb-sm-4">
                <div className="ingresar_foto mb-1 ps-2" style={overFlow}>
                  <label
                    style={label_ingresarNuevoUsuario}
                    className=" col-lg-4 col-md-4 col-sm-12 mb-4"
                    for="exampleInputPassword1"
                  >
                    Imagen del Usuario{" "}
                  </label>
                  <input
                    style={input_ingresarFotografia}
                    className="ingresarArchivo"
                    type="file"
                    name=""
                    id=""
                    accept="image/*"
                    onChange={processImage}
                  />
                </div>

                <div className="wrap_rol_email">
                  <div className="fuera my-2 mb-4">
                    <div className="form-group d-flex">
                      <label
                        style={label_ingresarNuevoUsuario}
                        className="col-md-4 col-sm-12  ps-2"
                        for="exampleInputPassword1"
                      >
                        Rol
                      </label>

                      <button
                        className="btn-roles-disponibles col-md-8 col-sm-12 dropdown-toggle d-md-flex"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <div className="datos_usuario me-4 d-flex flex-column my-auto py-1">
                          <div className="nombre_usuario mx-auto">
                            Ver roles disponibles:{" "}
                          </div>
                        </div>
                      </button>

                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        {role.map((elemento, key) => (
                          <li
                            className="dropdown-item"
                            key={key}
                            value={key}
                            onClick={(e) => funcionRecogerRol(e.target.value)}
                          >
                            {elemento.nombre_rol}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {booleano_feliz_rol === false ? (
                      <div
                        style={visible}
                        className="invalido d-flex justify-content-end my-0"
                      >
                        Rol Invalido
                      </div>
                    ) : (
                      <div
                        style={no_visible}
                        className="invalido d-flex justify-content-end my-0"
                      >
                        Rol Invalido
                      </div>
                    )}
                  </div>

                  <div className="fuera my-2 mb-4">
                    <div className="form-group">
                      <label
                        style={label_ingresarNuevoUsuario}
                        className="col-md-4 col-sm-12  ps-2"
                        for="exampleInputPassword1"
                      >
                        Email
                      </label>
                      <input
                        style={input_ingresarNuevoUsuario_Desactivado}
                        className="col-md-8 col-sm-12"
                        type="text"
                        name=""
                        id=""
                        placeholder="Ingresa el email: "
                        onChange={(e) => setEmail_nuevoUsuario(e.target.value)}
                        value={email_nuevoUsuario}
                      />
                    </div>
                    {booleano_feliz_email === false ? (
                      <div
                        style={visible}
                        className="invalido d-flex justify-content-end my-0"
                      >
                        Email Invalido
                      </div>
                    ) : (
                      <div
                        style={no_visible}
                        className="invalido d-flex justify-content-end my-0"
                      >
                        Email Invalido
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="mt-3 botonera_AddProducto_O_RemoverProducto d-flex justify-content-center">
                <button
                  onClick={(e) => FuncionValidarFormulario(e)}
                  type="submit"
                  class="btn btn-primary mx-5"
                >
                  Modificar Usuario
                </button>
                <Link to="/inicio">
                  <button
                    type="reset"
                    onClick={(e) => cancelar_Usuario(e)}
                    class="btn btn-danger mx-5"
                  >
                    Cancelar
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      )}
    </Layout>
  );
};

export default ModificarUsuario;
