import React, { Component, useState, useEffect } from 'react';
import Breadcrumb from './Breadcrumb';
import "datatables.net-bs4/js/dataTables.bootstrap4"
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css"
import $ from 'jquery';
import Table from '../Empleados/table';
import { Link } from 'react-router-dom';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                        <div className="ms-panel">
                            <div className="ms-panel-header text-center">
                                <h6>Listado de Empleados</h6>
                                <hr></hr>
                                <div className='row d-flex justify-content-center'>
                                    <div className='col-5'>
                                    <Link to="/crearEmpleado">
                                    <button className="btn btn-primary btn-pill btn-block">Nuevo Registro</button>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="ms-panel-body">
                                <div className="table-responsive">
                                    <Table/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;