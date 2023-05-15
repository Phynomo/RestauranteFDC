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
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            show: false,
            muni_Nombre: '',
            depa_Id: '',
            muni_Codigo: '',
            departamentos: [],
            validated: false,
        };
    }

    handleCreate() {
        this.setState({ create: true, validated: false, });
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
                muni_Nombre: this.state.muni_Nombre,
                muni_Codigo: this.state.muni_Codigo,
                depa_Id: this.state.depa_Id,
                muni_UsuCreacion: 1,
            };
            axios.post('api/Municipios/InsertarMunicipios', data, {
            })
                .then(response => {
                    if (response.data.message == "Exitoso") {
                        alertSuccess("Listo", "El registro se realizo con exito", "2000");
                        this.state.muni_Nombre = null;
                        this.state.muni_Codigo = null;
                        this.state.depa_Id = null;
                        this.state.validated = false;
                        this.handleClose();
                    } else if (response.data.message == "YaExiste") {
                        toastr.warning("Este Municipio ya existe", "Municipios repetido");
                    } else {
                        alertError("Error", "Ocurrio un error mientras se creaba el registro", "2000")
                        this.state.muni_Nombre = null;
                        this.state.muni_Codigo = null;
                        this.state.depa_Id = null;
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
                        <h4 className="modal-title has-icon ms-icon-round "><i className="flaticon-network bg-primary text-white" />Insertar un nuevo Municipio</h4>
                        <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                    </Modal.Header>
                    <form onSubmit={this.handleSubmit} className={`needs-validation validation-fill ${this.state.validated ? 'was-validated' : ''}`} noValidate>
                        <Modal.Body>
                            <div className='row'>
                                <div className='col-6'>
                                    <div className="ms-form-group has-icon">
                                    <label htmlFor="validationCustom13">Ingresar Municipio</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="validationCustom13" placeholder="Nombre" name="muni_Nombre" value={this.state.muni_Nombre} onChange={this.handleInputChange} required />
                                            <div className="invalid-feedback">Ingrese el Municipio</div>
                                        </div>
                                    </div>
                                </div>
                            <div className='col-6'>
                                    <div className="ms-form-group has-icon">
                                    <label htmlFor="validationCustom13">Ingresar Codigo</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="validationCustom13" placeholder="Codigo" name="muni_Codigo" value={this.state.muni_Codigo} onChange={this.handleInputChange} required />
                                            <div className="invalid-feedback">Ingrese el Codigo</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                <div className="ms-form-group has-icon">
                                <label htmlFor="validationCustom13">Seleccionar Departamento</label>
                                    <div className="input-group">
                                    <select className='form-control' id="validationCustom13" name="depa_Id" value={this.state.depa_Id} onChange={this.handleInputChange} required>
                                        <option value="">Seleccionar departamento</option>
                                        {this.state.departamentos.map(departamento =>
                                            <option key={departamento.depa_Id} value={departamento.depa_Id}>{departamento.depa_Nombre}</option>
                                        )}
                                        </select>
                                        <div className="invalid-feedback">Seleccione un departamento</div>
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
