import React, { useState } from "react";

function LoginForm({login_function, error}) {

    const [user_data, Setuser_data] = useState({username: "", password: ""});
    const submitHandle = e =>{
        e.preventDefault();
        login_function(user_data);
    }
    const styles = {
      background: "#F95B02",
      borderColor: "#F95B02",
      ":hover": {
        backgroundColor: "#c94a00",
        borderColor: "#c94a00",
        color: "#fff"
      }
    }

    const error_style = {
      color: "red",
      fontSize: "1.3rem"
    }

  return (   
    <>
    {/* // falta el action="" en el form */}
    <form onSubmit={submitHandle}> 
      {/* contenedor para login  */}
      <div className="login">
        <h1>Bienvenido</h1>  
      {/* Si hay error */}
      {(error !== "") ? (<h6 style={error_style}>{error}</h6>) : (<h6>Por favor inicia sesión para continuar</h6>)}
      </div>
      {/* Input username */}
      <div className="username-input">
        <input
          type="text"
          placeholder="Usuario"
          name="username-input"
          id="username-input"
          onChange={e => Setuser_data({...user_data, username: e.target.value})}
          value={user_data.username}
        />
      </div>
      {/* Input password */}
      <div className="password-input">
        <input
          type="password"
          placeholder="Contraseña"
          name="password-input"
          id="password-input"
          onChange={e => Setuser_data({...user_data, password: e.target.value})}
          value={user_data.password}
        />
      </div>
      {/* Login button */}
      <div className="login-button">
        <button className="btn btn-success" type="submit">
          Iniciar sesión
        </button>
      </div>
      {/* Connect facebook y google buttons */}
      <div className="connect-buttons">
        <button className="btn btn-primary btn-sm fb" type="submit">
          Conectar con Facebook
        </button>
        <button className="btn btn-warning btn-sm google-btn" style={styles} type="submit">
          Conectar con Google
        </button>
      </div>
    </form>
    </>
  );
}

export default LoginForm;
