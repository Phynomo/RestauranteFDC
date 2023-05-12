import React from 'react';
import { useHistory } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import Table from './table';

function Content() {
    const history = useHistory();

    function handleCreate() {
        history.push("/usuarios_create");
    }

    return (
        <div className="ms-content-wrapper">
            <div className="row">
                <div className="col-md-12">
                    <Breadcrumb />
                    <div className="ms-panel">
                        <div className="ms-panel-header text-center">
                            <h6>Listado de proveedores</h6>
                            <hr></hr>
                            <div className='row d-flex justify-content-center'>
                                <div className='col-5'>
                                    <button onClick={handleCreate} className='btn btn-primary btn-pill btn-block'>Nuevo proveedor</button>
                                </div>
                            </div>
                        </div>
                        <div className="ms-panel-body">
                            <div className="table-responsive">
                                <div>
                                    <Table />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
