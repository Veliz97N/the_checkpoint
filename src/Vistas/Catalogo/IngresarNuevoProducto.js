import React from 'react'
import { AiOutlineDelete, AiFillDelete } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";


const IngresarNuevoProducto = () => {
    return (
        <div className="ingresarNuevoProducto">
            <div className="row">
                <div className="h3 col-12 d-flex justify-content-center py-3 mb-4">
                    <div className="titulo col-6 py-2 d-flex justify-content-center">
                        Ingresar Nuevo Producto

                    </div>
                </div>
            </div>
            <form>

                <div className="row">
                    <div className="col-7">
                        <div className="form-group my-2 mb-4">
                            <label className="col-4 ps-2" for="exampleInputEmail1">Nombre del Producto</label>
                            <input className="col-8" type="text" name="" id="" placeholder="Ingresa el nombre del producto" />
                            
                        </div>
                        <div class="form-group mb-4">
                            <label className="col-4 ps-2" for="exampleInputPassword1">Categoria</label>
                            <input className="col-8" type="text" name="" id="" placeholder="Ingresa la categoria del producto"/>
                        </div>
                        <div class="form-group mb-4">
                            <label className="col-4 ps-2" for="exampleInputPassword1">Codigo de Barras</label>
                            <input className="col-8" type="text" name="" id="" placeholder="Ingresa el codigo de barras del producto"/>
                        </div>
                        <div class="form-group mb-4">
                            <label className="col-4 ps-2" for="exampleInputPassword1">Valor Unidad</label>
                            <input className="col-8" type="text" name="" id="" placeholder="Ingresa el valor por unidad del producto"/>
                        </div>
                        <div class="form-group mb-4">
                            <label className="col-4 ps-2" for="exampleInputPassword1">Stock Disponible</label>
                            <input className="col-8" type="text" name="" id="" placeholder="Ingresa el stock disponible para el producto"/>
                        </div>
                    </div>
                    <div className="col-5 my-2 mb-4">
                        <div className="ingresar_foto mb-4">
                            <label className=" col-lg-4 col-md-4 col-sm-12 mb-4" for="exampleInputPassword1">Ingresa Imagen </label>
                            <input className="" type="file" name="" id="" />
                        </div>
                        <i className="fas fa-users fa-10x d-flex justify-content-center"></i>
                    </div>
                </div>
                <div className="row">
                    <div className=" h5 col-12 d-flex justify-content-center py-3">
                        <div className="ok mx-3">
                            <GiConfirmed className="btn_aceptar_ingresarNuevoProducto" />
                        </div>
                        <div className="cancel mx-3">
                            <AiOutlineDelete className="btn_cancelar_ingresarNuevoProducto" />
                        </div>
                    </div>
                </div>
            </form>
            
        </div>
    )
}

export default IngresarNuevoProducto
