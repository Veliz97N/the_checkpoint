import React,{useState} from 'react'
import { AiOutlineDelete, AiFillDelete } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";
import Producto_en_tabla_catalogo from './Producto_en_tabla_catalogo';

const IngresarNuevoProducto = () => {


    return (
        <div className="Catalogo-PaginaPrincipal">
            <div className="contenedor-tabla p-5">
                <table class="table">
                    <thead>
                        <tr>                            
                            <th scope="col">Nombre del Producto</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Stock Disponible</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* <Producto_en_tabla_catalogo/> */}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default IngresarNuevoProducto
