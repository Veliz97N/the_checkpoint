function Login() {
  return (
    <div className="container">
      <div className="login">
        <h1>Bienvenido</h1>
        <h6>Por favor inicia sesión para continuar</h6>
      </div>
      <div className="username-input">
      <input type="text" placeholder="Usuario" name="" id="" />
      </div>
      <div className="password-input">
      <input type="text" placeholder="Contraseña" name="" id="" />
      </div>
      <div className="login-button">
      <button className="btn btn-success" type="button">
        Iniciar sesión
      </button>
      </div>
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
