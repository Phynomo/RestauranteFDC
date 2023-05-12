import toastr from 'toastr';
import { alertSuccess, alertError } from '../Alertas/AlertasSweet';
import Breadcrumb from './Breadcrumb';
import { useEffect, useState, useRef } from 'react';
import React from 'react';
import axios from 'axios'
import Sidenavigation from '../../layouts/Sidenavigation';
import Topnavigation from '../../layouts/Topnavigation';
import Quickbar from '../../layouts/Quickbar';
import { color } from 'd3-color';
import { Button } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

import { DataGrid, GridToolbar, esES } from '@mui/x-data-grid';
import { colors } from '@mui/material';

  


  
function Agregar() {
     const [precio, setPrecio] = useState(0); /* precio, calcular de acuerdo al precio por 100 gramos * cantidad de gramos (dividir la cantidad de gramos en 100)  */
     const [platilloId, setPlatilloId] = useState(0); /* sera para agregar los ingredientes*/
     const [rows, setRows] = useState([]); /* Filas de tabla de ingredientes */
     const [rows2, setRows2] = useState([]); /* Filas de tabla de ingredientes que lleva  */
     
      /*  formulario */
     const [categorias, setCategorias] = useState([]);
     const [cateId, setCateId] = useState('');
     const [Nombre, setNombre] = useState('');
     const [platImage, setPlaImage] = useState('');
     const [UsuaCreacion, setUsuaCreacion] = useState('1');

     const apikey = '81a91816c209f6d64dfd56aa803647e5';
     //Imagen
     const [image, setImage] = useState(null);
     const fileInputRef = useRef(null);
  
      /*  formulario */


     const [showEditButton, setShowEditButton] = useState(false); /*  mostrar y quitar boton editar*/
     const [showGuardarButton, setShowGuardarButton] = useState(true); /*  mostrar y quitar bonton guardar */

     const [isLoading, setIsLoading] = useState(false);
     const [validated, setValidated] = useState(false);

     /* ----------  TABLA DE INGREDIENTES   ----------   */
   const fetchData = () => {
        axios.get('api/Ingredientes/Listado')
            .then(response => {
                const rows = response.data.data.map(item => {
                    /* total += item.fade_Precio * item.fade_Cantidad;*/
                    return {
                        id: item.ingr_Id,
                        ingr_Id: item.ingr_Id,
                        ingr_Nombre: item.ingr_Nombre,
                        ingr_PrecioX100gr: item.ingr_PrecioX100gr
                    };
                });  
                
                console.log(response.data.data);
                setRows(rows);
                console.log("hola");
                console.log(rows);
               /* setIsLoading(false);*/
            {/*setSubtotal(total);*/}
            })
            .catch(error => {
                console.log('Error en la solicitud Axios:', error);
            });
    }; 
    

    const columns = [
        { field: 'ingr_Id', headerName: 'ID', flex: 0.5 },
        { field: 'ingr_Nombre', headerName: 'Nombre', flex: 1 },
        { field: 'ingr_PrecioX100gr', headerName: 'Precio por 100 gramos',flex: 1 },
        {
            field: 'Gramos',
            headerName: 'Gramos',
            type:'number',
            flex: 1,
            align: 'center',
            headerAlign: 'center',
            renderCell: (params) => (
                <div className='d-flex justify-content-center '>
                    <input type="number" className="form-control"/>
                </div>
            ),
        },
        {
            field: 'Agregar',
            headerName: 'Agregar',
            flex: 1,
            align: 'center',
            headerAlign: 'center',
            renderCell: (params) => (
                <div className='d-flex justify-content-center '>
                <div className='row align-items-center text-center'>
                <a
                type="button"
                className="ms-btn-icon-outline btn-pill btn-success"
                /* onClick={() => handleAgregar(index)}*/
                disabled
                >
                <i className="flaticon-tick-inside-circle" />
                </a>
                    
                </div>
            </div>
            ),
        },
    ];

  /* ---------- / TABLA DE INGREDIENTES   ----------   */




  /* ----------  INGREDIENTES QUE LLEVA   ----------   */
    const fetchData2 = () => {
    axios.get('') /* aqui hago la peticion par los ingredientes del platillo*/
        .then(response => {
            const rows = response.data.data.map(item => {
                /* total += item.fade_Precio * item.fade_Cantidad;*/
                return {
                   
                };
            });  
            
            console.log(response.data.data);
            setRows2(rows);
            console.log("hola");
            console.log(rows);
           /* setIsLoading(false);*/
        {/*setSubtotal(total);*/}
        })
        .catch(error => {
            console.log('Error en la solicitud Axios:', error);
        });
    }; 


    const columnas = [
        { field: 'Id', headerName: 'ID', flex: 1 },
        { field: 'nombre', headerName: 'Nombre', flex: 1 },
        { field: 'gramos', headerName: 'gramos',flex: 1 },
        {
            field: 'Eliminar',
            headerName: 'Eliminar',
            flex: 1,
            align: 'center',
            headerAlign: 'center',
            renderCell: (params) => (
                <div className='d-flex justify-content-center '>
                <div className='row align-items-center text-center'>
                <a
                type="button"
                className="ms-btn-icon-outline btn-pill btn-danger"
                /* onClick={() => handleAgregar(index)}*/
                disabled
                >
                <i className="flaticon-trash" />
                </a>
                    
                </div>
            </div>
            ),
        },
    ];

/* ---------- / INGREDIENTES QUE LLEVA   ----------   */




        const fetchCategoria = () => {
        axios.get('api/Categorias/Listado')
        .then(response => {
            setCategorias(response.data.data);
        })
        .catch(error => {
            console.log('Error en la solicitud Axios:', error);
        });
        };


   /* aqui mando a llamar*/
   useEffect(() => {
    fetchCategoria();
    fetchData();
    }, []);



  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImage(reader.result);
        };
    } else {
        toastr.warning("El archivo tiene que ser una imagen", "Seleciona una imagen");
    }
};

