import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import { AiOutlineHome, AiFillHome } from "react-icons/ai"; //Si esta hover, hacer esas caracteristicas
import { GrCatalogOption, GrCatalog } from "react-icons/gr"; //Utilizada para catalogo
import { RiBankLine, RiBankFill } from "react-icons/ri"; //Ventas
import { AiOutlineLineChart, AiOutlineAreaChart } from "react-icons/ai"; //Estadisticas
import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";
import Layout from '../Folder_Contenido_General/Layout';
import { Redirect } from 'react-router-dom';
import UserContext from '../UserContext/UserContext';


const Home = () => {
    const {isLogged, toggleIsLogged} = useContext(UserContext)
    if (!isLogged){
        return <Redirect to="/" />
    } else {
        return (
            <Layout hasNavbar hasSidebar>
        <div className="container">
            <div className="row" id="cuadros">
                <div className="col-3" id="cuadro1">
                <Link to="/ventas">
                    <div className="col-12 py-4 mt-3 mb-2 d-flex justify-content-center">
                    <RiBankLine className="iconos_menu_principal" />
                    </div>
                    <div className="col-12" id="text1">Venta</div>
                </Link>
                </div>
                <div className="col-3" id="cuadro2">
                <Link to="/catalogo_paginaprincipal">
                    <div  className="col-12 py-4 mt-3 mb-2 d-flex justify-content-center">
                    <GrCatalogOption className="iconos_menu_principal" />
                    </div>
                    <div className="col-12" id="text2">Catálogo</div>
                </Link>
                </div>
                <div className="col-3" id="cuadro3">
                <Link to='/estadisticas'>
                    <div  className="col-12 py-4 mt-3 mb-2 d-flex justify-content-center">
                    <AiOutlineLineChart className="iconos_menu_principal" />
                    </div>
                    <div className="col-12" id="text3">Estadísticas</div>
                </Link>         
                </div>
            </div>
        </div>
        </Layout>
    );
    }
}

export default Home;

