import React, { useContext, useState } from 'react'
import { AiOutlineDelete, AiFillDelete } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Layout from '../../Folder_Contenido_General/Layout';
import UserContext from '../../UserContext/UserContext';
import { useMediaQuery } from "react-responsive";

const ModificarProducto = () => {
  const {user,productoSeleccionado,categorias, productos,toggleProductoSeleccionado}  = useContext(UserContext);

    const isChiquito = useMediaQuery({
        query: "(max-width: 577px)",
      });
    const overFlow = {
        overflow: "hidden",
    };
    const titulo = { nuevo: "Ingresar Nuevo Producto", modificar: "Modificar Producto Existente" }
    const input_ingresarNuevoProducto = {
        backgroundColor: '#57CC99',
        color: 'black',
        fontSize: '1.3rem'
    };
    const label_ingresarNuevoProducto = {
        color: '#fff',
        fontSize: '1.3rem',
        
    }
    const input_ingresarNuevoUsuario_Desactivado = {
        backgroundColor: "#0f2b4e",
        color: "#fff",
        fontSize: "1.3rem",
      };
      const input_ingresarNuevoUsuario_Activado = {
        backgroundColor: "#667ea0",
        color: "#fff",
        fontSize: "1.3rem",
        opacity: "0.8"
      };

    const input_ingresarFotografia = { //Esto no funciona papiiiii
        backgroundColor: '#667ea0',
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
    const contenedorfotografia = {
        width: '250px',
        height: '250px',
    }

    const imagen_Ingresar_Modificar_Producto = {
        borderRadius: '50%',
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    }
    const visible = {
        visibility: "visible",
      };
      const no_visible = {
        visibility: "hidden",
      };


    const [fileUrl, setFileUrl] = useState(null);
    function processImage(event) {
        const imageFile = event.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
    }
    function processImage(event) {
        const imageFile = event.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setFileUrl(imageUrl)
    }

    // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌ ACA SI EMPIEZA LO CHIDO  ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌

    const [booleano_feliz_nombre, setBooleano_feliz_nombre] = useState(null);
    const [booleano_feliz_categoria, setBooleano_feliz_categoria] = useState(null);
    const [booleano_feliz_codigoBarras, setBooleano_feliz_codigoBarras] = useState(null);
    const [booleano_feliz_valorUnidad, setBooleano_feliz_valorUnidad] = useState(null);
    const [booleano_feliz_stockDisponible, setBooleano_feliz_stockDisponible] = useState(null);

    
    const [productos_Recargado, setProductos_Recargado] = useState(productos)
    const FuncionValidarFormulario = (e) => {
        let productoModificado = {
            nombreProducto: productoSeleccionado.nombreProducto, 
            categoria: productoSeleccionado.categoria,
            codigodebarras: productoSeleccionado.codigodebarras, 
            valorUnidad: productoSeleccionado.valorUnidad,
            stockDisponible: productoSeleccionado.stockDisponible, 
            id:productoSeleccionado.id
        }
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
            if (categoria_modificar.id != "") {
                setBooleano_feliz_categoria(true);
                productoModificado.categoria = categoria_modificar.id
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
            if (checkedTrue_ValorUnidad != "" && checkedTrue_ValorUnidad.length >= 1) {
                setBooleano_feliz_valorUnidad(true);
                productoModificado.valorUnidad = checkedTrue_ValorUnidad
                //Falta validarla para que contenga letras, numeros y una mayuscula
            }
            else {
                setBooleano_feliz_valorUnidad(false)
                productoModificado.valorUnidad = productoSeleccionado.valorUnidad
            }
        }
        if (stockDisponible === true) {
            if (checkedTrue_StockDisponible > 0) {
                setBooleano_feliz_stockDisponible(true);
                productoModificado.stockDisponible = checkedTrue_StockDisponible
            }
            else {
                setBooleano_feliz_stockDisponible(false)
                productoModificado.stockDisponible = productoSeleccionado.stockDisponible
            }
        }

        funcionModificarProducto(productoModificado)
        
        
    };
    

    async function funcionModificarProducto(productoModificado){
      

      if(productoModificado.nombreProducto !== "" && productoModificado.nombreProducto.length > 2 &&
      productoModificado.categoria != ""&& productoModificado.codigodebarras != "" && productoModificado.codigodebarras.length > 3 &&
      productoModificado.valorUnidad != "" && productoModificado.valorUnidad>= 10 &&
      productoModificado.stockDisponible !== ""){



        let existe = {nombre: false, codigo_barras: false}
        for(let x=0; x< productos_Recargado.length; x++){
          if(productoModificado.nombreProducto === productos_Recargado[x].nombre && productoModificado.id !==productos_Recargado[x].id){            
            existe.nombre=true
          }
          if(productoModificado.codigodebarras === productos_Recargado[x].codigo_barras && productoModificado.id !==productos_Recargado[x].id){            
            existe.codigo_barras= true
          }
        }
        if(existe.nombre ===false && existe.codigo_barras === false){
          const producto_para_put= {
            categoria_id:productoModificado.categoria,
            codigo_barras:productoModificado.codigodebarras, 
            costo_compra: "300", 
            factura_proveedor:'600', 
            fecha_ingreso:'25/10/2021',
            image:'',
          nombre:productoModificado.nombreProducto,
          precio_venta:productoModificado.valorUnidad, 
          stock: productoModificado.stockDisponible}
          const requestOptions = { //TIENE PROBLEMAS DE CORS NO SE QUE VERGA PERO FUNCIONA
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(producto_para_put),
            };
            console.log("Este es el producto para PUT")
          console.log(producto_para_put)
          const urlProductos = "https://3000-gray-tiglon-p4zyj6wv.ws-us17.gitpod.io/productos/"+productoModificado.id
          console.log(urlProductos)

          fetch(urlProductos, requestOptions)
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((err)=> console.log(err))   

          let categoria_nombre
          categorias.forEach(categoria=>{
              if(categoria.id===productoModificado.categoria){
                  categoria_nombre=categoria.nombre_cat
              }
          })

          const informacion = {nombreProducto: productoModificado.nombreProducto,
            codigodebarras: productoModificado.codigodebarras,
            categoria: productoModificado.categoria,
            categoria_nombre:categoria_nombre,
            id:productoModificado.id,
            valorUnidad: productoModificado.valorUnidad,
            stockDisponible: productoModificado.stockDisponible}


          toggleProductoSeleccionado(informacion)          
        }
        else{
          alert("Nombre del Producto o Codigo de Barras ya existen en la base de datos")
        }

        const urlUsuarios = "https://3000-gray-tiglon-p4zyj6wv.ws-us17.gitpod.io/productos"
        const response = await fetch(urlUsuarios)
        const dataProductos = await response.json()
        console.log(dataProductos)
        setProductos_Recargado(dataProductos)





      }
    }









    const [categoria_modificar, setCategoria_modificar] = useState({id:productoSeleccionado.categoria,nombre_cat:productoSeleccionado.categoria_nombre})
    const funcionRecogerCategoria= (parametro) =>{
      const id= parametro
      let nombre_cat
      categorias.forEach(categoria=>{
        if(categoria.id===id){
          nombre_cat=categoria.nombre_cat
        }
      })
      const categoria = {id: parametro, nombre_cat : nombre_cat}
      setCategoria_modificar(categoria)
  }
    const disabled = "disabled"
    const enabled = !disabled

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

    const [checkedTrue_StockDisponible, setCheckedTrue_StockDisponible] = useState("");
    const handler_CheckedTrue_StockDisponible = (e) => {
        setCheckedTrue_StockDisponible(e.target.value);
    };


    const [nombre, setNombre] = useState();
    const handler_Editar_Nombre = (e) => {
        if (e.target.checked === true) {
            setNombre(true);
        } else {
            setNombre(false);
        }
    };

    const [categoria, setCategoria] = useState();
    const handle_Editar_Categoria = (e) => {
        if (e.target.checked === true) {
            setCategoria(true);
        } else {
            setCategoria(false);
        }
    };

    const [codigoBarras, setCodigoBarras] = useState();
    const handle_Editar_CodigoBarras = (e) => {
        if (e.target.checked === true) {
            setCodigoBarras(true);
        } else {
            setCodigoBarras(false);
        }
    };

    const [valorUnidad, setValorUnidad] = useState();
    const handle_Editar_ValorUnidad = (e) => {
        if (e.target.checked === true) {
            setValorUnidad(true);
        } else {
            setValorUnidad(false);
        }
    };
    const [stockDisponible, setStockDispinible] = useState();
    const handle_Editar_StockDisponible = (e) => {
        if (e.target.checked === true) {
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
        console.log("producto cancelado");
    }

    //❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌   ACA TERMINA LO CHIDO  ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌




    return (
      <Layout hasNavbar hasSidebar>
        {parseInt(user.role_id)!==1 ? <h1 className="noPermisos"> Usted no posee permisos suficientes para acceder a esta categoria </h1>
        :
        !isChiquito ? (
          <div className="ingresarNuevoProducto">
            <div className="alo">
              <div className="h3 col-12 d-flex justify-content-center py-3 mb-4">
                <div className="titulo col-6 py-2 d-flex justify-content-center">
                  {titulo.modificar}
                </div>
              </div>
            </div>
           
              <form>
                <div className="alo d-flex">
                  <div className="col-md-7 col-sm-12">
                    <div className="fuera my-1 pb-3">
                      <div className="form-group">
                        <label
                          style={label_ingresarNuevoProducto}
                          className="col-md-4 col-sm-12 ps-2"
                          for="exampleInputEmail1"
                        >
                          <div className="row">
                            <div className="col-8">Nombre</div>
                            <div className="col-4">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                onClick={(e) => handler_Editar_Nombre(e)}
                              ></input>
                            </div>
                          </div>
                        </label>
                        {nombre ? (
                          <input
                            disabled={false}
                            style={input_ingresarNuevoUsuario_Activado}
                            className="col-md-8 col-sm-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el nombre del producto"
                            onChange={(e) => handle_CheckedTrue_Nombre(e)}
                            value={checkedTrue_Nombre}
                          />
                        ) : (
                          <input
                            disabled={true}
                            style={input_ingresarNuevoUsuario_Desactivado}
                            className="col-md-8 col-sm-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el nombre del producto"
                            value={productoSeleccionado.nombreProducto}
                          />
                        )}
                      </div>
                      {booleano_feliz_nombre == false ? (
                        <div
                          style={visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Nombre Invalido
                        </div>
                      ) : (
                        <div
                          style={no_visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Nombre Invalido
                        </div>
                      )}
                    </div>

                    <div className="fuera my-2 mb-4">
                      <div className="form-group d-flex">
                      <label
                          style={label_ingresarNuevoProducto}
                          className="col-md-4 col-sm-12 ps-2"
                          for="exampleInputEmail1"
                        >
                          <div className="row">
                            <div className="col-8">Categoria</div>
                            <div className="col-4">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                onClick={(e) => handle_Editar_Categoria(e)}
                              ></input>
                            </div>
                          </div>
                          </label>
                      <button
                      className="btn-roles-disponibles col-md-8 col-sm-12 dropdown-toggle d-md-flex"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      disabled = {!categoria?disabled:enabled}
                      style={!categoria?input_ingresarNuevoUsuario_Desactivado:input_ingresarNuevoUsuario_Activado}
                    >
                      <div className="datos_usuario me-4 d-flex flex-column my-auto py-1">
                        <div className="nombre_usuario mx-auto">
                          {categoria_modificar.nombre_cat}
                        </div>
                      </div>
                    </button>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      {categorias.map((elemento, key) => (
                        <li
                          className="dropdown-item"
                          key={key}
                          value={key}
                          onClick={() => funcionRecogerCategoria(elemento.id)}
                        >
                          {elemento.nombre_cat}
                        </li>
                      ))}
                    </ul>
                  </div>

                
                </div>
                                   
                    <div className="fuera my-2 mb-4">
                      <div className="form-group">
                        <label
                          style={label_ingresarNuevoProducto}
                          className="col-md-4 col-sm-12 ps-2"
                          for="exampleInputEmail1"
                        >
                          <div className="row">
                            <div className="col-8">Codigo de Barras</div>
                            <div className="col-4">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                onClick={(e) => handle_Editar_CodigoBarras(e)}
                              ></input>
                            </div>
                          </div>
                        </label>
                        {codigoBarras ? (
                          <input
                            disabled={false}
                            style={input_ingresarNuevoUsuario_Activado}
                            className="col-md-8 col-sm-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el codigo de barras"
                            onChange={(e) =>
                              handler_CheckedTrue_CodigoBarras(e)
                            }
                            value={checkedTrue_CodigoBarras}
                          />
                        ) : (
                          <input
                            disabled={true}
                            style={input_ingresarNuevoUsuario_Desactivado}
                            className="col-md-8 col-sm-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el codigo de barras"
                            value={productoSeleccionado.codigodebarras}
                          />
                        )}
                      </div>
                      {booleano_feliz_categoria == false ? (
                        <div
                          style={visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Codigo de Barras Invalido
                        </div>
                      ) : (
                        <div
                          style={no_visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Codigo de Barras Invalido
                        </div>
                      )}
                    </div>

                    <div className="fuera my-2 mb-4">
                      <div className="form-group">
                        <label
                          style={label_ingresarNuevoProducto}
                          className="col-md-4 col-sm-12 ps-2"
                          for="exampleInputEmail1"
                        >
                          <div className="row">
                            <div className="col-8">Valor Unidad</div>
                            <div className="col-4">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                onClick={(e) => handle_Editar_ValorUnidad(e)}
                              ></input>
                            </div>
                          </div>
                        </label>
                        {valorUnidad ? (
                          <input
                            disabled={false}
                            style={input_ingresarNuevoUsuario_Activado}
                            className="col-md-8 col-sm-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el valor unitario"
                            onChange={(e) => handler_CheckedTrue_ValorUnidad(e)}
                            value={checkedTrue_ValorUnidad}
                          />
                        ) : (
                          <input
                            disabled={true}
                            style={input_ingresarNuevoUsuario_Desactivado}
                            className="col-md-8 col-sm-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el valor unitario"
                            value={productoSeleccionado.valorUnidad}
                          />
                        )}
                      </div>
                      {booleano_feliz_valorUnidad == false ? (
                        <div
                          style={visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Valor Unidad Invalido
                        </div>
                      ) : (
                        <div
                          style={no_visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Valor Unidad Invalido
                        </div>
                      )}
                    </div>

                    <div className="fuera my-2 mb-2">
                      <div className="form-group">
                        <label
                          style={label_ingresarNuevoProducto}
                          className="col-md-4 col-sm-12 ps-2"
                          for="exampleInputEmail1"
                        >
                          <div className="row">
                            <div className="col-8">Stock Disponible</div>
                            <div className="col-4">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                onClick={(e) =>
                                  handle_Editar_StockDisponible(e)
                                }
                              ></input>
                            </div>
                          </div>
                        </label>
                        {stockDisponible ? (
                          <input
                            disabled={false}
                            style={input_ingresarNuevoUsuario_Activado}
                            className="col-md-8 col-sm-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el stock disponible"
                            onChange={(e) =>
                              handler_CheckedTrue_StockDisponible(e)
                            }
                            value={checkedTrue_StockDisponible}
                          />
                        ) : (
                          <input
                            disabled={true}
                            style={input_ingresarNuevoUsuario_Desactivado}
                            className="col-md-8 col-sm-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el stock disponible"
                            value={productoSeleccionado.stockDisponible}
                          />
                        )}
                      </div>
                      {booleano_feliz_stockDisponible == false ? (
                        <div
                          style={visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Stock Disponible Invalido
                        </div>
                      ) : (
                        <div
                          style={no_visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Stock Disponible Invalido
                        </div>
                      )}
                    </div>
                  </div>
                 
                 
                 
                  <div className="col-md-5 col-sm-12 ps-3">
                    <div className="ingresar_foto mb-5 ps-2" style={overFlow}>
                      <label
                        style={label_ingresarNuevoProducto}
                        className=" col-lg-4 col-md-4 col-sm-12 mb-4"
                        for="exampleInputPassword1"
                      >
                        Ingresa Imagen{" "}
                      </label>
                      <input
                        style={input_ingresarFotografia}
                        className="ingresarArchivo"
                        type="file"
                        name=""
                        id=""
                        accept="image/*"
                        onChange={processImage}
                      />
                    </div>
                    <div className="contenedorcontenedor justify-content-center d-md-flex d-sm-none ">
                      {fileUrl ? (
                        <div style={contenedorfotografia}>
                          <img
                            style={imagen_Ingresar_Modificar_Producto}
                            src={fileUrl}
                            alt=""
                          />
                        </div>
                      ) : (
                        ""
                      )}{" "}
                      {/* ASI NO SE MUESTRAN BORDES PLOMOS ANTIESTETICOS */}
                    </div>
                  </div>
                </div>

                <div className="alo">
                  <div className="botonera_AddProducto_O_RemoverProducto d-flex justify-content-center mb-1">
                    <button
                      onClick={(e) => FuncionValidarFormulario(e)}
                      type="submit"
                      class="btn btn-primary mx-5"
                    >
                      Confirmar Producto
                    </button>
                    <Link to="/catalogo_paginaprincipal">
                      <button
                        type="reset"
                        onClick={(e) => cancelar_Producto(e)}
                        class="btn btn-danger mx-5"
                      >
                        Cancelar
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            
          </div>
        ) 
        
        : (
          
          
          <div className="ingresarNuevoProducto">
            <div className="alo">
              <div className="h3 col-12 d-flex justify-content-center py-4 my-1">
                <div className="titulo col-12 py-2 d-flex justify-content-center">
                  {titulo.modificar}
                </div>
              </div>
            </div>
           
              <form>
                <div className="alo">
                  <div className="col-12">
                    <div className="fuera my-2 pb-3">
                      <div className="form-group">
                        <label
                          style={label_ingresarNuevoProducto}
                          className="col-12 d-flex justify-content-between"
                          for="exampleInputEmail1"
                        >
                          <div className="row">
                            <div className="col-8">Nombre</div>
                            <div className="col-4">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                onClick={(e) => handler_Editar_Nombre(e)}
                              ></input>
                            </div>
                          </div>
                        </label>
                        {nombre ? (
                          <input
                            disabled={false}
                            style={input_ingresarNuevoUsuario_Activado}
                            className="col-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el nombre del producto"
                            onChange={(e) => handle_CheckedTrue_Nombre(e)}
                            value={checkedTrue_Nombre}
                          />
                        ) : (
                          <input
                            disabled={true}
                            style={input_ingresarNuevoUsuario_Desactivado}
                            className="col-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el nombre del producto"
                            value={productoSeleccionado.nombreProducto}
                          />
                        )}
                      </div>
                      {booleano_feliz_nombre == false ? (
                        <div
                          style={visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Nombre Invalido
                        </div>
                      ) : (
                        <div
                          style={no_visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Nombre Invalido
                        </div>
                      )}
                    </div>



                    <div className="fuera my-2 mb-4">
                      <div className="form-group">
                        <label
                          style={label_ingresarNuevoProducto}
                          className="col-12 d-flex justify-content-between"
                          for="exampleInputEmail1"
                        >
                          <div className="row">
                            <div className="col-8">Categoria</div>
                            <div className="col-4">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                onClick={(e) => handle_Editar_Categoria(e)}
                              ></input>
                            </div>
                          </div>
                        </label>
                        {categoria ? (
                          <input
                            disabled={false}
                            style={input_ingresarNuevoUsuario_Activado}
                            className="col-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa la categoria"
                            onChange={(e) => handler_CheckedTrue_Categoria(e)}
                            value={checkedTrue_Categoria}
                          />
                        ) : (
                          <input
                            disabled={true}
                            style={input_ingresarNuevoUsuario_Desactivado}
                            className="col-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa la categoria"
                            value={productoSeleccionado.categoria}
                          />
                        )}
                      </div>
                      {booleano_feliz_categoria == false ? (
                        <div
                          style={visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Categoria Invalida
                        </div>
                      ) : (
                        <div
                          style={no_visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Categoria Invalida
                        </div>
                      )}
                    </div>

                    <div className="fuera my-2 mb-4">
                      <div className="form-group">
                        <label
                          style={label_ingresarNuevoProducto}
                          className="col-12 d-flex justify-content-between"
                          for="exampleInputEmail1"
                        >
                          <div className="row">
                            <div className="col-10">Codigo de Barras</div>
                            <div className="col-2">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                onClick={(e) => handle_Editar_CodigoBarras(e)}
                              ></input>
                            </div>
                          </div>
                        </label>
                        {codigoBarras ? (
                          <input
                            disabled={false}
                            style={input_ingresarNuevoUsuario_Activado}
                            className="col-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el codigo de barras"
                            onChange={(e) =>
                              handler_CheckedTrue_CodigoBarras(e)
                            }
                            value={checkedTrue_CodigoBarras}
                          />
                        ) : (
                          <input
                            disabled={true}
                            style={input_ingresarNuevoUsuario_Desactivado}
                            className="col-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el codigo de barras"
                            value={productoSeleccionado.codigodebarras}
                          />
                        )}
                      </div>
                      {booleano_feliz_categoria == false ? (
                        <div
                          style={visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Codigo de Barras Invalido
                        </div>
                      ) : (
                        <div
                          style={no_visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Codigo de Barras Invalido
                        </div>
                      )}
                    </div>

                    <div className="fuera my-2 mb-4">
                      <div className="form-group">
                        <label
                          style={label_ingresarNuevoProducto}
                          className="col-12 d-flex justify-content-between"
                          for="exampleInputEmail1"
                        >
                          <div className="row">
                            <div className="col-10">Valor Unidad</div>
                            <div className="col-2">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                onClick={(e) => handle_Editar_ValorUnidad(e)}
                              ></input>
                            </div>
                          </div>
                        </label>
                        {valorUnidad ? (
                          <input
                            disabled={false}
                            style={input_ingresarNuevoUsuario_Activado}
                            className="col-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el valor unitario"
                            onChange={(e) => handler_CheckedTrue_ValorUnidad(e)}
                            value={checkedTrue_ValorUnidad}
                          />
                        ) : (
                          <input
                            disabled={true}
                            style={input_ingresarNuevoUsuario_Desactivado}
                            className="col-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el valor unitario"
                            value={productoSeleccionado.valorUnidad}
                          />
                        )}
                      </div>
                      {booleano_feliz_valorUnidad == false ? (
                        <div
                          style={visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Valor Unidad Invalido
                        </div>
                      ) : (
                        <div
                          style={no_visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Valor Unidad Invalido
                        </div>
                      )}
                    </div>

                    <div className="fuera my-2 mb-4">
                      <div className="form-group">
                        <label
                          style={label_ingresarNuevoProducto}
                          className="col-12 d-flex justify-content-between"
                          for="exampleInputEmail1"
                        >
                          <div className="row">
                            <div className="col-8">Stock Disponible</div>
                            <div className="col-4">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                onClick={(e) =>
                                  handle_Editar_StockDisponible(e)
                                }
                              ></input>
                            </div>
                          </div>
                        </label>
                        {stockDisponible ? (
                          <input
                            disabled={false}
                            style={input_ingresarNuevoUsuario_Activado}
                            className="col-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el stock disponible"
                            onChange={(e) =>
                              handler_CheckedTrue_StockDisponible(e)
                            }
                            value={checkedTrue_StockDisponible}
                          />
                        ) : (
                          <input
                            disabled={true}
                            style={input_ingresarNuevoUsuario_Desactivado}
                            className="col-12"
                            type="text"
                            name=""
                            id=""
                            placeholder="Ingresa el stock disponible"
                            value={productoSeleccionado.stockDisponible}
                          />
                        )}
                      </div>
                      {booleano_feliz_stockDisponible == false ? (
                        <div
                          style={visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Stock Disponible Invalido
                        </div>
                      ) : (
                        <div
                          style={no_visible}
                          className="invalido d-flex justify-content-end my-0"
                        >
                          Stock Disponible Invalido
                        </div>
                      )}
                    </div>
       
                  </div>
       
       
       
       
                  <div className="col-md-5 col-sm-12 mb-3">
                    <div className="ingresar_foto mb-1 ps-2" style={overFlow}>
                      <label
                        style={label_ingresarNuevoProducto}
                        className=" col-lg-4 col-md-4 col-sm-12 mb-4"
                        for="exampleInputPassword1"
                      >
                        Ingresa Imagen{" "}
                      </label>
                      <input
                        style={input_ingresarFotografia}
                        className="ingresarArchivo"
                        type="file"
                        name=""
                        id=""
                        accept="image/*"
                        onChange={processImage}
                      />
                    </div>
                    <div className="contenedorcontenedor justify-content-center d-md-flex d-sm-none ">
                      {fileUrl ? (
                        <div style={contenedorfotografia}>
                          <img
                            style={imagen_Ingresar_Modificar_Producto}
                            src={fileUrl}
                            alt=""
                          />
                        </div>
                      ) : (
                        ""
                      )}{" "}
                      {/* ASI NO SE MUESTRAN BORDES PLOMOS ANTIESTETICOS */}
                    </div>
                  </div>
                </div>

                <div className="alo">
                  <div className="botonera_AddProducto_O_RemoverProducto d-flex justify-content-center">
                    <button
                      onClick={(e) => FuncionValidarFormulario(e)}
                      type="submit"
                      class="btn btn-primary mx-5"
                    >
                      Confirmar Producto
                    </button>
                    <Link to="/catalogo_paginaprincipal">
                      <button
                        type="reset"
                        onClick={(e) => cancelar_Producto(e)}
                        class="btn btn-danger mx-5"
                      >
                        Cancelar
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
          </div>
        )
                      }
        
      </Layout>
    );
}

export default ModificarProducto
