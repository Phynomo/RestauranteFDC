import toastr from 'toastr';
import { alertSuccess, alertError } from '../Alertas/AlertasSweet';
import Breadcrumb from './Breadcrumb';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Sidenavigation from '../../layouts/Sidenavigation';
import Topnavigation from '../../layouts/Topnavigation';
import Quickbar from '../../layouts/Quickbar';
import { Link } from 'react-router-dom';
import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';
import { data } from 'jquery';


const Crear = () => {
  const [Rol, setRol] = useState('');
  const [UsuarioCrea, setUsuarioCrea] = useState('1');
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);


  const [selectedRoles, setSelectedRoles] = useState([]);
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const handleRoleChange = (selected) => {
    setSelectedRoles(selected);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = {
      role_Nombre: Rol,
      role_UsuCreacion: UsuarioCrea,
    };
  
    // Validar campos
    const errors = {};
    if (!Rol) {
        toastr.warning("Todos los campos son requeridos","Advertencia");
        console.log(selectedRoles);
    }
   else {
      axios
        .post("api/Roles/Insertar", formData)
        .then((response) => {
          console.log(response);
          console.log('Respuesta de la API:', response);
          if (parseInt(response.data.message) > 0) {
              alertSuccess("Listo", "El registro se realizo con exito", "2000");
              console.log(response.data.message)
                
               selectedRoles.forEach(element => {

                 let data= {
                   role_Id: response.data.message,
                   pant_Id: element,
                   prol_UsuCreacion: 1
                 }
                 axios.post('/api/PantallasPorRoles/Insertar', data)
                 .then(response => console.log(response.data))
                 .catch(error => console.error(error));
               });
              setTimeout(function() {
                window.location.href = "/roles"; // Redirecciono a la pagina clientes despues de 1 segundo
              }, 1000);
          } else if (response.data.message == "YaExiste") {
              toastr.warning("Este Rol ya existe", "Rol repetido");
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
              <h6>Crear Rol</h6>
              
            </div>
            <div className="ms-panel-body ">
              <form className="" onSubmit={handleFormSubmit}>
                <div className="col-md-12"  style={{padding: "2rem"}}>
                <br></br>
                  <label htmlFor="Rol" className="form-label">
                    Rol:
                  </label>
                  <input
                    type="text"
                    id="Rol"
                    name="Rol"
                    value={Rol}
                    onChange={(event) => {
                      setRol(event.target.value);
                    }}
                    className="form-control"
                  />
                </div>
                <div>
                <div className="ms-content-wrapper text-center">
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
                </div>
                {/* Centrar boton*/}
                  <div className="col-md-12 text-center">
                    <br></br>
                    <button className='btn btn-primary btn-outline-state' type="submit">Agregar Rol</button>
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





