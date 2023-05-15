import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import $ from 'jquery';
import { Dropdown } from 'react-bootstrap';
import Scrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

const closeIcon = (
    <div className="close">
        <span aria-hidden="true">×</span>
    </div>
)
class Notes extends Component {
    state = {
        open: false,
    };
    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    deletecardbtn = (e) => {
        var elem = e.target,
            parentTask = elem.closest('.ms-deletable');
        $(parentTask).slideUp('slow', function () { $(parentTask).remove(); });
    }
    render() {
        const { open } = this.state;
        return (
            <div>
                    <Scrollbar className="ms-quickbar-container ms-scrollable">
                    <div className="ms-card ms-qa-card ms-deletable">
                            <div className="ms-card-header">
                                <h6 className="ms-card-title">Karla</h6>
                            </div>
                            <div className="ms-card-body">
                            <p>
                                Platillos<br></br>
                                Plantilla<br></br>
                                Empleados<br></br>
                                Clientes<br></br>
                            </p>
                            </div>
                        </div>
                        <div className="ms-card ms-qa-card ms-deletable">
                            <div className="ms-card-header">
                                <h6 className="ms-card-title">Phynomo</h6>
                            </div>
                            <div className="ms-card-body">
                                <p>
                                Dibujado<br></br>
                                Dashboard<br></br>
                                Login, recuperar<br></br>
                                Cargos<br></br>
                                Factura<br></br>
                                Usuarios<br></br>
                                Roles (editar)<br></br>
                                Limpiado de plantilla<br></br>
                                Validaciones de paginas<br></br>
                                Intercambiar entre sucursales<br></br>
                                Graficas<br></br>
                                Reportes<br></br>
                                </p>
                            </div>
                        </div>
                        <div className="ms-card ms-qa-card ms-deletable">
                            <div className="ms-card-header">
                                <h6 className="ms-card-title">Panxho</h6>
                            </div>
                            <div className="ms-card-body">
                            <p>
                                8 Pantallas<br></br>
                                Categorias<br></br>
                                Departamentos<br></br>
                                Estados Civiles<br></br>
                                Metodos de Pago<br></br>
                                Municipios<br></br>
                                Ingredientes<br></br>
                                Sucursales<br></br>
                                Roles(Listado, Crear, Eliminar)<br></br>
                                Modales eliminar (Empleados, Clientes)<br></br>
                            </p>
                            </div>
                        </div>
                    </Scrollbar>
            </div>
        );
    }
}

export default Notes;