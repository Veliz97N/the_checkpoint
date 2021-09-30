import React from 'react'

const Producto_en_tabla_catalogo = (props) => {
    return (
        <tr>
            <th scope="row">{props.producto.nombreProducto}</th>
            <td>{props.producto.categoria}</td>
            <td>{props.producto.valorUnidad}</td>
            <td>{props.producto.stockDisponible}</td>
        </tr>
    )
}

export default Producto_en_tabla_catalogo
