import { useEffect, useState, useRef } from 'react';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import { alertSuccess, alertError } from '../Alertas/AlertasSweet';
import toastr from 'toastr';
import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';

function Content() {
    const history = useHistory();
    const location = useLocation();
    const datosAntiguos = location.state?.data ?? "";
    const [rol_Id, setRol_Id] = useState(datosAntiguos.role_Id);
    const [Rol, setRol] = useState(datosAntiguos.role_Nombre);
    const [UsuarioCrea, setUsuarioCrea] = useState('1');
    const [validated, setValidated] = useState(false);


    const [selectedRoles, setSelectedRoles] = useState([]);
    const [options, setOptions] = useState([]);


    const handleRoleChange = (selected) => {
        setSelectedRoles(selected);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!Rol) {
            toastr.warning("Todos los campos son requeridos", "Advertencia");
            setValidated(true);
        }
        else {

            const formData = {
                role_Id: rol_Id,
                role_Nombre: Rol,
                role_UsuMpdificacion: 1,
            };

            axios
                .put("api/Roles/EditarRol", formData)
                .then((response) => {
                    if (response.data.message == "Exitoso") {
                        alertSuccess("Listo", "El registro se edito con exito", "2000");

                        let data = {
                            role_Id: rol_Id
                        }


                        axios.put('api/PantallasPorRoles/Eliminar', data)
                            .then(response => {

                                if (response.data.message == "Registro eliminado"){
                                    selectedRoles.forEach(element => {

                                        let data = {
                                            role_Id: rol_Id,
                                            pant_Id: element,
                                            prol_UsuCreacion: 1
                                        }
                                        axios.post('/api/PantallasPorRoles/Insertar', data)
                                            .then(response => console.log(response.data))
                                            .catch(error => console.error(error));
                                    });
                                }

                                
                        history.push(
                            "/roles"
                        )

                            })
                            .catch(error => console.error(error));


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
            const response = await axios.get(`api/Pantallas/PantallasPorRol?rol=${rol_Id}&esAdmin=0`);
            const options = response.data.data;
            const selectedRoles = options.map(option => option.pant_Id);
            setSelectedRoles(selectedRoles)
        } catch (error) {
            console.log("Error en la solicitud axios:", error);
        }
    };
    
    useEffect(() => {
        handleFetchPantallas();
        handleFetchPantallasSeleccionadas();
    }, []);

    return (
        <div className="ms-content-wrapper">
            <div className="row">
                <div className="col-md-12">
                    <div className="ms-panel">
                        <div className="ms-panel-header text-center">
                            <h6>Editar Rol</h6>
                        </div>
                        <div className="ms-panel-body ">
                            <form onSubmit={handleFormSubmit} className={`needs-validation validation-fill ${validated ? 'was-validated' : ''}`} noValidate>
                            <div className="col-md-12 " style={{ padding: "0, 2rem" }}>
                                    <label htmlFor="Rol" className="form-label">
                                        Rol:
                                    </label>
                                    <div className='input-group'>
                                    <input
                                        type="text"
                                        id="Rol"
                                        name="Rol"
                                        value={Rol}
                                        onChange={(event) => {
                                            setRol(event.target.value);
                                        }}
                                        className="form-control"
                                        required
                                    />
                                    <div className="invalid-feedback">Este campo es requerido</div>
                                    </div>
                                    
                                </div>
                                <div className="col-md-12 " style={{ padding: "0, 2rem" }}>
                                <label htmlFor="Rol" className="form-label">
                                        Seleccion de pantallas:
                                    </label>
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
                                    <button className='btn btn-primary btn-outline-state' type="submit">Editar rol</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Content;
