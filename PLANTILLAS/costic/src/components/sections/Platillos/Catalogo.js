import Breadcrumb from './Breadcrumb';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';



import img from '../../../assets/img/imagenes/FDCNegro.png';


const Catalogo = () =>{



    const [tabla, setTabla] = useState([]);
    const [cancelToken, setCancelToken] = useState(null);
    
    useEffect(() => {
        const source = axios.CancelToken.source();
        setCancelToken(source);
        axios
          .get(`api/Categorias/Listado`, {
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

    return (
        <div className="ms-content-wrapper box">
          <div className="row">
            {tabla.map(cate => (
              <div key={cate.cate_Id} className="col-lg-4 col-md-6 col-sm-6">
                <div className="ms-card">
                  <div className="ms-card-img">
                    <img src={img} alt="card_img" />
                  </div>
                  <div className="ms-card-body">
                    <div className="wrapper-new2">
                      <h6>{cate.cate_Descripcion}</h6>
                      <span className="white">{cate.cate_Id}</span>
                    </div>
                    <div className="wrapper-new1"></div>
                    <Link
                      to={`/listaPlatillos/${encodeURIComponent(cate.cate_Id)}`}
                      className="btn btn-primary btn-md btn-block"
                      id="btnLista"
                    >
                      Ver Platillos
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-xl-12 col-md-12">
              <div className="load">
                <i className="fas fa-redo alt space text-muted" aria-hidden="true" />
                <span className="more">Load More</span>
              </div>
            </div>
          </div>
        </div>
      );

}
export default Catalogo;