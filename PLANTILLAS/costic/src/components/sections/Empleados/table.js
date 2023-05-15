import React, { useState, useEffect } from 'react';
import "datatables.net-bs4/js/dataTables.bootstrap4"
import { DataGrid, GridToolbar, esES } from '@mui/x-data-grid';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import toastr from 'toastr';
import { Modal, Accordion, Card } from "react-bootstrap";
import { alertSuccess, alertError } from '../Alertas/AlertasSweet';
import { Link } from 'react-router-dom';


  const DataTable = () => {
  const [searchText, setSearchText] = useState('');
  const [rows, setRows] = useState([]);
  const [modalDelete, setModalDelete] = useState(false);
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState('');

  const handleClose = () => {
    setModalDelete(false);
  }
  
  const seleccionarEmpleado = (id) => {
    setEmpleadoSeleccionado(id);
    setModalDelete(true);
  }
  
  
  const handleEliminarEmpleado = () => {
    let data = {
      empe_Id: empleadoSeleccionado,
      empe_UsuModificacion: 1,
  };
  axios.put('/api/Empleados/Eliminar', data)
  .then(response => {
      if (response.data.message == "Registro eliminado") {
          alertSuccess("Listo", "El registro se elimino con exito", "2000");
          setModalDelete(false);
      }else {
          alertError("Error", "Ocurrio un error mientras se eliminaba el registro", "2000")
          setModalDelete(false);
      }
  })
  .catch(error => {
      console.log(error);
  });
  setModalDelete(false);
  }

  const columns = [
    { field: 'empe_Id', headerName: 'ID', flex: 1 },
    { field: 'empe_NombreCompleto', headerName: 'Nombre Completo', flex: 1 },
    { field: 'empe_Sexo', headerName: 'Sexo', flex: 1, },
    { field: 'muni_Nombre', headerName: 'Municipio', flex: 1, },
     {
       field: 'actions',
       headerName: 'Acciones',
       sortable: false,
       flex: 1,
       type: 'number',
       renderCell: (params) => (
        <div>
         
          <Link to={`/editarEmpleado/${params.row.empe_Id}`} style={{ margin: "5px" }}><i className='fas fa-pencil-alt text-secondary'></i></Link>
          <Link to={`/detallesEmpleado/${params.row.empe_Id}`} style={{ margin: "5px" }}><i className="fas fa-align-justify"></i></Link>
          <a style={{ margin: "5px" }} onClick={() => seleccionarEmpleado(params.row.empe_Id)} ><i class='fas fa-trash-alt text-danger'></i></a>
        </div>
        
      ),
     },
  ];


  const handleSearch = e => {
    setSearchText(e.target.value);
  };

  const fetchData = () => {
    axios.get('api/Empleados/Listado')
    .then(response => {
      const rows = response.data.data.map(item => {
        return {
          id: item.empe_Id,
          empe_Id: item.empe_Id,
          empe_NombreCompleto: item.empe_NombreCompleto,
          empe_Sexo: item.empe_Sexo,
          muni_Nombre: item.muni_Nombre
        }
      });
      setRows(rows);
    })
    .catch(error => {
      console.log("Error en la solicitud axios:", error);
    });
  
  };

  useEffect(() => {
    fetchData(); // llamada inicial

    const interval = setInterval(() => {
      fetchData(); // llamada cada 3 segundos
    }, 3000);

    return () => clearInterval(interval); // limpiar intervalo al desmontar el componente
  }, []);

  const filterData = () => {
    return rows.filter(item =>
      Object.values(item).some(value =>
        String(value).toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

 

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <h5 style={{ marginLeft: "5px" }} >Empleados</h5>
        <div className="input-group" style={{ width: '250px', marginTop: '5px', marginRight: "5px", marginBottom: "-5px" }}>
          <div className="input-group-prepend"> <span className="input-group-text" id="inputGroupPrepend"><i className="flaticon-search" /></span>
          </div>
          <input type="text" className="form-control" id="validationCustomUsername" placeholder="Buscar..." aria-describedby="inputGroupPrepend" value={searchText} onChange={handleSearch} />
        </div>
      </div>
      <DataGrid
        style={{ border: "0px solid black"}}
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

      <Modal show={modalDelete} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header className="bg-primary">
          <h3 className="modal-title has-icon ms-icon-round  text-white"><i className="flaticon-alert-1 bg-primary text-white" />¿Estas seguro?</h3>
          <button type="button" className="close" onClick={() => handleClose()} ><span aria-hidden="true">×</span></button>
        </Modal.Header>
        <Modal.Body className='text-center'>
          <h5>No podras recuperar este registro si lo eliminas</h5>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center'>
          <button type="button" className="btn btn-light btn-sm" onClick={() => handleClose()} >Cancelar</button>
          <button type="button" className="btn btn-primary shadow-none btn-sm" onClick={() => handleEliminarEmpleado()} >Eliminar</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DataTable;
