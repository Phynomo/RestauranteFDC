import toastr from 'toastr';
import { alertSuccess, alertError } from '../Alertas/AlertasSweet';
import Breadcrumb from './Breadcrumb';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Sidenavigation from '../../layouts/Sidenavigation';
import Topnavigation from '../../layouts/Topnavigation';
import Quickbar from '../../layouts/Quickbar';
import { color } from 'd3-color';
import { Button } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

  
const Agregar = () => {
    

   
    const [ingrediente, setIngrediente] = useState([]);

    useEffect(() => {
      axios
        .get(`api/Ingredientes/Listado`)
        .then((response) => {
          const ingredientes = response.data.data;
          console.log(response.data.data);
          setIngrediente(ingredientes);
          const initialIngredientes = ingredientes.map((ingrediente) => ({
            ...ingrediente,
            gramos: '',
            disabled: false,
          }));
          setIngredientes(initialIngredientes);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    
    const [ingredientes, setIngredientes] = useState([]);
    
    const handleAgregar = (index) => {
      const newIngredientes = [...ingredientes];
      const ingrediente = newIngredientes[index];
      if (!ingrediente.gramos) {
          toastr.warning("El campo gramos es necesario para añadir el ingrediente", "Advertencia!");
      } else {
        ingrediente.disabled = true;
        ingrediente.gramos = '';
        setIngredientes(newIngredientes);
      }
    };
    

   /*   const [disabledRows, setDisabledRows] = useState([]);

    // Inicializar el estado de disabledRows con todos los ID de las filas
    useEffect(() => {
    const ids = ingrediente.map((ingrediente) => ingrediente.ingr_Id);
    setDisabledRows(ids);
    }, [ingrediente]);

    const handleButtonClick = (id) => {
    // Actualizar el estado de disabledRows con los ID de todas las filas excepto la fila correspondiente
    setDisabledRows(disabledRows.filter((rowId) => rowId !== id));
    };*/
        

        return (
            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
            <Sidenavigation />
            <main className="body-content">
                <Topnavigation />


            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb/>
                       {/* espacio para alertas */}

                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header">
                                <h6>Nuevo Platillo</h6>
                            </div>
                            <div className="ms-panel-body">
                                <form className="needs-validation clearfix" noValidate>
                                    <div className="form-row">
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="validationCustom18">Nombre</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom18" placeholder="Nombre del platillo" required />
                                                <div className="valid-feedback">
                                                    Looks good!
                  </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationCustom22">Categoria</label>
                                            <div className="input-group">
                                                <select className="form-control" id="validationCustom22" required>
                                                    <option value>Catagory 1</option>
                                                    <option value>Catagory 2</option>
                                                    <option value>Catagory 3</option>
                                                    <option value>Catagory 4</option>
                                                </select>
                                                <div className="invalid-feedback">
                                                    Please select a Catagory.
                  </div>
                                            </div>
                                        </div>
                                       
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationCustom24">Precio</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom24" placeholder="0000.00" required />
                                                <div className="invalid-feedback">
                                                    Quantity
                  </div>
                                            </div>
                                        </div>
                                      
                                      
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="validationCustom12">Imagen del platillo</label>
                                            <div className="custom-file">
                                                <input type="file" className="custom-file-input" id="validatedCustomFile" />
                                                <label className="custom-file-label" htmlFor="validatedCustomFile">Upload Images...</label>
                                                <div className="invalid-feedback">Example invalid custom file feedback</div>
                                            </div>
                                        </div>


                                        <div className="ms-panel-header new">
                                      
                                      <button className="btn btn-primary d-block" type="submit">Guardar</button>
                                  </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>


                    <div className="col-xl-6 col-md-12">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="ms-panel">
                                    <div className="ms-panel-header">
                                        <h6>Lista </h6>
                                    </div>
                                    <div className="ms-panel-body">
                                       {/*  AQUI DEBERIA MOSTRAR LOS PLATILLOS QUE LLEVA */}

                                       <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Buyer</th>
                                                <th scope="col">Service</th>
                                                <th scope="col">Product ID</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                                <tr>
                                                    <th scope="row">hj</th>
                                                    <td>h</td>
                                                    <td>h</td>
                                                    <td></td>
                                                </tr>
                                        
                                        </tbody>
                                    </table>
                                </div>
                                        
                                    </div>
                                   
                                    <div className="ms-panel-header new">
                                      
                                    
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="col-xl-12 col-md-12">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="ms-panel">
                                    <div className="ms-panel-header">
                                        <h6>Añadir Ingredientes </h6>
                                    </div>
                                    <div className="ms-panel-body">
                                       {/*  AQUI DEBERIA MOSTRAR LOS PLATILLOS QUE LLEVA */}

                                <div className="ms-invoice-table table-responsive mt-5">
                                <table id="data-table-2" className="table table-striped thead-primary w-100">
                                <thead>
                                <tr className="text-capitalize">
                                    <th>ID</th>
                                    <th>NOMBRE</th>
                                    <th>PRECIO POR CADA 100 GRAMOS</th>
                                    <th>GRAMOS</th>
                                    <th>agregar</th>
                                </tr>
                                </thead>
                                <tbody>
                                {ingredientes.map((ingrediente, index) => (
                                    <tr key={ingrediente.ingr_Id}>
                                    <td>{ingrediente.ingr_Id}</td>
                                    <td>{ingrediente.ingr_Nombre}</td>
                                    <td>{ingrediente.ingr_PrecioX100gr} Lps</td>
                                    <td>
                                        <input
                                        type="number"
                                        className="form-control"
                                        value={ingrediente.gramos}
                                        disabled={ingrediente.disabled}
                                        onChange={(e) => {
                                            const newIngredientes = [...ingredientes];
                                            newIngredientes[index].gramos = e.target.value;
                                            setIngredientes(newIngredientes);
                                        }}
                                        />
                                    </td>
                                    <td className="text-center">
                                        <button
                                        type="button"
                                        className="ms-btn-icon-outline btn-pill btn-success"
                                        onClick={() => handleAgregar(index)}
                                        disabled={ingrediente.disabled}
                                        >
                                        <i className="flaticon-tick-inside-circle" />
                                        </button>
                                    </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>


                                </div>
                               </div>
                                   
                                    <div className="ms-panel-header new">
                                      
                                    
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            </main>
                <Quickbar />
            </div>

        );
    
}

export default Agregar;