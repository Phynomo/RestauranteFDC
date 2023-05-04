import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import {Link,useHistory } from 'react-router-dom'

  
function Login() {
    const navigate = useHistory ();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [validationErrors, setValidationErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
 
    useEffect(()=>{
        if(localStorage.getItem('token') != "" && localStorage.getItem('token') != null){
            navigate.push('/');
        }
        console.log(localStorage.getItem('token'))
    },[])
 
    const loginAction = (e) => {
        setValidationErrors({})
        e.preventDefault();
        setIsSubmitting(true)
        let payload = {
            usua_Usuario:email,
            usua_Clave:password,
        }
        axios.get('pokemon/mudkip')
        .then((r) => {
            setIsSubmitting(false)
         localStorage.setItem('token', "si")
         navigate.push('/');
        })
        .catch((e) => {
            console.log(e);
        });
    }
 
     
    return (
            <div className="row justify-content-md-center mt-5">
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title mb-4">Sign In</h5>
                            <form onSubmit={(e)=>{loginAction(e)}}>
                                {Object.keys(validationErrors).length != 0 &&
                                     <p className='text-center '><small className='text-danger'>Incorrect Email or Password</small></p>
                                }
                                
                                <div className="mb-3">
                                    <label 
                                        htmlFor="email"
                                        className="form-label">
                                            Email address
                                    </label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e)=>{setEmail(e.target.value)}}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label 
                                        htmlFor="password"
                                        className="form-label">Password
                                    </label>
                                    <input 
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={(e)=>{setPassword(e.target.value)}}
                                    />
                                </div>
                                <div className="d-grid gap-2">
                                    <button 
                                        disabled={isSubmitting}
                                        type="submit"
                                        className="btn btn-primary btn-block">Login</button>
                                    <p className="text-center">Don't have account? <Link to="/register">Registrase Aqui</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
}
   
export default Login;



// import React, { Component, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Modal } from "react-bootstrap";
// import axios from 'axios';


// // class Content extends Component {
// //     componentDidMount() {
// //         //initialize datatable
// //         function formValidation() {
// //             window.addEventListener('load', function () {
// //                 // Fetch all the forms we want to apply custom Bootstrap validation styles to
// //                 var forms = document.getElementsByClassName('needs-validation');
// //                 // Loop over them and prevent submission
// //                 Array.prototype.filter.call(forms, function (form) {
// //                     form.addEventListener('submit', function (event) {
// //                         if (form.checkValidity() === false) {
// //                             event.preventDefault();
// //                             event.stopPropagation();
// //                         }
// //                         form.classList.add('was-validated');
// //                     }, false);
// //                 });

// //             }, false);
// //         }
// //         formValidation();
// //     }
// //     constructor(props, context) {
// //         super(props, context);
// //         this.handleShow1 = this.handleShow1.bind(this);
// //         this.handleClose = this.handleClose.bind(this);
// //         this.state = {
// //             show: false,
// //         };
// //     }
// //     handleShow1() {
// //         this.setState({ show1: true });
// //     }
// //     handleClose() {
// //         this.setState({ show1: false });
// //     }
// //     render() {
// //         return (
// //             <div className="ms-content-wrapper ms-auth">
// //                 <div className="ms-auth-container">
// //                     <div className="ms-auth-col">
// //                         <div className="ms-auth-bg" />
// //                     </div>
// //                     <div className="ms-auth-col">
// //                         <div className="ms-auth-form">
// //                             <form className="needs-validation" noValidate>
// //                                 <h3>Login to Account</h3>
// //                                 <p>Please enter your email and password to continue</p>
// //                                 <div className="mb-3">
// //                                     <label htmlFor="validationCustom08">Email Address</label>
// //                                     <div className="input-group">
// //                                         <input type="email" className="form-control" id="validationCustom08" placeholder="Email Address" required />
// //                                         <div className="invalid-feedback">Please provide a valid email.</div>
// //                                     </div>
// //                                 </div>
// //                                 <div className="mb-2">
// //                                     <label htmlFor="validationCustom09">Password</label>
// //                                     <div className="input-group">
// //                                         <input type="password" className="form-control" id="validationCustom09" placeholder="Password" required />
// //                                         <div className="invalid-feedback">Please provide a password.</div>
// //                                     </div>
// //                                 </div>
// //                                 <div className="form-group">
// //                                     <label className="ms-checkbox-wrap">
// //                                         <input className="form-check-input" type="checkbox" defaultValue /> <i className="ms-checkbox-check" />
// //                                     </label> <span> Remember Password </span>
// //                                     <label className="d-block mt-3"><Link to="/default-login" className="btn-link" onClick={this.handleShow1}>Forgot Password?</Link>
// //                                     </label>
// //                                 </div>
// //                                 <button className="btn btn-primary mt-4 d-block w-100" type="submit">Sign In</button>
// //                                 <p className="mb-0 mt-3 text-center">Don't have an account? <Link className="btn-link" to="/default-register">Create Account</Link>
// //                                 </p>
// //                             </form>
// //                         </div>
// //                     </div>
// //                 </div>
// //                 <Modal className="modal-min" show={this.state.show1} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
// //                     centered>
// //                     <Modal.Body className="text-center">
// //                         <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
// //                         <i className="flaticon-secure-shield d-block" />
// //                         <h1>Forgot Password?</h1>
// //                         <p>Enter your email to recover your password</p>
// //                         <form method="post">
// //                             <div className="ms-form-group has-icon">
// //                                 <input type="text" placeholder="Email Address" className="form-control" name="forgot-password" /> <i class="material-icons">email</i>
// //                             </div>
// //                             <button type="submit" className="btn btn-primary shadow-none">Reset Password</button>
// //                         </form>
// //                     </Modal.Body>
// //                 </Modal>
// //             </div>

