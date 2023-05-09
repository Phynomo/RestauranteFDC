import React, { useState, useEffect } from 'react';
import "datatables.net-bs4/js/dataTables.bootstrap4"
import { DataGrid, GridToolbar, esES } from '@mui/x-data-grid';
import ModalEdit from './ModalsPut';



const DataTable = () => {
  const [searchText, setSearchText] = useState('');
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const columns = [
    { field: 'sucu_Id', headerName: 'ID', flex: 1 },
    { field: 'sucu_Nombre', headerName: 'Sucursal', flex: 1 },
    { field: 'muni_Id', headerName: 'Municipio', flex: 1 },
    { field: 'sucu_Direccion', headerName: 'Direccion', flex: 1 },
    {
      field: 'actions',
      headerName: 'Acciones',
      sortable: false,
      flex: 1,
      type: 'number',
      renderCell: (params) => (
        <div className='d-flex justify-content-center'>
          <ModalEdit data={params.row} />
        </div>
      ),
    },
  ];

  useEffect(() => {
    fetch('https://localhost:44383/api/Sucursales/Listado')
      .then(response => response.json())
      .then(data => {
        const rows = data.data.map(item => {
          return {
            id: item.sucu_Id,
            sucu_Id: item.sucu_Id,
            sucu_Nombre: item.sucu_Nombre,
            muni_Id: item.sucu_Id,
            sucu_Direccion: item.sucu_Direccion
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
            <h5 style={{ marginLeft: "5px" }} >Sucursales</h5>
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
    </div>
  );
};

export default DataTable;
