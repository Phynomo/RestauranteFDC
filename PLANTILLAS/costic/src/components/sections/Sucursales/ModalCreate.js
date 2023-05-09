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
        this.handlezzz = this.handlezzz.bind(this);
        this.handleCargarDepartamentos = this.handleCargarDepartamentos.bind(this);
        this.handleCargarMunicipios = this.handleCargarMunicipios.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            show: false,
            sucu_Nombre: '',
            muni_Id: '',
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
    axios.get('api/Departamentos/CargarDepartamentos')
        .then(response => {
        this.setState({
            departamentos: response.data.data
        });
        })
        .catch(error => {
        console.error('Error al cargar los departamentos:', error);
        });
    }

    handleCargarMunicipios() {
        axios.get('api/Municipios/CargarMunicipios')
        .then(response => {
        this.setState({
            municipios: response.data.data
        });
        })
        .catch(error => {
            console.error('Error al cargar los municipios:', error);
        });
    }

    async handlezzz(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        await this.setState({
             departamento: value
        });
        this.handleCargarMunicipios();
    }

    componentDidMount() {
        this.handleCargarDepartamentos();
      }
    componentDidMount() {
        this.handleCargarMunicipios();
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
            console.log(data);
            axios.post('api/Sucursales/InsertarSucursal', data, {
            })
                .then(response => {
                    this.state.sucu_Nombre = null;
                    this.state.muni_Id = [];
                    this.state.sucu_Direccion = null;
                    this.state.validated = false;
                    console.log('Respuesta de la API:', response);
                    if (response.data.message == "Exitoso") {
                        alertSuccess("Listo", "El registro se realizo con exito", "2000");
                        this.handleClose();
                    } else if (response.data.message == "YaExiste") {
                        toastr.warning("Esta Sucursal ya existe", "Sucursal repetida");
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
    
        if (name === 'depa_Id') {
            // Filtrar los municipios según el departamento seleccionado
            const municipios = this.state.municipios.filter(municipio => municipio.dept_Id === value);
            this.setState({
                muni_Id: '',
                [name]: value,
                municipios: municipios
            });
        } else {
            this.setState({
                [name]: value
            });
        }
    }

    handleInputChange2(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        if (name === 'depa_Id') {
            // Filtrar los municipios según el departamento seleccionado
            const departamento = this.state.departamentos.filter(departamento => departamento.dept_Id === value);
            this.setState({
                depa_Id: '',
                [name]: value,
                departamentos: departamento
            });
        } else {
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
                        <h3 className="modal-title has-icon ms-icon-round "><i className="flaticon-network bg-primary text-white" />Insertar una nueva Sucursal</h3>
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
                                            <div className="invalid-feedback">Ingresar la Sucursal es algo requerido</div>
                                        </div>
                                    </div>
                                </div>
                            <div className='col-6'>
                                <div className="ms-form-group has-icon">
                                <label htmlFor="validationCustom13">Seleccionar Departamento</label>
                                    <div className="input-group">
                                    <select className='form-control' id="validationCustom13" name="depa_Id" value={this.state.departamentos} onChange={this.handleInputChange2} required>
                                        <option value="">Seleccionar departamento</option>
                                        {this.state.departamentos.map(departamento =>
                                            <option key={departamento.id} value={departamento.id}>{departamento.nombre}</option>
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
                                            <div className="invalid-feedback">Ingresar el codigo es algo requerido</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <button type="button" className="btn btn-light btn-sm" onClick={this.handlezzz}>Cancelar</button>
                            <button type="submit" className="btn btn-primary shadow-none btn-sm">Guardar</button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
        );
    }
}
export default ModalCreate; 
