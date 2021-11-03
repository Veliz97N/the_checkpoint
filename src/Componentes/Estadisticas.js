import React from "react";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react/cjs/react.development";
import Layout from "../Folder_Contenido_General/Layout";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { useMediaQuery } from "react-responsive";

import FilaEstadisticas_ProductosMasVendidos from "./filaEstadisticas_ProductosMasVendidos";
import UserContext from "../UserContext/UserContext";
import { useContext } from "react";

function Estadisticas() {
  const { user } = useContext(UserContext);

  const convertDate = (str) => {
    str = str.toString();
    let parts = str.split(" ");
    let months = {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12",
    };
    let year = parts[3][2] + parts[3][3];
    return parts[2] + "/" + months[parts[1]] + "/" + year;
  };

  const opciones = {
    maintainAspectRatio: false,
    resposive: true,
    color: "#fff"
  };

  const [totalVenta, setTotalVenta] = useState("");
  const [totalVenta_Tarjeta, setTotalVenta_Tarjeta] = useState("");
  const [totalVenta_Efectivo, setTotalVenta_Efectivo] = useState("");

  const [startDate, setStartDate] = useState(new Date());

  const [datos_A_Graficar, setDatos_A_Graficar] = useState();
  const [productosMasVendidos, setProductosMasVendidos] = useState();

  async function funcionObtenerInformacionBaseDatos() {
    let totalVentaDia = 0;
    let totalTarjeta = 0;
    let totalEfectivo = totalVentaDia - totalTarjeta;

    const urlVentas =
      "https://3000-gray-tiglon-p4zyj6wv.ws-us17.gitpod.io/ventas";
    const response = await fetch(urlVentas);
    const data = await response.json();


    const formattedDate = convertDate(startDate);
    

    for (let x = 0; x < data.length; x++) {
      if (formattedDate === data[x].fecha) {
        totalVentaDia += data[x].total;
        console.log(totalVentaDia);
        if (data[x].metodo_pago === "Tarjeta"){
          totalTarjeta += data[x].total
        } else if (data[x].metodo_pago === "Efectivo"){
          totalEfectivo = totalVentaDia - totalTarjeta
        }
      }
    }

    let contenedor_ventas_negocio=[]
    for (let x = 0; x < data.length; x++) {
      let contador = 0;
      let objeto = { fecha: data[x].fecha, total: data[x].total };
      for (let z = 0; z < contenedor_ventas_negocio.length; z++) {
        if (data[x].fecha === contenedor_ventas_negocio[z].fecha) {
          contador += 1;
        }
      }
      if (contador === 0) {
        for (let y = x + 1; y < data.length; y++) {
          if (data[x].fecha == data[y].fecha) {
            objeto.total += data[y].total;
          }
        }
        contenedor_ventas_negocio.push(objeto);
      }
    }
    
    contenedor_ventas_negocio=(contenedor_ventas_negocio.sort((a, b) => newDateProyecto(a.fecha)-newDateProyecto(b.fecha)))
    let variableFecha_Graficos = 0
 
    for (let x=0;x<contenedor_ventas_negocio.length;x++){
      if(formattedDate===contenedor_ventas_negocio[x].fecha){
        console.log("Coincide esta fecha: "+formattedDate + "en la posicion: "+ x)
        variableFecha_Graficos=x
      }
    }
    console.log(contenedor_ventas_negocio);

    const cantidad_datos_a_graficar=[6,5,4,3,2,1,0] 
    let datosRecibidos_total = []
    let datosRecibidos_fecha=[]
    for(let x=0;x<cantidad_datos_a_graficar.length;x++){
      if(typeof contenedor_ventas_negocio[variableFecha_Graficos-x]?.total === 'null' ||  contenedor_ventas_negocio[variableFecha_Graficos-x]?.total  == undefined ){
        let valor_a_graficar=0
        datosRecibidos_fecha.push(contenedor_ventas_negocio[variableFecha_Graficos-x]?.fecha)
        datosRecibidos_total.push(valor_a_graficar)
      }
      else{
        datosRecibidos_fecha.push(contenedor_ventas_negocio[variableFecha_Graficos-x].fecha)
        datosRecibidos_total.push(contenedor_ventas_negocio[variableFecha_Graficos-x].total)
      }
    }
    
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

    const dias = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];

    const informacion_Base_Datos = {
      labels: datosRecibidos_fecha.reverse(),
      datasets: [
        {
          label: "Venta Semanal",
          backgroundColor: "#0f2b4e",
          color: "#0000000",
          borderWidth: 1,
          hoverBackgroundColor: "#9400D3",
          data: datosRecibidos_total.reverse(),
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
  }

  function newDateProyecto(d1){
    var parts =d1.split('/');
    var d1 = (parts[2] + parts[1] + parts[0]).toString();
    return d1
    }


  useEffect(() => {
    funcionObtenerInformacionBaseDatos();
  }, [startDate]);

  const isChiquito = useMediaQuery({
    query: "(max-width: 600px)",
  });

  return (
    <Layout hasNavbar hasSidebar>
      {parseInt(user.role_id) !== 1 ? (
        <h1 className="noPermisos">
          {" "}
          Usted no posee permisos suficientes para acceder a esta categoria
        </h1>
      ) : (
        <div className="estadisticas">
          <div className="row mb-3">
            <div className="col-12 d-flex justify-content-center aling-items-center">
              <div
                className="col-4 d-flex justify-content-center aling-items-center"
                id="stadistics"
              >
                Estadísticas
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
                  Gráfico de Ventas
                </div>
                <div className=" col d-flex aling-content-center" id="datas">
                  <Bar data={datos_A_Graficar} options={opciones} />
                </div>
              </div>
            </div>
          </div>

          {!isChiquito && (
            <div className="mt-1 p-2 d-none d-sm-block " id="tabla2">
              <div className="col-md-12 col-sm-12">
                <div className="prueba " id="col3">
                  <div className="d-flex justify-content-center" id="col2">
                    Listado de Productos Mas Vendidos
                  </div>

                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col" className="text-center">
                          Nro
                        </th>
                        <th scope="col" className="text-center">
                          Producto
                        </th>
                        <th scope="col" className="text-center">
                          Categoria
                        </th>
                        <th scope="col" className="text-center">
                          Cantidad Vendida
                        </th>
                        <th scope="col" className="text-center">
                          Valor Venta
                        </th>
                        <th scope="col" className="text-center">
                          Stock
                        </th>
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
          )}
        </div>
      )}
    </Layout>
  );
}

export default Estadisticas;
