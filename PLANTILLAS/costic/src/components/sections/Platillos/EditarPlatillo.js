import toastr from 'toastr';
import { alertSuccess, alertError } from '../Alertas/AlertasSweet';
import Breadcrumb from './Breadcrumb';
import { useEffect, useState, useRef } from 'react';
import React from 'react';
import axios from 'axios'
import Sidenavigation from '../../layouts/Sidenavigation';
import Topnavigation from '../../layouts/Topnavigation';
import Quickbar from '../../layouts/Quickbar';
import { useParams } from 'react-router-dom';
import { DataGrid, GridToolbar, esES } from '@mui/x-data-grid';





function Agregar() {
  const [rows, setRows] = useState([]); /* Filas de tabla de ingredientes */
  const [rows2, setRows2] = useState([]); /* Filas de tabla de ingredientes que lleva  */

  /*  formulario */
  const [categorias, setCategorias] = useState([]);

  const [UsuaModific, setUsuaModific] = useState('1');

  const apikey = '81a91816c209f6d64dfd56aa803647e5';
  //Imagen
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  /*  formulario */



  const [precioplat, setPrecioPlat] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const { plat_Id } = useParams();


  const [platillo, setPlatillo] = useState({
    plat_Nombre: "",
    plat_Imagen: "",
    cate_Id: "",
  });

  useEffect(() => {


    console.log(plat_Id);
    axios.get(`api/Platillos/DatosPlatillos?id=${plat_Id}`)
      .then((response) => {
        const platillos = response.data.data[0];
        setPlatillo(platillos);

        console.log(response.data.data[0]);

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);




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
            ingr_PrecioX100gr: item.ingr_PrecioX100gr,
            cantidad: 0
          };
        });

        console.log(response.data.data);
        setRows(rows);
        console.log("hola");
        console.log(rows);
        setIsLoading(false);

      })
      .catch(error => {
        console.log('Error en la solicitud Axios:', error);
      });
  };


  const [ingredientesGuardados, setIngredientesGuardados] = useState([]);

  const handleEditNombreEmpresa = (id, newValue) => {
    setRows(rows.map(row => {
      if (row.id === id) {
        return {
          ...row,
          cantidad: newValue,
        }
      } else {
        return row;
      }
    }));
  };

  const columns = [
    { field: 'ingr_Id', headerName: 'ID', flex: 0.5 },
    { field: 'ingr_Nombre', headerName: 'Nombre', flex: 1 },
    { field: 'ingr_PrecioX100gr', headerName: 'Precio por 100 gramos', flex: 1 },
    {
      field: 'cantidad',
      headerName: 'cantidad',
      flex: 1,
      renderCell: (params) => (
        <input type='number' id="cantidad" className='form-control'
          value={params.row.cantidad}
          onChange={(e) => handleEditNombreEmpresa(params.row.id, e.target.value)}
        />
      ),
    },
    {
      field: 'Agregar',
      headerName: 'Agregar',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) => (
        <div className='d-flex justify-content-center'>
          <div className='row align-items-center text-center'>
            <a
              id={`btnAgregar-${params.row}`}
              type="button"
              className="ms-btn-icon-outline btn-pill btn-success"
              onClick={() => handleAgregar(params.row)}
              disabled={ingredientesGuardados.includes(params.row.ingr_Id)} // Agregar la propiedad disabled para deshabilitar el botón
            >
              <i className="flaticon-tick-inside-circle" />
            </a>
          </div>
        </div>
      ),
    },
  ];

  const handleAgregar = (index) => {
    try {
      if (!plat_Id) {
        toastr.error("Debe Agregar un Platillo primero", "Platillo requerido");
      } else if (index.cantidad > 0) {
        const ingrId = index.ingr_Id;
        if (ingredientesGuardados.includes(ingrId) && 1 != 1) {
          toastr.warning("Este ingrediente ya fue agregado al platillo", "Ingrediente duplicado");
        } else {
          const data = {
            plat_Id: plat_Id,
            ingr_Id: ingrId,
            ingrplat_UsuCreacion: 1,
            ingr_PrecioX100gr: index.ingr_PrecioX100gr,
            ingrplat_Gramos: index.cantidad
          };
          axios.post('api/Ingredientes/AgregarIngredientesPlat', data)
            .then(response => {
              if (response.data.message == "Exitoso") {
                toastr.success("Se agregó el ingrediente al platillo", "Excelente");
                setIngredientesGuardados([...ingredientesGuardados, ingrId]); // Agregar el ingr_Id al estado ingredientesGuardados
                // Actualizar el estado
                axios.get(`api/Ingredientes/IngredientesXplatillos?id=${plat_Id}`) /* aqui hago la peticion par los ingredientes del platillo*/
                  .then(response => {
                    const rows = response.data.data.map(item => {
                      return {
                        id: item.ingrplat_Id,
                        plat_Id: item.plat_Id,
                        plat_Nombre: item.plat_Nombre,
                        ingr_Id: item.ingr_Id,
                        ingr_Nombre: item.ingr_Nombre,
                        ingrplat_Gramos: item.ingrplat_Gramos
                      };
                    });

                    console.log(response.data.data);
                    setIngredientesTabla(rows);
                    console.log("hola");
                    console.log(rows);
                    setIsLoading(false);

                  })
                  .catch(error => {
                    console.log('Error en la solicitud Axios:', error);
                  });

                axios.get(`api/Platillos/Precio?id=${plat_Id}`) /* aqui hago la peticion par los ingredientes del platillo*/
                  .then(response => {
                    setPrecioPlat(response.data.data[0].plat_Precio);
                    console.log("precioiooooo" + response.data.data[0].plat_Precio);

                  })
                  .catch(error => {
                    console.log('Error en la solicitud Axios:', error);
                  });


              } else {
                toastr.warning("Error inesperado al guardar el ingrediente", "Error");
              }
            })
            .catch(error => {
              toastr.error("Ocurrió un error al hacer la solicitud", "Error de solicitud");
            });
        }
      }
      else if (index.cantidad < 0) {
        toastr.warning("No puede agregar nuemros negativos", "Cantidad no válida");
      }
      else {
        toastr.warning("Debe Ingresar la cantidad de gramos para añadir este ingrediente", "Campo Requerido");
      }
    } catch {
      toastr.warning("Error inesperado", "Error");
    }
  };

  const columnas = [
    { field: 'id', headerName: '#code', flex: 1 },
    { field: 'plat_Id', headerName: 'Id platillo', flex: 1 },
    { field: 'plat_Nombre', headerName: 'Platillo', flex: 1 },
    { field: 'ingr_Id', headerName: 'Id Ingrediente', flex: 1 },
    { field: 'ingr_Nombre', headerName: 'Ingrediente', flex: 1 },
    { field: 'ingrplat_Gramos', headerName: 'Gramos', flex: 1 },
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
              id={`btnEliminar-${params.row}`}
              className="ms-btn-icon-outline btn-pill btn-danger"
              onClick={() => handleEliminar(params.row)}
            >
              <i className="flaticon-trash" />
            </a>

          </div>
        </div>
      ),
    },
  ];


  const fetchData2 = () => {

    axios.get(`api/Ingredientes/IngredientesXplatillos?id=${plat_Id}`) /* aqui hago la peticion par los ingredientes del platillo*/
      .then(response => {
        const rows = response.data.data.map(item => {
          return {
            id: item.ingrplat_Id,
            plat_Id: item.plat_Id,
            plat_Nombre: item.plat_Nombre,
            ingr_Id: item.ingr_Id,
            ingr_Nombre: item.ingr_Nombre,
            ingrplat_Gramos: item.ingrplat_Gramos
          };
        });

        console.log(response.data.data);
        setIngredientesTabla(rows);
        console.log("hola");
        console.log(rows);
        setIsLoading(false);

      })
      .catch(error => {
        console.log('Error en la solicitud Axios:', error);
      });


  };

  const [ingredientesTabla, setIngredientesTabla] = useState([]);

  const handleEliminar = (row) => {
    try {
      console.log(row);
      const ingrId = row.ingr_Id;
      const data = {
        ingrplat_Id: row.id,
        plat_Id: plat_Id,
        ingr_Id: row.ingr_Id,
        ingrplat_Gramos: row.ingrplat_Gramos
      };
      console.log(data);
      axios.post('api/Ingredientes/EliminarIngredientesPlat', data)
        .then(response => {
          if (response.data.message == "Exitoso") {
            toastr.success("Se ha eliminado el ingrediente del platillo", "Excelente");
            setIngredientesGuardados(ingredientesGuardados.filter(id => id !== ingrId));
            setIngredientesTabla(ingredientesTabla.filter(item => item.id !== row.id));

          } else {
            toastr.warning("Error inesperado al eliminar el ingrediente", "Error");
          }
        })
        .catch(error => {
          toastr.error("Ocurrió un error al hacer la solicitud", "Error de solicitud");
        });
    } catch {
      toastr.warning("Error inesperado", "Error");
    }
  };



  /* ---------- / INGREDIENTES QUE LLEVA   ----------   */


  /* ---------- / TABLA DE INGREDIENTES   ----------   */



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
    fetchData2();
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


  async function handleEdit() {
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
        console.log(data)

        const platEdit = {
          plat_Id: plat_Id,
          plat_Nombre: platillo.plat_Nombre,
          cate_Id: platillo.cate_Id,
          plat_Imagen: data.data.url,
          plat_UsuModificacion: 1
        };
        console.log("Datos easd", platEdit)
        await axios.put('api/Platillos/EditCrearPlatillo', platEdit)
          .then(response => {
            console.log(response);

            if (response.data.message == "Exitoso") {

              alertSuccess("Guardado", "Cambios Guardados con éxito", "2000");

            } else if (response.data.message == "YaExiste") {

              toastr.warning("Este Platillo ya existe, inserte otro", "Platillo Existente");

            } else {
              toastr.error("Ocurrio un error inespero", "Inespero");

            }
          })
          .catch(error => {
            console.log('Error en la solicitud Axios:', error);
          });

      } catch (error) {
        console.log('Error al enviar la imagen: ', error);
      }
    } else {


      let platEdit = {
        plat_Id: plat_Id,
        plat_Nombre: platillo.plat_Nombre,
        cate_Id: platillo.cate_Id,
        plat_Imagen: platillo.plat_Imagen,
        plat_UsuModificacion: 1
      };
      console.log("aca esta esta ", platEdit)
      await axios.put('api/Platillos/EditCrearPlatillo', platEdit)
        .then(response => {
          console.log(response);

          if (response.data.message == "Exitoso") {

            alertSuccess("Guardado", "Cambios Guardados con éxito", "2000");

          } else if (response.data.message == "YaExiste") {

            toastr.warning("Este Platillo ya existe, inserte otro", "Platillo Existente");

          } else {
            toastr.error("Ocurrio un error inespero", "Inespero");

          }
        })
        .catch(error => {
          console.log('Error en la solicitud Axios:', error);
        });

      // toastr.error("Hubo un error", "Error");

    }
    setEditMode(true);
  };




  const handleSubmit = (e) => {
    setValidated(false);
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      setValidated(true);
    } else {
      if (editMode) {
        handleEdit();
      }
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
              <Breadcrumb />

              <div className="row justify-content-center">

              </div>
              {/* espacio para alertas */}
            </div>


            <div className="col-xl-5 col-md-12">
              <div className="card">
                <div className="ms-panel-header" style={{ backgroundColor: '#f14a5a' }}>
                  <h6 style={{ color: '#ffffff' }}>Platillo</h6>
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
                            value={platillo.plat_Nombre} onChange={(event) => {
                              setPlatillo({
                                ...platillo,
                                plat_Nombre: event.target.value,
                              });
                            }} required />

                        </div>
                        <div className="invalid-feedback">Ingresa el nombre del platillo</div>
                      </div>
                      <div className="col-md-10 mb-3">
                        <label htmlFor="validationCustom22">Categoria</label>
                        <div className="input-group">
                          <select value={platillo.cate_Id} onChange={(event) => {
                            setPlatillo({
                              ...platillo,
                              cate_Id: event.target.value,
                            });
                          }}
                            className="form-control" id="validationCustom22" required>
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
                          <div className="pro-imgPhynomo" style={{ marginTop: '0', width: '300px', height: '300px', overflow: 'hidden' }}>
                            {image == null ? <img src={platillo.plat_Imagen} alt="user" style={{ objectFit: 'cover', width: '100%', height: '100%' }} /> : <img src={image} alt="uploaded image" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />}
                          </div>
                          <button className="btn btn-pill btn-outline-light" type='button' onClick={() => fileInputRef.current.click()}>Seleccionar imagen</button>
                          <input type="file" accept="image/*" ref={fileInputRef} style={{ display: 'none' }} onChange={handleImageChange} />
                        </div>
                      </div>

                      <div className="ms-panel-footer d-flex justify-content-center">
                        <div className='row text-center'>
                          <div className='col' style={{ padding: "0px 90%" }}>
                            <button className="btn btn-primary btn-pill" type="button" onClick={handleEdit} >
                              Editar
                            </button>
                          </div>
                        </div>


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
                      <h6 style={{ color: '#ffffff' }}>Añadir Ingredientes</h6>
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

                    <div className="ms-panel-header" style={{ backgroundColor: '#f14a5a' }}>
                      <h6 style={{ color: '#ffffff' }}>Ingredientes del platillo</h6>
                    </div>
                    <div className="card-body">
                      {/*  AQUI DEBERIA MOSTRAR LOS PLATILLOS QUE LLEVA */}


                      <div className="table-responsive">


                        <DataGrid
                          style={{ border: "0px solid black" }}
                          rows={ingredientesTabla}
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