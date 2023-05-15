import { useEffect, useState, useRef } from 'react';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function Content() {
    //traer Datos
    const location = useLocation();
    const datosAntes = location.state?.data ?? "";

    //Imagen

    //datos del Usuario
    const [provId, setProvId]= useState(datosAntes.prov_Id);
    const [nombreEmpresa, setNombreEmpresa]= useState(datosAntes.prov_NombreEmpresa);
    const [nombreContacto, setNombreContato]= useState(datosAntes.prov_NombreContacto);
    const [telefono, setTelefono]= useState(datosAntes.prov_Telefono);
    const [depa, setDepa]= useState(datosAntes.depa);
    const [depaId, setDepaId]= useState(datosAntes.depa_Nombre);
    const [muniId, setMuniId]= useState(datosAntes.muni_Nombre);
    const [direccionExacta, setDireccionExacta]= useState(datosAntes.prov_DireccionExacta);
    const UsuarioCreacion = datosAntes.prov_NombreUsuCreacion;
    const FechaCreacion = new Date(datosAntes.prov_FechaCreacion);
    const UsuarioModificacion = datosAntes.prov_NombreUsuModificacion;
    const FechaModificacion = datosAntes.prov_FechaModificacion == null? "" : new Date(datosAntes.prov_FechaModificacion);
    const history = useHistory();
    const formatoFecha = { 
        year: 'numeric', 
        month: 'numeric', 
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
      };


    //Listados para los select

    //Enviando info

    ///////////////////////////////////////////////////////



    return (
        <div className="ms-content-wrapper">
            <div className='container-fluid'>
                <div className="ms-panel mt-3">
                    <div className='ms-panel-header text-center'>
                        <h6>Detalles del proveedor</h6>
                    </div>
                    <div className="ms-panel-body">
                        <div className='mt-4 px-5'>
                            <div className='row'>
                                <div className='col-6'>
                                    <label style={{ fontSize: "1.2em" }}><strong>ID de la empresa: </strong>{provId}</label>
                                </div>
                                <div className='col-6'>
                                    <label style={{ fontSize: "1.2em" }}><strong>Nombre de la emppresa: </strong>{nombreEmpresa}</label>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-6'>
                                    <label style={{ fontSize: "1.2em" }}><strong>Nombre del contacto: </strong>{nombreContacto}</label>
                                </div>
                                <div className='col-6'>
                                    <label style={{ fontSize: "1.2em" }}><strong>Telefono del contacto: </strong>{telefono}</label>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-6'>
                                    <label style={{ fontSize: "1.2em" }}><strong>Municipio de la empresa </strong>{muniId}</label>
                                </div>
                                <div className='col-6'>
                                    <label style={{ fontSize: "1.2em" }}><strong>Departamento de la empresa: </strong>{depaId}</label>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-12'>
                                    <label style={{ fontSize: "1.2em" }}><strong>Direccion exacta de la empresa: </strong>{direccionExacta}</label>
                                </div>
                            </div>

                            <div className="table-responsive mt-4">
                                    <table className="table thead-primary">
                                <thead>
                                    <tr>
                                        <th style={{ fontSize: "1.2em" }} scope="col">Accion</th>
                                        <th style={{ fontSize: "1.2em" }} scope="col">Usuario</th>
                                        <th style={{ fontSize: "1.2em" }} scope="col">Fecha</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Creacion</td>
                                        <td>{UsuarioCreacion}</td>
                                        <td>{FechaCreacion.toLocaleString('es-ES', formatoFecha)}</td>
                                    </tr>
                                    <tr>
                                        <td>Modificaion</td>
                                        <td>{UsuarioModificacion}</td>
                                        <td>{FechaModificacion.toLocaleString('es-ES', formatoFecha)}</td>
                                    </tr>
                                </tbody>
                            </table>


                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
