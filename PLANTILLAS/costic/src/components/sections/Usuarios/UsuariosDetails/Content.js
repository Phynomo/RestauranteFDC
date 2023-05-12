import { useEffect, useState, useRef } from 'react';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function Content() {
    //traer Datos
    const location = useLocation();
    const datosAntes = location.state?.data ?? "";

    //Imagen

    //datos del Usuario
    const [userNombreUsuario, setUserNombreUsuario] = useState(datosAntes.user_NombreUsuario);
    const [empeCargo, setUserId] = useState(datosAntes.carg_Descripcion);
    const [userCorreo, setUserCorreo] = useState(datosAntes.user_Correo);
    const [empeNombre, setEmpeId] = useState(datosAntes.empe_NombreCompleto);
    const [roleNombre, setRoleId] = useState(datosAntes.role_Nombre);
    const [userImage, setUserImage] = useState(datosAntes.user_Image);
    const [userEsAdmin, setUserEsAdmin] = useState(datosAntes.admin);
    const UsuarioCreacion = datosAntes.user_NombreUsuCreacion;
    const FechaCreacion = new Date(datosAntes.user_FechaCreacion);
    const UsuarioModificacion = datosAntes.user_NombreUsuModificacion;
    const FechaModificacion = datosAntes.user_FechaModificacion == null? "" : new Date(datosAntes.user_FechaModificacion);
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
                <div className='' style={{ height: "50px" }}></div>
                <div class="card mt-4">
                    <div class="card-body">
                        <div className='little-profilePhynomo text-center'>
                            <div class="pro-imgPhynomo"> <img src={userImage} alt="user" /> </div>
                        </div>

                        <div className='mt-4 px-5'>

                            <div className='row'>
                                <div className='col-6'>
                                    <label style={{ fontSize: "1.2em" }}><strong>Nombre del usuario: </strong>{userNombreUsuario}</label>
                                </div>
                                <div className='col-6'>
                                    <label style={{ fontSize: "1.2em" }}><strong>Contraseña del usuario: </strong>**********</label>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-6'>
                                    <label style={{ fontSize: "1.2em" }}><strong>Correo del usuario: </strong>{userCorreo}</label>
                                </div>
                                <div className='col-6'>
                                    <label style={{ fontSize: "1.2em" }}><strong>Es administrador: </strong>{userEsAdmin}</label>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-6'>
                                    <label style={{ fontSize: "1.2em" }}><strong>Rol del usuario: </strong>{roleNombre}</label>
                                </div>
                                <div className='col-6'>
                                    <label style={{ fontSize: "1.2em" }}><strong>Empleado del usuario: </strong>{empeNombre}</label>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-6'>
                                    <label style={{ fontSize: "1.2em" }}><strong>Cargo del empleado: </strong>{empeCargo}</label>
                                </div>
                                <div className='col-6'>

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
