import './styles/styles.css';
import { useState } from "react";


const Ventas = () => {

    /*const [vuelto, setVuelto] = useState({});*/
    const [total, setTotal] = useState({
        valortotal: [],
        valorefectivo: [],

    })

    const Capturar = (event) => {
        setTotal({
            ...total,
            [event.target.name]: event.target.value
        })
    }

    /*const Tecla = e => {
        if (e.keyCode === 13 && e.target.value !== "") {
            function vuelto([valorefectivo],[valortotal]){
                return([valorefectivo]+[valortotal])}
        }
    };*/

    const Vuelto = (e) => {
        if (e.value.name !== "") {
            return ([total.valorefectivo] + [total.valortotal]);

        }
    }



    return (
        <div className="container position-relative top-50 start-50 translate-middle m-x-50px">
            <div class="row">
                <div class="col-4">
                    <div>
                        <h2 className="titulo1Ventas">
                            Informacion de Venta
                        </h2>
                        <h5 className="titulo2Ventas mt-3">
                            Busqueda de prodcuto
                        </h5>
                    </div>
                    <div className="row my-3 px-3 py-2">
                        <div className="input-group my-3" id="input1">
                            <span className="input-group-text rounded-pill" type="search" placeholder="Search" id="inputGroup-sizing-default">Nombre</span>
                            <input type="text" className="form-control me-2 rounded-pill" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div className="input-group my-3">
                            <span className="input-group-text rounded-pill" type="search" placeholder="Search" id="inputGroup-sizing-default">Categoria</span>
                            <input type="text" className="form-control rounded-pill" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div className="input-group my-3">
                            <span className="input-group-text rounded-pill" type="search" placeholder="Search" id="inputGroup-sizing-default">Codigo</span>
                            <input type="text" className="form-control rounded-pill" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div className="input-group my-5">
                            <span className="input-group-text rounded-pill" type="search" placeholder="Search" id="inputGroup-sizing-default">Vendedor</span>
                            <input type="text" className="form-control rounded-pill" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div className="input-group my-3">
                            <span className="input-group-text rounded-pill" type="search" placeholder="Search" id="inputGroup-sizing-default">Cantidad</span>
                            <input type="text" className="form-control rounded-pill" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div className="input-group my-3">
                            <span className="input-group-text rounded-pill" type="search" placeholder="Search" id="inputGroup-sizing-default">Precio</span>
                            <input type="text" className="form-control rounded-pill" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                    </div>

                    <div className="col-12 mx-5 mb-5">
                        <button type="button" class="btn btn-secondary rounded-pill mx-3"><i class="fas fa-check"></i></button>
                        <button type="button" class="btn btn-secondary rounded-pill mx-2"><i class="fas fa-times"></i></button>
                        <button type="button" class="btn btn-secondary rounded-pill mx-3"><i class="fas fa-ban"></i></button>
                    </div>



                </div>

                <div class="col-8">
                    <div className="row mt-4 px-4">
                        <div className="col">

                            <div className="card mx-auto" style={{ width: "10rem" }}>
                                <img src="https://m.media-amazon.com/images/I/81TLFU5Yj6L._SL1500_.jpg" className="card-img-top" alt="..."></img>
                            </div>

                        </div>

                        <div className="col">
                            <div class="row">
                                <div class="col-2 border border-white">Id</div>
                                <div class="col-10 border border-white">Nombre Producto</div>
                            </div>
                            <div class="row">
                                <div class="col-2 border border-white">Id</div>
                                <div class="col-10 border border-white">Nombre Producto</div>
                            </div>
                            <div class="row">
                                <div class="col-2 border border-white">Id</div>
                                <div class="col-10 border border-white">Nombre Producto</div>
                            </div>
                            <div class="row">
                                <div class="col-2 border border-white">Id</div>
                                <div class="col-10 border border-white">Nombre Producto</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 px-3">
                        <div className="row mt-5">
                            <div className="col mt-5">
                                <select className="form-select mt-5 rounded-pill" aria-label="Default select example">
                                    <option selected>Metodo de Pago</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="col mt-5">
                                <div className="input-group mt-5">
                                    <span className="input-group-text rounded-pill" type="search" placeholder="Search" id="inputGroup-sizing-default">Efectivo</span>
                                    <input
                                        type="text"
                                        onChange={Capturar}

                                        name="valorefectivo"
                                        className="form-control rounded-pill"
                                        aria-label="Sizing example input"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col mt-5">
                                <div className="input-group my-3">
                                    <span className="input-group-text rounded-pill" type="search" placeholder="Search" id="inputGroup-sizing-default">Total</span>
                                    <input
                                        type="text"
                                        onChange={Capturar}
                                        name="valortotal"
                                        className="form-control rounded-pill"
                                        aria-label="Sizing example input"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                </div>
                            </div>
                            <div className="col mt-5">
                                <div className="input-group my-3">
                                    <span className="input-group-text rounded-pill" type="search" placeholder="Search" id="inputGroup-sizing-default">Vuelto</span>
                                    <input
                                        type="text"
                                        value={Vuelto}
                                        className="form-control rounded-pill"
                                        aria-label="Sizing example input"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );

};
export default Ventas;