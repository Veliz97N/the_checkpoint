import React,{useState,useContext} from 'react'
import { AiOutlineDelete, AiFillDelete } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";
import Producto_en_tabla_catalogo from './Producto_en_tabla_catalogo';
import UserContext from '../../UserContext/UserContext';
import { Link } from "react-router-dom";
import { IoAddCircleOutline, IoAddCircleSharp } from "react-icons/io5";




const Catalogo_PaginaPrincipal = () => {
    const { productos } = useContext(UserContext);
    const noactivopapi = {
        background: "#57CC99",
        transition: "all 0.5s ease;",
    }
    const Catalogo_PaginaPrincipal = {
        position: 'relative',
    }
    const contenedor_tabla = {
        position: 'absolute',
        width: '100%'
    }
    const botonIngresarNuevoProducto = {
        position: 'absolute',
        top: '25px',
        right: '25px',
        zIndex: '1000',
        background: '#80ED99',
        borderRadius: '25px',
        color: 'black',
        textDecoration: 'none',
    }
    const botonagregarNuevoProducto = {
        fontSize: '1.4rem'
    }

    const [indiceBuscarElemento, setIndiceBuscarElemento] = useState("0")

    const handleAddrTypeChange = (e) => {
        setIndiceBuscarElemento(e.target.value)
        
    }
    const [addrtype, setAddrtype] = useState(["Buscar por Nombre", "Buscar por Categoria", "Buscar por Codigo de Barras"])
    const Add = addrtype.map(Add => Add
    )

    
    const [listaProductosFiltrado, setListaProductosFiltrado] = useState([])
    
    const [valor, setValor] = useState("")

    const handlesetvalor = (e) => {
        setValor(e.target.value)
       
    }
    
    const funcion_filtrar_busqueda_producto = (tipoBusqueda, valorBusqueda) => {
        console.log(valorBusqueda)
        if(tipoBusqueda==="0" &&valorBusqueda!==""){
            
            const productoFiltrados = productos.filter(producto => producto.nombreProducto.includes(valorBusqueda))
            setListaProductosFiltrado(productoFiltrados)
        }
        else if(tipoBusqueda==="1" &&valorBusqueda!==""){
            
            const productoFiltrados = productos.filter(producto => producto.categoria.includes(valorBusqueda))
            setListaProductosFiltrado(productoFiltrados)
        }
        else if ( tipoBusqueda==="2" &&valorBusqueda!==""){
            
            const productoFiltrados = productos.filter(producto => producto.codigodebarras.includes(valorBusqueda))
            setListaProductosFiltrado(productoFiltrados)
        }
        else if(valorBusqueda==="" || listaProductosFiltrado.length === 0 ){ //Si el valor de busqueda es ''
            const productoFiltrados = []
            setListaProductosFiltrado(productoFiltrados)
        }
        //Me falta saber si la lista tiene un largo 0 
    } 
    

    return (
        <div style={Catalogo_PaginaPrincipal} className="Catalogo-PaginaPrincipal">
            <Link className="boton_hacia_IngresarNuevoProducto p-2" to="/Catalogo_IngresarNuevoProducto" style={botonIngresarNuevoProducto}>
                          <IoAddCircleOutline style={botonagregarNuevoProducto}/> Agregar Producto
            </Link>                    
            <div style={contenedor_tabla} className="contenedor-tabla py-5 px-3">
                <table className="table">
                    <thead className="py-5">
                        <tr className="py-5" style={noactivopapi}>                            
                            <th className="py-3"scope="col">Nombre del Producto</th>
                            <th className="py-3" scope="col">Codigo de Barras</th>
                            <th className="py-3" scope="col">Categoria</th>
                            <th className="py-3" scope="col">Valor</th>
                            <th className="py-3" scope="col">Stock Disponible</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={noactivopapi}>
                            <td>
                                < select
                                    onChange={e => handleAddrTypeChange(e)}
                                    className="browser-default custom-select" >
                                    {
                                        Add.map((opcionBusqueda, key) => <option key={key} value={key}>{opcionBusqueda}</option>)
                                    }
                                </select >)      
                            </td>

                            <td colspan="4">
                                <input type="text"
                                    class="form-control"
                                    onChange={handlesetvalor}
                                    onKeyPress={e => {
                                        if (e.key === 'Enter') { 
                                            funcion_filtrar_busqueda_producto(indiceBuscarElemento,valor);
                                        }
                                    }}/>
                            </td>

                        </tr>
                        {   (listaProductosFiltrado.length >=1 )?listaProductosFiltrado.map(producto =>  <Producto_en_tabla_catalogo  producto={producto}/>)
                        :productos.map(producto =>  <Producto_en_tabla_catalogo  producto={producto}/>)}                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Catalogo_PaginaPrincipal
