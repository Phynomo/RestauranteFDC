import React, { useState, useEffect } from 'react';
import "datatables.net-bs4/js/dataTables.bootstrap4"
//import { DataGrid } from '@mui/x-data-grid';
import { DataGrid, GridToolbar,esES } from '@mui/x-data-grid';

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

const DataTable = () => {
  const [searchText, setSearchText] = useState('');
  const [rows, setRows] = useState([]);




  useEffect(() => {
    fetch('https://localhost:44383/api/Cargos/Listado')
      .then(response => response.json())
      .then(data => {
        const rows = data.data.map(item => {
          return {
            id: item.carg_Id,
            carg_Id: item.carg_Id,
            carg_Descripcion: item.carg_Descripcion
          }
        });
        setRows(rows);
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
    </div>
  );
};

export default DataTable;
