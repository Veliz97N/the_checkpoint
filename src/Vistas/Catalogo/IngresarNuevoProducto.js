import React,{useContext, useState} from 'react'
import Layout from '../../Folder_Contenido_General/Layout';
import { useMediaQuery } from "react-responsive";
import UserContext from '../../UserContext/UserContext';
import { useEffect } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';
import { Fetch_productos, Fetch_usuarios, Fetch_roles, Fetch_categorias } from '../../Fetch';
import { GrWindows } from 'react-icons/gr';

const IngresarNuevoProducto = () => {
  const {categorias_fetch,productos,categorias,toggleSetCategorias}  = useContext(UserContext);
    const isChiquito = useMediaQuery({
        query: "(max-width: 577px)",
      });
    const titulo ={nuevo:"Ingresar Nuevo Producto", modificar:"Modificar Producto Existente"}
    const input_ingresarNuevoProducto = {
        backgroundColor: '#667ea0',
        color: 'white',
        fontSize: '1.3rem'     
      };
      const label_ingresarNuevoProducto={
        color: 'white',
        fontSize: '1.3rem',
        
      }
      const visible = {
        visibility:'visible'
    }
    const no_visible = {
        visibility:'hidden'
    }
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
    const contenedorfotografia={
        width: '250px',
        height:'250px',
    }
    const overFlow = {
        overflow:'hidden'
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
        setFileUrl(imageUrl)
     }

     const [nombre_nuevoProducto, setNombre_nuevoProducto] = useState('')
     const [categoria_nuevoProducto, setCategoria_nuevoProducto] = useState('')
     const [codigoBarras_nuevoProducto, setCodigoBarras_nuevoProducto] = useState('')
     const [valor_nuevoProducto, setValor_nuevoProducto] = useState('')
     const [stock_nuevoProducto, setStock_nuevoProducto] = useState('')
 
     const [booleano_feliz_producto, setBooleano_feliz_producto]= useState(null)
     const [booleano_feliz_categoria, setBooleano_feliz_categoria]= useState(null)
     const [booleano_feliz_codigoBarra, setBooleano_feliz_codigoBarra]= useState(null)
     const [booleano_feliz_valor, setBooleano_feliz_valor]= useState(null)
     const [booleano_feliz_stock,setBooleano_feliz_stock]= useState(null)

  
    const funcionPublicarProducto = () => {
      if (
        nombre_nuevoProducto != "" &&
        nombre_nuevoProducto.length > 2 &&
        categoria_nuevoProducto != "" &&
        categoria_nuevoProducto.length > 2 &&
        codigoBarras_nuevoProducto != "" &&
        codigoBarras_nuevoProducto.length > 3 &&
        valor_nuevoProducto != "" &&
        valor_nuevoProducto.length > 2 &&
        stock_nuevoProducto != "" &&
        stock_nuevoProducto.length >= 1
      ) {
        console.log("LGTM = Looks Good To Me");
        //ACA HAREMOS EL POST DEL NUEVO USUARIO PAPI
        console.log("Que haga el POST dice....");
        let contador_existencias = 0
        let info_categoria = 0
        for (let x = 0; x < categorias.length; x++) {
          //ACA VEO SI LA CATEGORIA INGRESADA YA EXISTE EN CATEGORIAS O SI DEBO CREAR UNA NUEVA
          if (categorias[x].nombre_cat === categoria_nuevoProducto) {
            contador_existencias +=1
            info_categoria = {id_categoria: categorias[x].id, nombre_categoria:categorias[x].nombre_cat}
            console.log(info_categoria)
        }
      }
      const nuevo_Producto = {
        codigo_barras: codigoBarras_nuevoProducto, 
        costo_compra:"600",
        factura_proveedor:"800",
        fecha_ingreso:"25/10/2021",
        categoria_id:info_categoria.id_categoria,
        // categoria: categoria_nuevoProducto,
        image: "", 
        nombre: nombre_nuevoProducto, 
        precio_venta: valor_nuevoProducto, 
        stock: stock_nuevoProducto}

        
        if (contador_existencias >=1) {
          //CREAR EL PRODUCTO CON EL ID DE CATEGORIA RESCATADO EN EXISTE.id
          console.log("Existe esta madre");
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(nuevo_Producto),
          };
          const urlProducto =
            "https://3000-gray-tiglon-p4zyj6wv.ws-us18.gitpod.io/productos";
          fetch(urlProducto, requestOptions)
            .then((response) => response.json())
            .then((data) => console.log(data, nuevo_Producto));
        }


       else {
        const nueva_categoria = {
          descripcion_cat: "Nueva Categoria: " + categoria_nuevoProducto,
          nombre_cat: categoria_nuevoProducto,
        };
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(nueva_categoria),
        };
        const urlProducto =
          "https://3000-gray-tiglon-p4zyj6wv.ws-us18.gitpod.io/categoria";
        fetch(urlProducto, requestOptions)
          .then((response) => response.json())
          .then((data) => console.log(data, nueva_categoria));

        const categorias_incluyendo_nuevas = [...categorias,nueva_categoria]
        toggleSetCategorias(categorias_incluyendo_nuevas)
      }
    }
    };
     //const usuario = { nombre:"Juan Carlos", apellido: "Gonzalez",username: "juankaX", password: "juan123", permiso: "Administrador", tema: "Dark", Fuente: { tipo: "Arial", tamaño: 48, titulo_sidebar: true }, isFacebook: false, isGoogle: false }
     const FuncionValidarFormulario = (e) => {
      
     
     
        const nuevo_Producto = {
        codigo_barras: codigoBarras_nuevoProducto, 
        costo_compra:"600",
        factura_proveedor:"800",
        fecha_ingreso:"25/10/2021",
        // categoria: categoria_nuevoProducto,
        image: "", 
        nombre: nombre_nuevoProducto, 
        precio_venta: valor_nuevoProducto, 
        stock: stock_nuevoProducto}
        console.log("Entre al primer click")
         e.preventDefault();
 
         if(nombre_nuevoProducto !='' && nombre_nuevoProducto.length>2 ){ //Falta que solo acepte letras y no numeros
            setBooleano_feliz_producto(true)
         } 
         else{
            setBooleano_feliz_producto(false)
         }
 
         if(categoria_nuevoProducto!='' && categoria_nuevoProducto.length>2 ){
            setBooleano_feliz_categoria(true)
         }
         else{
            setBooleano_feliz_categoria(false)
         }
 
         if(codigoBarras_nuevoProducto != '' && codigoBarras_nuevoProducto.length>3){
            setBooleano_feliz_codigoBarra(true)
         }
         else{
            setBooleano_feliz_codigoBarra(false)
         }
 
         if(valor_nuevoProducto!='' &&valor_nuevoProducto.length>2) { //Falta validarla para que contenga letras, numeros y una mayuscula
            setBooleano_feliz_valor(true)
         }
         else{
            setBooleano_feliz_valor(false)
         }
 
         if(stock_nuevoProducto!='' && stock_nuevoProducto.length>=1){
            setBooleano_feliz_stock(true)
         }
         else{
            setBooleano_feliz_stock(false)
         }
         funcionPublicarProducto()
         
        
         }
      
   
    
  

    return (
      <Layout hasNavbar hasSidebar>
        {!isChiquito ? (
          <div className="ingresarNuevoProducto">
            <div className="alo">
              <div className="h3 col-12 d-flex justify-content-center py-3 mb-4">
                <div className="titulo col-6 py-2 d-flex justify-content-center">
                  {titulo.nuevo}
                </div>
              </div>
            </div>
            <form>
              <div className="alo d-flex">
                <div className="col-md-7 col-sm-12">
                  <div className="fuera my-2 mb-4">
                    <div className="form-group">
                      <label
                        style={label_ingresarNuevoProducto}
                        className="col-md-4 col-sm-12 ps-2"
                        for="exampleInputEmail1"
                      >
                        Nombre del Producto
                      </label>
                      <input
                        style={input_ingresarNuevoProducto}
                        className="col-md-8 col-sm-12"
                        type="text"
                        name=""
                        id=""
                        placeholder="Ingresa el nombre del producto"
                        onChange={(e) =>
                          setNombre_nuevoProducto(e.target.value)
                        }
                        value={nombre_nuevoProducto}
                      />
                    </div>
                    {booleano_feliz_producto == false ? (
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
                        className="col-md-4 col-sm-12  ps-2"
                        for="exampleInputPassword1"
                      >
                        Categoria
                      </label>
                      <input
                        style={input_ingresarNuevoProducto}
                        className="col-md-8 col-sm-12"
                        type="text"
                        name=""
                        id=""
                        placeholder="Ingresa la categoria del producto"
                        onChange={(e) =>
                          setCategoria_nuevoProducto(e.target.value)
                        }
                        value={categoria_nuevoProducto}
                      />
                    </div>
                    {booleano_feliz_categoria == false ? (
                      <div
                        style={visible}
                        className="invalido d-flex justify-content-end my-0"
                      >
                        Categoria Invalido
                      </div>
                    ) : (
                      <div
                        style={no_visible}
                        className="invalido d-flex justify-content-end my-0"
                      >
                        Categoria Invalido
                      </div>
                    )}
                  </div>

                  <div className="fuera my-2 mb-4">
                    <div className="form-group">
                      <label
                        style={label_ingresarNuevoProducto}
                        className="col-md-4 col-sm-12  ps-2"
                        for="exampleInputPassword1"
                      >
                        Codigo de Barras
                      </label>
                      <input
                        style={input_ingresarNuevoProducto}
                        className="col-md-8 col-sm-12"
                        type="text"
                        name=""
                        id=""
                        placeholder="Ingresa el codigo de barras del producto"
                        onChange={(e) =>
                          setCodigoBarras_nuevoProducto(e.target.value)
                        }
                        value={codigoBarras_nuevoProducto}
                      />
                    </div>
                    {booleano_feliz_codigoBarra == false ? (
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
                        className="col-md-4 col-sm-12  ps-2"
                        for="exampleInputPassword1"
                      >
                        Valor Unidad
                      </label>
                      <input
                        style={input_ingresarNuevoProducto}
                        className="col-md-8 col-sm-12"
                        type="text"
                        name=""
                        id=""
                        placeholder="Ingresa el valor por unidad del producto"
                        onChange={(e) => setValor_nuevoProducto(e.target.value)}
                        value={valor_nuevoProducto}
                      />
                    </div>
                    {booleano_feliz_valor == false ? (
                      <div
                        style={visible}
                        className="invalido d-flex justify-content-end my-0"
                      >
                        Valor Invalido
                      </div>
                    ) : (
                      <div
                        style={no_visible}
                        className="invalido d-flex justify-content-end my-0"
                      >
                        Valor Invalido
                      </div>
                    )}
                  </div>

                  <div className="fuera my-2 mb-4">
                    <div className="form-group">
                      <label
                        style={label_ingresarNuevoProducto}
                        className="col-md-4 col-sm-12  ps-2"
                        for="exampleInputPassword1"
                      >
                        Stock Disponible
                      </label>
                      <input
                        style={input_ingresarNuevoProducto}
                        className="col-md-8 col-sm-12"
                        type="text"
                        name=""
                        id=""
                        placeholder="Ingresa el stock disponible para el producto"
                        onChange={(e) => setStock_nuevoProducto(e.target.value)}
                        value={stock_nuevoProducto}
                      />
                    </div>
                    {booleano_feliz_stock == false ? (
                      <div
                        style={visible}
                        className="invalido d-flex justify-content-end my-0"
                      >
                        Stock Invalido
                      </div>
                    ) : (
                      <div
                        style={no_visible}
                        className="invalido d-flex justify-content-end my-0"
                      >
                        Stock Invalido
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-md-5 col-sm-12 mt-2 mb-2 ps-3">
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
                  <Link to="/catalogo_paginaprincipal">
                  <button
                    onClick={(e) => FuncionValidarFormulario(e)}
                    type="submit"
                    class="btn btn-primary mx-5"
                  >
                    Crear Nuevo Producto
                  </button>
                  </Link>
                  <button type="reset" class="btn btn-danger mx-5">
                    Cancelar
                  </button>
                </div>
              </div>
            </form>
          </div>





        ) : 



          <div className="ingresarNuevoProducto">
            <div className="alo">
              <div className="h3 col-12 d-flex justify-content-center py-3 mb-4">
                <div className="titulo col-12 py-2 d-flex justify-content-center">
                  {titulo.nuevo}
                </div>
              </div>
            </div>
            <form>
              <div className="alo">
                <div className="col-12">
                  <div className="fuera my-2 mb-4">
                    <div className="form-group">
                      <label
                        style={label_ingresarNuevoProducto}
                        className="col-12"
                        for="exampleInputEmail1"
                      >
                        Nombre del Producto
                      </label>
                      <input
                        style={input_ingresarNuevoProducto}
                        className="col-12"
                        type="text"
                        name=""
                        id=""
                        placeholder="Ingresa el nombre del producto"
                        onChange={(e) =>
                          setNombre_nuevoProducto(e.target.value)
                        }
                        value={nombre_nuevoProducto}
                      />
                    </div>
                    {booleano_feliz_producto == false ? (
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
                        className="col-12"
                        for="exampleInputPassword1"
                      >
                        Categoria
                      </label>
                      <input
                        style={input_ingresarNuevoProducto}
                        className="col-12"
                        type="text"
                        name=""
                        id=""
                        placeholder="Ingresa la categoria del producto"
                        onChange={(e) =>
                          setCategoria_nuevoProducto(e.target.value)
                        }
                        value={categoria_nuevoProducto}
                      />
                    </div>
                    {booleano_feliz_categoria == false ? (
                      <div
                        style={visible}
                        className="invalido d-flex justify-content-end my-0"
                      >
                        Categoria Invalido
                      </div>
                    ) : (
                      <div
                        style={no_visible}
                        className="invalido d-flex justify-content-end my-0"
                      >
                        Categoria Invalido
                      </div>
                    )}
                  </div>

                  <div className="fuera my-2 mb-4">
                    <div className="form-group">
                      <label
                        style={label_ingresarNuevoProducto}
                        className="col-12"
                        for="exampleInputPassword1"
                      >
                        Codigo de Barras
                      </label>
                      <input
                        style={input_ingresarNuevoProducto}
                        className="col-12"
                        type="text"
                        name=""
                        id=""
                        placeholder="Ingresa el codigo de barras del producto"
                        onChange={(e) =>
                          setCodigoBarras_nuevoProducto(e.target.value)
                        }
                        value={codigoBarras_nuevoProducto}
                      />
                    </div>
                    {booleano_feliz_codigoBarra == false ? (
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
                        className="col-12"
                        for="exampleInputPassword1"
                      >
                        Valor Unidad
                      </label>
                      <input
                        style={input_ingresarNuevoProducto}
                        className="col-12"
                        type="text"
                        name=""
                        id=""
                        placeholder="Ingresa el valor por unidad del producto"
                        onChange={(e) => setValor_nuevoProducto(e.target.value)}
                        value={valor_nuevoProducto}
                      />
                    </div>
                    {booleano_feliz_valor == false ? (
                      <div
                        style={visible}
                        className="invalido d-flex justify-content-end my-0"
                      >
                        Valor Invalido
                      </div>
                    ) : (
                      <div
                        style={no_visible}
                        className="invalido d-flex justify-content-end my-0"
                      >
                        Valor Invalido
                      </div>
                    )}
                  </div>

                  <div className="fuera my-2 mb-4">
                    <div className="form-group">
                      <label
                        style={label_ingresarNuevoProducto}
                        className="col-12"
                        for="exampleInputPassword1"
                      >
                        Stock Disponible
                      </label>
                      <input
                        style={input_ingresarNuevoProducto}
                        className="col-12"
                        type="text"
                        name=""
                        id=""
                        placeholder="Ingresa el stock disponible para el producto"
                        onChange={(e) => setStock_nuevoProducto(e.target.value)}
                        value={stock_nuevoProducto}
                      />
                    </div>
                    {booleano_feliz_stock == false ? (
                      <div
                        style={visible}
                        className="invalido d-flex justify-content-end my-0"
                      >
                        Stock Invalido
                      </div>
                    ) : (
                      <div
                        style={no_visible}
                        className="invalido d-flex justify-content-end my-0"
                      >
                        Stock Invalido
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-md-5 col-sm-12 mt-2 mb-3">
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
                    Crear Nuevo Producto
                  </button>
                  <button type="reset" class="btn btn-danger mx-5">
                    Cancelar
                  </button>
                </div>
              </div>
            </form>
          </div>
        }
      </Layout>
    );
}

export default IngresarNuevoProducto
