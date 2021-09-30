import React from 'react';

const Home = () => {
    return (
        <div className="container">
            <div className="row" id="cuadros">
                <div className="col-3" id="cuadro1">
                    <div id="icon1">
                        🤑
                    </div>
                    <div className="col" id="text1">Venta</div>
                </div>
                <div className="col-3" id="cuadro2">
                    <div id="icon2">
                        🛒
                    </div>
                    <div className="col" id="text2">Inventario</div>
                </div>
                <div className="col-3" id="cuadro3">
                    <div id="icon3">
                        📈
                    </div>

                    <div className="col" id="text3">Estadisticas</div>
                </div>
                <div className="col-3" id="cuadro4">
                    <div id="icon4">
                        🔧
                    </div>
                    <div className="col" id="text4">Ajustes</div>
                </div>
            </div>
        </div>
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