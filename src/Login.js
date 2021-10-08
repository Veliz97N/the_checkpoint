import React, { useState, useContext, useEffect } from "react";
import LoginForm from "./LoginForm";
import UserContext, {userProvider} from "./UserContext/UserContext";
import Topbar from './Folder_SideBar_TopBar/Topbar';
import Layout from "./Folder_Contenido_General/Layout";
import { useHistory } from "react-router";

function Login() {

  const History = useHistory()

  const {isLogged, toggleIsLogged, user} = useContext(UserContext)
  // usuario de prueba
  const [adminUser, setAdminUser] = useState()

  const identificar_roles = (user) => {
    const adminUser = {
      username: "",
      password: ""
    }
    for (let x = 0; x< user.length; x++){
      if (user[x].role === "Administrador"){
        adminUser.username = user[x].username;
        adminUser.password = user[x].password;
        console.log("este es adminUser",adminUser);
        setAdminUser(adminUser);
      }
    }
  }
  
  const [usuario, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  useEffect(()=>{
    identificar_roles(user)
  }, [user])

  const login_function = (user_data) => {
    console.log("este es user_data",user_data); 
    if (adminUser){
    if (user_data.username === adminUser.username && user_data.password === adminUser.password){
      console.log("Logged in");     
      setUser({
        username: user_data.username,
        password: user_data.password
      })
      toggleIsLogged(true)
      History.push("/inicio")      
    } else {
      console.log("Usuario o contraseña incorrecto");
      setError("Usuario o contraseña incorrecto");
      toggleIsLogged(false)
    }
  };
  }
  const logout = () => {
    setUser({username: "", password: ""})
    setError("")
    
  }

  return (
    <Layout >
    <>
      {usuario.username !== "" ? (
        <>         
      </>) : <LoginForm login_function={login_function} error={error}/>}
    </>
    </Layout>
  );
}

export default Login;
