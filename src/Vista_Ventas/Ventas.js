import '../styles/styles.css';
import { useState, useContext } from "react";
import Layout from '../Folder_Contenido_General/Layout';
import UserContext from '../UserContext/UserContext'
import { AiOutlineDelete, AiFillDelete } from "react-icons/ai";
import { GiConfirmed, GiConsoleController } from "react-icons/gi";
import ProductosVendidosporBoleta from './ProductosVendidosporBoleta';

const Ventas = () => {

    //LAS VARIABLES IMPORTANTES DEL FORMULARIO SON: La lista listaProductosFiltrado, Cantidad y Precio.. Si los 3 son distintos de cero 

    const { productos } = useContext(UserContext);

    const [indiceBuscarElemento, setIndiceBuscarElemento] = useState("0")

    const handleAddrTypeChange = (e) => {
        setIndiceBuscarElemento(e.target.value)
        
    }
    const noactivopapi = {
        background: "#57CC99",
        transition: "all 0.5s ease;",
    }
    const [addrtype, setAddrtype] = useState(["Buscar por Nombre", "Buscar por Codigo de Barras"])
    const Add = addrtype.map(Add => Add
    )

    const [listaProductosFiltrado, setListaProductosFiltrado] = useState([])
    const [valor, setValor] = useState("")
    
    const contenedorfotografia={
        width: '250px',
        height:'250px',
    }
    
    const imagen_Ingresar_Modificar_Producto={
        borderRadius: '50%',
        width: '100%',
        height:'100%',
        objectFit: 'contain',
    }

    const funcion_filtrar_busqueda_producto = (tipoBusqueda, valorBusqueda) => {

        if (valorBusqueda.target.value !== "") {
            if (tipoBusqueda === "0") {
                const producto_A_Vender = productos.filter(producto => producto.nombreProducto == valorBusqueda.target.value)
                if(producto_A_Vender.length>=1){
                    setListaProductosFiltrado(producto_A_Vender)
                    setCantidad(1)
                    setValorVentaProducto(1*producto_A_Vender[0].valorUnidad)
                }
                else{
                    setCantidad('')
                    setValorVentaProducto('')
                }   
            }

            else if (tipoBusqueda === "1") {
                const producto_A_Vender = productos.filter(producto => producto.codigodebarras == valorBusqueda.target.value)
                if(producto_A_Vender.length>=1){
                    setListaProductosFiltrado(producto_A_Vender)
                    setCantidad(1)
                    setValorVentaProducto(1*producto_A_Vender[0].valorUnidad)
                }
                else{
                    setCantidad('')
                    setValorVentaProducto('')
                }
            }
        }
        else {
            setListaProductosFiltrado([])
            setValorVentaProducto('')
            setCantidad('')      
        }
    } 

    const [valorVentaProducto, setValorVentaProducto] = useState('')

    const [cantidad, setCantidad] = useState('')

    const funcionCapturarCantidad_y_CalcularPrecio=(e)=>{
        if(e.target.value>0){
            setCantidad(e.target.value)
            funcionCalcularPrecioVentaProducto(e)
        }
    }

    const funcionCalcularPrecioVentaProducto=(e)=>{
        if(listaProductosFiltrado.length<1){
            setValorVentaProducto('')
        }

        else if(listaProductosFiltrado.length===1){
            const valorProducto = e.target.value * listaProductosFiltrado[0].valorUnidad;
            setValorVentaProducto(valorProducto)
        }
    }
    const [datosProductosVendidos, setDatosProductosVendidos] = useState([])
    const [productoValido, setProductoValido] = useState(false)
    const FuncionValidarFormulario = (e) =>{
        e.preventDefault();
        
        let productoValido = false
        if(listaProductosFiltrado.length>=1 ){
            productoValido = true;
        }
        else if(listaProductosFiltrado.length<1){
            productoValido=false
        }
        if(cantidad!=''){
            productoValido=true
     
        }
        else if(cantidad==''){
            productoValido=false
        }
        if(valorVentaProducto!=''){
            productoValido=true
        }
        else if(valorVentaProducto==''){
            productoValido=false
        }
        if(productoValido==true){
            console.log("Los datos de la venta son validos")
            const productoVendido = {nombre:listaProductosFiltrado[0].nombreProducto, //Esto hay que hacerlo un array de objetos
                                    codigodebarras:listaProductosFiltrado[0].codigodebarras,
                                    categoria: listaProductosFiltrado[0].categoria,
                                    cantidadVendida:cantidad,
                                    valor: valorVentaProducto}

            setDatosProductosVendidos([...datosProductosVendidos,productoVendido]);
            console.log(datosProductosVendidos)
            setProductoValido(true)
        }
        else if(productoValido==false){
            setProductoValido(false)
        }

        
        
    }

    const alturaTabla={
        minHeight:'55vh',
        maxHeight:'55vh',
        overflowY: 'scroll'
    }
    return (
        <Layout hasNavbar hasSidebar>
            <div className="Ventana_Ventas">
                
                    <div className="row">
                        <div className="h3 col-12 d-flex justify-content-center py-3 mb-4">
                            <div className="titulo col-6 py-2 d-flex justify-content-center">
                                Nueva Venta
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    
                    <div className="col-6 "> {/*//ACA SE CREA LA PRIMERA COLUMNA DE LA IZQUIERDA  */}
                        <form>
                            <div className='d-flex Contenedor_Buscar_Elemento_A_Vender mb-2'>

                                < select
                                    onChange={e => handleAddrTypeChange(e)}
                                    className="browser-default custom-select col-4 me-2" >
                                    {
                                        Add.map((opcionBusqueda, key) => <option key={key} value={key}>{opcionBusqueda}</option>)
                                    }
                                </select >

                                <div className="col-8">
                                    <input type="text"
                                        className="form-control"
                                        onChange={(e)=>funcion_filtrar_busqueda_producto(indiceBuscarElemento, e)}
                                       />
                                </div>
                            </div>

                            <div className="Cantidad_Producto_A_Vender d-flex mb-2">

                                <label className="col-md-4 col-sm-12 ps-2 me-2" for="exampleInputEmail1">Cantidad</label>

                                <input className="col-md-8 col-sm-12 " type='number' name="" id="" placeholder="Ingresa la cantidad" value={cantidad} onChange={e => funcionCapturarCantidad_y_CalcularPrecio(e)} />
                            </div>

                            <fieldset disabled>
                                <div className="Precio_Producto_A_Vender d-flex">
                                    <label className="col-md-4 col-sm-12 ps-2 me-2" for="exampleInputEmail1">Precio</label>
                                    <input className="col-md-8 col-sm-12" type='text' name="" id="" placeholder="Precio Final  Producto" value={valorVentaProducto} />
                                </div>
                            </fieldset>

                            <div className="contenedor_fotografia_producto_a_vender justify-content-center d-md-flex d-sm-none my-3 ">
                                <div style={contenedorfotografia} >
                                    <img style={imagen_Ingresar_Modificar_Producto} /> {/*Aca se agrega la imagen de la weaita */}
                                </div>
                            </div>

                            <div className="botonera_AddProducto_O_RemoverProducto d-flex justify-content-center">
                                <button onClick={(e)=>FuncionValidarFormulario(e)} type="submit" class="btn btn-primary mx-5">Anadir Producto</button>
                                <button type="reset" class="btn btn-danger mx-5">Remover Producto</button>
                            </div>

                        </form>
                    </div>

                        <div className="col-6 border border-primary">

                            <div className="contenedor_tabla_productos_a_vender" style={alturaTabla}>
                                <table className="table">
                                    <thead className="py-5">
                                        <tr className="py-5" style={noactivopapi}>
                                            <th className="py-3" scope="col">Nombre del Producto</th>
                                            <th className="py-3" scope="col">Codigo de Barras</th>
                                            <th className="py-3" scope="col">Categoria</th>
                                            <th className="py-3" scope="col">Cantidad</th>
                                            <th className="py-3" scope="col">Valor</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* ACA HAY UN ERROR, AL SER FALSE SE BORRA */}
                                    {productoValido&&(datosProductosVendidos.map(datosproductovendido => <ProductosVendidosporBoleta producto={datosproductovendido} />))}
                        
                                        
                                    </tbody>

                                </table>
                            </div>

                            <div class="form-group Metodo_Pago_Venta">
                                <div class="paymentMethod p-2 d-flex justify-content-between align-items-center border rounded">
                                    <div className="contenedor_Metodo_Pago d-flex align-items-center">
                                        <input class="form-radio-input" type="radio" id="check_paymentMethod_Mastercard" name="radio_payment" />
                                        <i class="fab fa-cc-mastercard text-white fa-2x"></i>
                                    </div>
                                    <div className="contenedor_Metodo_Pago d-flex align-items-center">
                                        <input class="form-radio-input ml-3" type="radio" id="check_paymentMethod_Visa" name="radio_payment" />
                                        <i class="fab fa-cc-visa text-white fa-2x"></i>
                                    </div>
                                    <div className="contenedor_Metodo_Pago d-flex align-items-center">
                                        <input class="form-radio-input ml-3" type="radio" id="check_paymentMethod" name="radio_payment" />
                                        <i class="fab fa-cc-diners-club fa-2x text-white"></i>
                                    </div>
                                    <div className="contenedor_Metodo_Pago d-flex align-items-center">
                                        <input class="form-radio-input ml-3 " type="radio" id="check_paymentMethod_express" name="radio_payment" />
                                        <i class="fab fa-cc-amex fa-2x text-white mr-3"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 d-flex justify-content-center botonera_Completar_O_Cancelar_Venta">
                                <div className="ok mx-3">
                                    <GiConfirmed className="btn_aceptar_ingresarNuevoProducto" />
                                </div>
                                <div className="cancel mx-3">
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