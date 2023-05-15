import { useEffect, useState } from 'react';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Tab } from '@headlessui/react'
import { DataGrid, GridToolbar, esES } from '@mui/x-data-grid';
import axios from 'axios';
import toastr from 'toastr';

function Content() {
    const location = useLocation();
    const myData = location.state?.data ?? "";
    const [subtotal, setSubtotal] = useState(0);
    const [rows, setRows] = useState([]);
    const [clientes, setClientes] = useState([]);
    const [selectedClient, setSelectedClient] = useState(myData.clie_Id);
    const [selectedClientLabel, setSelectedClientLabel] = useState(myData.clie_NombreCompleto);
    const [platillos, setPlatillos] = useState([]);
    const [selectedPlatillo, setSelectedPlatillo] = useState('0');
    const [facturaId, setFacturaId] = useState(myData.fact_Id);
    const [metodopago, setMetodopago] = useState([]);
    const [selectmetodopago, setSelectMetodopago] = useState(myData.metp_Id);
    const [cantidad, setCantidad] = useState('1');
    const [isLoading, setIsLoading] = useState(true);
    const [validated, setValidated] = useState(false);
    const history = useHistory();


    const fetchData = () => {
        axios.get('api/Facturas/ListadoDetalles?id=' + String(facturaId))
            .then(response => {
                let total = 0;
                const rows = response.data.data.map(item => {
                    total += item.fade_Precio * item.fade_Cantidad;
                    return {
                        id: item.fade_Id,
                        fade_Id: item.fade_Id,
                        plat_Nombre: item.plat_Nombre,
                        cate_Descripcion: item.cate_Descripcion,
                        fade_Precio: item.fade_Precio,
                        fade_Cantidad: item.fade_Cantidad,
                    };
                });
                setRows(rows);
                setIsLoading(false);
                setSubtotal(total);
            })
            .catch(error => {
                console.log('Error en la solicitud Axios:', error);
            });
    };

    const fetchClientes = () => {
        axios.get('api/Clientes/Listado')
            .then(response => {
                setClientes(response.data.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.log('Error en la solicitud Axios:', error);
            });
    };

    const fetchPlatillos = () => {
        axios.get('api/Platillos/Listado')
            .then(response => {
                setPlatillos(response.data.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.log('Error en la solicitud Axios:', error);
            });
    };

    const fetchMetodoPago = () => {
        axios.get('api/MetodosPago/Listado')
            .then(response => {
                setMetodopago(response.data.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.log('Error en la solicitud Axios:', error);
            });
    };



    async function incrementarCantidad(item) {
        let data = {
            fade_Id: item.fade_Id,
            fade_Cantidad: item.fade_Cantidad + 1,
        }
        await axios.put('api/Facturas/ActualizaFacturaDetalle', data)
            .then(response => {
                if (response.data.message == "SinStock") {
                    toastr.error("No se cuenta con el stock suficiente", "Sin stock");
                }
            })
            .catch(error => {
                console.log('Error en la solicitud Axios:', error);
            });

        fetchData();
    };

    async function reducirCantidad(item) {
        if (item.fade_Cantidad > 1) {
            let data = {
                fade_Id: item.fade_Id,
                fade_Cantidad: item.fade_Cantidad - 1,
            }
            await axios.put('api/Facturas/ActualizaFacturaDetalle', data)
                .then(response => {
                })
                .catch(error => {
                    console.log('Error en la solicitud Axios:', error);
                });
            fetchData();
        } else {
            toastr.warning("La cantidad no puede ser menor a 1", "Invalido");
        }
    };

    async function eliminarDetalle(item) {
        
            let data = {
                fade_Id: item.fade_Id,
            }
            await axios.put('/api/Facturas/EliminarFacturaDetalle', data)
                .then(response => {
                    if (response.data.message == "Exitoso") {
                    toastr.success("Detalle eliminado", "Eliminado");
                    fetchData();
                    }
                })
                .catch(error => {
                    console.log('Error en la solicitud Axios:', error);
                });
            fetchData();
       
    };


    const columns = [
        { field: 'plat_Nombre', headerName: 'Platillo', flex: 3 },
        { field: 'cate_Descripcion', headerName: 'Categoria', flex: 1 },
        { field: 'fade_Precio', headerName: 'Precio', align: 'center', headerAlign: 'center', flex: 1 },
        {
            field: 'Cantidad',
            headerName: 'Cantidad',
            flex: 2,
            align: 'center',
            headerAlign: 'center',
            renderCell: (params) => (
                <div className='d-flex justify-content-center '>
                    <div className='row align-items-center text-center'>

                        <button onClick={() => reducirCantidad(params.row)} style={{ background: "white", width: "30px", height: "30px", borde: "1px solid black", borderRadius: "300%" }}>-</button>
                        <p style={{ margin: "0px 10px", width: "15px" }}>{params.row.fade_Cantidad}</p>
                        <button onClick={() => incrementarCantidad(params.row)} style={{ background: "white", width: "30px", height: "30px", borde: "1px solid black", borderRadius: "300%" }}>+</button>

                    </div>
                </div>
            ),
        },
        {
            field: 'Eliminar',
            headerName: 'Eliminar',
            flex: 1,
            type:'number',
            renderCell: (params) => (
                    <div className=''>
                        <a style={{ margin: "5px" }} onClick={() => eliminarDetalle(params.row)}><i class='far fa-trash-alt ms-text-danger'></i></a>
                    </div>
            ),
        },
    ];

    const handleClientChange = (event) => {
        const selectedIndex = event.target.selectedIndex;
        const selectedOption = event.target.options[selectedIndex];
        const selectedLabel = selectedOption.label;
        setSelectedClientLabel(selectedLabel);
        setSelectedClient(event.target.value);
    };

    const handleMetodoChange = (event) => {
        setSelectMetodopago(event.target.value);
    };

    const handlePlatilloChange = (event) => {
        setSelectedPlatillo(event.target.value);
    };

    const handleCantidadChange = (event) => {
        setCantidad(event.target.value);
    };

    const handleCerrar = () => {
        history.push("/factura");
    };


    const [disableDetalles, setDisableDetalles] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(1)

    async function handleCreate() {
        let data = {
            clie_Id: selectedClient,
            empe_Id: 1,
            metp_Id: selectmetodopago,
            fact_Cerrada: false,
            fact_UsuCreacion: 1,
        }
        await axios.post('api/Facturas/InsertarFactura', data)
            .then(response => {
                if (parseInt(response.data.message) > 0) {
                    setFacturaId(parseInt(response.data.message))
                    toastr.success("Ya puedes ingresar platillos", "Factura creada");
                    setDisableDetalles(false);
                    fetchData();
                    setSelectedIndex(1);
                }
            })
            .catch(error => {
                console.log('Error en la solicitud Axios:', error);
            });
        setSelectedIndex(1);

    }

    async function handleCreateDetalles() {
        let data = {
            fact_Id: facturaId,
            plat_Id: selectedPlatillo,
            fade_Cantidad: cantidad,
            fade_UsuCreacion: 1
        }
        await axios.post('/api/Facturas/InsertarFacturaDetalle', data)
            .then(response => {
                if (response.data.message == "Exitoso") {
                    setSelectedPlatillo("");
                    setCantidad(1);
                    toastr.success("Platillo ingresado", "Listo");
                }else if (response.data.message == "sinStock") {
                    toastr.error("Stock insuficiente", "Sin stock");
                }else
                {
                    toastr.error("No se pudo insertar el platillo", "Error");
                }
            })
            .catch(error => {
                console.log('Error en la solicitud Axios:', error);
            });
            await fetchData();
    }


    const handleSubmit = (e) => {
        setValidated(false);
        e.preventDefault();
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            setValidated(true);
        }else{
            if (parseInt(cantidad) > 0) {
                handleCreateDetalles();
                fetchData();
            }else{
                setValidated(true);
                setCantidad("");
            }
        }
    };


    async function handleCerrarCompra() {
        let data = {
            fact_Id: facturaId,
            clie_Id: selectedClient,
            empe_Id: 1,
            metp_Id: selectmetodopago,
            fact_Cerrada: true,
            fact_UsuModificacion: 1,
        }
        await axios.put('api/Facturas/EditarFactura', data)
            .then(response => {
                history.push("/factura");
            })
            .catch(error => {
                console.log('Error en la solicitud Axios:', error);
            });
        setSelectedIndex(1);

    }

    useEffect(() => {

        if(myData.fact_Cerrada == true){
            toastr.error("Esta factura ya esta cerrada", "Denegado");
            history.push("/factura");
        }

        fetchData();
        fetchClientes();
        fetchMetodoPago();
        fetchPlatillos();
    }, []);

    return (
        <div className="ms-content-wrapper">
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-8'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='card' style={{}} >
                                    <div className='card-body'>
                                        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                                            <Tab.List className="row d-flex justify-content-center btn-group">
                                                <Tab className={`col-5 btn btn-pill  mx-1 ${disableDetalles ? 'btn-danger' : 'btn-primary'}`}>Encabezado</Tab>
                                                <Tab disabled={disableDetalles} className="col-5 btn btn-pill btn-danger mx-1">Detalles</Tab>
                                            </Tab.List>
                                            <Tab.Panels>
                                                <Tab.Panel>
                                                    <hr></hr>
                                                    <div className='px-4'>
                                                        <div className='row mt-4' >
                                                            <div className='col'>
                                                                <div className="form-group">
                                                                    <label htmlFor="exampleSelect">Selecciona un cliente</label>
                                                                    <select value={selectedClient} onChange={handleClientChange} disabled={!disableDetalles} className="form-control" id="cliente">
                                                                        {clientes.map((option) => (
                                                                            <option key={option.clie_Id} value={option.clie_Id}>{option.clie_NombreCompleto}</option>
                                                                        ))}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className='col'>
                                                                <div className="form-group">
                                                                    <label htmlFor="exampleSelect">Selecciona un metodo de pago</label>
                                                                    <select value={selectmetodopago} onChange={handleMetodoChange} disabled={!disableDetalles} className="form-control" id="metodopago">
                                                                        {metodopago.map((option) => (
                                                                            <option key={option.metp_Id} value={option.metp_Id}>{option.metp_Descripcion}</option>
                                                                        ))}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='d-flex justify-content-end'>
                                                            <button disabled={!disableDetalles} className='btn btn-danger btn-pill' onClick={handleCreate}>Siguente</button>
                                                        </div>
                                                    </div>

                                                </Tab.Panel>
                                                <Tab.Panel>
                                                    <hr></hr>
                                                    <form onSubmit={handleSubmit} className={`needs-validation validation-fill ${validated ? 'was-validated' : ''}`} noValidate>
                                                        {/* <form onSubmit={handleSubmit} > */}
                                                        <div className='px-4'>
                                                            <div className='mt-4' >
                                                                <div className='row mt-2' >
                                                                    <div className='col'>
                                                                        <div className="form-group">
                                                                            <label htmlFor="exampleSelect">Selecciona un platillo</label>
                                                                            <div className="input-group">
                                                                                <select value={selectedPlatillo} onChange={handlePlatilloChange} className="form-control" id="exampleSelect" required>
                                                                                    <option value="">Selecciona un platillo</option>
                                                                                    {platillos.map((option) => (
                                                                                        <option key={option.plat_Id} value={option.plat_Id}>{option.plat_Nombre}</option>
                                                                                    ))}
                                                                                </select>
                                                                                <div className="invalid-feedback">Ingresa un platillo</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col'>
                                                                        <div className="form-group">
                                                                            <label>Cantidad</label>
                                                                            <div className="input-group">
                                                                                <input type="number" className="form-control" id="validationCustom13" placeholder="Cantidad" name="carg_Descripcion" value={cantidad} onChange={handleCantidadChange} required />
                                                                                <div className="invalid-feedback">Ingresa la cantidad</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='d-flex justify-content-end'>
                                                                <button type='submit' className='btn btn-danger btn-pill'>Agragar platillos</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </Tab.Panel>
                                            </Tab.Panels>
                                        </Tab.Group>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-12'>
                                <div className='card'>
                                    <div className='card-header'>
                                        <h5>Productos a llevar</h5>
                                    </div>
                                    <div className='card-body'>
                                        <DataGrid
                                            style={{ border: "0px solid black" }}
                                            rows={rows}
                                            columns={columns}
                                            getRowId={(row) => row.id}
                                            initialState={{
                                                ...rows.initialState,
                                                pagination: { paginationModel: { pageSize: 10 } },
                                            }}
                                            pageSizeOptions={[5, 10, 15, 25, 50]}
                                            localeText={esES.components.MuiDataGrid.defaultProps.localeText}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-4'>
                        <div className='card' style={{ height: "560px" }}>
                            <div className='card-header' style={{ background: "#ff6862" }}>
                                Informacion de compra
                            </div>
                            <div className='card-body'>

                                <div className='px-3'>
                                    <div className='row'>
                                        <div className="input-group" style={{}}>
                                            <div className="input-group-prepend"> <span className="input-group-text" id="inputGroupPrepend" style={{ width: "120px" }}><i className="flaticon-list" style={{ marginRight: "10px" }} />Factura ID</span>
                                            </div>
                                            <input type="text" className="form-control" aria-describedby="inputGroupPrepend" value={facturaId} readOnly="true" />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="input-group" style={{}}>
                                            <div className="input-group-prepend"> <span className="input-group-text" id="inputGroupPrepend" style={{ width: "120px" }}><i className="flaticon-user" style={{ marginRight: "10px" }} />Cliente</span>
                                            </div>
                                            <input type="text" className="form-control" aria-describedby="inputGroupPrepend" value={selectedClientLabel} readOnly="true" />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="input-group mt-4" style={{}}>
                                            <div className="input-group-prepend"> <span className="input-group-text" id="inputGroupPrepend" style={{ width: "100px" }}><i className="flaticon-supermarket" style={{ marginRight: "10px" }} />Subtotal</span>
                                            </div>
                                            <input type="text" className="form-control" aria-describedby="inputGroupPrepend" value={String(subtotal) + " Lps"} readOnly="true" />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="input-group" style={{}}>
                                            <div className="input-group-prepend"> <span className="input-group-text" id="inputGroupPrepend" style={{ width: "100px" }}><i className="flaticon-information" style={{ marginRight: "10px" }} />IVA</span>
                                            </div>
                                            <input type="text" className="form-control" aria-describedby="inputGroupPrepend" value={String(subtotal * 0.1) + " Lps"} readOnly="true" />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="input-group" style={{}}>
                                            <div className="input-group-prepend"> <span className="input-group-text" id="inputGroupPrepend" style={{ width: "100px" }}><i className="flaticon-star" style={{ marginRight: "10px" }} />Total</span>
                                            </div>
                                            <input type="text" className="form-control" aria-describedby="inputGroupPrepend" value={String((subtotal * 0.1) + subtotal) + " Lps"} readOnly="true" />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: "15%" }}></div>
                                <div className='mt-3'>
                                    <button disabled={disableDetalles} onClick={handleCerrarCompra} className='btn btn-danger btn-pill btn-block'>Cerrar Factura</button>
                                </div>
                                <div className=''>
                                    <button onClick={handleCerrar} className='btn btn-secondary btn-pill btn-block'>Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
