import { useEffect, useState, useRef } from 'react';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import { alertSuccess, alertError } from '../Alertas/AlertasSweet';
import toastr from 'toastr';

function Content() {
    //traer Datos
    const location = useLocation();
    const datosAntes = location.state?.data ?? "";

    const apikey = '81a91816c209f6d64dfd56aa803647e5';
    //Imagen
    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);

    //datos del Usuario
    const [userId, setUserId] = useState(datosAntes.user_Id);
    const [userCorreo, setUserCorreo] = useState(datosAntes.user_Correo);
    const [empeId, setEmpeId] = useState(datosAntes.empe_Id);
    const [roleId, setRoleId] = useState(datosAntes.role_Id);
    const [userImage, setUserImage] = useState(datosAntes.user_Image);
    const [userEsAdmin, setUserEsAdmin] = useState(datosAntes.user_EsAdmin);
    const history = useHistory();
    const [validated, setValidated] = useState(false);

    //Listados para los select
    const [empleadosList, setEmpleadosList] = useState([]);
    const [rolesList, setRolesList] = useState([]);

    //Enviando info
    const [botonEnviar, setBotonEnviar] = useState(false);

    const fetchEmpleados = () => {
        axios.get('api/Empleados/Listado')
            .then(response => {
                setEmpleadosList(response.data.data);
            })
            .catch(error => {
                console.log('Error en la solicitud Axios:', error);
            });
    };

    const fetchRoles = () => {
        axios.get('api/Roles/Listado')
            .then(response => {
                setRolesList(response.data.data);
            })
            .catch(error => {
                console.log('Error en la solicitud Axios:', error);
            });
    };


    useEffect(() => {
        fetchEmpleados();
        fetchRoles();
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
        setBotonEnviar(true);
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
            setUserImage(data.data.url);
      
            const userData = {
              user_Id: userId,
              user_Correo: userCorreo,
              user_Image: data.data.url,
              user_EsAdmin: userEsAdmin,
              role_Id: roleId,
              empe_Id: empeId,
              user_UsuModificacion: 1,
            };
      
            await axios.put('api/Usuarios/Editar', userData)
              .then(response => {
                console.log(response);
                if (response.data.message == "Exitoso") {
                    alertSuccess("Editado", "El usuario se edito con exito", "2000");
                    history.push("/usuario");
                }else if(response.data.message == "YaExiste") {
                    toastr.warning("Este usuario ya existe, inserte otro", "Usuario existente");
                  }else{
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
          const userData = {
            user_Id: userId,
            user_Correo: userCorreo,
            user_Image: userImage,
            user_EsAdmin: userEsAdmin,
            role_Id: roleId,
            empe_Id: empeId,
            user_UsuModificacion: 1,
          };
      
          await axios.put('api/Usuarios/Editar', userData)
            .then(response => {
              console.log(response);
              if (response.data.message == "Exitoso") {
                alertSuccess("Editado", "El usuario se edito con exito", "2000");
                history.push("/usuario");
              }else if(response.data.message == "YaExiste") {
                toastr.warning("Este usuario ya existe, inserte otro", "Usuario existente");
              }else{
                toastr.error("Ocurrio un error inespero", "Inespero");
              }
            })
            .catch(error => {
              console.log('Error en la solicitud Axios:', error);
            });
        }
        setBotonEnviar(false);
      }
      

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

    function handleInputCheck(event) {
        const value = event.target.checked;
        setUserEsAdmin(value);
    }

    ///////////////////////////////////////////////////////





    return (
        <div className="ms-content-wrapper">
            <div className='container-fluid'>
                <div className='' style={{height:"50px"}}></div>
                <form onSubmit={handleSubmit} className={`needs-validation validation-fill ${validated ? 'was-validated' : ''}`} noValidate>
                    <div class="card mt-4">
                        <div class="card-body">
                            <div className='little-profilePhynomo text-center'>
                                <div class="pro-imgPhynomo"> {image == null ? <img src={userImage} alt="user" /> : <img src={image} alt="uploaded image" />}   </div>
                                <button className="btn btn-primary" type='button' onClick={() => fileInputRef.current.click()}>Seleccionar imagen</button>
                                <input type="file" accept="image/*" ref={fileInputRef} style={{ display: 'none' }} onChange={handleImageChange} />
                            </div>

                            <div className='row mt-3'>
                                <div className='col-6'>
                                    <div className="form-group">
                                        <label>Empleado</label>
                                        <div className='input-group'>
                                            <select value={empeId} onChange={(event) => handleInputChange(event, setEmpeId)} className="form-control" id="validationCustom3" required>
                                                <option value="">Selecciona un empleado</option>
                                                {empleadosList.map((option) => (
                                                    <option key={option.empe_Id} value={option.empe_Id}>{option.empe_NombreCompleto}</option>
                                                ))}
                                            </select>
                                            <div className="invalid-feedback">Selecciona un empleado para el usuario</div>
                                        </div>

                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className="form-group">
                                        <label>Rol</label>
                                        <div className='input-group'>
                                            <select value={roleId} onChange={(event) => handleInputChange(event, setRoleId)} className="form-control" id="validationCustom4" required>
                                                <option value="">Selecciona un rol</option>
                                                {rolesList.map((option) => (
                                                    <option key={option.role_Id} value={option.role_Id}>{option.role_Nombre}</option>
                                                ))}
                                            </select>
                                            <div className="invalid-feedback">Selecciona un rol para el usuario</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-8'>
                                    <div className="form-group">
                                        <label>Correo</label>
                                        <div className="input-group">
                                            <input type="mail" className="form-control" id="validationCustom5" placeholder="Correo del usuario" name="user_Correo" value={userCorreo} onChange={(event) => handleInputChange(event, setUserCorreo)} required />
                                            <div className="invalid-feedback">Ingresa el correo del usuario</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-4 text-center'>
                                    <div className="form-group">
                                        <label>¿Es administrador?</label>
                                        <div className="form-group">
                                            <span> No </span>
                                            <label className="ms-switch">
                                                <input type="checkbox" checked={userEsAdmin} onChange={handleInputCheck} /> <span className="ms-switch-slider ms-switch-primary round" />
                                            </label>
                                            <span> Si </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-end'>
                                <div className='col-4'>
                                    <button type='submit' disabled={botonEnviar} className='btn btn-danger btn-pill btn-block' >Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Content;
