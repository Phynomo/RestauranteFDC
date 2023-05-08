import React, { useState, useEffect } from 'react';
import "datatables.net-bs4/js/dataTables.bootstrap4"
import { DataGrid, GridToolbar, esES } from '@mui/x-data-grid';
import ModalEdit from './ModalsPut';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import toastr from 'toastr';


const DataTable = () => {
  const [searchText, setSearchText] = useState('');
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  async function eliminarDetalle(item) {
    if(!item.fact_Cerrada){
      history.push({
            pathname: '/factura_edit',
            state: { data: item }
          });
    }else{
      toastr.error("Esta factura ya esta cerrada", "Denegado");
    }
   
};
  async function facturaDetails(item) {
      history.push({
            pathname: '/factura_details',
            state: { data: item }
          });
};

  const columns = [
    { field: 'fact_Id', headerName: 'ID', flex: 1 },
    { field: 'clie_NombreCompleto', headerName: 'Cliente', flex: 2 },
    { field: 'fact_Cerrada', headerName: 'Estado', flex: 1 },
    { field: 'fact_Fecha', headerName: 'Fecha', flex: 1 },
    {
      field: 'actions',
      headerName: 'Acciones',
      sortable: false,
      flex: 1,
      type: 'number',
      renderCell: (params) => (
        <div className=''>
                        <a style={{ margin: "5px" }} onClick={() => eliminarDetalle(params.row)}><i class='fas fa-pencil-alt text-secondary'></i></a>
                        <a style={{ margin: "5px" }} onClick={() => facturaDetails(params.row)}><i class='fas flaticon-list text-info'></i></a>
                    </div>
      ),
    },
  ];

  useEffect(() => {
    console.log(1);
    const fetchData = () => {
      axios.get("api/Facturas/Listado")
        .then(response => {
          const rows = response.data.data.map(item => {
            const date = new Date(item.fact_Fecha);
            const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
            return {
              id: item.fact_Id,
              fact_Id: item.fact_Id,
              clie_NombreCompleto: item.clie_NombreCompleto,
              fact_Cerrada: item.fact_Cerrada,
              clie_Id: item.clie_Id,
              metp_Id: item.metp_Id,
              sucu_Direccion: item.sucu_Direccion,
              sucu_Nombre: item.sucu_Nombre,
              fact_Fecha: formattedDate,
            };
          });
          setRows(rows);
          setIsLoading(false);
        })
        .catch(error => {
          console.log('Error en la solicitud Axios:', error);
        });
    };

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
            <h5 style={{ marginLeft: "5px" }} >Cargos</h5>
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