// //         );
// //     }
// // }

// function login (){
//  const navigate = Link();
//  const [email, setEmail] = useState("");
//  const [password, setPassword] = useState("");

//     useEffect(() =>{
//         if (localStorage.getItem("token") != "") {
//             navigate.push('/');
//         }
//     })

//     const loginAction = (e) => {

//         let parametro = {
//             email: email,
//             password:password
//         }
//         axios.post("/api/login", parametro)
//         .then((r) => {
//             localStorage.setItem('token', r.data.token)
//             navigate.push('/');
//         })
//         .catch((e) => {
//             localStorage.setItem("error", e.response.data.errors)
//         })
//     }

//     return (
//         <div className="ms-content-wrapper ms-auth">
//             <div className="ms-auth-container">
//                 <div className="ms-auth-col">
//                     <div className="ms-auth-bg" />
//                 </div>
//                 <div className="ms-auth-col">
//                     <div className="ms-auth-form">
//                         <form onSubmit={loginAction()} className="needs-validation" noValidate>
//                             <h3>Login to Account</h3>
//                             <p>Please enter your email and password to continue</p>
//                             <div className="mb-3">
//                                 <label htmlFor="validationCustom08">Email Address</label>
//                                 <div className="input-group">
//                                     <input type="email" className="form-control" id="validationCustom08" placeholder="Email Address" required />
//                                     <div className="invalid-feedback">Please provide a valid email.</div>
//                                 </div>
//                             </div>
//                             <div className="mb-2">
//                                 <label htmlFor="validationCustom09">Password</label>
//                                 <div className="input-group">
//                                     <input type="password" className="form-control" id="validationCustom09" placeholder="Password" required />
//                                     <div className="invalid-feedback">Please provide a password.</div>
//                                 </div>
//                             </div>
//                             <div className="form-group">
//                                 <label className="ms-checkbox-wrap">
//                                     <input className="form-check-input" type="checkbox" defaultValue /> <i className="ms-checkbox-check" />
//                                 </label> <span> Remember Password </span>
//                                 <label className="d-block mt-3"><Link to="/default-login" className="btn-link" onClick={this.handleShow1}>Forgot Password?</Link>
//                                 </label>
//                             </div>
//                             <button className="btn btn-primary mt-4 d-block w-100" type="submit">Sign In</button>
//                             <p className="mb-0 mt-3 text-center">Don't have an account? <Link className="btn-link" to="/default-register">Create Account</Link>
//                             </p>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             <Modal className="modal-min" show={this.state.show1} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter"
//                 centered>
//                 <Modal.Body className="text-center">
//                     <button type="button" className="close" onClick={this.handleClose}><span aria-hidden="true">×</span></button>
//                     <i className="flaticon-secure-shield d-block" />
//                     <h1>Forgot Password?</h1>
//                     <p>Enter your email to recover your password</p>
//                     <form method="post">
//                         <div className="ms-form-group has-icon">
//                             <input type="text" placeholder="Email Address" className="form-control" name="forgot-password" /> <i class="material-icons">email</i>
//                         </div>
//                         <button type="submit" className="btn btn-primary shadow-none">Reset Password</button>
//                     </form>
//                 </Modal.Body>
//             </Modal>
//         </div>

//     );


// }


// export default login;