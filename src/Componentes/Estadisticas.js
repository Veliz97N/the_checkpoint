import React from 'react';
import { Bar } from 'react-chartjs-2';
import Layout from '../Folder_Contenido_General/Layout'

function Estadisticas(){

    const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    const data1 = {
        labels: dias,
        datasets:[{
            label: "Venta Semanal",
            backgroundColor: '#9400D3',
            borderWidth: 1,
            hoverBackgroundColor: '#4B0082',
            data: [435, 515, 651, 239, 658, 557, 758]
        }]
    
    }
   /*  const data2 = {
        labels: meses,
        datasets:[{
            label: "Venta Mensual",
            backgroundColor: '#9400D3',
            borderWidth: 1,
            hoverBackgroundColor: '#4B0082',
            data2: [435, 515, 651, 239, 658, 557, 758, 651, 239, 658, 557, 758]
        }]
    
    } */


    const opciones={
        maintainAspectRatio: false,
        resposive: true
    }
    
    return (
        <Layout hasNavbar hasSidebar>
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
                    <div className="col d-flex aling-content-center" >
                        <div className="col-6 d-flex justify-content-center">
                            Efectivo
                        </div>
                        <div className="col-6 d-flex justify-content-center">
                            Tarjeta
                        </div>
                    </div>
                    <div className="col d-flex aling-content-center">
                        <div className="col-6 d-flex justify-content-center">
                            Porcentaje Tarjeta
                        </div>
                        <div className="col-6 d-flex justify-content-center">
                            Porcentaje Efectivo
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        Porcentaje Semanal
                    </div>
                </div>
                <div className="col" id="col1">
                    <div className=" col-6 d-flex justify-content-center" id="titleStadistic">
                        Grafico de ventas
                    </div>
                    <div className=" col d-flex aling-content-center" id="datas">
                    <Bar data={data1} options={opciones} />
                    </div>
                {/*     <div className=" col d-flex justify-content-center" id="titleStadistic">
                    <Bar data={data2} options={opciones} />
                    </div> */}
                </div>

            </div>
            <div className="row align-items-start" id="tabla2">
                <div className="col-6" id="col3">
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
    </Layout>
    )

}

export default Estadisticas;