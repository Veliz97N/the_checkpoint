import React,{useContext, useState} from 'react'
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import UserContext from '../../UserContext/UserContext';

const Producto_en_tabla_catalogo = (props) => {

    const {productoSeleccionado, toggleProductoSeleccionado,categorias}= useContext(UserContext); //ACA RECIBE LA WEAAAA 
    const visibleEditarProductoCategoria = {
        visibility: 'visible',
        fontSize: "1.4rem",
        color:'white',
        transition: "all .5s ease;",

    }
    const inutil = {
        color:'black',
    }
    const invisibleEditarProductoCategoria ={
        visibility: 'hidden',
         
    }
    const activopapi ={
        background: "#667ea0",
        transition: "all .5s ease;",
        opacity: "0.8"  
    }
    const noactivopapi ={
        background: "#667ea0",
        transition: "all 0.5s ease;",  
    }
    const [isShow, setIsShow] = useState(false) 
    
    const handler_InformacionProductoModificar = () => {
        let categoria_nombre
        categorias.forEach(categoria=>{
            if(categoria.id===props.producto.categoria_id){
                categoria_nombre=categoria.nombre_cat
            }
        })
        const informacion = {nombreProducto: props.producto.nombre,
                            codigodebarras: props.producto.codigo_barras,
                            categoria: props.producto.categoria_id,
                            categoria_nombre:categoria_nombre,
                            valorUnidad: props.producto.precio_venta,
                            stockDisponible: props.producto.stock}
        
        toggleProductoSeleccionado(informacion)

    }


    return (
        <tr onMouseOver={() => setIsShow(true)}
            onMouseLeave={() => setIsShow(false)}
            style={isShow?activopapi:noactivopapi}
            >
            <th scope="row">{props.producto.nombre}</th>
            <td >{props.producto.codigo_barras}</td>
            <td>{props.producto.id_categoria}</td>
            <td>{props.producto.precio_venta}</td>
            <td>{props.producto.stock + " unid."} 
                <Link to="/catalogo_modificarproducto" onClick={handler_InformacionProductoModificar}>
                    <AiOutlineEdit className="ms-4" style={isShow ? visibleEditarProductoCategoria : invisibleEditarProductoCategoria} />
                </Link>
                </td>
        </tr>
    )
}

export default Producto_en_tabla_catalogo
