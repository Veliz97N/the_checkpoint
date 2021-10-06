import React,{useContext, useState} from 'react'
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import UserContext from '../../UserContext/UserContext';

const Producto_en_tabla_catalogo = (props) => {

    const {productoSeleccionado, toggleProductoSeleccionado}= useContext(UserContext);
    const visibleEditarProductoCategoria = {
        visibility: 'visible',
        fontSize: "1.4rem",
        color:'black',
        transition: "all .5s ease;",

    }
    const invisibleEditarProductoCategoria ={
        visibility: 'hidden',
         
    }
    const activopapi ={
        background: "#80ED99",
        transition: "all .5s ease;",  
    }
    const noactivopapi ={
        background: "#57CC99",
        transition: "all 0.5s ease;",  
    }
    const [isShow, setIsShow] = useState(false) 
    
    const handler_InformacionProductoModificar = () => {
        const informacion = {nombreProducto: props.producto.nombreProducto,
                            codigodebarras: props.producto.codigodebarras,
                            categoria: props.producto.categoria,
                            valorUnidad: props.producto.valorUnidad,
                            stockDisponible: props.producto.stockDisponible}
        toggleProductoSeleccionado(informacion)

    }


    return (
        <tr onMouseOver={() => setIsShow(true)}
            onMouseLeave={() => setIsShow(false)}
            style={isShow?activopapi:noactivopapi}
            >
            <th scope="row">{props.producto.nombreProducto}</th>
            <td >{props.producto.codigodebarras}</td>
            <td>{props.producto.categoria}</td>
            <td>{props.producto.valorUnidad}</td>
            <td>{props.producto.stockDisponible + " unid."} 
                <Link to="/catalogo_modificarproducto" onClick={handler_InformacionProductoModificar}>
                    <AiOutlineEdit className="ms-4" style={isShow ? visibleEditarProductoCategoria : invisibleEditarProductoCategoria} />
                </Link>
                </td>
        </tr>
    )
}

export default Producto_en_tabla_catalogo
