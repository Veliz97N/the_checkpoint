import React from 'react';

const ModificarUsuario = () => {
    return (
        <div className="container" id="Container">
            <div id="insertUser">Ingresar Nuevo Usuario</div>
            <div className="btnClose">❌</div>

                <div className="row" id="dataUser">
                    <div>
                        Nombre:
                        <input id="dataInsert" type="text"></input>
                    </div>
                    <div>
                        Apellido:
                        <input id="dataInsert" type="text"></input>
                    </div>
                    <div>
                        Nombre de Usuario:
                        <input id="dataInsert" type="text"></input>
                    </div>
                    <div>
                        Contraseña:
                        <input id="dataInsert" type="password"></input>
                    </div>
                    <div>
                        Confirmar Contraseña:
                        <input id="dataInsert" type="password"></input>
                    </div>
                    <div>
                        Cargo:
                        <input id="dataInsert" type="text"></input>
                    </div>
                </div>

                <div className="textImage">
                        Adjuntar Imagen Usuario:
                    <div className="input-group mb-3">
                        <input type="file" className="form-control"/>
                    </div>
                </div>
                <div className="ImageProfile"></div>
                <div className="botones">
                <div id="btnClick">✅</div>
                <div id="btnClick2">❌</div>
                </div>

        </div>
    );
}

export default ModificarUsuario;