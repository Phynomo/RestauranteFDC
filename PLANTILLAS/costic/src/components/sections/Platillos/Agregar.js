import toastr from 'toastr';
import { alertSuccess, alertError } from '../Alertas/AlertasSweet';
import Breadcrumb from './Breadcrumb';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Sidenavigation from '../../layouts/Sidenavigation';
import Topnavigation from '../../layouts/Topnavigation';
import Quickbar from '../../layouts/Quickbar';


const Agregar = () => {
    
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
                                            <label htmlFor="validationCustom18">Product Name</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom18" placeholder="Product Name" defaultValue="Pizza" required />
                                                <div className="valid-feedback">
                                                    Looks good!
                  </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationCustom22">Select Catagory</label>
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
                                            <label htmlFor="validationCustom23">Currency</label>
                                            <div className="input-group">
                                                <select className="form-control" id="validationCustom23" required>
                                                    <option value>USD</option>
                                                    <option value>Bitcoins</option>
                                                    <option value>EURO</option>
                                                </select>
                                                <div className="invalid-feedback">
                                                    Please select a Currency
                  </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationCustom24">Quantity</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom24" placeholder="01" required />
                                                <div className="invalid-feedback">
                                                    Quantity
                  </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationCustom25">Price</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom25" placeholder="$10" required />
                                                <div className="invalid-feedback">
                                                    Price
                  </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="validationCustom12">Description</label>
                                            <div className="input-group">
                                                <textarea rows={5} id="validationCustom12" className="form-control" placeholder="Message" required />
                                                <div className="invalid-feedback">
                                                    Please provide a message.
                  </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="validationCustom12">Product Image</label>
                                            <div className="custom-file">
                                                <input type="file" className="custom-file-input" id="validatedCustomFile" />
                                                <label className="custom-file-label" htmlFor="validatedCustomFile">Upload Images...</label>
                                                <div className="invalid-feedback">Example invalid custom file feedback</div>
                                            </div>
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
                                        <h6>Product </h6>
                                    </div>
                                    <div className="ms-panel-body">
                                       {/*  AQUI DEBERIA MOSTRAR LA IMAGEN QUE EL USUARIO ESTA SUBIENDO */}
                                        
                                    </div>
                                   
                                    <div className="ms-panel-header new">
                                      
                                        <button className="btn btn-primary d-block" type="submit">Guardar</button>
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