import React,{useContext, useState} from 'react'
import { AiOutlineDelete, AiFillDelete } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";
import Layout from '../../Folder_Contenido_General/Layout';
import UserContext from '../../UserContext/UserContext';

const ModificarProducto = () => {
    const titulo ={nuevo:"Ingresar Nuevo Producto", modificar:"Modificar Producto Existente"}
    const input_ingresarNuevoProducto = {
        backgroundColor: '#57CC99',
        color: 'black',
        fontSize: '1.3rem'     
      };
      const label_ingresarNuevoProducto={
        color: 'black',
        fontSize: '1.3rem',
        marginBottom: '1rem'
      }

      const input_ingresarFotografia = { //Esto no funciona papiiiii
        backgroundColor: '#57CC99',
        color: 'black',
        fontSize: '1.3rem',
        borderRadius: '35px',
        transition: "all ease .5s",
        transition: "all ease .5s",
            ":hover": {
        backgroundColor: "yellow",
        color: "red"
        }
    }
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

    

    const [fileUrl, setFileUrl] = useState(null);
    function processImage(event){
        const imageFile = event.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
     }
     function processImage(event){
        const imageFile = event.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setFileUrl(imageUrl)
     }

     // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌ ACA SI EMPIEZA LO CHIDO PAPIIIIIIIIIII ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
    const {productoSeleccionado, toggleProductoSeleccionado}= useContext(UserContext);
    
    const [booleano_feliz_nombre, setBooleano_feliz_nombre] = useState(null);
    const [booleano_feliz_categoria, setBooleano_feliz_categoria] = useState(null);
    const [booleano_feliz_codigoBarras, setBooleano_feliz_codigoBarras] = useState(null);
    const [booleano_feliz_valorUnidad, setBooleano_feliz_valorUnidad] = useState(null);
    const [booleano_feliz_stockDisponible, setBooleano_feliz_stockDisponible] = useState(null);

    //const usuario = { nombre:"Juan Carlos", apellido: "Gonzalez",username: "juankaX", password: "juan123", permiso: "Administrador", tema: "Dark", Fuente: { tipo: "Arial", tamaño: 48, titulo_sidebar: true }, isFacebook: false, isGoogle: false }

    const FuncionValidarFormulario = (e) => {
        let productoModificado = { nombreProducto: productoSeleccionado.nombreProducto, categoria: productoSeleccionado.categoria, 
                                codigodebarras: productoSeleccionado.codigodebarras, valorUnidad: productoSeleccionado.valorUnidad, 
                                stockDisponible: productoSeleccionado.stockDisponible }
        e.preventDefault();

        if (nombre === true) {
            if (checkedTrue_Nombre !== "" && checkedTrue_Nombre.length > 2) {
                //Falta que solo acepte letras y no numeros
                setBooleano_feliz_nombre(true);
                productoModificado.nombreProducto = checkedTrue_Nombre
            } else {
                setBooleano_feliz_nombre(false);
                productoModificado.nombreProducto = productoSeleccionado.nombreProducto
                console.log(nombre);
            }
        }
        if (categoria === true) {
            if (checkedTrue_Categoria != "" && checkedTrue_Categoria.length > 2) {
                setBooleano_feliz_categoria(true);
                productoModificado.categoria = checkedTrue_Categoria
            } else {
                setBooleano_feliz_categoria(false);
                productoModificado.categoria = productoSeleccionado.categoria
            }
        }
        if (codigoBarras === true) {
            if (checkedTrue_CodigoBarras != "" && checkedTrue_CodigoBarras.length > 3) {
                setBooleano_feliz_codigoBarras(true);
                productoModificado.codigodebarras = checkedTrue_CodigoBarras
            } else {
                setBooleano_feliz_codigoBarras(false);
                productoModificado.codigodebarras = productoSeleccionado.codigodebarras
            }
        }
        if (valorUnidad === true) {
            if (checkedTrue_ValorUnidad != "" && checkedTrue_ValorUnidad.length>=1) {
                setBooleano_feliz_valorUnidad(true);
                productoModificado.valorUnidad = checkedTrue_ValorUnidad
                //Falta validarla para que contenga letras, numeros y una mayuscula
            }
            else{
                setBooleano_feliz_valorUnidad(false)
                productoModificado.valorUnidad = productoSeleccionado.valorUnidad
            }
        }
        if (stockDisponible === true) {
            if (checkedTrue_StockDisponible === "") {
                setBooleano_feliz_stockDisponible(true);
                productoModificado.stockDisponible = checkedTrue_StockDisponible
                //Falta validarla para que contenga letras, numeros y una mayuscula
            }
            else{
                setBooleano_feliz_stockDisponible(false)
                productoModificado.stockDisponible = productoSeleccionado.stockDisponible
            }
        }

        if (
            booleano_feliz_nombre ||
            booleano_feliz_categoria ||
            booleano_feliz_codigoBarras ||
            booleano_feliz_valorUnidad||
            booleano_feliz_stockDisponible
        ) {
            console.log("LGTM = Looks Good To Me");
            //ACA HAREMOS EL POST DEL NUEVO USUARIO PAPI
            console.log("Que haga el POST dice....");
            console.log(productoModificado);
        }
    };

    const [checkedTrue_Nombre, setCheckedTrue_Nombre] = useState("");
    const handle_CheckedTrue_Nombre = (e) => {
        setCheckedTrue_Nombre(e.target.value);
    };

    const [checkedTrue_Categoria, setCheckedTrue_Categoria] = useState("");
    const handler_CheckedTrue_Categoria = (e) => {
        setCheckedTrue_Categoria(e.target.value);
    };

    const [checkedTrue_CodigoBarras, setCheckedTrue_CodigoBarras] = useState("");
    const handler_CheckedTrue_CodigoBarras = (e) => {
        setCheckedTrue_CodigoBarras(e.target.value);
    };

    const [checkedTrue_ValorUnidad, setCheckedTrue_ValorUnidad] = useState("");
    const handler_CheckedTrue_ValorUnidad = (e) => {
        setCheckedTrue_ValorUnidad(e.target.value);
    };

    const [checkedTrue_StockDisponible, setCheckedTrue_StockDisponible] =useState();
    const handler_CheckedTrue_StockDisponible = (e) => {
        setCheckedTrue_StockDisponible(e.target.value);
    };


    const [nombre, setNombre] = useState();
    const handler_Editar_Nombre = (e) => {
        if (e.target.checked == true) {
            setNombre(true);
        } else {
            setNombre(false);
        }
    };

    const [categoria, setCategoria] = useState();
    const handle_Editar_Categoria = (e) => {
        if (e.target.checked == true) {
            setCategoria(true);
        } else {
            setCategoria(false);
        }
    };

    const [codigoBarras, setCodigoBarras] = useState();
    const handle_Editar_CodigoBarras = (e) => {
        if (e.target.checked == true) {
            setCodigoBarras(true);
        } else {
            setCodigoBarras(false);
        }
    };

    const [valorUnidad, setValorUnidad] = useState();
    const handle_Editar_ValorUnidad = (e) => {
        if (e.target.checked == true) {
            setValorUnidad(true);
        } else {
            setValorUnidad(false);
        }
    };
    const [stockDisponible, setStockDispinible] = useState();
    const handle_Editar_StockDisponible = (e) => {
        if (e.target.checked == true) {
            setStockDispinible(true);
        } else {
            setStockDispinible(false);
        }
    };

    const cancelar_Producto = (e) => {
        setNombre(false)
        setCategoria(false)
        setCodigoBarras(false)
        setValorUnidad(false)
        setStockDispinible(false)
        setCheckedTrue_Nombre("")
        setCheckedTrue_Categoria("")
        setCheckedTrue_CodigoBarras("")
        setCheckedTrue_ValorUnidad("")
        setCheckedTrue_StockDisponible("")
    }

  //❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌   ACA TERMINA LO CHIDO PAPIIIII ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌




    return (
        <Layout hasNavbar hasSidebar>
            <div className="ingresarNuevoProducto">
                <div className="row">
                    <div className="h3 col-12 d-flex justify-content-center py-3 mb-4">
                        <div className="titulo col-6 py-2 d-flex justify-content-center">
                            {titulo.modificar}
                        </div>
                    </div>
                </div>
                <form>
                    <div className="row">
                        <div className="col-md-7 col-sm-12">
                            <div className="caja_contenedora_label_input form-group my-2 mb-4">
                                <label style={label_ingresarNuevoProducto} className="col-md-4 col-sm-12 ps-2" for="exampleInputEmail1">Nombre del Producto</label>
                                <input style={input_ingresarNuevoProducto} className="col-md-8 col-sm-12" type="text" name="" id="" placeholder="Ingresa el nombre del producto" value={productoSeleccionado.nombreProducto} />
                            </div>
                            <div className="form-group mb-4">
                                <label style={label_ingresarNuevoProducto} className="col-md-4 col-sm-12  ps-2" for="exampleInputPassword1">Categoria</label>
                                <input style={input_ingresarNuevoProducto} className="col-md-8 col-sm-12" type="text" name="" id="" placeholder="Ingresa la categoria del producto" value={productoSeleccionado.categoria} />
                            </div>
                            <div className="form-group mb-4">
                                <label style={label_ingresarNuevoProducto} className="col-md-4 col-sm-12  ps-2" for="exampleInputPassword1">Codigo de Barras</label>
                                <input style={input_ingresarNuevoProducto} className="col-md-8 col-sm-12" type="text" name="" id="" placeholder="Ingresa el codigo de barras del producto" value={productoSeleccionado.codigodebarras} />
                            </div>
                            <div className="form-group mb-4">
                                <label style={label_ingresarNuevoProducto} className="col-md-4 col-sm-12  ps-2" for="exampleInputPassword1">Valor Unidad</label>
                                <input style={input_ingresarNuevoProducto} className="col-md-8 col-sm-12" type="text" name="" id="" placeholder="Ingresa el valor por unidad del producto" value={productoSeleccionado.valorUnidad} />
                            </div>
                            <div className="form-group mb-4">
                                <label style={label_ingresarNuevoProducto} className="col-md-4 col-sm-12  ps-2" for="exampleInputPassword1">Stock Disponible</label>
                                <input style={input_ingresarNuevoProducto} className="col-md-8 col-sm-12" type="text" name="" id="" placeholder="Ingresa el stock disponible para el producto" value={productoSeleccionado.stockDisponible} />
                            </div>
                        </div>

                        <div className="col-md-5 col-sm-12 mt-2 mb-5">
                            <div className="ingresar_foto mb-5 ps-2">
                                <label style={label_ingresarNuevoProducto} className=" col-lg-4 col-md-4 col-sm-12 mb-4" for="exampleInputPassword1">Ingresa Imagen </label>
                                <input style={input_ingresarFotografia} className="ingresarArchivo" type="file" name="" id="" accept="image/*" onChange={processImage} />
                            </div>
                            <div className="contenedorcontenedor justify-content-center d-md-flex d-sm-none ">
                                {fileUrl ? <div style={contenedorfotografia} >
                                    <img style={imagen_Ingresar_Modificar_Producto} src={fileUrl} />
                                </div> : ""} {/* ASI NO SE MUESTRAN BORDES PLOMOS ANTIESTETICOS */}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="botonera_AddProducto_O_RemoverProducto d-flex justify-content-center">
                            <button
                                onClick={(e) => FuncionValidarFormulario(e)}
                                type="submit"
                                class="btn btn-primary mx-5"
                            >
                                Crear Nuevo Usuario
                            </button>
                            <button type="reset" onClick={(e) => cancelar_Producto(e)} class="btn btn-danger mx-5">
                                Cancelar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default ModificarProducto
