import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import { Modal, Accordion, Card } from "react-bootstrap";
import { alertSuccess, alertError } from '../Alertas/AlertasSweet';
import toastr from 'toastr';
import axios from 'axios';


class ModalCreate extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCargarDepartamentos = this.handleCargarDepartamentos.bind(this);
        this.handleCargarMunicipios = this.handleCargarMunicipios.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            show: false,
            sucu_Nombre: '',
            muni_Id: '',
            depa_Id: '',
            sucu_Direccion: '',
            departamentos: [],
            municipios: [],
            validated: false,
        };
    }

    handleCreate() {
        this.setState({ create: true });
    }

    handleClose() {
        this.setState({ create: false });
    }

    handleCargarDepartamentos() {
    axios.get('api/Departamentos/Listado')
        .then(response => {
        this.setState({
            departamentos: response.data.data
        });
        })
        .catch(error => {
        console.error('Error al cargar los departamentos:', error);
        });
    }
    async handleCargarMunicipios(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        await axios.get('api/Municipios/CargarMunicipios?id='+ value)
        .then(response => {
        this.setState({
            depa_Id: value,
            municipios: response.data.data
        });
        })
        .catch(error => {
            console.error('Error al cargar los municipios:', error);
        });
    }
    componentDidMount() {
        this.handleCargarDepartamentos();
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            let data = {
                sucu_Nombre: this.state.sucu_Nombre,
                muni_Id: this.state.muni_Id,
                sucu_Direccion: this.state.sucu_Direccion,
                sucu_UsuCreacion: 1,
            };
            axios.post('api/Sucursales/InsertarSucursal', data, {
            })
                .then(response => {
                    if (response.data.message == "Exitoso") {
                        alertSuccess("Listo", "El registro se realizo con exito", "2000");
                        this.state.sucu_Nombre = null;
                        this.state.muni_Id = null;
                        this.state.depa_Id = null;
                        this.state.municipios = [];
                        this.state.sucu_Direccion = null;
                        this.state.validated = false;
                        this.handleClose();
                    } else if (response.data.message == "YaExiste") {
                        toastr.warning("Esta Sucursal ya existe", "Sucursal repetida");
                    } else {
                        alertError("Error", "Ocurrio un error mientras se creaba el registro", "2000")
                        this.state.sucu_Nombre = null;
                        this.state.muni_Id = null;
                        this.state.depa_Id = null;
                        this.state.municipios = [];
                        this.state.sucu_Direccion = null;
                        this.state.validated = false;
                        this.handleClose();
                    }

                })
                .catch(error => {
                    console.error('Error al enviar los datos:', error);
                });
        }

        this.setState({ validated: true });
        
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
            this.setState({
                [name]: value
            });
    }


    render() {
        return (
            <div>
                <button onClick={this.handleCreate} className='btn btn-primary btn-pill btn-block'>Nuevo registro</button>

                <Modal show={this.state.create} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header>
                        <h4 className="modal-title has-icon ms-icon-round "><i className="flaticon-network bg-primary text-white" />Insertar una nueva Sucursal</h4>
                        <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                    </Modal.Header>
                    <form onSubmit={this.handleSubmit} className={`needs-validation validation-fill ${this.state.validated ? 'was-validated' : ''}`} noValidate>
                        <Modal.Body>
                            <div className='row'>
                                <div className='col-6'>
                                    <div className="ms-form-group has-icon">
                                    <label htmlFor="validationCustom13">Ingresar Sucursal</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="validationCustom13" placeholder="Nombre" name="sucu_Nombre" value={this.state.sucu_Nombre} onChange={this.handleInputChange} required />
                                            <div className="invalid-feedback">Ingrese la Sucursal</div>
                                        </div>
                                    </div>
                                </div>
                            <div className='col-6'>
                                <div className="ms-form-group has-icon">
                                <label htmlFor="validationCustom13">Departamento</label>
                                    <div className="input-group">
                                    <select className='form-control' id="validationCustom13" name="depa_Id" value={this.state.depa_Id} onChange={this.handleCargarMunicipios} required>
                                        <option value="">Seleccionar departamento</option>
                                        {this.state.departamentos.map(departamento =>
                                            <option key={departamento.depa_Id} value={departamento.depa_Id}>{departamento.depa_Nombre}</option>
                                        )}
                                        </select>
                                        <div className="invalid-feedback">Seleccione el departamento</div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <div className="ms-form-group has-icon">
                                    <label htmlFor="validationCustom13">Municipio</label>
                                        <div className="input-group">
                                        <select className="form-control" id="validationCustom13" name="muni_Id" value={this.state.muni_Id} onChange={this.handleInputChange} required>
                                            <option value="">Seleccione un municipio</option>
                                            {this.state.municipios.map(municipio =>
                                                <option key={municipio.muni_Id} value={municipio.muni_Id}>{municipio.muni_Nombre}</option>
                                            )}
                                        </select>
                                            <div className="invalid-feedback">Seleccione un municipio</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className="ms-form-group has-icon">
                                        <label htmlFor="validationCustom13">Ingresar Direccion</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="validationCustom13" placeholder="Direccion" name="sucu_Direccion" value={this.state.sucu_Direccion} onChange={this.handleInputChange} required />
                                            <div className="invalid-feedback">Ingrese la Dirección</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <button type="button" className="btn btn-light btn-sm" onClick={this.handleClose}>Cancelar</button>
                            <button type="submit" className="btn btn-primary shadow-none btn-sm">Guardar</button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
        );
    }
}
export default ModalCreate; 
