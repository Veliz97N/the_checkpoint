import React from "react";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react/cjs/react.development";
import Layout from "../Folder_Contenido_General/Layout";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { useMediaQuery } from 'react-responsive';

import FilaEstadisticas_ProductosMasVendidos from "./filaEstadisticas_ProductosMasVendidos";
import UserContext from "../UserContext/UserContext";
import { useContext } from "react";

function Estadisticas() {
  const {user}  = useContext(UserContext);

  const dias = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];

  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const opciones = {
    maintainAspectRatio: false,
    resposive: true,
  };
  

  

  const [totalVenta, setTotalVenta] = useState("");
  const [totalVenta_Tarjeta, setTotalVenta_Tarjeta] = useState("");
  const [totalVenta_Efectivo, setTotalVenta_Efectivo] = useState("");

  const [startDate, setStartDate] = useState(new Date());
  
  const [datos_A_Graficar, setDatos_A_Graficar] = useState();
  const [productosMasVendidos, setProductosMasVendidos] = useState();
 async function funcionObtenerInformacionBaseDatos(){
   
  let totalVentaDia = 0;
  let totalTarjeta = 0;
  let totalEfectivo = 0

  const urlVentas ="https://3000-gray-tiglon-p4zyj6wv.ws-us17.gitpod.io/ventas";
  const response = await fetch(urlVentas);
  const data = await response.json();
  console.log(data)

  for (let x = 0; x < data.length; x++) {
    console.log("HOLAAAA");
    if (startDate === data[x].fecha) {
      totalVentaDia+=data[x].total
      if(data[x].metodo_pago === "Efectivo"){
        totalEfectivo+=data[x].total
      }
      else if(data[x].metodo_pago === "Tarjeta"){
        totalTarjeta+=data[x].total
      }
    }
  }
  console.log(totalVentaDia)
  console.log(totalEfectivo)
  console.log(totalTarjeta)


// HAY QUE HACER UN GET DE TODAS LAS VENTAS CULIAS Y ORDENARLAS POR FECHA DONDE LA ULTIMA FECHA SERA LA ACTUAL Y LAS DEMAS 
// SERAN LOS DIAS ANTERIORES
//data[length-1].fecha = fecha actual
// data[length-2].fecha y asi    
//                                        anteayer  ayer   HOY
    const datosRecibidos = [800, 515, 651, 239, 658, 557, 758];
                            //DATA DE LOS DISTINTOS DIAS.... EL ULTIMO DATO DEBE SER DE LA DATA DEL DIA ACTUAL Y LOS DEMAS DE UN DIA MENOS CONSCTUVIAMENTE
                            //El dia seleccionado

    const productosMasVendidos = [
      {
        nombreproducto: "Corona",
        categoria: "Cervezas",
        cantidadVendida: "80",
        valorVentaTotal: "88000",
        stock: "20",
      },
      {
        nombreproducto: "Vienesa",
        categoria: "Cecinas",
        cantidadVendida: "15",
        valorVentaTotal: "10000",
        stock: "85",
      },
      {
        nombreproducto: "Chocman",
        categoria: "Abarrotes",
        cantidadVendida: "70",
        valorVentaTotal: "2100",
        stock: "30",
      },
    ];


    //Fetch

    const informacion_Base_Datos = {
      labels: dias,
      datasets: [
        {
          label: "Venta Semanal",
          backgroundColor: "#0f2b4e",
          textColor: "#fff",
          borderWidth: 1,
          hoverBackgroundColor: "#9400D3",
          data: datosRecibidos,
        },
      ],
    };

    const totalVentadia_Tarjeta = Math.round(
      (totalTarjeta / totalVentaDia) * 100
    );
    const totalVentadia_Efectivo = Math.round(
      (totalEfectivo / totalVentaDia) * 100
    );

    setTotalVenta(totalVentaDia);
    setTotalVenta_Tarjeta(totalVentadia_Tarjeta);
    setTotalVenta_Efectivo(totalVentadia_Efectivo);
    setDatos_A_Graficar(informacion_Base_Datos);
    setProductosMasVendidos(productosMasVendidos);
    console.log(productosMasVendidos);
  
  
  };

  useEffect(() => {
    funcionObtenerInformacionBaseDatos();
  }, [startDate]);

  const isChiquito = useMediaQuery({
    query: '(max-width: 600px)'
  })

  return (

    <Layout hasNavbar hasSidebar>
      {user.role_id!==1 ? <h1 className="noPermisos"> Usted no posee permisos suficientes para acceder a esta categoria</h1>
      :
      <div className="estadisticas">
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
          <div className="col-md-6 col-sm-12 px-1 mb-3 ">
            <div className="prueba " id="col1">
              <div
                className="d-flex justify-content-center"
                id="titleStadistic"
              >
                <select className="browser-default custom-select col-4 me-2">
                  <option>Venta Diaria</option>
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
                    <div className="contenedorfecha mx-2">Fecha:</div>
                    <DatePicker
                      className="algo"
                      maxDate={addDays(new Date(), 0)}
                      dateFormat="dd/MM/yyyy"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />{" "}
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-center">
                Total Ventas: $ {totalVenta}{" "}
              </div>
              <div className="col d-flex aling-content-center">
                <div className="col-6 d-flex justify-content-center">
                  {totalVenta_Tarjeta}%
                </div>
                <div className="col-6 d-flex justify-content-center">
                  {totalVenta_Efectivo}%
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
            </div>
          </div>










          <div className="col-md-6 col-sm-12 px-1 mb-3">
            <div className="prueba" id="col1">
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
      

      
      {!isChiquito&&
      <div className="mt-1 p-2 d-none d-sm-block " id="tabla2">
        <div className="col-md-12 col-sm-12">
          <div className="prueba " id="col3">
            <div className="d-flex justify-content-center" id="col2">
              Listado de Productos Mas Vendidos
            </div>

            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col" className="text-center">Nro</th>
                  <th scope="col" className="text-center">Producto</th>
                  <th scope="col" className="text-center">Categoria</th>
                  <th scope="col" className="text-center">Cantidad Vendida</th>
                  <th scope="col" className="text-center">Valor Venta</th>
                  <th scope="col" className="text-center">Stock</th>
                </tr>
              </thead>
              <tbody>
                {productosMasVendidos &&
                  productosMasVendidos.map((producto, index) => (
                    <FilaEstadisticas_ProductosMasVendidos
                      key={index}
                      producto={producto}
                      index={index}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      
      </div>
      }
      </div>
      }
    </Layout>
  );
}

export default Estadisticas;
