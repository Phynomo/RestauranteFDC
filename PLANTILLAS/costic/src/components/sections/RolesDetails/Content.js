import { useEffect, useState, useRef } from 'react';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';

function Content() {
    //traer Datos
    const location = useLocation();
    const datosAntes = location.state?.data ?? "";

    //Imagen

    //datos del Usuario
    const roleId = datosAntes.role_Id;
    const roleNombre = datosAntes.role_Nombre;
    const UsuarioCreacion = datosAntes.user_NombreUsuCreacion;
    const FechaCreacion = new Date(datosAntes.user_FechaCreacion);
    const UsuarioModificacion = datosAntes.user_NombreUsuModificacion;
    const FechaModificacion = datosAntes.user_FechaModificacion == null? "" : new Date(datosAntes.user_FechaModificacion);
    const history = useHistory();
    const [options, setOptions] = useState([]);
    const formatoFecha = { 
        year: 'numeric', 
        month: 'numeric', 
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
      };

      const handleFetchPantallasSeleccionadas = async () => {
        try {
            const response = await axios.get(`api/Pantallas/PantallasPorRol?rol=${roleId}&esAdmin=0`);
            const options = response.data.data.map(item => {
                return {
                    id: item.pant_Id,
                    pant_Id: item.pant_Id,
                    pant_Nombre: item.pant_Nombre,
                    pant_Menu: item.pant_Menu
                }
            });
            setOptions(options);
        } catch (error) {
            console.log("Error en la solicitud axios:", error);
        }
    };
    
    useEffect(() => {
        handleFetchPantallasSeleccionadas();
    }, []);

    ///////////////////////////////////////////////////////

    return (
        <div className="ms-content-wrapper">
            <div className='container-fluid'>
                <div className='' style={{ height: "50px" }}></div>
                <div className="card mt-4">
                    <div className='card-header'>
                        <h3>Detalles del rol</h3>
                    </div>
                    <div class="card-body">
                        <div className='mt-4 px-5'>

                            <div className='row'>
                                <div className='col-6'>
                                    <label style={{ fontSize: "1.2em" }}><strong>Id del rol: </strong>{roleId}</label>
                                </div>
                                <div className='col-6'>
                                    <label style={{ fontSize: "1.2em" }}><strong>Nombre del rol: </strong>{roleNombre}</label>
                                </div>
                            </div>
                            
                            
                            <div className="table-responsive mt-4">
                                <label style={{ fontSize: "1.2em" }}><strong>Pantallas asignadas</strong></label>
                                    <table className="table table-hover thead-dark" style={{}}>
                                <thead>
                                    <tr>
                                        <th style={{ fontSize: "1.2em" }} scope="col">Menu</th>
                                        <th style={{ fontSize: "1.2em" }} scope="col">Pantalla</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {options.map((option) => (
                                        <tr>
                                           <td>{option.pant_Menu}</td>
                                           <td>{option.pant_Nombre}</td>
                                       </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>

                             
                          
                            <div className="table-responsive mt-5">
                                <h5><strong>Auditoría</strong></h5>     
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
