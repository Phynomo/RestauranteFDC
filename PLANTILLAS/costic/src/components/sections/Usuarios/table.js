import React, { useState, useEffect } from 'react';
import "datatables.net-bs4/js/dataTables.bootstrap4"
import { DataGrid, GridToolbar, esES } from '@mui/x-data-grid';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import toastr from 'toastr';
import { Modal, Accordion, Card } from "react-bootstrap";
import { alertSuccess, alertError } from '../Alertas/AlertasSweet';


const DataTable = () => {
  const [searchText, setSearchText] = useState('');
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState('');
  const [modalDelete, setModalDelete] = useState(false);
  const history = useHistory();

  async function UsuariosEdit(item) {
    history.push({
      pathname: '/usuarios_edit',
      state: { data: item }
    });
  };
  async function UsuariosDetails(item) {
    history.push({
      pathname: '/usuarios_details',
      state: { data: item }
    });
  };

  const handleClose = () => {
    setModalDelete(false);
  }


  const seleccionarUsuario = (id) => {
    setUsuarioSeleccionado(id);
    setModalDelete(true);
  }

  const handleEliminarUsuario = () => {
    let data = {
      user_Id: usuarioSeleccionado,
      user_UsuModificacion: 1,
  };
  axios.put('/api/Usuarios/Eliminar', data)
  .then(response => {
      console.log(response.data);
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
    { field: 'user_Id', headerName: 'ID', flex: 1 },
    { field: 'user_Image', headerName: 'Imagen', flex: 1 },
    { field: 'user_NombreUsuario', headerName: 'Usuario', flex: 1 },
    { field: 'user_Correo', headerName: 'Correo', flex: 2 },
    { field: 'role_Nombre', headerName: 'Rol', flex: 1 },
    { field: 'admin', headerName: 'Es Administrador', flex: 1 },
    {
      field: 'actions',
      headerName: 'Acciones',
      sortable: false,
      flex: 1,
      type: 'number',
      renderCell: (params) => (
        <div className=''>
          <a style={{ margin: "5px" }} onClick={() => UsuariosDetails(params.row)}><i class='fas flaticon-list text-info'></i></a>
          <a style={{ margin: "5px" }} onClick={() => UsuariosEdit(params.row)}><i class='fas fa-pencil-alt text-secondary'></i></a>
          <a style={{ margin: "5px" }} onClick={() => seleccionarUsuario(params.row.user_Id)} ><i class='fas fa-trash-alt text-danger'></i></a>
        </div>
      ),
    },
  ];

  const fetchData = () => {
    axios.get("api/Usuarios/Listado")
      .then(response => {
        const rows = response.data.data.map(item => {
          return {
            id: item.user_Id,
            user_Id: item.user_Id,
            empe_Id: item.empe_Id,
            role_Id: item.role_Id,
            role_Nombre: item.role_Nombre,
            user_NombreUsuario: item.user_NombreUsuario,
            user_Correo: item.user_Correo,
            admin: item.user_EsAdmin ? "Si" : "No",
            user_EsAdmin: item.user_EsAdmin,
            user_Image: item.user_Image,
            role_Nombre: item.role_Nombre,
            empe_NombreCompleto: item.empe_NombreCompleto,
            user_NombreUsuCreacion: item.user_NombreUsuCreacion,
            user_FechaCreacion: item.user_FechaCreacion,
            user_NombreUsuModificacion: item.user_NombreUsuModificacion,
            user_FechaModificacion: item.user_FechaModificacion,
            carg_Descripcion: item.carg_Descripcion
          };
        });
        setRows(rows);
        setIsLoading(false);
      })
      .catch(error => {
        console.log('Error en la solicitud Axios:', error);
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
            <h5 style={{ marginLeft: "5px" }} >Usuarios</h5>
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
          <button type="button" className="close" onClick={() => handleClose()} ><span aria-hidden="true">×</span></button>
        </Modal.Header>
        <Modal.Body className='text-center'>
          <h5>No podras recuperar este registro si lo eliminas</h5>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center'>
          <button type="button" className="btn btn-light btn-sm" onClick={() => handleClose()} >Cancelar</button>
          <button type="button" className="btn btn-primary shadow-none btn-sm" onClick={() => handleEliminarUsuario()} >Eliminar</button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default DataTable;
