import React from 'react';
import { Link } from "react-router-dom";
import { AiOutlineHome, AiFillHome } from "react-icons/ai"; //Si esta hover, hacer esas caracteristicas
import { GrCatalogOption, GrCatalog } from "react-icons/gr"; //Utilizada para catalogo
import { RiBankLine, RiBankFill } from "react-icons/ri"; //Ventas
import { AiOutlineLineChart, AiOutlineAreaChart } from "react-icons/ai"; //Estadisticas
import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";
import Layout from '../Folder_Contenido_General/Layout';

const Home = () => {
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

export default Home;

/*
<div className="color" id="color">
            <div className="cuadro1">
                <div className="icon1">🤑</div>
                <div className="text1">Venta</div>
            </div>
            <div className="cuadro2">
                <div className="icon2">🛒</div>
                <div className="text2">Inventario</div>
            </div>
            <div className="cuadro3">
                <div className="icon3">📈</div>
                <div className="text3">Estadisticas</div>
            </div>
            <div className="cuadro4">
                <div className="icon4">🔧</div>
                <div className="text4">Ajustes</div>
            </div>
        </div>
*/