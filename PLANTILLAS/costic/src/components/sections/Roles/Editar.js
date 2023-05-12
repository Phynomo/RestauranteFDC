import toastr from 'toastr';
import { alertSuccess, alertError } from '../Alertas/AlertasSweet';
import Breadcrumb from './Breadcrumb';
import React, { useEffect, useState } from 'react';
import { useHistory,useLocation } from 'react-router-dom';
import axios from 'axios'
import Sidenavigation from '../../layouts/Sidenavigation';
import Topnavigation from '../../layouts/Topnavigation';
import Quickbar from '../../layouts/Quickbar';
import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';


function Content() {
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [options, setOptions] = useState([]);
  const location = useLocation();
  const datosAntiguos = location.state?.data ?? "";

  const [rol, setRol] = useState({
    role_Nombre: datosAntiguos.role_Nombre,
  });

  useEffect(() => {
    const role_Id = 1
    console.log(role_Id);
    axios.get(`api/Clientes/CargarClientes?id=${role_Id}`)
      .then((response) => {
        setRol(response.data.data[0]);
        console.log(response.data);
        console.log(response.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleRoleChange = (selected) => {
    setSelectedRoles(selected);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const role_Id = datosAntiguos.role_Id;
    console.log(role_Id);
    const formData = {
      role_Nombre: rol.role_Nombre
    };

    // Validar campos
    const errors = {};
    if (
      !rol.role_Nombre
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

  useEffect(() => {
    console.log("*gemidos*");
    console.log(selectedRoles);
    fetch('https://localhost:44383/api/Pantallas/Listado')
      .then(response => response.json())
      .then(data => {
        const options = data.data.map(item => {
          return {
            id: item.pant_Id,
            pant_Id: item.pant_Id,
            pant_Nombre: item.pant_Nombre,
          }
        });
        setOptions(options.map(option => ({ value: option.pant_Id, label: option.pant_Nombre})));
        // setIsLoading(false);
      })
      .catch(error => {
        console.log("Error en la solicitud fetch:", error);
      });
  }, []);
  
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
                <h6>Editar Rol</h6>
                
              </div>
              <div className="ms-panel-body ">
                <form className="" onSubmit={handleFormSubmit}>
                  <div className="col-md-12" style={{padding: "2rem"}}>
                  <br></br>
                    <label htmlFor="Roles" className="form-label">
                      Rol:
                    </label>
                    <input
                    type="text"
                    id="role_Nombre"
                    name="role_Nombre"
                    value={rol.role_Nombre}
                    onChange={(event) => {
                        setRol({
                        ...rol,
                        role_Nombre: event.target.value,
                        });
                    }}
                    className="form-control"
                    />
                  </div>
                  <div className='ms-content-wrapper text-center'>
                  <DualListBox
                    options={options}
                    selected={selectedRoles}
                    onChange={handleRoleChange}
                    canFilter
                    filterCallback={(option, filterInput) => {
                      return option.label.toLowerCase().includes(filterInput.toLowerCase());
                    }}
                    icons={{ moveLeft: '<', moveAllLeft: '<<', moveRight: '>', moveAllRight: '>>' }}
                    lang={{
                      availableHeader: 'Roles disponibles',
                      selectedHeader: 'Roles seleccionados',
                      filterPlaceholder: 'Filtrar',
                    }}
                  />
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
  export default Content;
  
  