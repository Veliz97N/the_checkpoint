import "../styles/styles.css";
import { useState, useContext, useEffect } from "react";
import Layout from "../Folder_Contenido_General/Layout";
import UserContext from "../UserContext/UserContext";
import { AiOutlineDelete } from "react-icons/ai";
import { GiConfirmed, GiConsoleController } from "react-icons/gi";
import ProductosVendidosporBoleta from "./ProductosVendidosporBoleta";
import { useMediaQuery } from "react-responsive";

const Ventas = () => {
  //LAS VARIABLES IMPORTANTES DEL FORMULARIO SON: La lista listaProductosFiltrado, Cantidad y Precio.. Si los 3 son distintos de cero

  const { productos,user } = useContext(UserContext); //productos si cuenta con el stock 
  const isChiquito = useMediaQuery({
    query: "(max-width: 770px)",
  });
  
  const [indiceBuscarElemento, setIndiceBuscarElemento] = useState("0");

  const handleAddrTypeChange = (e) => {
    setIndiceBuscarElemento(e.target.value);
  };
  const noactivopapi = {
    background: "#667ea0",
    transition: "all 0.5s ease;",
    color: "#fff"
  };

  const productos_vender ={
    borderRight :"2px solid var(--dark_selected)",
    opacity: "0.9",
    paddingRight: "30px"
  }

  const productos_vender_2 = {
    border: "none"
  }

  const [addrtype, setAddrtype] = useState([
    "Buscar por Nombre",
    "Buscar por Codigo de Barras",
  ]);
  const Add = addrtype.map((Add) => Add);

  const [listaProductosFiltrado, setListaProductosFiltrado] = useState([]);

  const contenedorfotografia_Visible = {
    width: "250px",
    height: "250px",
    visibility: 'visible'
  };
  const contenedorfotografia_NOVisible = {
    width: "250px",
    height: "250px",
    visibility: 'hidden'
  };
  const imagen_Ingresar_Modificar_Producto = {
    borderRadius: "50%",
    width: "100%",
    height: "100%",
    objectFit: "contain",
  };

  const [valor_busqueda_producto, setValor_busqueda_producto] = useState("");

  const funcion_filtrar_busqueda_producto = (tipoBusqueda, valorBusqueda) => {
    setValor_busqueda_producto(valorBusqueda.target.value);


    if (valorBusqueda.target.value !== "") {
      if (tipoBusqueda === "0") {
        const producto_A_Vender = productos.filter(
          (producto) =>
            producto.nombre.toLowerCase() ===
            valorBusqueda.target.value.toLowerCase()
            //Me recupera un array porque esta haciendo un arrow a cada producto que coincide con el valorBusqueda
        );
        if (producto_A_Vender.length >= 1) { //Quiere decir que encontro al menos un producto que coincide en nombre
          setListaProductosFiltrado(producto_A_Vender);
          setCantidad(1); //Esto me va a generar problemas, estoy dependiendo de muchas varaibles para un solo producto, ademas no es un array
          setValorVentaProducto(1 * producto_A_Vender[0].precio_venta); // POR ESO LO HAGO SOLAMENTE CON EL PARENTENSIS [0]
          setFotografia_disponible(true)
            // FALTA DEFINIR SI ESE PRODUCTO TRAE LA IMAGEN O NO, SI NO LA TRAE PONER UNA "IMAGEN NO DISPONIBLE"
        } else {
          setCantidad("");
          setValorVentaProducto("");
        }


      } else if (tipoBusqueda === "1") {
        const producto_A_Vender = productos.filter(
          (producto) => producto.codigo_barras == valorBusqueda.target.value
        );
        if (producto_A_Vender.length >= 1) {
          setListaProductosFiltrado(producto_A_Vender);
          setCantidad(1);
          setValorVentaProducto(1 * producto_A_Vender[0].precio_venta);
        } else {
          setCantidad("");
          setValorVentaProducto("");
        }
      }

    } else {
      setListaProductosFiltrado([]);
      setValorVentaProducto("");
      setCantidad("");
    }
  };

  const [valorVentaProducto, setValorVentaProducto] = useState("");
  const [cantidad, setCantidad] = useState("");

  const funcionCapturarCantidad_y_CalcularPrecio = (e) => {
    if (e.target.value > 0) {
      setCantidad(e.target.value);
      funcionCalcularPrecioVentaProducto(e);
    }
  };

  const funcionCalcularPrecioVentaProducto = (e) => {
    if (listaProductosFiltrado.length < 1) {
      setValorVentaProducto("");
    } else if (listaProductosFiltrado.length === 1) {
      const valorProducto =
        e.target.value * listaProductosFiltrado[0].precio_venta;
      setValorVentaProducto(valorProducto);
    }
  };

  const [listaProductos_A_Boleta, setListaProductos_A_Boleta] = useState([]);

  const [productoValido, setProductoValido] = useState(false);

  const FuncionVerificarSiProductoCoincide = (productoNuevo,productoVendido) => {
    let productoValido= false
    let contador = 0
    let lista_auxiliar = [...listaProductos_A_Boleta];
    lista_auxiliar.map((producto, index) => {

      if (producto.nombre === productoNuevo.nombre ) {
        console.log("Entre con"+ producto.nombre)
        if (
          parseInt(producto.cantidadVendida) +
            parseInt(productoNuevo.cantidadVendida) <=
          listaProductosFiltrado[0].stock
        ) {

          console.log("eNTRE?", producto);
          productoValido = true;
          const nueva_Lista_A_Boleta = [...listaProductos_A_Boleta];
          setIndiceAEliminar(index);
          const nueva_Cantidad =
            parseInt(producto.cantidadVendida) +
            parseInt(productoNuevo.cantidadVendida);

          const nuevo_valor =
            parseInt(producto.precio_venta) +
            parseInt(productoNuevo.precio_venta);
          const nuevo_producto = {
            nombre: producto.nombre,
            codigo_barras: producto.codigo_barras,
            categoria: producto.categoria,
            cantidadVendida: nueva_Cantidad,
            precio_venta: nuevo_valor,
            producto_id: producto.id_producto
          };
          if(productoValido){

          nueva_Lista_A_Boleta.splice(index, 1, nuevo_producto);
         
          setListaProductos_A_Boleta(nueva_Lista_A_Boleta);

          console.log("boleta final", nueva_Lista_A_Boleta);

          setProductoValido(true);
          
        }
        } 

        else if (
          parseInt(producto.cantidadVendida) +
            parseInt(productoNuevo.cantidadVendida) >
          listaProductosFiltrado[0].stock
        ) {
          console.log("Entre a esta mierdadaaaa");
          productoValido = false;
          setProductoValido(false);
          alert("No hay suficientes productos disponibles");
        }
        contador+=1
        console.log(contador)
      }
      else if(contador===0){


        setListaProductos_A_Boleta([...listaProductos_A_Boleta, productoVendido]);
      }
      
    });
  }

  const FuncionValidarFormulario = (e) => {
    e.preventDefault();

    let productoValido = false;
    
    
    if (
      listaProductosFiltrado.length >= 1 &&
      cantidad !== "" &&
      valorVentaProducto !== ""
    ) {
      productoValido = true;
    }
    if(listaProductosFiltrado.stock>=cantidad){
      productoValido = true;
    }
    else if(listaProductosFiltrado[0].stock<cantidad){
      productoValido = false;
      alert("El producto no posee el stock necesario para realizar esta venta")
    }

    if (productoValido === true) {
      const productoVendido = { // tu nos interesas para pasarlo al POST 😀
        nombre: listaProductosFiltrado[0].nombre, //Esto hay que hacerlo un array de objetos
        codigo_barras: listaProductosFiltrado[0].codigo_barras,
        categoria: listaProductosFiltrado[0].categoria_id,
        id_producto: listaProductosFiltrado[0].id,
        cantidadVendida: cantidad,
        precio_venta: valorVentaProducto,
      };
      console.log("ACA ESTA EL PROBLEMA", productoVendido)


      if(listaProductos_A_Boleta.length===0){
      setListaProductos_A_Boleta([...listaProductos_A_Boleta, productoVendido]);      
    }

    else{
      FuncionVerificarSiProductoCoincide(productoVendido,productoVendido)
    }
       //ESTOS SON TODOS LOS PRODUCTOS QUE VAN A BOLETA... POST DETALLE VENTA
      
    } else if (productoValido == false) {
      setProductoValido(false);
    }
    
  };

  

  const FuncionEliminarDatosProductosBoleta = () => {
    setCantidad("");
    setValorVentaProducto("");
  };
  const alturaTabla = {
    minHeight: "55vh",
    maxHeight: "55vh",
    overflowY: "scroll",
  };
  const [fotografia_disponible, setFotografia_disponible] = useState(false)

  const [indiceAEliminar, setIndiceAEliminar] = useState("");

  const eliminarProducto = (index) => {
    setIndiceAEliminar(index);
    console.log(index);
    let nueva_Lista_A_Boleta = [...listaProductos_A_Boleta];
    nueva_Lista_A_Boleta.splice(index, 1);
    setListaProductos_A_Boleta(nueva_Lista_A_Boleta);
  };
  const [totalVentaFinalizada, setTotalVentaFinalizada] = useState("");

  //ACA SE HACE DESPUES DE TI JOACO ... SE COLOCA EL VALOR DE LA VENTA, SE CAPTURA EL METODO DE PAGO ( VISA, EFECTIVO O TRANSFERENCIA)
  // SE VALIDAN LOS BOTONES DE CONFIRMAR VENTA O CANCELAR VENTA Y EL DE CONFIRMAR DEVUELVE UN ARRAY CON LA LISTA DE PRODUCTOS FILTRADOS, EL PRECIO TOTAL
  // Y EL METODO DE PAGO SELECCIONADO PARA ESA VENTA

  const funcionCalcularTotalVenta = () => {
    let auxiliarTotalVenta = 0;
    for (let x = 0; x < listaProductos_A_Boleta.length; x++) {
      auxiliarTotalVenta += listaProductos_A_Boleta[x].precio_venta;
    }
    setTotalVentaFinalizada(auxiliarTotalVenta);
    console.log("El total es " + auxiliarTotalVenta);
  };

  const [metodoPago, setMetodoPago] = useState(null);
  const onChangeHandler_MetodoPago = (e) => {
    console.log(e.target.value);
    setMetodoPago(e.target.value);
  };

  const handler_ConfirmarVenta = () => {
    if (
      listaProductos_A_Boleta.length >= 1 &&
      totalVentaFinalizada >= 0 &&
      metodoPago !== null
    ) {
      console.log("Entre");
      const lista_DatosVentaFinalizada = [
        listaProductos_A_Boleta,
        totalVentaFinalizada,
        metodoPago,
      ];
      console.log(lista_DatosVentaFinalizada);
      alert("Venta Existosa");
      
      
      
      functionPostVenta(lista_DatosVentaFinalizada)
      functionDetalleVenta(lista_DatosVentaFinalizada)

      //ACA HAY QUE SETEAR TODO EN CERO
      setValor_busqueda_producto("");
      setCantidad("");
      setValorVentaProducto("");
      setListaProductos_A_Boleta([]);
      setTotalVentaFinalizada("");
      //Falta el metodo de pago

      //ACA SE HACE EL POST EN LA BASE DE DATOS DE LA INFO OBTENIDA EN LA VENTA
    } else {
      alert("Indique datos validos para la venta");
    }
  };
  async function functionDetalleVenta(lista_DatosVentaFinalizada){
    const urlVentas = "https://3000-gray-tiglon-p4zyj6wv.ws-us17.gitpod.io/ventas";
    const response = await fetch(urlVentas)
    const data = await response.json()
    console.log("aca va el id de la venta ql", lista_DatosVentaFinalizada)
    
    console.log(data[data.length-1].id);

    const boletaVenta=[]
    for(let x=0; x<lista_DatosVentaFinalizada[0].length;x++){
      const itemBoleta={
        "cantidad": lista_DatosVentaFinalizada[0][x].cantidadVendida,
        "precio": lista_DatosVentaFinalizada[0][x].precio_venta,
        "producto_id": lista_DatosVentaFinalizada[0][x].id_producto,
        "venta_id": data[data.length-1].id,
      }
      boletaVenta.push(itemBoleta)
    }
    for(let i=0; i<boletaVenta.length; i++){
      console.log("BOLETAVENTA[I] ", boletaVenta[i]);
      const urlDetalleVenta = "https://3000-gray-tiglon-p4zyj6wv.ws-us17.gitpod.io/detalleventa"
      const requestOptions = { //TIENE PROBLEMAS DE CORS NO SE QUE VERGA PERO FUNCIONA
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(boletaVenta[i]),
      };
    
    fetch(urlDetalleVenta, requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err)=> console.log(err))
    }
    
    console.log(boletaVenta)

  }
  
  async function functionPostVenta(lista_DatosVentaFinalizada){
    let venta = {fecha: "01/11/21",
    id_usuario: user.id,
    impuesto: 100.0,
    numero_comprobante: "1",
    tipo_comprobante: "Real",
    metodo_pago:lista_DatosVentaFinalizada[2],
    total: lista_DatosVentaFinalizada[1]}

    console.log(venta)
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(venta),
    };
    const urlVentas = "https://3000-gray-tiglon-p4zyj6wv.ws-us17.gitpod.io/ventas";
    const response = await fetch(urlVentas, requestOptions)
    const data = await response.json()
    console.log(data);
  }

  const handler_CancelarVenta = () => {
    //ACA HAY QUE SETEAR TODO EN CERO
    setValor_busqueda_producto("");
    setCantidad("");
    setValorVentaProducto("");
    setListaProductos_A_Boleta([]);
    setTotalVentaFinalizada("");
  };

  useEffect(() => {
    console.log(listaProductos_A_Boleta);
    funcionCalcularTotalVenta();
  }, [listaProductos_A_Boleta]);

  const titulo_venta = {
    background: "#667ea0",
    borderRadius: "25px",
    color: "#fff"
  }
  return (
    <Layout hasNavbar hasSidebar>
      <div className="Ventana_Ventas">
        <div className="row">
          <div className="h3 col-12 d-flex justify-content-center py-3">
            <div className="titulo col-6 py-2 d-flex justify-content-center titulo" style={titulo_venta}>
              Nueva Venta
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12 vender_lado_izquierdo">
            
            <form style={!isChiquito ? productos_vender : productos_vender_2}>
              <div className="d-md-flex Contenedor_Buscar_Elemento_A_Vender mb-2 mb-sm-2">
                <select
                  onChange={(e) => handleAddrTypeChange(e)}
                  className="browser-default custom-select col-md-4 col-sm-12 col-xs-12 me-2 mb-sm-2"
                  >
                  {Add.map((opcionBusqueda, key) => (
                    <option key={key} value={key}>
                      {opcionBusqueda}
                    </option>
                  ))}
                </select>

                <div className="col-md-8 col-sm-12 col-xs-12">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) =>
                      funcion_filtrar_busqueda_producto(indiceBuscarElemento, e)
                    }
                    value={valor_busqueda_producto}
                    />
                </div>
              </div>

              <div className="Cantidad_Producto_A_Vender d-md-flex mb-md-2 mb-sm-3">
                <label
                  className="col-md-4 col-sm-12 col-xs-12 ps-2 me-2 d-sm-flex mb-sm-2 justify-content-center"
                  for="exampleInputEmail1"
                  >
                  Cantidad
                </label>

                <input
                  className="col-md-8 col-sm-12 col-xs-12 "
                  type="number"
                  name=""
                  placeholder="Ingresa la cantidad"
                  value={cantidad}
                  onChange={(e) => funcionCapturarCantidad_y_CalcularPrecio(e)}
                  />
              </div>

              <fieldset disabled>
                <div className="Precio_Producto_A_Vender d-md-flex">
                  <label
                    className="col-md-4 col-sm-12 ps-2 me-2 mb-sm-2 d-sm-flex justify-content-center"
                    for="exampleInputEmail1"
                    >
                    Precio
                  </label>
                  <input
                    className="col-md-8 col-sm-12"
                    type="text"
                    name=""
                    placeholder="Precio Final Producto"
                    value={valorVentaProducto}
                    />
                </div>
              </fieldset>

              
            <div className={!isChiquito?"contenedor_foto_boton d-flex flex-column justify-content-between":"d-flex flex-column justify-content-between"}>
              {!isChiquito&&
                <div className="contenedor_fotografia_producto_a_vender justify-content-center d-md-flex d-sm-none ">
                <div style={fotografia_disponible?contenedorfotografia_Visible:contenedorfotografia_NOVisible}>
                  
                  <img style={imagen_Ingresar_Modificar_Producto}/>{" "}
                  {/*Aca se agrega la imagen de la weaita */}
                </div>
              </div>}

              <div className="botonera_AddProducto_O_RemoverProducto d-flex justify-content-center my-sm-3">
                <button
                  onClick={(e) => FuncionValidarFormulario(e)}
                  type="submit"
                  class="btn btn-primary mx-5"
                  >
                  Anadir Producto
                </button>
                <button
                  type="reset"
                  onClick={FuncionEliminarDatosProductosBoleta}
                  class="btn btn-danger mx-5"
                  >
                  Remover Producto
                </button>
              </div>

              </div>
            </form>
            
          </div>

          <div className="col-md-6 col-sm-12">
            <div
              className="contenedor_tabla_productos_a_vender"
              style={alturaTabla}
            >
              <table className="table">
                <thead className="py-5">
                  <tr className="py-5" style={noactivopapi}>
                    <th className="py-3" scope="col">
                      Nombre del Producto
                    </th>
                    <th className="py-3" scope="col">
                      Codigo de Barras
                    </th>
                    
                    <th className="py-3" scope="col">
                      Cantidad
                    </th>
                    <th className="py-3" scope="col">
                      Valor
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listaProductos_A_Boleta.map(
                    (datosproductovendido, index) => (
                      <ProductosVendidosporBoleta
                        index={index}
                        producto={datosproductovendido}
                        eliminarProductoDeLaTabla={eliminarProducto}
                      />
                    )
                  )}
                </tbody>
              </table>
            </div>
            <div className="totalVenta">
              <fieldset disabled>
                <div className="Precio_Producto_A_Vender d-md-flex dm-sm-flex col-md-10">
                  <label
                    className="col-md-4 col-sm-6 mt-2"
                    for="exampleInputEmail1"
                  >
                    Total venta:
                  </label>
                  <input
                    className="col-md-8 col-sm-6 my-2"
                    type="text"
                    name=""
                    placeholder="Total Venta"
                    value={totalVentaFinalizada}
                  />
                </div>
              </fieldset>
            </div>

            <div class="form-group Metodo_Pago_Venta">
              <div
                class="paymentMethod p-2 d-flex justify-content-around align-items-center border rounded"
                onChange={onChangeHandler_MetodoPago}
              >
                <div className="contenedor_Metodo_Pago d-flex align-items-center">
                  <input
                    class="form-radio-input ml-3"
                    type="radio"
                    id="check_paymentMethod_Visa"
                    name="radio_payment"
                    value="visa"
                  />
                  <i class="fab fa-cc-visa text-white fa-2x"></i>
                </div>
                <div className="contenedor_Metodo_Pago d-flex align-items-center">
                  <input
                    class="form-radio-input ml-3"
                    type="radio"
                    id="check_paymentMethod"
                    name="radio_payment"
                    value="efectivo"
                  />
                  <i class="fas fa-money-bill-wave text-white fa-2x"></i>
                </div>
              
              </div>
            </div>

            <div className="col-12 d-flex justify-content-center botonera_Completar_O_Cancelar_Venta">
              <div className="ok mx-3" onClick={handler_ConfirmarVenta}>
                <GiConfirmed className="btn_aceptar_ingresarNuevoProducto" />
              </div>
              <div className="cancel mx-3" onClick={handler_CancelarVenta}>
                <AiOutlineDelete className="btn_cancelar_ingresarNuevoProducto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Ventas;
