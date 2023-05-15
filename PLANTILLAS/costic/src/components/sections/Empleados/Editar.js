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
    const [cargos, setCargos] = useState([]);
    const [validated, setValidated] = useState(false);

    const [municipios, setMunicipios] = useState([]);

    const [Municipio, setMunicipio] = useState('')
  const [selectedDepartamento, setSelectedDepartamento] = useState('');



  const handleDepartamentoChange = (event) => {
    const selectedDepa_Id = event.target.value;
    setSelectedDepartamento(selectedDepa_Id);
    setEmpleado({
      ...empleado,
      depa_Id: selectedDepa_Id,
      muni_Id: '' // reset municipio
    });
  };
  

  /*
    const [submitted, setSubmitted] = useState(false);
    const [MunicipioSubmited, setMunicipioSubmited] = useState(false);

    const [DepartaemntoDDL, setDepartamentoDDL] = useState([]);//ddl Departemento 
    const [Deparatemento, setDepartamento] = useState('');//almacena el valor seleccionado del ddl 

    
    const [MunicipioDDL, setMunicipioDDL] = useState([]);//ddl Municipios
    const [Municipio, setMunicipio] = useState(''); // alamcena el valor del ddl
    const [MunicipioActivated, setMunicipioActivated] = useState(true);// almacena si el ddl esta activado*/




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
    depa_Id: "",
    empe_CorreoElectronico: ""

  });
  const [muniA, setMuniA] = useState();
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
        setMuniA(empleado2.muni_Id);

        setEmpleado(empleado2);  

        axios.get(`api/Municipios/CargarMunicipios?id=${response.data.data[0].depa_Id}`)
        .then((response) => {
          setMunicipios(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });

       
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
    empe_FechaNacimiento: empleado.empe_FechaNacimiento,
    empe_Id: empe_Id,
    empe_CorreoElectronico: empleado.empe_CorreoElectronico
    };
    console.log(formData);
 
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
      setValidated(true);
    } else {
      axios
        .put(`api/Empleados/EditarEmpleado`, formData)
        .then((response) => {
          
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
              setValidated(false);
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


      /*
      axios.get('api/Departamentos/Listado')
      .then(response => response.data)
      .then((data) => setDepartamentoDDL( data.data.map((c) => ({ code: c.depa_Id, name: c.depa_Nombre }))))
      .catch(error => console.error(error))
      */

      axios.get('api/Departamentos/Listado')
      .then(response => {
        setDepartamentos(response.data.data);
        console.log(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
      });
      
     }, []);

 /* useEffect(() => {
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
*/



  useEffect(() => {
    if (selectedDepartamento) {
      axios.get(`api/Municipios/CargarMunicipios?id=${selectedDepartamento}`)
        .then((response) => {
          setMunicipios(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [selectedDepartamento]);
  

  
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
                <form className={`row g-3 needs-validation validation-fill ${validated ? 'was-validated' : ''}`} noValidate onSubmit={handleFormSubmit}>
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
                    required
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
                      id="empe_Identidad"
                      name="empe_Identidad"
                      value={empleado.empe_Identidad}
                      onChange={(event) => {
                        setEmpleado({ ...empleado, empe_Identidad: event.target.value });
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
                    <br />
                    <input
                        type="Date"
                        className="form-control"
                    required
                        value={empleado.empe_FechaNacimiento}
                        onChange={(event) => {
                            setEmpleado({ ...empleado, empe_FechaNacimiento: event.target.value });
                        }}
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
                    name="empe_Sexo"
                    id="femenino"
                    value="Femenino"
                    checked={empleado.empe_Sexo === "Femenino"}
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
                    required
                    type="radio"
                    name="empe_Sexo"
                    id="masculino"
                    value="Masculino"
                    checked={empleado.empe_Sexo === "Masculino"}
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
                 <br></br>
                  <label htmlFor="EstadoCivil" className="form-label">
                    Estado Civil:
                  </label>

                  <select 
                    required id="EstadoCivil" value={empleado.eciv_Id} onChange={(event) => {
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
                    <label htmlFor="Telefono" className="form-label">
                      Teléfono:
                    </label>
                    <input
                    required
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
                  <label htmlFor="Correo" className="form-label">
                    Correo Electrónico:
                  </label>
                  <input
                    required
                    type="email"
                    name="Correo"
                    id="Correo"
                    value={empleado.empe_CorreoElectronico}
                    onChange={(event) => {
                        setEmpleado({ ...empleado, empe_CorreoElectronico: event.target.value });
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
                    required
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
                  <label htmlFor="departamento" className="form-label">
                  Departamentos:
                  </label>
                  <select 
                    required id="departamento" value={empleado.depa_Id} onChange={handleDepartamentoChange} className="form-control">                 
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
                    required
                    id="municipio" 
                    value={empleado.muni_Id} 
                    onChange={(event) => setEmpleado({...empleado, muni_Id: event.target.value})} 
                    className="form-control">
                         <option value="" hidden>Seleccione un municipio</option>
                    {municipios.map((Municipio) => (
                        <option key={Municipio.muni_Id} value={Municipio.muni_Id}>{Municipio.muni_Nombre}</option>
                    ))}
                    </select>

                  </div>
                


                  <div className="col-md-6">
                 <br></br>
                  <label htmlFor="Sucursal" className="form-label">
                    Sucursal:
                  </label>

                  <select  
                    required id="Sucursal" value={empleado.sucu_Id} onChange={(event) => {
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

                  <select 
                    required id="Cargo" value={empleado.carg_Id} onChange={(event) => {
                          setEmpleado({ ...empleado, carg_Id: event.target.value });
                        }} className="form-control">                 
                  <option value="" hidden>Seleccione un Cargo</option>
                  {cargos.map(Cargo => (
                  <option key={Cargo.carg_Id} value={Cargo.carg_Id}>{Cargo.carg_Descripcion}</option>
                   ))}
                  </select>
                  </div>



           


                 {/*       
                  <div className="col-md-6">
                 <br></br>
                  <label htmlFor="departamento" className="form-label">
                  Departamentos:
                  </label>
                  <select optionLabel="name" 
                            placeholder="Seleccionar" 
                            options={DepartaemntoDDL} 
                            value={Deparatemento} 
                            onChange={(e) => { 
                                setDepartamento(e.value); ActivarMunicipioDDl(e.value.code); }}
                               
                  className="form-control"/>                
                    </div>


                    <div className="col-md-6">
                     <br></br>
                     <label htmlFor="municipio" className="form-label">
                    Municipios:
                    </label>
                            <select optionLabel="name" 
                            placeholder="Selecionar" 
                            options={MunicipioDDL} 
                            value={Municipio} 
                            onChange={(e) => setMunicipio(e.value)} 
                            disabled={MunicipioActivated} 
                             className="form-control"/>
                        
                     </div>
                            */}

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
  
  