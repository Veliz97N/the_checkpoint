import React,{useState} from 'react'
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const Producto_en_tabla_catalogo = (props) => {

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
                <Link to="/catalogo_modificarproducto" >
                    <AiOutlineEdit className="ms-4" style={isShow ? visibleEditarProductoCategoria : invisibleEditarProductoCategoria} />
                </Link>
                </td>
        </tr>
    )
}

export default Producto_en_tabla_catalogo
