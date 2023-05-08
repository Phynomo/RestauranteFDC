import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb'
import { useHistory, useLocation } from 'react-router-dom';
import toastr from 'toastr';
import axios from 'axios';
import imagen from '../../../assets/img/FDCNegro.png';

function Detailcontent() {
    const location = useLocation();
    const myData = location.state.data;
    const [subtotal, setSubtotal] = useState(0);
    const [rows, setRows] = useState([]);
    const [facturaImpresa , setFacturaImpresa ] = useState(false);


    const style = {
        backgroundImage: imagen,
        opacity: 0.5
      };

    const fetchData = () => {
        axios.get('api/Facturas/ListadoDetalles?id=' + String(myData.fact_Id))
            .then(response => {
                let total = 0;
                const rows = response.data.data.map(item => {
                    total += item.fade_Precio * item.fade_Cantidad;
                    return {
                        id: item.fade_Id,
                        fade_Id: item.fade_Id,
                        plat_Nombre: item.plat_Nombre,
                        cate_Descripcion: item.cate_Descripcion,
                        fade_Precio: item.fade_Precio,
                        fade_Cantidad: item.fade_Cantidad,
                    };
                });
                setRows(response.data.data);
                setSubtotal(total);
            })
            .catch(error => {
                console.log('Error en la solicitud Axios:', error);
            });
    };

    const handlePrint = () => {
        setFacturaImpresa(true);
        setTimeout(() => {
          window.print();
        }, 100); 
        setTimeout(() => {
        setFacturaImpresa(false);
        }, 100); 
      };
      

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="ms-content-wrapper">
            <div className="row">
                <div className="col-md-12">
                    <div className="ms-panel">
                        <div className="ms-panel-header header-mini">
                            <div className="d-flex justify-content-between">
                                <h6>Factura</h6>
                                <h6>#{myData.fact_Id}</h6>
                            </div>
                        </div>
                        <div className="ms-panel-body" >
                            {/* Invoice To */}
                            <div className="row align-items-center">
                            {/* <img src={imagen} alt="FDC" width={"10%"} /> */}
                                <div className='col-md-2'style={{ borderRight: '1px solid black' }}
 >
                                    <img src={imagen} alt="FDC" />
                                </div>
                                <div className="col-md-6">
                                    <div className="invoice-address">
                                        <h3>Receptor: </h3>
                                        <h5>{myData.clie_NombreCompleto}</h5>
                                        <p></p>
                                        <p className="mb-0">{myData.sucu_Direccion}</p>
                                        <p className="mb-0">{myData.sucu_Nombre}</p>
                                        <p></p>
                                    </div>
                                </div>
                                <div className="col-md-4 text-md-right">
                                    <ul className="invoice-date">
                                        <li>Facturado el : {myData.fact_Fecha}</li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                            {/* Invoice Table */}
                            <div className="ms-invoice-table table-responsive mt-5">
                                <table className="table table-hover text-right thead-light">
                                    <thead>
                                        <tr className="text-capitalize">
                                            <th className="text-center w-5">-</th>
                                            <th className="text-left">Descripcion</th>
                                            <th>Cantidad</th>
                                            <th>Costo Unitario</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {rows.map((option) => (
                                           <tr>
                                           <td className="text-center">-</td>
                                           <td className="text-left">{option.plat_Nombre}</td>
                                           <td>{option.fade_Cantidad}</td>
                                           <td>{option.fade_Precio}</td>
                                           <td>{option.fade_Cantidad * option.fade_Precio}</td>
                                       </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan={4}>Subtotal:<br></br>Impuestos: <br></br>Costo Total: </td>
                                            <td>{subtotal} Lps <br></br> {subtotal*0.1} Lps <br></br>{subtotal + (subtotal*0.1)} Lps</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="invoice-buttons text-right"> 
                            {!facturaImpresa && <button onClick={handlePrint} className='btn btn-primary'>Imprimir</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Detailcontent;