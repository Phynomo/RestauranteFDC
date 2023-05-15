import toastr from 'toastr';
import { alertSuccess, alertError } from '../Alertas/AlertasSweet';
import Breadcrumb from './Breadcrumb';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Sidenavigation from '../../layouts/Sidenavigation';
import Topnavigation from '../../layouts/Topnavigation';
import Quickbar from '../../layouts/Quickbar';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';



const Crear = () => {
  const [estadosCiviles, setEstadosCiviles] = useState([]);
  const [sucursales, setSucursales] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [cargos, setCargos] = useState([]);
  const [selectedDepartamento, setSelectedDepartamento] = useState('');
  const [validated, setValidated] = useState(false);

  const [Nombres, setNombres] = useState('');
  const [Apellidos, setApellidos] = useState('');
  const [Identidad, setIdentidad] = useState('');
  const [Municipio, setMunicipio] = useState('');
  const [Sexo, setSexo] = useState(null);
  const [EstadoCivil, setEstadoC] = useState('');
  const [Direccion, setDireccion] = useState('');
  const [Sucursal, setSucursal] = useState('');
  const [Cargo, setCargo] = useState('');
  const [Correo, setCorreo] = useState('');

  const [Telefono, setTelefono] = useState('');
  const [UsuarioCrea, setUsuarioCrea] = useState('1');

  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [selectedDate, setSelectedDate] = useState(new Date());


  console.log(selectedDate);

   const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = {
      empe_Nombres: Nombres,
      empe_Apellidos: Apellidos,
      empe_Identidad: Identidad,
      empe_DireccionExacta: Direccion,
      empe_Sexo: Sexo,
      empe_Telefono: Telefono,
      empe_UsuCreacion: UsuarioCrea,
      sucu_Id: Sucursal,
      carg_Id: Cargo,
      muni_Id: Municipio,
      eciv_Id: EstadoCivil,
      empe_UsuCreacion: UsuarioCrea,
      empe_FechaNacimiento: selectedDate,
      empe_CorreoElectronico: Correo

    };
  
    // Validar campos
    const errors = {};
    if (!Nombres || !Apellidos || !Identidad || !Direccion || !Sexo || !Telefono || !Sucursal || !Cargo|| !Municipio || !EstadoCivil || !selectedDate || !Correo ) {
        toastr.warning("Todos los campos son requeridos","Advertencia");
        setValidated(true);
    }
   else {
      axios
        .post("api/Empleados/InsertarEmpleados", formData)
        .then((response) => {
          console.log(response);
          console.log('Respuesta de la API:', response);
          if (response.data.message == "Exitoso") {
              alertSuccess("Listo", "El registro se realizo con exito", "2000");
              setTimeout(function() {
                window.location.href = "/empleados"; // Redirecciono a la pagna clientes despues de 1 segundi
              }, 1000);
              setValidated(false);
          } else if (response.data.message == "YaExiste") {
              toastr.warning("Este cliente ya existe", "Registro del Empleado repetido");
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

      
  useEffect(() => {
    axios.get('api/Sucursales/Listado')
      .then(response => {
        setSucursales(response.data.data);
        console.log(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
      });


      axios.get('api/Cargos/Listado')
      .then(response => {
        setCargos(response.data.data);
        console.log(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
      });


    axios.get('api/EstadosCiviles/Listado')
      .then(response => {
        setEstadosCiviles(response.data.data);
        console.log(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
      });

    axios.get('api/Departamentos/Listado')
      .then(response => {
        setDepartamentos(response.data.data);
        console.log(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
      });
  }, []);

  useEffect(() => {
    if (selectedDepartamento) {
      axios.get(`api/Municipios/CargarMunicipios?id=${selectedDepartamento}`)
        .then(response => {
          setMunicipios(response.data.data);
          console.log(response.data.data);
        })
        .catch(error => {
          console.error('Error fetching data from API:', error);
        });
    }
  }, [selectedDepartamento]);

  function handleDepartamentoChange(event) {
    setSelectedDepartamento(event.target.value);
    setMunicipios([]);
  }
  

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
                  <h6>Crear de Empleados</h6>
              
                  </div>
                  <div className="ms-panel-body ">
                  <form className={`row g-3 needs-validation validation-fill ${validated ? 'was-validated' : ''}`} noValidate onSubmit={handleFormSubmit}>
                 <div className="col-md-6">
                 <br></br>
                  <label htmlFor="Nombres" className="form-label">
                    Nombre:
                  </label>
                  <div className="input-group">
                     <input
                    type="text"
                    id="Nombres"
                    name="Nombres"
                    value={Nombres}
                    onChange={(event) => {
                      setNombres(event.target.value);

                    }}
                    className="form-control"
                    required
                  />
                  <div className="invalid-feedback">Este campo es necesario</div>
                  </div>
                 
                 </div>
                 <div className="col-md-6">
                 <br></br>
                  <label htmlFor="Apellidos" className="form-label">
                    Apellidos:
                  </label>
                  <input
                    type="text"
                    id="Apellidos"
                    name="Apellidos"
                    value={Apellidos}
                    onChange={(event) => {
                      setApellidos(event.target.value);
                    }}
                    className="form-control"
                    required
                  />
                 </div>
                 <div className="col-md-6">
                 <br></br>
                  <label htmlFor="Identidad" className="form-label">
                    Identidad:
                  </label>
                  <input
                    type="text"
                    id="Identidad"
                    name="Identidad"
                    value={Identidad}
                    onChange={(event) => {
                      setIdentidad(event.target.value);
                    }}
                    className="form-control"
                    required
                  />
                 </div>

                  <div className="col-md-6">
                  <br />
                  <label htmlFor="Identidad" className="form-label">
                      Fecha de Nacimiento:
                  </label>
                <input
                  type="date"
                  name="selectedDate"
                  id="selectedDate"
                  value={selectedDate}
                  onChange={(event) => {
                    setSelectedDate(event.target.value);
                  }}
                  className="form-control"
                  required
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
                    name="sexo"
                    id="femenino"
                    value="F"
                    checked={Sexo === "F"}
                    onChange={(e) => {
                        setSexo(e.target.value);
                    }}
                    className="form-check-input"
                    required
                    />
                    <label htmlFor="femenino" className="form-check-label">
                    Femenino
                    </label>
                 </div>
                  <div className="form-check form-check-inline">
                    <input
                    type="radio"
                    name="sexo"
                    id="masculino"
                    value="M"
                    checked={Sexo === "M"}
                    onChange={(e) => {
                        setSexo(e.target.value);
                    }}
                    className="form-check-input"
                    required
                    />
                    <label htmlFor="masculino" className="form-check-label">
                    Masculino
                    </label>

                  </div>
                  </div>

                  <div className="col-md-6">
                 <br></br>
                  <label htmlFor="EstadoCivil" className="form-label">
                    Estado Civil:
                  </label>

                  <select
                    required id="EstadoCivil" value={EstadoCivil} onChange={(event) => setEstadoC(event.target.value)} className="form-control">                 
                  <option value="" hidden>Seleccione un Estado Civil</option>
                  {estadosCiviles.map(EstadoCivil => (
                  <option key={EstadoCivil.eciv_Id} value={EstadoCivil.eciv_Id}>{EstadoCivil.eciv_Descripcion}</option>
                   ))}
                  </select>
                  </div>
                    
                 <div className="col-md-6">
                 <br></br>
                  <label htmlFor="Telefono" className="form-label">
                    Teléfono:
                  </label>
                  <input
                    type="text"
                    name="Telefono"
                    id="Telefono"
                    value={Telefono}
                    onChange={(event) => { 
                        setTelefono(event.target.value) 
                    }}
                    className="form-control"
                    required
                    />
                 </div>

                 <div className="col-md-6">
                 <br></br>
                  <label htmlFor="Correo" className="form-label">
                    Correo Electrónico:
                  </label>
                  <input
                    type="email"
                    name="Correo"
                    id="Correo"
                    value={Correo}
                    onChange={(event) => { 
                        setCorreo(event.target.value) 
                    }}
                    className="form-control"
                    required
                    />
                 </div>


                 <div className="col-md-6">
                 <br></br>
                  <label htmlFor="departamento" className="form-label">
                  Departamentos:
                  </label>

                  <select 
                    required id="departamento" value={selectedDepartamento} onChange={handleDepartamentoChange} className="form-control">                 
                  <option value="" hidden>Seleccione un Departamento</option>
                  {departamentos.map(departamento => (
                  <option key={departamento.depa_Id} value={departamento.depa_Id}>{departamento.depa_Nombre}</option>
                   ))}
                  </select>
                  </div>

                  <div className="col-md-6">
                 <br></br>
                  <label htmlFor="municipio" className="form-label">
                  Municipios:
                  </label>

                  <select 
                    required id="municipio" value={Municipio} onChange={(event) => setMunicipio(event.target.value)} className="form-control">                 
                  <option value="" hidden>Seleccione un Municipio</option>
                  {municipios.map(Municipio => (
                  <option key={Municipio.muni_Id} value={Municipio.muni_Id}>{Municipio.muni_Nombre}</option>
                   ))}
                  </select>
                  </div>

                 <div className="col-md-6">
                 <br></br>
                  <label htmlFor="Direccion" className="form-label">
                    Dirección:
                  </label>
                  <input
                    type="text"
                    name="Direccion"
                    id="Direccion"
                    value={Direccion}
                    onChange={(event) => {
                      setDireccion(event.target.value);
                    }}
                    className="form-control"
                    required
                  />
                 </div>
   

                 

                  <div className="col-md-6">
                 <br></br>
                  <label htmlFor="Sucursal" className="form-label">
                    Sucursal:
                  </label>

                  <select 
                    required id="Sucursal" value={Sucursal} onChange={(event) => setSucursal(event.target.value)} className="form-control">                 
                  <option value="" hidden>Seleccione una sucursal</option>
                  {sucursales.map(Sucursal => (
                  <option key={Sucursal.sucu_Id} value={Sucursal.sucu_Id}>{Sucursal.sucu_Nombre}</option>
                   ))}
                  </select>
                  </div>

                  <div className="col-md-6">
                 <br></br>
                  <label htmlFor="Cargo" className="form-label">
                    Cargo:
                  </label>

                  <select 
                    required id="Cargo" value={Cargo} onChange={(event) => setCargo(event.target.value)} className="form-control">                 
                  <option value="" hidden>Seleccione un Cargo</option>
                  {cargos.map(Cargo => (
                  <option key={Cargo.carg_Id} value={Cargo.carg_Id}>{Cargo.carg_Descripcion}</option>
                   ))}
                  </select>
                  </div>

              
           
                 {/* Centrar boton*/}
                    
              
               
                  <div className="col-md-12 text-center">
                    <br></br>
                    <button className='btn btn-primary btn-outline-state' type="submit">Agregar Empleado</button> 
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





