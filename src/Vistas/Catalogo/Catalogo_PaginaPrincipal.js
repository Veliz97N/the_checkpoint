import React,{useState,useContext} from 'react'
import { AiOutlineDelete, AiFillDelete } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";
import Producto_en_tabla_catalogo from './Producto_en_tabla_catalogo';
import UserContext from '../../UserContext/UserContext';
import { Link } from "react-router-dom";
import { IoAddCircleOutline, IoAddCircleSharp } from "react-icons/io5";

const Catalogo_PaginaPrincipal = () => {
    const {productos}= useContext(UserContext);
    const noactivopapi ={
        background: "#57CC99",
        transition: "all 0.5s ease;",  
    }
    const Catalogo_PaginaPrincipal={
        position:'relative',
      }
    const contenedor_tabla={
       position:'absolute',
       width:'100%'
    }  
    const botonIngresarNuevoProducto={
        position: 'absolute',
        top:'25px',
        right: '25px',
        zIndex: '1000',
        background:'#80ED99',
        borderRadius: '25px',
        color:'black',
        textDecoration: 'none',  
      }
      const botonagregarNuevoProducto={
          fontSize:'1.4rem'
      }
    return (
        <div style={Catalogo_PaginaPrincipal} className="Catalogo-PaginaPrincipal">
            <Link className="boton_hacia_IngresarNuevoProducto p-2" to="/Catalogo_ModificarProducto" style={botonIngresarNuevoProducto}>
                          <IoAddCircleOutline style={botonagregarNuevoProducto}/> Agregar Producto
            </Link>                    
            
            <div style={contenedor_tabla} className="contenedor-tabla py-5 px-3">
                <table class="table">
                    <thead className="py-5">
                        <tr className="py-5" style={noactivopapi}>                            
                            <th className="py-3"scope="col">Nombre del Producto</th>
                            <th className="py-3" scope="col">Codigo de Barras</th>
                            <th className="py-3" scope="col">Categoria</th>
                            <th className="py-3" scope="col">Valor</th>
                            <th className="py-3" scope="col">Stock Disponible</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={noactivopapi}>
                            <td><div>
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Buscar por: 
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Buscar por: Nombre</a>
                                    <a class="dropdown-item" href="#">Buscar por: Codigo de Barras</a>
                                    <a class="dropdown-item" href="#">Buscar por: Categoria</a>
                                </div>
                            </div></td>

                            <td colspan="4"><input type="text" class="form-control" /></td>
                        </tr>
                        {   productos&&productos.map(producto =>  <Producto_en_tabla_catalogo  producto={producto}/>)}                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Catalogo_PaginaPrincipal
