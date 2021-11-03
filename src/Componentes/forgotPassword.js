import React from 'react'
import { Link } from 'react-router-dom'

const submitHandle = e => {
    e.preventDefault()
}

const forgotPassword = () => {
    return (
        <>
        {/* // falta el action="" en el form */}
        <form onSubmit={submitHandle}> 
          {/* contenedor para login  */}
          <div className="forgot color-dark">
            <h1>Recupera tu contraseña</h1>  
          </div>
          {/* Input username */}
          <div className=" password-form-username">
            
            <input
              type="email"
              placeholder="Ingresa tu correo"
              name="username-input"
              id="username-input"
            //   onChange={}
            //   value={}
            />
          </div>
          
          {/* Login button */}
          <div className="forgot_password_button">
            <Link to="/">
            <button className="btn btn-success" type="submit">
              Enviar
            </button>
            </Link>
          </div>
          <Link to="/">
        <p className="back_to_login">Volver al login</p>
        </Link>
        </form>
        </>
    )
}

export default forgotPassword
