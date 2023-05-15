import React, { Component, useState } from 'react';
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
            carg_Descripcion: '',
            validated: false,
            inserto: false, // Agregamos el estado inserto con valor inicial false
        };
    }

    handleCreate() {
        this.state.validated = false;
        this.state.carg_Descripcion = null;
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
            this.setState({
                validated: true,
            });
        } else {
            let data = {
                carg_Descripcion: this.state.carg_Descripcion,
                carg_UsuCreacion: 1,
            };
            console.log(data);
            axios.post('api/Cargos/Insertar', data, {
            })
            .then(response => {
                console.log('Respuesta de la API:', response);
                if (response.data.message == "Exitoso") {
                    alertSuccess("Listo", "El registro se realizo con exito", "2000");
                    this.setState({
                        validated: false,
                        carg_Descripcion: null,
                        inserto: true, // Cambiamos el valor de inserto a true
                    });
                    this.handleClose();
                } else if (response.data.message == "YaExiste") {
                    toastr.warning("Este cargo ya existe", "Cargo repetido");
                } else {
                    alertError("Error", "Ocurrio un error mientras se creaba el registro", "2000")
                    this.setState({
                        validated: false,
                        carg_Descripcion: null,
                        inserto: true, // Cambiamos el valor de inserto a false
                    });
                    this.handleClose();
                }
        
            })
        }
        this.state.inserto = true;
        console.log(this.state.inserto);
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
                        <h4 className="modal-title has-icon ms-icon-round "><i className="flaticon-network bg-primary text-white" />Insertar un nuevo cargo</h4>
                        <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                    </Modal.Header>
                    <form onSubmit={this.handleSubmit} className={`needs-validation validation-fill ${this.state.validated ? 'was-validated' : ''}`} noValidate>
                        <Modal.Body>
                            <div className="ms-form-group has-icon">
                                <label htmlFor="validationCustom13">Ingresar cargo</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" id="validationCustom13" placeholder="Cargo" name="carg_Descripcion" value={this.state.carg_Descripcion} onChange={this.handleInputChange} required />
                                    <div className="invalid-feedback">Ingresar el cargo es algo requerido</div>
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
