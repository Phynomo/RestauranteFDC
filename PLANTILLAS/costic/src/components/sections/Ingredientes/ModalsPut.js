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
        this.handleCargarProveedores = this.handleCargarProveedores.bind(this);
        this.handleSubmitDelete = this.handleSubmitDelete.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            show: false,
            ingr_Nombre: this.props.data ? this.props.data.ingr_Nombre : '',
            ingr_PrecioX100gr: this.props.data ? this.props.data.ingr_PrecioX100gr : '',
            prov_Id: this.props.data ? this.props.data.prov_Id : '',
            proveedores: [],
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

    handleCargarProveedores() {
        axios.get('/api/Proveedores/Listado')
            .then(response => {
            this.setState({
                proveedores: response.data.data
            });
            })
            .catch(error => {
            console.error('Error al cargar los departamentos:', error);
            });
        }
        

        

        componentDidMount() {
            this.handleCargarProveedores();
        }

    handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            let data = {
                ingr_Id: this.props.data.ingr_Id,
                ingr_Nombre: this.state.ingr_Nombre,
                ingr_PrecioX100gr: this.state.ingr_PrecioX100gr,
                prov_Id: this.state.prov_Id,
                proveedores: this.state.proveedores,
                ingr_UsuModificacion: 1,
            };

            axios.put('/api/Ingredientes/EditarIngrediente', data)
            .then(response => {
                console.log(response.data);
                if (response.data.message == "Exitoso") {
                    alertSuccess("Listo", "El registro se edito con exito", "2000");
                    this.state.validated = false;
                    this.handleClose();
                } else if (response.data.message == "YaExiste") {
                    toastr.warning("Este Ingrediente ya existe", "Ingrediente repetida");
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
            ingr_Id: this.props.data.ingr_Id,
            ingr_UsuModificacion: 1,
        };
        axios.put('api/Ingredientes/Eliminar', data)
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
                        <h3 className="modal-title has-icon ms-icon-round "><i className="flaticon-network bg-primary text-white" />Editar Ingrediente</h3>
                        <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                    </Modal.Header>
                    <form onSubmit={this.handleSubmit} className={`needs-validation validation-fill ${this.state.validated ? 'was-validated' : ''}`} noValidate>
                        <Modal.Body>
                            <div className='row'>
                                <div className='col-6'>
                                    <div className="ms-form-group has-icon">
                                    <label htmlFor="validationCustom13">Ingresar Ingredientes</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="validationCustom13" placeholder="Ingredeinte" name="ingr_Nombre" value={this.state.ingr_Nombre} onChange={this.handleInputChange} required />
                                        <div className="invalid-feedback">Ingresar el Ingrediente es algo requerido</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-6'>
                                        <div className="ms-form-group has-icon">
                                        <label htmlFor="validationCustom13">Ingresar Precio</label>
                                            <div className="input-group">
                                            <input type="text" className="form-control" id="validationCustom13" placeholder="PrecioX100gr" name="ingr_PrecioX100gr" value={this.state.ingr_PrecioX100gr} onChange={this.handleInputChange} required />
                                            <div className="invalid-feedback">Ingresar el Precio es algo requerido</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <div className="ms-form-group has-icon">
                                    <label htmlFor="validationCustom13">Seleccionar Proveedores</label>
                                        <div className="input-group">
                                        <select className='form-control' id="validationCustom13" name="prov_Id" value={this.state.prov_Id} onChange={this.handleInputChange} required>
                                            <option value="">Seleccionar Proveedor</option>
                                            {this.state.proveedores.map(proveedor =>
                                                <option key={proveedor.prov_Id} value={proveedor.prov_Id}>{proveedor.prov_NombreEmpresa}</option>
                                            )}
                                            </select>
                                            <div className="invalid-feedback">Seleccionar un Proveedor es obligatorio</div>
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