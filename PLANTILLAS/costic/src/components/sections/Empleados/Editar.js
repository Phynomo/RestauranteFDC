import toastr from 'toastr';
import { alertSuccess, alertError } from '../Alertas/AlertasSweet';
import Breadcrumb from './Breadcrumb';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Sidenavigation from '../../layouts/Sidenavigation';
import Topnavigation from '../../layouts/Topnavigation';
import Quickbar from '../../layouts/Quickbar';


const Crear = ({ match }) => {
    
    const [estadosCiviles, setEstadosCiviles] = useState([]);
    const [sucursales, setSucursales] = useState([]);
    const [departamentos, setDepartamentos] = useState([]);
    const [municipios, setMunicipios] = useState([]);
    const [cargos, setCargos] = useState([]);


    const [selectedDepartamento, setSelectedDepartamento] = useState('');
    const [Municipio, setMunicipio] = useState('');



  const [empleado, setEmpleado] = useState({
    empe_Nombres: "",
    empe_Apellidos: "",
    empe_Identidad: "",
    empe_DireccionExacta:  "",
    empe_Sexo: "",
    empe_Telefono: "",
    empe_UsuCreacion: "",
    sucu_Id: "",
    carg_Id: "",
    muni_Id: "",
    eciv_Id: "",
    empe_UsuCreacion: "",
    empe_FechaNacimiento: useState(new Date()),
    depa_Id: ""

  });

  useEffect(() => {
    const empe_Id = match.params.empe_Id;
    console.log(empe_Id);
    console.log(match);
    axios.get(`api/Empleados/CargarEmpleados?id=${empe_Id}`)
      .then((response) => {
        const empleado2 = response.data.data[0];
        const fechaNacimiento = new Date(empleado2.empe_FechaNacimiento);

        console.log(fechaNacimiento);

        empleado2.empe_FechaNacimiento = fechaNacimiento.toISOString().substring(0, 10);

        console.log(empleado2.empe_FechaNacimiento);

        setEmpleado(empleado2);  
        console.log(response.data);
        console.log(response.data.data[0]);
       
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const handleFormSubmit = (event) => {
    event.preventDefault();
    const empe_Id = match.params.empe_Id; 
    console.log(empe_Id);
    const formData = {
    empe_Nombres: empleado.empe_Nombres,
    empe_Apellidos: empleado.empe_Apellidos,
    empe_Identidad: empleado.empe_Identidad,
    empe_DireccionExacta:  empleado.empe_DireccionExacta,
    empe_Sexo: empleado.empe_Sexo,
    empe_Telefono: empleado.empe_Telefono,
    sucu_Id: empleado.sucu_Id,
    carg_Id: empleado.carg_Id,
    muni_Id: empleado.muni_Id,
    eciv_Id: empleado.eciv_Id,
    empe_UsuModificacion: "1",
    empe_FechaNacimiento: new Date(empleado.empe_FechaNacimiento),
    empe_Id: empe_Id,
    depa_Id: empleado.depa_Id
    
    };
console.log(formData.empe_FechaNacimiento + "holaaaaaaaa");
console.log(formData.empe_Apellidos + "holaaaaaaaa");
console.log(formData.empe_Nombres + "holaaaaaaaa");
console.log(formData.empe_Id + "holaaaaaaaa");
console.log(formData.empe_Identidad + "holaaaaaaaa");
console.log(formData.empe_DireccionExacta + "holaaaaaaaa");
console.log(formData.empe_Sexo + "holaaaaaaaa");
console.log(formData.empe_Telefono + "holaaaaaaaa");
console.log(formData.sucu_Id + "holaaaaaaaa");
console.log(formData.carg_Id + "holaaaaaaaa");
console.log(formData.muni_Id + "holaaaaaaaa");
console.log(formData.eciv_Id + "holaaaaaaaa");
console.log(formData.empe_UsuModificacion + "holaaaaaaaa");
console.log(formData.depa_Id + "holaaaaaaaa");



    // Validar campos
    const errors = {};
    if (
      !empleado.empe_Nombres ||
      !empleado.empe_Apellidos ||
      !empleado.empe_Identidad||
      !empleado.empe_DireccionExacta ||
      !empleado.empe_Sexo ||
      !empleado.empe_Telefono ||
      !empleado.sucu_Id ||
      !empleado.carg_Id ||
      !empleado.muni_Id ||
      !empleado.eciv_Id ||
      !empleado.empe_FechaNacimiento ||
      !empleado.depa_Id
    ) {
      toastr.warning("Todos los campos son requeridos", "Advertencia");
    } else {
      axios
        .put(`api/Empleados/EditarEmpleado`, formData)
        .then((response) => {
            console.log(formData + "LISTA QUE NEVIO");
          console.log(response);
          console.log(response.data.message);
          console.log("Respuesta de la API:", response);
          if (response.data.message == "YaExiste") {
            toastr.warning("Este Empleado ya existe", "Registro de Empleado repetido");
        }  
          else if (response.data.message == "Exitoso") {
            alertSuccess(
              "Listo",
              "El registro se actualizó con éxito",
              "2000"
            );
            setTimeout(function() {
                window.location.href = "/empleados"; // Redirecciona a la página empleados después de 2 segundos
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
                <h6>Editar Empleado</h6>
                
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
                    id="empe_Nombres"
                    name="empe_Nombres"
                    value={empleado.empe_Nombres}
                    onChange={(event) => {
                        setEmpleado({
                        ...empleado,
                        empe_Nombres: event.target.value,
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
                      id="empe_Apellidos"
                      name="empe_Apellidos"
                      value={empleado.empe_Apellidos}
                      onChange={(event) => {
                        setEmpleado({ ...empleado, empe_Apellidos: event.target.value });
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
                      id="empe_Identidad"
                      name="empe_Identidad"
                      value={empleado.empe_Identidad}
                      onChange={(event) => {
                        setEmpleado({ ...empleado, empe_Identidad: event.target.value });
                      }}
                      className="form-control"
                    />
                  </div>
  
                  <div className="col-md-6">
                  <br></br>
                    <label htmlFor="empe_DireccionExacta" className="form-label">
                    Direccion:
                    </label>
                    <input
                      type="text"
                      name="empe_DireccionExacta"
                      id="empe_DireccionExacta"
                      value={empleado.empe_DireccionExacta}
                      onChange={(event) => {
                        setEmpleado({ ...empleado, empe_DireccionExacta: event.target.value });
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
                      name="empe_Telefono"
                      id="empe_Telefono"
                      value={empleado.empe_Telefono}
                      onChange={(event) => {
                        setEmpleado({ ...empleado, empe_Telefono: event.target.value });
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
                    name="empe_Sexo"
                    id="femenino"
                    value="F"
                    checked={empleado.empe_Sexo === "F"}
                    onChange={(e) => {
                        setEmpleado({ ...empleado, empe_Sexo: e.target.value });
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
                    name="empe_Sexo"
                    id="masculino"
                    value="M"
                    checked={empleado.empe_Sexo === "M"}
                    onChange={(e) => {
                        setEmpleado({ ...empleado, empe_Sexo: e.target.value });
                    }}
                    className="form-check-input"
                />
                <label htmlFor="masculino" className="form-check-label">
                    Masculino
                </label>
                </div>
                </div>

                    
                  <div className="col-md-6">
                    <br />
                    <label htmlFor="Identidad" className="form-label">
                        Fecha de Nacimiento:
                    </label>
                    <br />
                    <input
                        type="Date"
                        className="form-control"
                        value={empleado.empe_FechaNacimiento}
                        onChange={(event) => {
                            setEmpleado({ ...empleado, empe_FechaNacimiento: event.target.value });
                        }}
                    />
                    
                  </div>
                
                  <div className="col-md-6">
                 <br></br>
                  <label htmlFor="EstadoCivil" className="form-label">
                    Estado Civil:
                  </label>

                  <select id="EstadoCivil" value={empleado.eciv_Id} onChange={(event) => {
                          setEmpleado({ ...empleado, eciv_Id: event.target.value });
                        }} className="form-control">                 
                  <option value="" hidden>Seleccione un Estado Civil</option>
                  {estadosCiviles.map(EstadoCivil => (
                  <option key={EstadoCivil.eciv_Id} value={EstadoCivil.eciv_Id}>{EstadoCivil.eciv_Descripcion}</option>
                   ))}
                  </select>
                  </div>

                  <div className="col-md-6">
                 <br></br>
                  <label htmlFor="Sucursal" className="form-label">
                    Sucursal:
                  </label>

                  <select id="Sucursal" value={empleado.sucu_Id} onChange={(event) => {
                          setEmpleado({ ...empleado, sucu_Id: event.target.value });
                        }} className="form-control">                  
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

                  <select id="Cargo" value={empleado.carg_Id} onChange={(event) => {
                          setEmpleado({ ...empleado, carg_Id: event.target.value });
                        }} className="form-control">                 
                  <option value="" hidden>Seleccione un Cargo</option>
                  {cargos.map(Cargo => (
                  <option key={Cargo.carg_Id} value={Cargo.carg_Id}>{Cargo.carg_Descripcion}</option>
                   ))}
                  </select>
                  </div>


                  <div className="col-md-6">
                 <br></br>
                  <label htmlFor="departamento" className="form-label">
                  Departamentos:
                  </label>

                  <select id="departamento" value={selectedDepartamento} onChange={handleDepartamentoChange} className="form-control">                 
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

                  <select id="municipio" value={Municipio} onChange={(event) => setMunicipio(event.target.value)} className="form-control">                 
                  <option value="" hidden>Seleccione un Municipio</option>
                  {municipios.map(Municipio => (
                  <option key={Municipio.muni_Id} value={Municipio.muni_Id}>{Municipio.muni_Nombre}</option>
                   ))}
                  </select>
                  </div>
           


                      {/* Centrar boton*/}
                                      
                     <div className="col-md-12 text-center">
                      <br></br>
                      <button className='btn btn-primary btn-outline-state' type="submit">Editar Empleados</button> 
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
  
  