import React from 'react'

const IngresarNuevoProducto = () => {
    return (
        <div className="ingresarNuevoProducto">
            <div className=" h5 col-12 d-flex justify-content-center border border-primary py-3">
                Ingresar Nuevo Producto
            </div>
            <form>
                <div className="row">
                    <div className="col-7 border border-primary">
                        <div className="form-group">
                            <label for="exampleInputEmail1">Nombre del Producto</label>
                            <input type="text" name="" id="" placeholder="Ingresa el nombre del producto"/>
                            
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
  
                        </div>
                    </div>
                    <div className="col-5 border border-primary">
                        Hola
                    </div>
                </div>
            </form>
            
        </div>
    )
}

export default IngresarNuevoProducto
