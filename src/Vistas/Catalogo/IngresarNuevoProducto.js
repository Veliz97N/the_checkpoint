import React,{useState} from 'react'
import { AiOutlineDelete, AiFillDelete } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";
import Layout from '../../Folder_Contenido_General/Layout';

const IngresarNuevoProducto = () => {
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
        setFileUrl(imageUrl)
     }



     const [nombre_nuevoProducto, setNombre_nuevoProducto] = useState('')
     const [categoria_nuevoProducto, setCategoria_nuevoProducto] = useState('')
     const [codigoBarras_nuevoProducto, setCodigoBarras_nuevoProducto] = useState('')
     const [valor_nuevoProducto, setValor_nuevoProducto] = useState('')
     const [stock_nuevoProducto, setStock_nuevoProducto] = useState('')
 
     const [booleano_feliz_nombre, setBooleano_feliz_nombre]= useState(null)
     const [booleano_feliz_apellido, setBooleano_feliz_apellido]= useState(null)
     const [booleano_feliz_username, setBooleano_feliz_username]= useState(null)
     const [booleano_feliz_password, setBooleano_feliz_password]= useState(null)
     const [booleano_feliz_confirm_password,setBooleano_feliz_confirm_password]= useState(null)

     //const usuario = { nombre:"Juan Carlos", apellido: "Gonzalez",username: "juankaX", password: "juan123", permiso: "Administrador", tema: "Dark", Fuente: { tipo: "Arial", tamaño: 48, titulo_sidebar: true }, isFacebook: false, isGoogle: false }
     const FuncionValidarFormulario = (e) => {
         e.preventDefault();
 
         if(nombre_nuevoProducto !='' && nombre_nuevoProducto.length>2 ){ //Falta que solo acepte letras y no numeros
             setBooleano_feliz_nombre(true)
         } 
         else{
             setBooleano_feliz_nombre(false)
         }
 
         if(categoria_nuevoProducto!='' && categoria_nuevoProducto.length>2 ){
             setBooleano_feliz_apellido(true)
         }
         else{
             setBooleano_feliz_apellido(false)
         }
 
         if(codigoBarras_nuevoProducto != '' && codigoBarras_nuevoProducto.length>3){
             setBooleano_feliz_username(true)
         }
         else{
             setBooleano_feliz_username(false)
         }
 
         if(valor_nuevoProducto!='' &&valor_nuevoProducto.length>2) { //Falta validarla para que contenga letras, numeros y una mayuscula
             setBooleano_feliz_password(true)
         }
         else{
             setBooleano_feliz_password(false)
             
         }
 
         if(stock_nuevoProducto!='' && stock_nuevoProducto.length>=1){
             setBooleano_feliz_confirm_password(true)
         }
         else{
             setBooleano_feliz_confirm_password(false)
         }
 
         if(booleano_feliz_nombre&&booleano_feliz_apellido&&booleano_feliz_username&&booleano_feliz_password&&booleano_feliz_confirm_password){
             
             console.log("LGTM = Looks Good To Me")
             //ACA HAREMOS EL POST DEL NUEVO USUARIO PAPI
             console.log("Que haga el POST dice....")
         }
 
     }
 

    return (
        <Layout hasNavbar hasSidebar>
        <div className="ingresarNuevoProducto">
            <div className="row">
                <div className="h3 col-12 d-flex justify-content-center py-3 mb-4">
                    <div className="titulo col-6 py-2 d-flex justify-content-center">
                            {titulo.nuevo}
                    </div>
                </div>
            </div>
            <form>
                <div className="row">
                    <div className="col-md-7 col-sm-12">
                        <div className="caja_contenedora_label_input form-group my-2 mb-4">
                            <label style={label_ingresarNuevoProducto} className="col-md-4 col-sm-12 ps-2" for="exampleInputEmail1">Nombre del Producto</label>
                            <input style={input_ingresarNuevoProducto} className="col-md-8 col-sm-12" type="text" name="" id="" placeholder="Ingresa el nombre del producto"  onChange={(e) => setNombre_nuevoProducto(e.target.value)} value={nombre_nuevoProducto}/>
                        </div>
                        <div className="form-group mb-4">
                            <label style={label_ingresarNuevoProducto} className="col-md-4 col-sm-12  ps-2" for="exampleInputPassword1">Categoria</label>
                            <input style={input_ingresarNuevoProducto}  className="col-md-8 col-sm-12" type="text" name="" id="" placeholder="Ingresa la categoria del producto" onChange={(e) => setCategoria_nuevoProducto(e.target.value)} value={categoria_nuevoProducto}/>
                        </div>
                        <div className="form-group mb-4">
                            <label style={label_ingresarNuevoProducto} className="col-md-4 col-sm-12  ps-2" for="exampleInputPassword1">Codigo de Barras</label>
                            <input style={input_ingresarNuevoProducto}  className="col-md-8 col-sm-12" type="text" name="" id="" placeholder="Ingresa el codigo de barras del producto" onChange={(e) => setCodigoBarras_nuevoProducto(e.target.value)} value={codigoBarras_nuevoProducto}/>
                        </div>
                        <div className="form-group mb-4">
                            <label style={label_ingresarNuevoProducto} className="col-md-4 col-sm-12  ps-2" for="exampleInputPassword1">Valor Unidad</label>
                            <input style={input_ingresarNuevoProducto} className="col-md-8 col-sm-12" type="text" name="" id="" placeholder="Ingresa el valor por unidad del producto" onChange={(e) => setValor_nuevoProducto(e.target.value)} value={valor_nuevoProducto}/>
                        </div>
                        <div className="form-group mb-4">
                            <label style={label_ingresarNuevoProducto} className="col-md-4 col-sm-12  ps-2" for="exampleInputPassword1">Stock Disponible</label>
                            <input style={input_ingresarNuevoProducto} className="col-md-8 col-sm-12" type="text" name="" id="" placeholder="Ingresa el stock disponible para el producto" onChange={(e) => setStock_nuevoProducto(e.target.value)} value={stock_nuevoProducto}/>
                        </div>
                    </div>

                    <div className="col-md-5 col-sm-12 mt-2 mb-2">
                        <div className="ingresar_foto mb-1 ps-2">
                            <label style={label_ingresarNuevoProducto} className=" col-lg-4 col-md-4 col-sm-12 mb-4" for="exampleInputPassword1">Ingresa Imagen </label>
                            <input style={input_ingresarFotografia} className="ingresarArchivo" type="file" name="" id="" accept="image/*" onChange={processImage}/>
                        </div>
                        <div className="contenedorcontenedor justify-content-center d-md-flex d-sm-none "> 
                        {fileUrl?<div style={contenedorfotografia} > 
                                <img style={imagen_Ingresar_Modificar_Producto} src={fileUrl} />
                            </div>:""} {/* ASI NO SE MUESTRAN BORDES PLOMOS ANTIESTETICOS */}
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
                            <button
                                type="reset"

                                class="btn btn-danger mx-5"
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
            </form>
        </div>
        </Layout>
    )
}

export default IngresarNuevoProducto
