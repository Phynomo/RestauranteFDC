import React, { useState, useEffect } from 'react';
import "datatables.net-bs4/js/dataTables.bootstrap4"
//import { DataGrid } from '@mui/x-data-grid';
import { DataGrid, GridToolbar,esES } from '@mui/x-data-grid';
import axios from 'axios';
import { Link } from 'react-router-dom';


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
      </div>
      
    ),
   },
];

  const DataTable = () => {
  const [searchText, setSearchText] = useState('');
  const [rows, setRows] = useState([]);

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
    </div>
  );
};

export default DataTable;
