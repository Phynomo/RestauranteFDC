import { useEffect, useState, useRef } from 'react';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import { alertSuccess, alertError } from '../Alertas/AlertasSweet';
import toastr from 'toastr';

function Content() {

    //datos del Proveedor
    const [nombreEmpresa, setNombreEmpresa]= useState("");
    const [nombreContato, setNombreContato]= useState("");
    const [telefono, setTelefono]= useState("");
    const [depaId, setDepaId]= useState("");
    const [muniId, setMuniId]= useState("");
    const [direccionExacta, setDireccionExacta]= useState("");

    const history = useHistory();
    const [validated, setValidated] = useState(false);

    //Listados para los select
    const [departamentosList, setDepartamentosList] = useState([]);
    const [municipiosList, setMunicipiosList] = useState([]);

    //Enviando info
    const [botonEnviar, setBotonEnviar] = useState(false);

    const fetchDepartamentos = () => {
        axios.get('api/Departamentos/Listado')
            .then(response => {
                setDepartamentosList(response.data.data);
            })
            .catch(error => {
                console.log('Error en la solicitud Axios:', error);
            });
    };

    const fetchMunicipios = (id) => {
        axios.get(`api/Municipios/CargarMunicipios?id=${id}`)
            .then(response => {
                setMunicipiosList(response.data.data);
            })
            .catch(error => {
                console.log('Error en la solicitud Axios:', error);
            });
    };


    useEffect(() => {
        fetchDepartamentos();
    }, []);


    async function handleCreate() {
        setBotonEnviar(true);
          let provData = {
            prov_NombreEmpresa: nombreEmpresa,
            prov_NombreContacto: nombreContato,
            prov_Telefono: telefono,
            muni_Id: muniId,
            prov_DireccionExacta: direccionExacta,
            prov_UsuCreacion: 1,		
          };
      
          await axios.post('api/Proveedores/InsertarProveedores', provData)
            .then(response => {
              console.log(response);
              if (response.data.message == "Exitoso") {
                alertSuccess("Creado", "El proveedor se registro con exito", "2000");
                history.push("/proveedores");
              }else if(response.data.message == "YaExiste") {
                setNombreEmpresa("");
                toastr.warning("Este proveedor ya existe, inserte otro", "Proveedor existente");
              }else{
                toastr.error("Ocurrio un error inespero", "Inespero");
              }
            })
            .catch(error => {
              console.log('Error en la solicitud Axios:', error);
            });

        setBotonEnviar(false);
      }
      

    const handleSubmit = (e) => {
        setValidated(false);
        e.preventDefault();
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            setValidated(true);
        } else {
            handleCreate();
        }
    };


    function handleInputChange(event, setState) {
        setState(event.target.value);
    }
    
    function handleInputChangeDepa(event, setState) {
        fetchMunicipios(event.target.value);
        setState(event.target.value);
    }


    ///////////////////////////////////////////////////////





    return (
        <div className="ms-content-wrapper">
            <div className='container-fluid '>
                <form onSubmit={handleSubmit} className={`needs-validation validation-fill ${validated ? 'was-validated' : ''}`} noValidate>
                    <div class="card">
                        <div className='card-header'>
                            <h3>Insertar proveedor</h3>
                        </div>
                        <div class="card-body">
                            <div className='row mt-3'>
                                <div className='col-6'>
                                    <div className="form-group">
                                        <label>Nomrbe de la proveedor</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="validationCustom1" placeholder="Nombre del proveedor" name="prov_NombreEmpresa" value={nombreEmpresa} onChange={(event) => handleInputChange(event, setNombreEmpresa)} required />
                                            <div className="invalid-feedback">Ingresa el nombre del proveedor</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className="form-group">
                                        <label>Nombre del contacto</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="validationCustom2" placeholder="Nombre del contacto" name="prov_NombreContacto" value={nombreContato} onChange={(event) => handleInputChange(event, setNombreContato)} required />
                                            <div className="invalid-feedback">Ingresa el nombre del contacto</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <div className="form-group">
                                        <label>Departamento</label>
                                        <div className='input-group'>
                                            <select value={depaId} onChange={(event) => handleInputChangeDepa(event, setDepaId)} className="form-control" id="validationCustom3" required>
                                                <option value="">Selecciona un departamento</option>
                                                {departamentosList.map((option) => (
                                                    <option key={option.depa_Id} value={option.depa_Id}>{option.depa_Nombre}</option>
                                                ))}
                                            </select>
                                            <div className="invalid-feedback">Selecciona un empleado para el usuario</div>
                                        </div>

                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className="form-group">
                                        <label>Municipio</label>
                                        <div className='input-group'>
                                            <select value={muniId} onChange={(event) => handleInputChange(event, setMuniId)} className="form-control" id="validationCustom4" required>
                                                <option value="">Selecciona un municipio</option>
                                                {municipiosList.map((option) => (
                                                    <option key={option.muni_Id} value={option.muni_Id}>{option.muni_Nombre}</option>
                                                ))}
                                            </select>
                                            <div className="invalid-feedback">Selecciona un rol para el usuario</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-8'>
                                    <div className="form-group">
                                        <label>Direccion Exacta</label>
                                        <div className="input-group">
                                            <input type="mail" className="form-control" id="validationCustom5" placeholder="Direccion del proveedor" name="prov_DireccionExacta" value={direccionExacta} onChange={(event) => handleInputChange(event, setDireccionExacta)} required />
                                            <div className="invalid-feedback">Ingresa la direccion del proveedor</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className="form-group">
                                        <label>Telefono</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="validationCustom1" placeholder="Telefono del contacto" name="prov_TelefonoContato" value={telefono} onChange={(event) => handleInputChange(event, setTelefono)} required />
                                            <div className="invalid-feedback">Ingresa el telefono del contacto</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-end'>
                                <div className='col-4'>
                                    <button type='submit' disabled={botonEnviar} className='btn btn-danger btn-pill btn-block' >Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Content;
