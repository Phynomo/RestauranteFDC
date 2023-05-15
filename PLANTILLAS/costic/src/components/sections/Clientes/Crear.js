import toastr from 'toastr';
import { alertSuccess, alertError } from '../Alertas/AlertasSweet';
import Breadcrumb from './Breadcrumb';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Sidenavigation from '../../layouts/Sidenavigation';
import Topnavigation from '../../layouts/Topnavigation';
import Quickbar from '../../layouts/Quickbar';

const Crear = () => {
  const [Nombres, setNombres] = useState('');
  const [Apellidos, setApellidos] = useState('');
  const [Identidad, setIdentidad] = useState('');
  const [RTN, setRTN] = useState('');
  const [Sexo, setSexo] = useState(null);
  const [Telefono, setTelefono] = useState('');
  const [UsuarioCrea, setUsuarioCrea] = useState('1');
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = {
      clie_Nombres: Nombres,
      clie_Apellidos: Apellidos,
      clie_Identidad: Identidad,
      clie_RTN: RTN,
      clie_Sexo: Sexo,
      clie_Telefono: Telefono,
      clie_UsuCreacion: UsuarioCrea,
    };
  
    // Validar campos
    const errors = {};
    if (!Nombres || !Apellidos || !Identidad || !RTN || !Sexo || !Telefono) {
        toastr.warning("Todos los campos son requeridos","Advertencia");
        setValidated(true);
      }
   else {
      axios
        .post("api/Clientes/InsertarClientes", formData)
        .then((response) => {
          console.log(response);
          console.log('Respuesta de la API:', response);
          if (response.data.message == "Exitoso") {
              alertSuccess("Listo", "El registro se realizo con exito", "2000");
              setTimeout(function() {
                window.location.href = "/clientes"; // Redirecciono a la pagna clientes despues de 1 segundi
              }, 1000);
              setValidated(false);
          } else if (response.data.message == "YaExiste") {
              toastr.warning("Este cliente ya existe", "Registro de cliente repetido");
          } else {
              alertError("Error", "Ocurrio un error mientras se creaba el registro", "2000")
              this.handleClose();
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
              <h6>Crear de Clientes</h6>
              
            </div>
            <div className="ms-panel-body ">
                  <form className={`row g-3 needs-validation validation-fill ${validated ? 'was-validated' : ''}`} noValidate onSubmit={handleFormSubmit}>
                <div className="col-md-6">
                <br></br>
                  <label htmlFor="Nombres" className="form-label">
                    Nombre:
                  </label>
                  <input
                    required
                    type="text"
                    id="Nombres"
                    name="Nombres"
                    value={Nombres}
                    onChange={(event) => {
                      setNombres(event.target.value);

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
                    required
                    type="text"
                    id="Apellidos"
                    name="Apellidos"
                    value={Apellidos}
                    onChange={(event) => {
                      setApellidos(event.target.value);
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
                    required
                    type="text"
                    id="Identidad"
                    name="Identidad"
                    value={Identidad}
                    onChange={(event) => {
                      setIdentidad(event.target.value);
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
                    required
                    type="text"
                    name="RTN"
                    id="RTN"
                    value={RTN}
                    onChange={(event) => {
                      setRTN(event.target.value);
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
                    required
                    type="text"
                    name="Telefono"
                    id="Telefono"
                    value={Telefono}
                    onChange={(event) => { 
                        setTelefono(event.target.value) 
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
                    required
                    type="radio"
                    name="sexo"
                    id="femenino"
                    value="F"
                    checked={Sexo === "F"}
                    onChange={(e) => {
                        setSexo(e.target.value);
                    }}
                    className="form-check-input"
                    />
                    <label htmlFor="femenino" className="form-check-label">
                    Femenino
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                    required
                    type="radio"
                    name="sexo"
                    id="masculino"
                    value="M"
                    checked={Sexo === "M"}
                    onChange={(e) => {
                        setSexo(e.target.value);
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
                    <button className='btn btn-primary btn-outline-state' type="submit">Agregar Cliente</button> 
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





