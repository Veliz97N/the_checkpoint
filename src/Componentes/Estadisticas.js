import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react/cjs/react.development';
import Layout from '../Folder_Contenido_General/Layout'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Estadisticas(){

    const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    const datosRecibidos = [10000, 515, 651, 239, 658, 557, 758]

    const [startDate, setStartDate] = useState(new Date());

    const informacion_Base_Datos = {
        labels: dias,
        datasets:[{
            label: "Venta Semanal",
            backgroundColor: '#9400D3',
            borderWidth: 1,
            hoverBackgroundColor: '#4B0082',
            data: datosRecibidos
        }]
    }
  
    const [datos_A_Graficar, setDatos_A_Graficar] = useState(informacion_Base_Datos)

    const funcionObtenerInformacionBaseDatos = () =>{




    }


    const opciones={
        maintainAspectRatio: false,
        resposive: true
    }
    const opcionesdeGrafico = {
        visibility:'hidden'
    }

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    useEffect(() => {        
        
            console.log("Holiwis");
        
    }, [date])

    return (
      <Layout hasNavbar hasSidebar>
        <div className="container">
          <div className="row mb-3">
            <div className="col-12 d-flex justify-content-center aling-items-center">
              <div
                className="col-4 d-flex justify-content-center aling-items-center"
                id="stadistics"
              >
                Estadisticas
              </div>
            </div>
          </div>

          <div className="row " id="tabla1">
            <div className="col-md-6 col-sm-12 px-1 mb-3">
              <div className="prueba" id="col1">
                <div
                  className="d-flex justify-content-center"
                  id="titleStadistic"
                >
                  <select
                  
                  className="browser-default custom-select col-4 me-2"
                >
                 
                    <option>
                      Venta Diaria
                    </option>
                    {/* <option>
                      Venta Semanal
                    </option>
                    <option>
                      Venta Mensual
                    </option>
                   */}
                </select>
                </div>
           
                <div className="row d-flex justify-content-center">
                    <div className="col-8 d-flex justify-content-center">
                        <div className="d-flex justify-content-center">
                            <div className="contenedorfecha mx-2">
                                Fecha: 
                            </div>
                            <DatePicker className="algo" selected={startDate} onChange={(date) => setStartDate(date)}/>  </div>
                    </div>
                </div>
              


                <div className="d-flex justify-content-center">Monto</div>
                <div className="col d-flex aling-content-center">
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
            </div>

            <div className="col-md-6 col-sm-12 px-1 mb-3">
              <div className="prueba"  id="col1">
                <div
                  className="col-12 d-flex justify-content-center"
                  id="titleStadistic"
                >
                  Grafico de Ventas
                </div>
                <div className=" col d-flex aling-content-center" id="datas">
                  <Bar data={datos_A_Graficar} options={opciones} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-1 p-2" id="tabla2">
          <div className="col-12">
            <div className="prueba " id="col3">
              <div className="d-flex justify-content-center" id="col2">
                Listado de Productos Mas Vendidos
              </div>

              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Nro</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Porcentaje de Venta</th>
                    <th scope="col">Stock</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Vienesa</td>
                    <td>Cecinas</td>
                    <td>100</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Pan</td>
                    <td>Abarrotes</td>
                    <td>100</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Danky</td>
                    <td>Helados</td>
                    <td>100</td>
                    <td>100</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    );

}

export default Estadisticas;