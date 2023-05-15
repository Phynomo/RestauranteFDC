import Breadcrumb from './Breadcrumb'
import { Link } from 'react-router-dom'
import Sidenavigation from '../../layouts/Sidenavigation';
import Topnavigation from '../../layouts/Topnavigation';
import Quickbar from '../../layouts/Quickbar';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import fondo from '../../../assets/img/imagenes/FDC.png';


const Details = ({ match }) => {
    const [empleado, setEmpleado] = useState({
      empe_NombreCompleto: '',
      empe_Identidad: '',
      empe_DireccionExacta: '',
      empe_Sexo: '',
      empe_Telefono: '',
      sucu_Nombre: '',
      carg_Descripcion: '',
      muni_Nombre: '',
      eciv_Descripcion: '',
      user_NombreUsuCreacion: '',
      user_NombreUsuModificacion: '',
      empe_FechaModificacion: '',
      empe_FechaCreacion: '',
      empe_FechaNacimiento: "",
      depa_Nombre: '',
      empe_CorreoElectronico: '',
      empe_Id: ''

    });
  
    useEffect(() => {
      const empe_Id = match.params.empe_Id;
      axios
        .get(`api/Empleados/DetallesEmpleados?id=${empe_Id}`)
        .then((response) => {
          const empleado2 = response.data.data[0];
          const fechaNacimiento = new Date(empleado2.empe_FechaNacimiento);
          empleado2.empe_FechaNacimiento = fechaNacimiento.toISOString().substring(0, 10);
  
          setEmpleado(empleado2);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

        return (
            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar" >
            <Sidenavigation />
            <main className="body-content" >
                <Topnavigation />
                <div className="ms-content-wrapper">
               <div className="row" >
                 <div className="col-md-12">
                     <Breadcrumb />
                     <div className="ms-panel" >
                         <div className="ms-panel-header text-center" >
                          <h6>Detalles del empleado </h6>
                      
                          </div>
                          <div className="ms-panel-body" >


                               
                                {/* Invoice To */}
                                <div className="row align-items-center"   >
                                    <div className="col-md-6">
                                        <div className="invoice-address">
                                            <h5>INFORMACIÓN PERSONAL:  </h5>
                                            <h5>{empleado.empe_NombreCompleto}</h5> {/*nombre */}
                                            <p>DNI: {empleado.empe_Identidad} /  FECHA NACIMIENTO: {empleado.empe_FechaNacimiento} </p> {/*dni */}
                                            <p>SEXO: {empleado.empe_Sexo} / ESTADO CIVIL: {empleado.eciv_Descripcion}</p>
                                            <p>TELEFONO: {empleado.empe_Telefono}</p> {/*TEL */}
                                            <p>CORREO: {empleado.empe_CorreoElectronico}</p> {/*correo*/}
                                            <p>DIRECCION: <br></br> {empleado.empe_DireccionExacta}</p> {/* direccion*/}
                                            <p>DEPARTAMENTO: {empleado.depa_Nombre} / MUNICIPIO :  {empleado.muni_Nombre}</p>{/* departamento */}
                                        </div>
                                    </div>
                                    
                                   
                                    <div className="col-md-6 text-md-right">
                                        <ul className="invoice-date">
                                        <p>INFORMACIÓN LABORAL : </p> 
                                            <p>CARGO: {empleado.carg_Descripcion}</p>{/* departamento */}
                                            <p>SUCURSAL :  {empleado.sucu_Nombre}</p> {/*municipio*/}
                                            <p> .</p>
                                            <p> .</p>
                                            <p> .</p>
                           
                                          
                                        </ul>
                                    </div>
                                    </div>
                                    <div className="invoice-buttons text-center">
                                    <Link to={`/editarEmpleado/${empleado.empe_Id}`}  className="btn btn-primary mr-2">Editar</Link>                                 
                                    </div> 
                                    
                                    <br></br><br></br>
                                    <hr />
                                {/* Invoice Table */}
                                <h5 className='text-center' style={{fontFamily: 'Arial'}}> AUDITORÍA </h5>
                              
                                <div className="ms-invoice-table table-responsive mt-5">
                                <table className="table table-hover thead-light">
                                    <thead>
                                    <tr className="text-capitalize">
                                        <th>Usuario creador</th>
                                        <th>Fecha de creación</th>
                                        <th>Usuario modificador</th>
                                        <th>Fecha de modificación</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{empleado.user_NombreUsuCreacion}</td>
                                        <td>{empleado.empe_FechaCreacion}</td>
                                        <td>{empleado.user_NombreUsuModificacion}</td>
                                        <td>{empleado.empe_FechaModificacion}</td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                                <br></br>
                                <div className="invoice-buttons text-left">
                                    <Link to="/empleados" className="btn btn-primary mr-2">Volver</Link>
                                   
                                </div>                          
                  </div>
                 </div>

                    </div>

                 </div>
                </div>
                </main>
                <Quickbar />
            </div>

        );

 }
export default Details;