import React from 'react';

const Estadisticas = () => {
    return (
        <div className="container">
            <div className="row">
            <div className="col-4 d-flex justify-content-center aling-items-center" id="stadistics">
                Estadisticas
            </div>
            </div>
            <div className="row align-items-start" id="tabla1">
                <div className="col" id="col1">
                    <div className="d-flex justify-content-center" id="titleStadistic">
                        Venta Diaria
                    </div>
                    <div className="d-flex justify-content-center">
                        Fecha
                    </div>
                    <div className="d-flex justify-content-center">
                        Monto
                    </div>
                    <div className="col d-flex justify-content-space-between">
                        <div className="col-6">
                            Efectivo
                        </div>
                        <div className="col-6">
                            Tarjeta
                        </div>
                    </div>
                    <div className="col d-flex aling-content-center">
                        <div className="col-6">
                            Porcentaje Tarjeta
                        </div>
                        <div className="col-6">
                            Porcentaje Efectivo
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        Porcentaje Semanal
                    </div>
                </div>
                <div className="col" id="col1">
                    <div className="d-flex justify-content-center" id="titleStadistic">
                        Grafico de ventas
                    </div>
                    <div className="col d-flex aling-content-center">
                        <div className="col-6">
                            Ventas por dias
                        </div>
                        <div className="col-6">
                            Cantidad de dias
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        Inserte Grafica
                    </div>
                </div>

            </div>
            <div className="row align-items-start" id="tabla2">
                <div className="col" id="col3">
                    <div className="d-flex justify-content-center" id="col2">
                        Listado de Productos Mas Vendidos
                    </div>

                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Nro</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Categoria</th>
                                <th scope="col" >Porcentaje de Venta</th>
                                <th scope="col">Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Vienesa</td>
                                <td>Cecinas</td>
                                <td >100</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Pan</td>
                                <td>Abarrotes</td>
                                <td >100</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Danky</td>
                                <td>Helados</td>
                                <td >100</td>
                                <td>100</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Estadisticas;