async function handleCreate() {
    
    if (image != null) {
      const base64Image = image.split(',')[1]; // obtener la cadena Base64 sin el prefijo "data:image/png;base64,"
      const url = `https://api.imgbb.com/1/upload?key=${apikey}`;
      const body = new FormData();
      body.append('image', base64Image);
  
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: body
        });
  
        if (!response.ok) {
          throw new Error('Error al enviar la imagen');
        }
  
        const data = await response.json();
        setPlaImage(data.data.url);
  
        const platData = {
          plat_Nombre : Nombre,          
          cate_Id: cateId,
          plat_Precio : 30,
          plat_Imagen: data.data.url,
          plat_UsuCreacion: UsuaCreacion 

        };
       
        await axios.post('api/Platillos/InsertarPlatillos', platData)
          .then(response => {
            console.log(response);
            if (response.data.message == "Exitoso") {
                alertSuccess("Creado", "El platillo se creó exitosamente", "2000");
                setShowEditButton(true); 
                setShowGuardarButton(false);
            }else if(response.data.message == "YaExiste") {
              
                toastr.warning("Este Platillo, inserte otro", "Platillo Existente");
                setShowEditButton(false);
              }else{
                toastr.error("Ocurrio un error inespero", "Inespero");
                setShowEditButton(false);
              }
          })
          .catch(error => {
            console.log('Error en la solicitud Axios:', error);
          });
        
  
      } catch (error) {
        console.log('Error al enviar la imagen: ', error);
      }
    } else {
        toastr.error("Hubo un error", "Error");
        setShowEditButton(false);
        setShowGuardarButton(true);
    }
    
  };
  

        const handleSubmit = (e) => {
            setValidated(false);
            e.preventDefault();
            const form = e.currentTarget;

            if (form.checkValidity() === false) {
                setValidated(true);
            } else {
                handleCreate();
            }
        };

        function handleInputChange(event, setState) {
            setState(event.target.value);
        }






        return (
            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
            <Sidenavigation />
            <main className="body-content">
                <Topnavigation />


             <div className="ms-content-wrapper">
                <div className="row">
                
                <div className="col-md-12">
                <Breadcrumb/> 
                <div className="row justify-content-center">
                    <div id="precio" className="col-md-3 mb-3" style={{ display: "inline-flex" }} >
                    <h6  style={{ color: '#f14a5a'}}>PRECIO: </h6>
                    <input type="number" className="form-control" disabled value={precio}/>
                    </div>
                </div>
                {/* espacio para alertas */}
                </div>
              
                   
                    <div className="col-xl-5 col-md-12">
                        <div className="card">
                            <div className="ms-panel-header"  style={{ backgroundColor: '#f14a5a'}}>
                                <h6 style={{ color: '#ffffff' }}>Nuevo Platillo</h6>
                            </div>
                            <div className="ms-panel-body">
                            <form onSubmit={handleSubmit} className={`needs-validation validation-fill ${validated ? 'was-validated' : ''}`} noValidate>
                                    <div className="form-row">
                                       
                                        <div className="col-md-10 mb-3">
                                            <label htmlFor="validationCustom18">Nombre del Platillo</label>
                                            <div className="input-group">                                        
                                            <input type="text" className="form-control" 
                                            id="validationCustom18" placeholder="Nombre " 
                                            name="plat_Nombre "
                                             value={Nombre} onChange={(event) => handleInputChange(event, setNombre)} required />                                        
                                            </div>
                                            <div className="invalid-feedback">Ingresa el nombre del platillo</div>
                                        </div>
                                        <div className="col-md-10 mb-3">
                                            <label htmlFor="validationCustom22">Categoria</label>
                                            <div className="input-group">
                                            <select value={cateId} onChange={(event) => handleInputChange(event, setCateId)} className="form-control" id="validationCustom22" required>
                                                <option value="" hidden>seleccione una categoria</option>
                                                {categorias.map((option) => (
                                                    <option key={option.cate_Id} value={option.cate_Id}>{option.cate_Descripcion}</option>
                                                ))}
                                            </select>
                                            <div className="invalid-feedback">Selecciona una categoría</div>
                                            </div>
                                        </div>                                                                                                                 
                                       <div className="col-md-12 mb-3">
                                        <div className='little-profilePhynomo text-center'>
                                        <div className="pro-imgPhynomo" style={{ width: '300px', height: '300px', overflow: 'hidden' }}>
                                        {image == null ? <img src={platImage} alt="user" /> : <img src={image} alt="uploaded image" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />}
                                        </div>

                                            <button   className="btn btn-pill btn-outline-light"type='button' onClick={() => fileInputRef.current.click()}>Seleccionar imagen</button>
                                            <input type="file" accept="image/*" ref={fileInputRef} style={{ display: 'none' }} onChange={handleImageChange} />
                                        </div>
                                        </div>                                      
                                        <div className="ms-panel-footer d-flex">
                                        {showGuardarButton && (
                                        <button className="btn btn-primary d-block mr-3" type="submit">
                                            Guardar
                                        </button>
                                         )}
                                        {showEditButton && (
                                            <button className="btn btn-primary d-block ml-auto" type="button">
                                                Editar
                                            </button>
                                        )}
                                    </div>                                 
                                     </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    

                    <div className="col-xl-7 col-md-12">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    
                                <div className="ms-panel-header" style={{ backgroundColor: '#f14a5a' }}>
                                <h6  style={{ color: '#ffffff' }}>Añadir Ingredientes</h6>
                                </div>

                                    <div className="card-body">
                                       {/*  AQUI DEBERIA MOSTRAR LOS PLATILLOS QUE LLEVA */}


                                       <div className="table-responsive">


                                       <DataGrid
                                            style={{ border: "0px solid black" }}
                                            rows={rows}
                                            columns={columns}
                                            getRowId={(row) => row.id}
                                            initialState={{
                                                ...rows.initialState,
                                                pagination: { paginationModel: { pageSize: 11 } },
                                            }}
                                            pageSizeOptions={[5, 10, 15, 25, 50]}
                                            localeText={esES.components.MuiDataGrid.defaultProps.localeText}
                                        />

                                    </div>

                               </div>
                                   
                                </div>
                            </div>
                        </div>
                      </div>  

                        <br></br>

                </div>

                <div className="row">
                    <br></br> <br></br>  <br></br>  <br></br>  
                </div>


                <div className="row">

                <div className="col-xl-12 col-md-12">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    
                                    <div className="ms-panel-header"  style={{ backgroundColor: '#f14a5a' }}>
                                      <h6  style={{ color: '#ffffff' }}>Ingredientes del platillo</h6>
                                     </div>
                                    <div className="card-body">
                                       {/*  AQUI DEBERIA MOSTRAR LOS PLATILLOS QUE LLEVA */}


                                       <div className="table-responsive">


                                       <DataGrid
                                            style={{ border: "0px solid black" }}
                                            rows={rows2}
                                            columns={columnas}
                                            getRowId={(row) => row.id}
                                            initialState={{
                                                ...rows2.initialState,
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
                      </div>  
                </div>

                
            </div>


            </main>
                <Quickbar />
            </div>

        );
    
}

export default Agregar;