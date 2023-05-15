import Breadcrumb from './Breadcrumb';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Sidenavigation from '../../layouts/Sidenavigation';
import Topnavigation from '../../layouts/Topnavigation';
import Quickbar from '../../layouts/Quickbar';
import { Link } from 'react-router-dom';


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

 

    console.log(tabla);
    return (

      <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar" >

      <Sidenavigation />
      <main className="body-content">
      <Topnavigation />


        <div className="ms-content-wrapper" >
          <div className="row">
            <div className="col-md-12">
            <Breadcrumb/>  
              <div className="row">
                {tabla.map(platillo => (
                  <div key={platillo.plat_Id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="ms-card" style={{ height: '400px' }}>

                    <div className="ms-card-img"  style={{ width: '228px', height: '150px', overflow: 'hidden' }}>
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
                          <button type="button" className="btn grid-btn mt-0 btn-sm btn-primary">Remove</button>
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


        </main>
                <Quickbar />
            </div>
      );
      
}

export default Gridcontent;
