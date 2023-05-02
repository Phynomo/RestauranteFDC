import React, { useState, useEffect } from 'react';
import Breadcrumb from './Breadcrumb';
import "datatables.net-bs4/js/dataTables.bootstrap4"
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css"
import { DataGrid, GridToolbar,esES } from '@mui/x-data-grid';
import $ from 'jquery';
import Table from './table';
import ModalCreate from './ModalCreate';

const columns = [
    { field: 'carg_Id', headerName: 'ID', flex: 1 },
    { field: 'carg_Descripcion', headerName: 'Cargo', flex: 1 },
     {
       field: 'actions',
       headerName: 'Acciones',
       sortable: false,
       flex: 1,
       type: 'number',
       renderCell: (params) => (
         <div>
           <a href="a" style={{ margin: "5px" }}><i class='fas fa-pencil-alt text-secondary'></i></a>
           <a style={{ margin: "5px" }}><i class='far fa-trash-alt ms-text-danger'></i></a>
  
         </div>
       ),
     },
  ];


const Content = () => {
    

    return (
        <div className="ms-content-wrapper">
            <div className="row">
                <div className="col-md-12">
                    <Breadcrumb />
                    <div className="ms-panel">
                        <div className="ms-panel-header text-center">
                            <h6>Listado de Cargos</h6>
                            <hr></hr>
                            <div className='row d-flex justify-content-center'>
                                <div className='col-5'>
                                    <ModalCreate />
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
};

export default Content;