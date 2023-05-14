import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Modal, Accordion, Card } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom'
import toastr from 'toastr';


function Login() {
    const navigate = useHistory();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [usuario, setusuario] = useState("")
    const [password2, setPassword2] = useState("")
    const [validationErrors, setValidationErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [validado, setValidado] = useState(false);
    const [isSubmitting2, setIsSubmitting2] = useState(false);
    const [validado2, setValidado2] = useState(false);
    const [modalRecuperar, setModalRecuperar] = useState(false);

    async function fetchPermissionsForRole(role, admin) {
        try {
          const response = await axios.get(`api/Pantallas/PantallasPorRol?rol=${role}&esAdmin=${admin}`, {});
          const pantIds = response.data.data.map(objeto => objeto.pant_Id);

          localStorage.setItem('Pantallas', pantIds)
          return pantIds;
        } catch (error) {

            localStorage.setItem('Pantallas', [])
          return [];
        }
      }


    useEffect(() => {
        if (localStorage.getItem('token') != "" && localStorage.getItem('token') != null) {
            navigate.push('/');
        }
        console.log(localStorage.getItem('token'))
    }, [])

    const abrirModalRecuperar = () => {
        setValidado2(false);
        setModalRecuperar(true);
    }

    const handleClose = () => {
        setModalRecuperar(false);
    }


    const loginAction = (e) => {
        setValidationErrors({})
        e.preventDefault();
        setIsSubmitting(true)
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            setValidado(true);
            e.stopPropagation();
        }else{
        let payload = {
            usua_Usuario: email,
            usua_Clave: password,
        }
        axios.get('api/Usuarios/Login?usuario='+email+'&contrasena='+password)
            .then((r) => {
                if (r.data.data != null && r.data.data.length > 0) {
                    //si existe el usuario entra aca 
                    setIsSubmitting(false)
                    localStorage.setItem('token', JSON.stringify(r.data.data[0]))
                    

                    fetchPermissionsForRole(r.data.data[0].role_Id, r.data.data[0].user_EsAdmin ? 1:0);

                    //Para recuperar la info luego
                    // const storedArray = JSON.parse(localStorage.getItem('token'));
                    // console.log(storedArray);

                    navigate.push('/');
                } else {
                    //si no existe el usuario entra aca 
                    toastr.error("Usuario o contraseña erroneos", "Error");
                    setIsSubmitting(false);
                }

            })
            .catch((e) => {
                console.log(e);
            });
        }
        setIsSubmitting(false)
    }

    const RecuperarAction = (e) => {
        setValidationErrors({})
        e.preventDefault();
        setIsSubmitting2(true)
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            setValidado2(true);
            e.stopPropagation();
        }else{
        let payload = {
            user_NombreUsuario: usuario,
            user_Contrasena: password2,
        } 
        axios.put('api/Usuarios/Recuperar',payload)
            .then((r) => {
                if (r.data.message == "exito" ) {
                    setModalRecuperar(false);
                    toastr.success("Usuario recupedaro con exito", "Logradi");
                } else {

                    toastr.error("No se pudo encontrar tu usuario", "Error");
                }

            })
            .catch((e) => {
                console.log(e);
            });
        }
        
        setIsSubmitting2(false)
    }

    return (
            <div className="ms-content-wrapper ms-auth">
                <div className="ms-auth-container">
                    <div className="ms-auth-col">
                        <div className="ms-auth-bg" />
                    </div>
                    <div className="ms-auth-col">
                        <div className="ms-auth-form">
                            <form onSubmit={(e) => { loginAction(e) }} className={`needs-validation validation-fill ${validado ? 'was-validated' : ''}`} noValidate >
                                <h3>Inicio de sesión</h3>
                                <p>Ingresa tu usuario y contraseña</p>
                                {Object.keys(validationErrors).length != 0 &&
                                <p className='text-center '><small className='text-danger'>Incorrect Email or Password</small></p>
                                }
                                <div className="mb-3">
                                    <label htmlFor="validationCustom08">Usuario</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='usuario' required />
                                        <div className="invalid-feedback">Llena este campo.</div>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="validationCustom09">Contraseña</label>
                                    <div className="input-group">
                                        <input type="password" placeholder='Contraseña' className="form-control" id="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} required/>
                                        <div className="invalid-feedback">Llena este campo.</div>
                                    </div>
                                </div>
                                <button disabled={isSubmitting} className="btn btn-primary mt-4 d-block w-100" type="submit">Iniciar</button>
                                <p className="mb-0 mt-3 text-center">¿No recuerdas tu contraseña?<buttom className="btn-link" onClick={abrirModalRecuperar} >¡Recuperala!</buttom>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                <Modal className="modal-min" show={modalRecuperar} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Body className="">
                        <div className='text-center'>
                            <button type="button" className="close" onClick={handleClose}><span aria-hidden="true">×</span></button>
                            <i className="flaticon-secure-shield d-block" />
                            <h1>Recuperar contraseña</h1>
                            <p>Introduce tus datos</p>
                        </div>
                        
                        <form onSubmit={(e) => { RecuperarAction(e) }} className={`needs-validation validation-fill ${validado2 ? 'was-validated' : ''}`} noValidate >
                            <div className="ms-form-group has-icon">
                                    <label htmlFor="validationCustom09">Usuario</label>
                                    <div className="input-group">
                                        <input type="text" placeholder='Usuario' className="form-control" id="usu" name="usu" value={usuario} onChange={(e) => { setusuario(e.target.value) }} required/> {!validado2 ? <i class="material-icons">people</i> : null}
                                        <div className="invalid-feedback">Llena este campo.</div>
                                    </div>
                                </div>
                                <div className="ms-form-group has-icon">
                                    <label htmlFor="validationCustom09">Contraseña</label>
                                    <div className="input-group">
                                        <input type="password" placeholder='Contraseña' className="form-control" id="pass" name="pass" value={password2} onChange={(e) => { setPassword2(e.target.value) }} required/> {!validado2 ? <i class="material-icons">lock</i> : null} 
                                        <div className="invalid-feedback">Llena este campo.</div>
                                    </div>
                                </div>
                                <div className='text-center'>
                                   <button type="submit" disabled={isSubmitting2} className="btn btn-primary shadow-none text-center">Recuperar contraseña</button>       
                                </div>
                         </form>
                    </Modal.Body>
                </Modal>
            </div>
            
    );
}

export default Login;


