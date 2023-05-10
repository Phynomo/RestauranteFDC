import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import { Modal, Accordion, Card } from "react-bootstrap";
import { alertSuccess, alertError } from '../Alertas/AlertasSweet';
import toastr from 'toastr';
import axios from 'axios';


class ModalCreate3 extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            show: false,
            role_Nombre: '',
            validated: false,
        };
    }

    handleCreate() {
        this.setState({ create: true });
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
                role_Nombre: this.state.role_Nombre,
                role_UsuCreacion: 1,
            };
            console.log(data);
            axios.post('api/Roles/Insertar', data, {
            })
                .then(response => {
                    this.state.role_Nombre = null;
                    this.state.validated = false;
                    console.log('Respuesta de la API:', response);
                    if (response.data.message == "Exitoso") {
                        alertSuccess("Listo", "El registro se realizo con exito", "2000");
                        this.handleClose();
                    } else if (response.data.message == "YaExiste") {
                        toastr.warning("Este Rol ya existe", "Rol repetido");
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

                <Modal size='lg' show={this.state.create} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header>
                        <h3 className="modal-title has-icon ms-icon-round "><i className="flaticon-network bg-primary text-white" />Insertar un nuevo Rol</h3>
                        <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                    </Modal.Header>
                    <form onSubmit={this.handleSubmit} className={`needs-validation validation-fill ${this.state.validated ? 'was-validated' : ''}`} noValidate>
                        <Modal.Body>
                            <div className="ms-form-group has-icon">
                                <label htmlFor="validationCustom13">Ingresar rol</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" id="validationCustom13" placeholder="Rol" name="role_Nombre" value={this.state.role_Nombre} onChange={this.handleInputChange} required />
                                    <div className="invalid-feedback">Ingresar el rol es algo requerido</div>
                                </div>
                            </div>
                            <>
                            
                            </>
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
export default ModalCreate3;
