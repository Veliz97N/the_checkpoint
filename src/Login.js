function Login() {
  return (
    // contenedor principal
    <div className="container-fluid">
      {/* contenedor para login  */}
      <div className="login">
        <h1>Bienvenido</h1>
        <h6>Por favor inicia sesión para continuar</h6>
      </div>
      {/* Input username */}
      <div className="username-input">
      <input type="text" placeholder="Usuario" name="" id="" />
      </div>
      {/* Input password */}
      <div className="password-input">
      <input type="text" placeholder="Contraseña" name="" id="" />
      </div>
      {/* Login button */}
      <div className="login-button">
      <button className="btn btn-success" type="button">
        Iniciar sesión
      </button>
      </div>
      {/* Connect facebook y google buttons */}
      <div className="connect-buttons">
      <button className="btn btn-primary btn-sm fb" type="button">
        Conectar con Facebook
      </button>
      <button className="btn btn-warning btn-sm google" type="button">
        Conectar con Google
      </button>
      </div>
    </div>
  );
}

export default Login;
