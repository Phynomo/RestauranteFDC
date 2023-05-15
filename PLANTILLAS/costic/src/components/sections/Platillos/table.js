import Breadcrumb from './Breadcrumb';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Sidenavigation from '../../layouts/Sidenavigation';
import Topnavigation from '../../layouts/Topnavigation';
import Quickbar from '../../layouts/Quickbar';
import { Link } from 'react-router-dom';
import { Modal, Accordion, Card } from "react-bootstrap";
import { alertSuccess, alertError } from '../Alertas/AlertasSweet';


const Gridcontent = () => {

  const [tabla, setTabla] = useState([]);
  const [cancelToken, setCancelToken] = useState(null);
  const { cate_Id } = useParams();

  useEffect(() => {
    const source = axios.CancelToken.source();
    setCancelToken(source);
    axios
      .get(`api/Platillos/ListaPlatillosCate?id=${cate_Id}`, {
        cancelToken: source.token
      })
      .then((response) => {
        const tabla2 = response.data.data;
        setTabla(tabla2);

      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      if (cancelToken !== null) {
        cancelToken.cancel("Componente desmontado");
      }
    }
  }, []);

  const [platilloSelect, setPlatilloSelect] = useState('');
  const [modalDelete, setModalDelete]= useState(false);

  const handleOpemModalDelete = (id) =>{
    setPlatilloSelect(id);
    setModalDelete(true);
  }

  const handleClose = () => {
    setModalDelete(false);
  }

  const handleEliminarPlatillo = () => {
    let data = {
      plat_Id: platilloSelect,
  };
  axios.put('api/Platillos/Eliminar', data)
  .then(response => {
      console.log(response.data);
      if (response.data.message == "Registro eliminado") {
          alertSuccess("Listo", "El registro se elimino con exito", "2000");
          setModalDelete(false);
      }else {
          alertError("Error", "Ocurrio un error mientras se eliminaba el registro", "2000")
          setModalDelete(false);
      }

      axios
      .get(`api/Platillos/ListaPlatillosCate?id=${cate_Id}`, {
      })
      .then((response) => {
        const tabla2 = response.data.data;
        setTabla(tabla2);
        console.log(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      });

  })
  .catch(error => {
      console.log(error);
  });

    
  setModalDelete(false);
  }




  console.log(tabla);
  return (

    <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar" >

      <Sidenavigation />
      <main className="body-content">
        <Topnavigation />


        <div className="ms-content-wrapper" >
          <div className="row">
            <div className="col-md-12">
              <Breadcrumb />
              <div className="row">
                {tabla.map(platillo => (
                  <div key={platillo.plat_Id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="ms-card" style={{ height: '400px' }}>

                      <div className="ms-card-img" style={{ width: '', height: '150px', overflow: 'hidden' }}>
                        <img src={platillo.plat_Imagen} alt="uploaded image" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                      </div>

                      <div className="ms-card-body" >
                        <div className="new">
                          <h6 className="mb-0">{platillo.plat_Nombre}</h6>
                        </div>
                        <div className="new meta">
                          <label> Id del platillo: </label><span className="badge badge-success">{platillo.plat_Id}</span>
                        </div>
                        <label>Precio: <label className="ms-text-primary mb-0">{platillo.plat_Precio}</label> Lps.  </label>
                        <p>Categoría: {platillo.cate_Descripcion}</p>
                        <div className="new mb-0">
                          <button type="button" className="btn grid-btn mt-0 btn-sm btn-primary" onClick={() => handleOpemModalDelete(platillo.plat_Id)} >Eliminar</button>
                          <Link
                            type="button"
                            to={`/editarPlatillos/${encodeURIComponent(platillo.plat_Id)}`}
                            className="btn grid-btn mt-0 btn-sm btn-secondary"

                          >
                            Editar
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
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
          <button type="button" className="btn btn-primary shadow-none btn-sm" onClick={() => handleEliminarPlatillo()} >Eliminar</button>
        </Modal.Footer>
      </Modal>

      </main>
      <Quickbar />
    </div>
  );

}

export default Gridcontent;
