import React, { useState, useEffect } from 'react';
import "datatables.net-bs4/js/dataTables.bootstrap4"
import { DataGrid, GridToolbar, esES } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import axios from 'axios';



const DataTable = () => {
  const [searchText, setSearchText] = useState('');
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  
  const handleDeleteClick = (id) => {
    setShowModal(true);
    setDeleteId(id);
  };
  
  const handleConfirmDelete = () => {
    axios.put(`api/Clientes/Eliminar?id=${deleteId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al eliminar el registro');
        }
        // Eliminar el registro eliminado del estado de `rows`
        const updatedRows = rows.filter(row => row.id !== deleteId);
        setRows(updatedRows);
        setDeleteId(null);
        setShowModal(false);
      })
      .catch(error => {
        console.log('Error al eliminar el registro:', error);
      });
  };
  const handleCancelDelete = () => {
    setShowModal(false);
  };
  

  const columns = [
    { field: 'clie_Id', headerName: 'ID', flex: 1 },
    { field: 'clie_NombreCompleto', headerName: 'Nombre', flex: 1 },
    { field: 'clie_Identidad', headerName: 'DNI', flex: 1 },
    { field: 'clie_Sexo', headerName: 'Sexo', flex: 1 },
    { field: 'clie_RTN', headerName: 'RTN', flex: 1 },
    {
      field: 'actions',
      headerName: 'Acciones',
      sortable: false,
      flex: 1,
      type: 'number',
      renderCell: (params) => (
        <div>
          <Link to={`/editarCliente/${params.row.clie_Id}`} style={{ margin: "5px" }}><i className='fas fa-pencil-alt text-secondary'></i></Link>
          <Link to={`/detallesCliente/${params.row.clie_Id}`} style={{ margin: "5px" }}><i className="fas fa-align-justify"></i></Link>

          <button style={{ margin: "5px" }} onClick={() => handleDeleteClick(params.row.clie_Id)} className='btn btn-square'>
            <i className='far fa-trash-alt ms-text-danger'></i>
          </button>
        </div>
      ),
    },
  ];

  const fetchData = () => {
    axios.get('api/Clientes/Listado')
    .then(response => {
      const rows = response.data.data.map(item => {
        return {
          id: item.clie_Id,
          clie_Id: item.clie_Id,
          clie_NombreCompleto: item.clie_NombreCompleto,
          clie_Identidad: item.clie_Identidad,
          clie_Sexo: item.clie_Sexo,
          clie_RTN: item.clie_RTN
        }
      });
      setRows(rows);
      setIsLoading(false);
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
              <h5 style={{ marginLeft: "5px" }} >Clientes</h5>
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
             <Modal
            showModal={showModal}
            title="Eliminar registro"
            message="¿Está seguro que desea eliminar este registro?"
            confirmText="Eliminar"
            onConfirm={handleConfirmDelete}
            onCancel={handleCancelDelete}
          />
         
        </div>
       
      }
       
    </div>
   
  );
};

export default DataTable;
