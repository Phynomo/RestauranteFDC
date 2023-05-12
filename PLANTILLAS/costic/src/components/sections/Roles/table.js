import React, { useState, useEffect } from 'react';
import "datatables.net-bs4/js/dataTables.bootstrap4"
//import { DataGrid } from '@mui/x-data-grid';
import { DataGrid, GridToolbar,esES } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import ModalEdit2 from './ModalsPut3';
import { Modal, Accordion, Card } from "react-bootstrap";
import axios from 'axios';
import { alertSuccess, alertError } from '../Alertas/AlertasSweet';
import toastr from 'toastr';
import { param } from 'jquery';
import { useHistory } from 'react-router-dom';


const DataTable = () => {
  const [searchText, setSearchText] = useState('');
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalDelete, setModalDelete] = useState(false);
  const [rolSelect, setRolSelect] = useState('');
  const history = useHistory();


  const handleDelete = (item) => {
    setRolSelect(item.role_Id);
    setModalDelete(true);
  }
  const handleEdit = (item) => {
    history.push({
      pathname: "/editarRoles",
      state: {data:item}
    })
  }




const columns = [
  { field: 'role_Id', headerName: 'ID', flex: 1 },
  { field: 'role_Nombre', headerName: 'Rol', flex: 1 },
   {
     field: 'actions',
     headerName: 'Acciones',
     sortable: false,
     flex: 1,
     type: 'number',
     renderCell: (params) => (
      <div className='d-flex justify-content-center'>
      
      <a style={{ margin: "5px" }} onClick={()=>handleEdit(params.row)}><i class='faSS fa-pencil-alt text-secondary'></i></a>
      <a style={{ margin: "5px" }} onClick={()=>handleDelete(params.row)}><i class='far fa-trash-alt ms-text-danger'></i></a>
    </div>
     ),
   },
];



const handleClose = () => {
  setModalDelete(false);
}

const handleSubmitDelete=(event) => {
  let data = {
    role_Id: rolSelect,
    role_UsuModificacion: 1,
};
axios.put('api/Roles/Eliminar', data)
.then(response => {
    console.log(response.data);
    if (response.data.message == "Registro eliminado") {
        alertSuccess("Listo", "El registro se elimino con exito", "2000");
        handleClose();
    }else {
        alertError("Error", "Ocurrio un error mientras se eliminaba el registro", "2000")
        handleClose();
    }
})
.catch(error => {
    console.log(error);
});

handleClose();
}

useEffect(() => {
  fetch('https://localhost:44383/api/Roles/Listado')
    .then(response => response.json())
    .then(data => {
      const rows = data.data.map(item => {
        return {
          id: item.role_Id,
          role_Id: item.role_Id,
          role_Nombre: item.role_Nombre
        }
      });
      setRows(rows);
      setIsLoading(false);
    })
    .catch(error => {
      console.log("Error en la solicitud fetch:", error);
    });
}, [rows]);

const handleSearch = e => {
  setSearchText(e.target.value);
};
const filterData = () => {
  return rows.filter(item =>
    Object.values(item).some(value =>
      String(value).toLowerCase().includes(searchText.toLowerCase())
    )
  );
};

return (
  <div>
    {isLoading ?
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0px' }}>
        <div className="col-md-3">
          <div className="spinner spinner-3">
            <div className="rect1" />
            <div className="rect2" />
            <div className="rect3" />
            <div className="rect4" />
            <div className="rect5" />
          </div>
        </div>
      </div>
      :
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <h5 style={{ marginLeft: "5px" }} >Roles</h5>
          <div className="input-group" style={{ width: '250px', marginTop: '5px', marginRight: "5px", marginBottom: "-5px" }}>
            <div className="input-group-prepend"> <span className="input-group-text" id="inputGroupPrepend"><i className="flaticon-search" /></span>
            </div>
            <input type="text" className="form-control" id="validationCustomUsername" placeholder="Buscar..." aria-describedby="inputGroupPrepend" value={searchText} onChange={handleSearch} />
          </div>
        </div>
        <DataGrid
          style={{ border: "0px solid black" }}
          rows={filterData()}
          columns={columns}
          getRowId={(row) => row.id}
          initialState={{
            ...filterData.initialState,
            pagination: { paginationModel: { pageSize: 10 } },
          }}
          pageSizeOptions={[5, 10, 15, 25, 50]}
          localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        />
      </div>
    }

<Modal show={modalDelete} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header className="bg-primary">
                        <h3 className="modal-title has-icon ms-icon-round  text-white"><i className="flaticon-alert-1 bg-primary text-white" />¿Estas seguro?</h3>
                        <button type="button" className="close" onClick={handleClose}><span aria-hidden="true">×</span></button>
                    </Modal.Header>
                    <Modal.Body className='text-center'>
                        <h5>No podras recuperar este registro si lo eliminas</h5>
                    </Modal.Body>
                    <Modal.Footer className='d-flex justify-content-center'> 
                        <button type="button" className="btn btn-light btn-sm" onClick={handleClose}>Cancelar</button>
                        <button type="button" className="btn btn-primary shadow-none btn-sm" onClick={handleSubmitDelete}>Eliminar</button>
                    </Modal.Footer>
                </Modal>

  </div>
);
};

export default DataTable;
