import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import { Modal, Accordion, Card } from "react-bootstrap";




class ModalCreate extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            show: false,
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
            // Aquí puedes enviar el formulario al servidor o hacer lo que necesites
            console.log("Formulario válido");
            this.handleClose();
        }

        this.setState({ validated: true });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleCreate} className='btn btn-primary btn-pill btn-block'>Nuevo registro</button>

                <Modal show={this.state.create} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header>
                        <h3 className="modal-title has-icon ms-icon-round "><i className="flaticon-network bg-primary text-white" />Insertar un nuevo cargo</h3>
                        <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                    </Modal.Header>
                    <form onSubmit={this.handleSubmit} className={`needs-validation validation-fill ${this.state.validated ? 'was-validated' : ''}`} noValidate>
                        <Modal.Body>
                            <div className="ms-form-group has-icon">
                                <label htmlFor="validationCustom13">Ingresar cargo</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" id="validationCustom13" placeholder="Cargo" required />
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
