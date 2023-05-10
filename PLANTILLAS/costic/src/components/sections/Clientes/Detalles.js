import Breadcrumb from './Breadcrumb'
import { Link } from 'react-router-dom'
import Sidenavigation from '../../layouts/Sidenavigation';
import Topnavigation from '../../layouts/Topnavigation';
import Quickbar from '../../layouts/Quickbar';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import fondo from '../../../assets/img/imagenes/FDC.png';


const Details = ({ match }) => {
    const [cliente, setCliente] = useState({
      clie_NombreCompleto: '',
      clie_Identidad: '',
      clie_RTN: '',
      clie_Sexo: '',
      clie_Telefono: '',
      clie_RTN: '',
      user_NombreUsuCreacion: '',
      user_NombreUsuModificacion: '',
      clie_FechaModificacion: '',
      clie_FechaCreacion: '',
      clie_Id: ''

    });
  
    useEffect(() => {
      const clie_Id = match.params.clie_Id;
      axios
        .get(`api/Clientes/DetallesCliente?id=${clie_Id}`)
        .then((response) => {
          const cliente2 = response.data.data[0];

  
          setCliente(cliente2);
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
                          <h6>Detalles del cliente </h6>
                      
                          </div>
                          <div className="ms-panel-body" >


                               
                                {/* Invoice To */}
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="invoice-address">
                                            <h5>INFORMACIÓN PERSONAL:  </h5> 
                                            <p>NOMBRE: {cliente.clie_NombreCompleto} </p> {/*dni */}  
                                           
                                        
                                           
                                        </div>
                                    </div>
                                    

                                    
                                   
                                  
                                    
                                    


                                    <div className="col-ms-2 text-md-right">
                                        <ul className="invoice-date">
                                       <br></br>
                                        <p>DNI: {cliente.clie_Identidad} </p> {/*dni */}  
                                           
                           
                                          
                                        </ul>
                                    </div>
                                   
                                    <div className="col-md-5 text-md-right">
                                        <ul className="invoice-date">
                                        <br></br>
                                     <p>  RTN: {cliente.clie_RTN}  </p> {/*dni */}
                                           
                           
                                          
                                        </ul>
                                    </div>
                                  

                                    <div className="col-md-1 text-md-right">
                                        <ul className="invoice-date">
                                       
                                     
                                            <p>                                                           
                                                SEXO:{cliente.clie_Sexo}</p> {/* direccion*/}
                                         
                           
                                          
                                        </ul>
                                    </div>

                                        
                                    <div className="col-md-6 text-md-right">
                                        <ul className="invoice-date">
                                       
                                            <p>TELEFONO: {cliente.clie_Telefono}</p> {/*TEL */}
                                          
                                          
                                        </ul>
                                    </div>

               
                                    </div>
                                    <br></br>
                                    <div className="invoice-buttons text-center">
                                    <Link to={`/editarCliente/${cliente.clie_Id}`}  className="btn btn-primary mr-2">Editar</Link>                                 
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
                                        <td>{cliente.user_NombreUsuCreacion}</td>
                                        <td>{cliente.clie_FechaCreacion}</td>
                                        <td>{cliente.user_NombreUsuModificacion}</td>
                                        <td>{cliente.clie_FechaModificacion}</td>
                                    </tr>
                                    </tbody>
                                  </table>
                                  </div>
                                  <br></br>
                                 <div className="invoice-buttons text-left">
                                    <Link to="/clientes" className="btn btn-primary mr-2">Volver</Link>
                                   
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