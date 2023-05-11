import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import { Modal, Accordion, Card } from "react-bootstrap";
import axios from 'axios';
import { alertSuccess, alertError } from '../Alertas/AlertasSweet';
import toastr from 'toastr';

class ModalsPut extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCargarDepartamentos = this.handleCargarDepartamentos.bind(this);
        this.handleSubmitDelete = this.handleSubmitDelete.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handlePrimerCargarMunicipios = this.handlePrimerCargarMunicipios.bind(this);
        this.state = {
            show: false,
            sucu_Nombre: this.props.data ? this.props.data.sucu_Nombre : '',
            muni_Id: this.props.data ? this.props.data.muni_Id : '',
            depa_Id: this.props.data ? this.props.data.depa_Id : '',
            sucu_Direccion: this.props.data ? this.props.data.sucu_Direccion : '',
            departamentos: [],
            municipios: [],
            validated: false,
        };
    }

    handleEdit() {
        this.setState({ Edit: true });
    }

    handleDelete() {
        this.setState({ Delete: true });
    }

    handleClose() {
        this.setState({ Delete: false });
        this.setState({ Edit: false });
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

        async handlePrimerCargarMunicipios() {
            await axios.get('api/Municipios/CargarMunicipios?id='+ this.state.depa_Id)
            .then(response => {
            this.setState({
                municipios: response.data.data
            });
            })
            .catch(error => {
                console.error('Error al cargar los municipios:', error);
            });
        }

        componentDidMount() {
            this.handleCargarDepartamentos();
            this.handlePrimerCargarMunicipios();
        }

    handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            let data = {
                sucu_Id: this.props.data.sucu_Id,
                sucu_Nombre: this.state.sucu_Nombre,
                depa_Id: this.state.depa_Id,
                departamentos: this.state.departamentos,
                muni_Id: this.state.muni_Id,
                sucu_Direccion: this.state.sucu_Direccion,
                sucu_UsuModificacion: 1,
            };

            axios.put('/api/Sucursales/EditarSucursal', data)
            .then(response => {
                console.log(response.data);
                if (response.data.message == "Exitoso") {
                    alertSuccess("Listo", "El registro se edito con exito", "2000");
                    this.state.validated = false;
                    this.handleClose();
                } else if (response.data.message == "YaExiste") {
                    toastr.warning("Esta Sucursal ya existe", "Sucursal repetida");
                } else {
                    alertError("Error", "Ocurrio un error mientras se editaba el registro", "2000")
                    this.state.validated = false;
                    this.handleClose();
                }
            })
            .catch(error => {
                console.log(error);
            });
        }

        this.setState({ validated: true });
    }
    
    handleSubmitDelete() {
        let data = {
            sucu_Id: this.props.data.sucu_Id,
            sucu_UsuModificacion: 1,
        };
        axios.put('api/Sucursales/Eliminar', data)
        .then(response => {
            console.log(response.data);
            if (response.data.message == "Registro eliminado") {
                alertSuccess("Listo", "El registro se elimino con exito", "2000");
                this.handleClose();
            }else {
                alertError("Error", "Ocurrio un error mientras se eliminaba el registro", "2000")
                this.handleClose();
            }
        })
        .catch(error => {
            console.log(error);
        });
        this.handleClose();
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
                {/* <button onClick={this.handleCreate} className='btn btn-primary btn-pill'>Nuevo registro</button> */}
                <a style={{ margin: "5px" }} onClick={this.handleEdit}><i className='fas fa-pencil-alt text-secondary'></i></a>
                <a style={{ margin: "5px" }} onClick={this.handleDelete}><i className='far fa-trash-alt ms-text-danger'></i></a>
                
                <Modal show={this.state.Edit} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header>
                        <h3 className="modal-title has-icon ms-icon-round "><i className="flaticon-network bg-primary text-white" />Editar Sucursal</h3>
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
                                        <div className="invalid-feedback">Ingresar la sucursal es algo requerido</div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="ms-form-group has-icon">
                                <label htmlFor="validationCustom13">Seleccionar Departamento</label>
                                    <div className="input-group">
                                    <select className='form-control' id="validationCustom13" name="depa_Id" value={this.state.depa_Id} onChange={this.handleCargarMunicipios} required>
                                        <option value="">Seleccionar departamento</option>
                                        {this.state.departamentos.map(departamento =>
                                            <option key={departamento.depa_Id} value={departamento.depa_Id}>{departamento.depa_Nombre}</option>
                                        )}
                                        </select>
                                        <div className="invalid-feedback">Seleccionar un departamento es obligatorio</div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className='row'>
                            <div className='col-6'>
                                <div className="ms-form-group has-icon">
                                <label htmlFor="validationCustom13">Seleccionar municipio</label>
                                    <div className="input-group">
                                    <select className="form-control" id="validationCustom13" name="muni_Id" value={this.state.muni_Id} onChange={this.handleInputChange} required>
                                        <option value="">Seleccione un municipio</option>
                                        {this.state.municipios.map(municipio =>
                                            <option key={municipio.muni_Id} value={municipio.muni_Id}>{municipio.muni_Nombre}</option>
                                        )}
                                    </select>
                                        <div className="invalid-feedback">Seleccionar un municipio es obligatorio</div>
                                    </div>
                                </div>
                            </div>
                                <div className='col-6'>
                                            <div className="ms-form-group has-icon">
                                            <label htmlFor="validationCustom13">Ingresar Direccion</label>
                                            <div className="input-group">
                                            <input type="text" className="form-control" id="validationCustom13" placeholder="Direccion" name="sucu_Direccion" value={this.state.sucu_Direccion} onChange={this.handleInputChange} required />
                                            <div className="invalid-feedback">Ingresar la Direccion es algo requerido</div>
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
                <Modal show={this.state.Delete} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header className="bg-primary">
                        <h3 className="modal-title has-icon ms-icon-round  text-white"><i className="flaticon-alert-1 bg-primary text-white" />¿Estas seguro?</h3>
                        <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                    </Modal.Header>
                    <Modal.Body className='text-center'>
                        <h5>No podras recuperar este registro si lo eliminas</h5>
                    </Modal.Body>
                    <Modal.Footer className='d-flex justify-content-center'> 
                        <button type="button" className="btn btn-light btn-sm" onClick={this.handleClose}>Cancelar</button>
                        <button type="button" className="btn btn-primary shadow-none btn-sm" onClick={this.handleSubmitDelete}>Eliminar</button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
};
export default ModalsPut;