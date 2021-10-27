import React, { useState, useContext, useEffect } from "react";
import LoginForm from "./LoginForm";
import UserContext, {userProvider} from "./UserContext/UserContext";
import Layout from "./Folder_Contenido_General/Layout";
import { useHistory } from "react-router";
import useLocalStorage from "./useLocalStorage";

function Login() {

  const History = useHistory()
  
  const {isLogged, toggleIsLogged, users, role,toggleSetUser} = useContext(UserContext)
  // usuario de prueba
  const[nombre,setNombre]= useLocalStorage('name',"")
  const [adminUser, setAdminUser] = useState("")

  const identificar_roles = (users, role) => {
    const adminUser = {
      username: "",
      password: "",
      name: "",
      last_name:"",
    }
    
    
    for (let x = 0; x< users.length; x++){
      for(let j=0; j< role.length; j++){
        if (users[x].role_id === role[j].id){
          adminUser.username = users[x].username;
          adminUser.password = users[x].password;
          adminUser.name =  users[x].name;
          adminUser.last_name =  users[x].last_name;

          console.log("este es adminUser",adminUser);
          setAdminUser(adminUser);
        }
      }
    }
  }
  
  const [usuario, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  
  useEffect(()=>{
    //ACA FUNCIONA LA WEA NO SE PORQUE
    identificar_roles(users, role)
  }, [users, role])

  const login_function = (user_data) => {
     
    
    console.log(adminUser);
    if (adminUser !== ""){

    if (user_data.username === adminUser.username && user_data.password === adminUser.password){
      console.log("Logged in");     
      
      setUser({
        username: user_data.username,
        password: user_data.password
      })
      toggleIsLogged(true)
      toggleSetUser({
        username: user_data.username,
        password: user_data.password,
        name:adminUser.name,
        last_name:adminUser.last_name,
      }) //ACA SETEAMOS EL USUARIO QUE INGRESO CORRECTAMENTE
     
      History.push("/inicio")  
    } else {
      console.log("Usuario o contraseña incorrecto");
      setError("Usuario o contraseña incorrecto");
      toggleIsLogged(false)
    }
  };
  // useEffect(()=>{

  // })
  
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
