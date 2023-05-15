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
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            show: false,
            depa_Nombre: '',
            depa_Codigo: '',
            validated: false,
        };
    }

    handleCreate() {
        this.setState({ create: true, validated: false, });
    }

    handleClose() {
        this.setState({ create: false });
    }

    handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            let data = {
                depa_Nombre: this.state.depa_Nombre,
                depa_Codigo: this.state.depa_Codigo,
                depa_UsuCreacion: 1,
            };
            console.log(data);
            axios.post('api/Departamentos/InsertarDepartamento', data, {
            })
                .then(response => {
                    this.state.depa_Nombre = null;
                    this.state.depa_Codigo = null;
                    this.state.validated = false;
                    console.log('Respuesta de la API:', response);
                    if (response.data.message == "Exitoso") {
                        alertSuccess("Listo", "El registro se realizo con exito", "2000");
                        this.handleClose();
                    } else if (response.data.message == "YaExiste") {
                        toastr.warning("Este Departamento ya existe", "Departamento repetido");
                    } else {
                        alertError("Error", "Ocurrio un error mientras se creaba el registro", "2000")
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
                        <h4 className="modal-title has-icon ms-icon-round "><i className="flaticon-network bg-primary text-white" />Insertar un nuevo Departamento</h4>
                        <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                    </Modal.Header>
                    <form onSubmit={this.handleSubmit} className={`needs-validation validation-fill ${this.state.validated ? 'was-validated' : ''}`} noValidate>
                        <Modal.Body>
                            <div className='row'>
                                <div className='col-6'>
                                    <div className="ms-form-group has-icon">
                                    <label htmlFor="validationCustom13">Departamento</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="validationCustom13" placeholder="Nombre" name="depa_Nombre" value={this.state.depa_Nombre} onChange={this.handleInputChange} required />
                                        <div className="invalid-feedback">Ingrese el departamento</div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="ms-form-group has-icon">
                                    <label htmlFor="validationCustom13">Codigo</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="validationCustom13" placeholder="Codigo" name="depa_Codigo" value={this.state.depa_Codigo} onChange={this.handleInputChange} required />
                                        <div className="invalid-feedback">Ingrese el codigo</div>
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
