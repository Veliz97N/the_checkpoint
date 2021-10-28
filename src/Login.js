import React, { useState, useContext, useEffect } from "react";
import LoginForm from "./LoginForm";
import UserContext, {userProvider} from "./UserContext/UserContext";
import Layout from "./Folder_Contenido_General/Layout";
import { useHistory } from "react-router";
import useLocalStorage from "./useLocalStorage";

function Login() {

  const History = useHistory()
  
  const { toggleIsLogged, users,toggleSetUser} = useContext(UserContext)
  // usuario de prueba
 
  const [adminUser, setAdminUser] = useState()
  const [vendedoresUser, setVendedoresUser] = useState()

  const identificar_roles = () => {

    const administradoresBaseDatos=[]
    const vendedoresBaseDatos=[]
   users.forEach(user=>{
     if(user.role_id===1){
       administradoresBaseDatos.push(user)
     }
   }) 
   users.forEach(user=>{
     if(user.role_id===2){
      vendedoresBaseDatos.push(user)
     }
   }) 

    setAdminUser(administradoresBaseDatos); 
    setVendedoresUser(vendedoresBaseDatos)
  }
  
  const [usuario, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  
  useEffect(()=>{
    identificar_roles()
    
  }, [users])

  const login_function = (user_data) => {
     
    if (adminUser !== "" || vendedoresUser!== ""){
      
      adminUser.forEach(usuario=>{
        if (user_data.username === usuario.username && user_data.password === usuario.password){
          console.log("Logged in");     
          
          setUser({
            username: user_data.username,
            password: user_data.password
          })
          toggleIsLogged(true)
          toggleSetUser({
            username: user_data.username,
            password: user_data.password,
            name:usuario.name,
            last_name:usuario.last_name,
            rol_id:1
          }) //ACA SETEAMOS EL USUARIO QUE INGRESO CORRECTAMENTE
         
          History.push("/inicio")  
          
        } 
        else {
          console.log("Usuario o contraseña incorrecto");
          setError("Usuario o contraseña incorrecto");
        }
      })
      vendedoresUser.forEach(usuario=>{
        if (user_data.username === usuario.username && user_data.password === usuario.password){
          console.log("Logged in");     
          
          setUser({
            username: user_data.username,
            password: user_data.password
          })
          toggleIsLogged(true)
          toggleSetUser({
            username: user_data.username,
            password: user_data.password,
            name:usuario.name,
            last_name:usuario.last_name,
            rol_id:2 
          }) //ACA SETEAMOS EL USUARIO QUE INGRESO CORRECTAMENTE
         
          History.push("/inicio") 

          
        } 
        else {
          console.log("Usuario o contraseña incorrecto");
          setError("Usuario o contraseña incorrecto");
        }
      })
    
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
