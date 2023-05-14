import toastr from 'toastr';
import { alertSuccess, alertError } from '../Alertas/AlertasSweet';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
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
  const [rolNombre, setRolNombre] = useState(datosAntiguos.role_Nombre);
  const [rolId, setRolId] = useState(datosAntiguos.role_Id);


  const handleRoleChange = (selected) => {
    setSelectedRoles(selected);
  };

  const handleFormSubmit = (event) => {

  };

  const handleFetchPantallas = async () => {
    try {
      const response = await axios.get('api/Pantallas/Listado');
      const options = response.data.data.map(item => {
        return {
          id: item.pant_Id,
          pant_Id: item.pant_Id,
          pant_Nombre: item.pant_Nombre,
        }
      });
      setOptions(options.map(option => ({ value: option.pant_Id, label: option.pant_Nombre })));
    } catch (error) {
      console.log("Error en la solicitud axios:", error);
    }
  };
  const handleFetchPantallasSeleccionadas = async () => {
    try {
      const response = await axios.get(`api/Pantallas/PantallasPorRol?rol=${rolId}&esAdmin=0`);
      const options = response.data.data;
      const selectedRoles = options.map(option => option.pant_Id);
      setSelectedRoles(selectedRoles)
    } catch (error) {
      console.log("Error en la solicitud axios:", error);
    }
  };


  useEffect( async () => {
    await handleFetchPantallas();
    await handleFetchPantallasSeleccionadas();
    
    console.log("seleccionados",selectedRoles)


  }, []);

  return (
    <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
      <Sidenavigation />
      <main className="body-content">
        <Topnavigation />
        <div className="ms-content-wrapper">
          <div className="row">
            <div className="col-md-12">
              <div className="ms-panel">
                <div className="ms-panel-header text-center">
                  <h6>Editar Rol</h6>

                </div>
                <div className="ms-panel-body ">
                  <form className="" onSubmit={handleFormSubmit}>
                    <div className="col-md-12" style={{ padding: "2rem" }}>
                      <br></br>
                      <label htmlFor="Roles" className="form-label">
                        Rol:
                      </label>
                      <input
                        type="text"
                        id="role_Nombre"
                        name="role_Nombre"
                        value={rolNombre}
                        onChange={(event) => {
                          setRolNombre(event.target.value);
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
                      <button className='btn btn-primary btn-outline-state' type="submit">Editar Rol</button>
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

