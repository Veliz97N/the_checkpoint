import React from 'react'

const FilaEstadisticas_ProductosMasVendidos = (props) => {
    return (
      
        <tr>
            <th scope="row">{props.index+1}</th> 
          <td>{props.producto.nombreproducto}</td>
          <td>{props.producto.categoria}</td>
          <td>{props.producto.cantidadVendida}</td>
          <td>{props.producto.valorVentaTotal}</td>
          <td>{props.producto.stock}</td>
        </tr>
      
    );
}

export default FilaEstadisticas_ProductosMasVendidos
