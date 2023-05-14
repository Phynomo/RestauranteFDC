import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Table from './table';

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                        <div className="ms-panel">
                            <div className="ms-panel-header text-center">
                                <h6>Listado de Roles</h6>
                                <hr></hr>
                                <div className='row d-flex justify-content-center'>
                                <div className='col-5'>
                                    {/* <Link to="/crearRoles">
                                    <button className="btn btn-primary btn-pill btn-block">NUEVO REGISTRO</button>
                                    </Link> */}
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