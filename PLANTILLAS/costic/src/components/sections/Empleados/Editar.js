import toastr from 'toastr';
import { alertSuccess, alertError } from '../Alertas/AlertasSweet';
import Breadcrumb from './Breadcrumb';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Sidenavigation from '../../layouts/Sidenavigation';
import Topnavigation from '../../layouts/Topnavigation';
import Quickbar from '../../layouts/Quickbar';


const Crear = ({ match }) => {
  const [cliente, setCliente] = useState({
    clie_Nombres: "",
    clie_Apellidos: "",
    clie_Identidad: "",
    clie_RTN: "",
    clie_Sexo: "",
    clie_Telefono: "",
    clie_UsuCreacion: "",
  });

  useEffect(() => {
    const clie_Id = match.params.clie_Id;
    console.log(clie_Id);
    console.log(match);
    axios.get(`api/Clientes/CargarClientes?id=${clie_Id}`)
      .then((response) => {
        setCliente(response.data.data[0]);
        console.log(response.data);
        console.log(response.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const clie_Id = match.params.clie_Id; 
    console.log(clie_Id);
    const formData = {
      clie_Nombres: cliente.clie_Nombres,
      clie_Apellidos: cliente.clie_Apellidos,
      clie_Identidad: cliente.clie_Identidad,
      clie_RTN: cliente.clie_RTN,
      clie_Sexo: cliente.clie_Sexo,
      clie_Telefono: cliente.clie_Telefono,
      clie_UsuCreacion: cliente.clie_UsuCreacion,
      clie_Id: clie_Id,
    };

    // Validar campos
    const errors = {};
    if (
      !cliente.clie_Nombres ||
      !cliente.clie_Apellidos ||
      !cliente.clie_Identidad ||
      !cliente.clie_RTN ||
      !cliente.clie_Sexo ||
      !cliente.clie_Telefono
    ) {
      toastr.warning("Todos los campos son requeridos", "Advertencia");
    } else {
      axios
        .put(`api/Clientes/EditarCliente`, formData)
        .then((response) => {
          console.log(response);
          console.log(response.data.message);
          console.log("Respuesta de la API:", response);
          if (response.data.message == "YaExiste") {
            toastr.warning("Este cliente ya existe", "Registro de cliente repetido");
        }  
          else if (response.data.message == "Exitoso") {
            alertSuccess(
              "Listo",
              "El registro se actualizó con éxito",
              "2000"
            );
            setTimeout(function() {
                window.location.href = "/clientes"; // Redirecciona a la página clientes después de 2 segundos
              }, 1000);
          }  else {
            alertError(
              "Error",
              "Ocurrió un error mientras se actualizaba el registro",
              "2000"
            );
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  
    return (
      <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
      <Sidenavigation />
      <main className="body-content">
          <Topnavigation />
          <div className="ms-content-wrapper">
        <div className="row">
          <div className="col-md-12">
            <Breadcrumb />
            <div className="ms-panel">
              <div className="ms-panel-header text-center">
                <h6>Editar Cliente</h6>
                
              </div>
              <div className="ms-panel-body ">
                <form className="row g-3" onSubmit={handleFormSubmit}>
                  <div className="col-md-6">
                  <br></br>
                    <label htmlFor="Nombres" className="form-label">
                      Nombre:
                    </label>
                    <input
                    type="text"
                    id="clie_Nombres"
                    name="clie_Nombres"
                    value={cliente.clie_Nombres}
                    onChange={(event) => {
                        setCliente({
                        ...cliente,
                        clie_Nombres: event.target.value,
                        });
                    }}
                    className="form-control"
                    />


                  </div>
                  <div className="col-md-6">
                  <br></br>
                    <label htmlFor="Apellidos" className="form-label">
                      Apellidos:
                    </label>
                    <input
                      type="text"
                      id="clie_Apellidos"
                      name="clie_Apellidos"
                      value={cliente.clie_Apellidos}
                      onChange={(event) => {
                        setCliente({ ...cliente, clie_Apellidos: event.target.value });
                      }}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6">
                  <br></br>
                    <label htmlFor="Identidad" className="form-label">
                      Identidad:
                    </label>
                    <input
                      type="text"
                      id="clie_Identidad"
                      name="clie_Identidad"
                      value={cliente.clie_Identidad}
                      onChange={(event) => {
                        setCliente({ ...cliente, clie_Identidad: event.target.value });
                      }}
                      className="form-control"
                    />
                  </div>
  
                  <div className="col-md-6">
                  <br></br>
                    <label htmlFor="RTN" className="form-label">
                      RTN:
                    </label>
                    <input
                      type="text"
                      name="Rclie_RTNTN"
                      id="clie_RTN"
                      value={cliente.clie_RTN}
                      onChange={(event) => {
                        setCliente({ ...cliente, clie_RTN: event.target.value });
                      }}
                      className="form-control"
                    />
                  </div>
  
                  <div className="col-md-6">
                  <br></br>
                    <label htmlFor="Telefono" className="form-label">
                      Teléfono:
                    </label>
                    <input
                      type="text"
                      name="clie_Telefono"
                      id="clie_Telefono"
                      value={cliente.clie_Telefono}
                      onChange={(event) => {
                        setCliente({ ...cliente, clie_Telefono: event.target.value });
                      }}
                      className="form-control"
                      />
                      </div>
  
                  <div className="col-md-6">
                      <br></br>
                  <label htmlFor="sexo" className="form-label">
                      Sexo:
                  </label>
                  <br></br>
                  <div className="form-check form-check-inline">
                <input
                    type="radio"
                    name="clie_Sexo"
                    id="femenino"
                    value="F"
                    checked={cliente.clie_Sexo === "F"}
                    onChange={(e) => {
                    setCliente({ ...cliente, clie_Sexo: e.target.value });
                    }}
                    className="form-check-input"
                />
                <label htmlFor="femenino" className="form-check-label">
                    Femenino
                </label>
                </div>
                <div className="form-check form-check-inline">
                <input
                    type="radio"
                    name="clie_Sexo"
                    id="masculino"
                    value="M"
                    checked={cliente.clie_Sexo === "M"}
                    onChange={(e) => {
                    setCliente({ ...cliente, clie_Sexo: e.target.value });
                    }}
                    className="form-check-input"
                />
                <label htmlFor="masculino" className="form-check-label">
                    Masculino
                </label>
                </div>
                </div>
                                
                      {/* Centrar boton*/}
                                      
                     <div className="col-md-12 text-center">
                      <br></br>
                      <button className='btn btn-primary btn-outline-state' type="submit">Editar Cliente</button> 
                      </div>
                     
  
                    </form>
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
  
  export default Crear;
  
  