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
        this.handleCargarProveedores = this.handleCargarProveedores.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputChangeStock = this.handleInputChangeStock.bind(this);
        this.state = {
            show: false,
            ingr_Nombre: '',
            ingr_PrecioX100gr: '',
            prov_Id: '',
            ingr_Stock: 0,    
            proveedores: [],
            validated: false,
        };
    }

    handleCreate() {
        this.setState({ create: true, validated: false, });
    }

    handleClose() {
        this.setState({ create: false });
    }

    handleCargarProveedores() {
    axios.get('api/Proveedores/Listado')
        .then(response => {
        this.setState({
            proveedores: response.data.data
        });
        })
        .catch(error => {
        console.error('Error al cargar los Proveedores:', error);
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
                ingr_Nombre: this.state.ingr_Nombre,
                ingr_PrecioX100gr: this.state.ingr_PrecioX100gr,
                prov_Id: this.state.prov_Id,
                ingr_UsuCreacion: 1,
            };
            axios.post('api/Ingredientes/InsertarIngrediente', data, {
            })
                .then(response => {
                    if (parseInt(response.data.message) > 0 ) {



                        let data2 = {
                            ingr_Id: parseInt(response.data.message),
                            ingrsucu_StockEnGramos: this.state.ingr_Stock,
                            sucu_Id: JSON.parse(localStorage.getItem('token')).sucu_Id,
                            ingr_UsuCreacion: 1,
                        };
                        
                        axios.post('api/Ingredientes/InsertarIngredienteStock', data2)
                        .then(response => {
                            console.log(response.data);
                            if (response.data.message == "Exitoso") {
                                
                                alertSuccess("Listo", "El registro se realizo con exito", "2000");
                                this.state.ingr_Nombre = null;
                                this.state.ingr_PrecioX100gr = null;
                                this.state.prov_Id = null;
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

                    } else if (response.data.message == "YaExiste") {
                        toastr.warning("Este Ingrediente ya existe", "Ingrediente repetido");
                    } else {
                        alertError("Error", "Ocurrio un error mientras se creaba el registro", "2000")
                        this.state.ingr_Nombre = null;
                        this.state.ingr_PrecioX100gr = null;
                        this.state.prov_Id = null;
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
    handleInputChangeStock(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        if(value >= 0){

            this.setState({
                [name]: value
            });

        }
    }



    render() {
        return (
            <div>
                <button onClick={this.handleCreate} className='btn btn-primary btn-pill btn-block'>Nuevo registro</button>

                <Modal show={this.state.create} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header>
                        <h4 className="modal-title has-icon ms-icon-round "><i className="flaticon-network bg-primary text-white" />Insertar un nuevo Ingrediente</h4>
                        <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
                    </Modal.Header>
                    <form onSubmit={this.handleSubmit} className={`needs-validation validation-fill ${this.state.validated ? 'was-validated' : ''}`} noValidate>
                        <Modal.Body>
                            <div className='row'>
                                <div className='col-6'>
                                    <div className="ms-form-group has-icon">
                                    <label htmlFor="validationCustom13">Ingresar Nombre</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="validationCustom13" placeholder="Ingrediente" name="ingr_Nombre" value={this.state.ingr_Nombre} onChange={this.handleInputChange} required />
                                            <div className="invalid-feedback">Ingrese el Ingrediente</div>
                                        </div>
                                    </div>
                                </div>
                            <div className='col-6'>
                                    <div className="ms-form-group has-icon">
                                    <label htmlFor="validationCustom13">Ingresar Precio</label>
                                        <div className="input-group">
                                            <input type="number" className="form-control" id="validationCustom13" placeholder="Precio x 100g" name="ingr_PrecioX100gr" value={this.state.ingr_PrecioX100gr} onChange={this.handleInputChange} required />
                                            <div className="invalid-feedback">Ingresar el Precio</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                <div className="ms-form-group has-icon">
                                <label htmlFor="validationCustom13">Proveedor</label>
                                    <div className="input-group">
                                    <select className='form-control' id="validationCustom13" name="prov_Id" value={this.state.prov_Id} onChange={this.handleInputChange} required>
                                        <option value="">Seleccionar Proveedor</option>
                                        {this.state.proveedores.map(proveedor =>
                                            <option key={proveedor.prov_Id} value={proveedor.prov_Id}>{proveedor.prov_NombreEmpresa}</option>
                                        )}
                                        </select>
                                        <div className="invalid-feedback">Seleccione un proveedor</div>
                                    </div>
                                </div>
                                </div>
                                <div className='col-6'>
                                    <div className="ms-form-group has-icon">
                                    <label htmlFor="validationCustom13">Ingresar stock</label>
                                    <div className="input-group">
                                        <input type="number" className="form-control" id="validationCustom13" placeholder="Stock" name="ingr_Stock" value={this.state.ingr_Stock} onChange={this.handleInputChangeStock} required />
                                        <div className="invalid-feedback">Ingrese el stock</div>
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
