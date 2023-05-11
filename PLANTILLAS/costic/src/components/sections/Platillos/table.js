import Breadcrumb from './Breadcrumb';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Gridcontent = () => {

    const [tabla, setTabla] = useState([]);
    const [cancelToken, setCancelToken] = useState(null);
    
    useEffect(() => {
        const source = axios.CancelToken.source();
        setCancelToken(source);
        axios
          .get(`api/Platillos/Listado`, {
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


    console.log(tabla);
    return (
        <div className="ms-content-wrapper">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                {tabla.map(platillo => (
                  <div key={platillo.plat_Id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="ms-card" style={{ height: '400px' }}>
                      <div className="ms-card-img">
                        <img src={platillo.plat_Imagen} alt="card_img" />
                      </div>
                      <div className="ms-card-body">
                        <div className="new">
                          <h6 className="mb-0">{platillo.plat_Nombre}</h6>
                        </div>
                        <div className="new meta">
                          <label> Id del platillo: </label><span className="badge badge-success">{platillo.plat_Id}</span>
                        </div>
                        <label>Precio: <label className="ms-text-primary mb-0">{platillo.plat_Precio}</label> Lps.  </label>
                        <p>Categoría: {platillo.cate_Descripcion}</p>
                        <div className="new mb-0">
                          <button type="button" className="btn grid-btn mt-0 btn-sm btn-primary">Remove</button>
                          <button type="button" className="btn grid-btn mt-0 btn-sm btn-secondary">Edit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
      
}

export default Gridcontent;
