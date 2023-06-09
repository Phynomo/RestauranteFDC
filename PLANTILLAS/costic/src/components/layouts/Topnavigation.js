import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery';
import { Dropdown, NavLink } from 'react-bootstrap';
import Scrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import axios from 'axios';

import costiclogo from '../../assets/img/costic/costic-logo-84x41.png'

class Topnavigation extends Component {
    addsidenavigation = () => {
        $('.ms-body').toggleClass('ms-aside-left-open');
        $('#ms-side-nav').toggleClass('ms-aside-open');
        $(".ms-aside-overlay.ms-overlay-left").toggleClass('d-block');
    }
    topbaropen = () => {
        $('#ms-nav-options').toggleClass('ms-slide-down');
    }


    constructor(props, context) {
        super(props, context);
        this.handleFetchSucursales = this.handleFetchSucursales.bind(this);
        this.state = {
            miListado: JSON.parse(localStorage.getItem('token')),
            sucu_Id: JSON.parse(localStorage.getItem('token')).sucu_Id,
            sucursales: [],
        };
    }

    handleFetchSucursales() {
        axios.get('api/Sucursales/Listado')
            .then(response => {
            this.setState({
                sucursales: response.data.data
            });
            })
            .catch(error => {
            console.error('Error al cargar las sucursales :', error);
            });
        }

        componentDidMount() {
            this.handleFetchSucursales();
        }

    
    render() {
        const storedArray = JSON.parse(localStorage.getItem('token'));
        const defautImage = "https://i.ibb.co/NTYrJXY/Imagen-de-Whats-App-2023-04-23-a-las-12-47-54.jpg";
        const handleOutLog = () => {
            localStorage.clear();
          };

          const handleInputChange =(event) => {
            this.setState({
              sucu_Id : event.target.value
            });
          
            storedArray.sucu_Id = event.target.value;
            localStorage.setItem('token', JSON.stringify(storedArray));
          
            window.location.reload();
          }
          

        return (
            <nav className="navbar ms-navbar">
                <div className="ms-aside-toggler ms-toggler pl-0" onClick={this.addsidenavigation}>
                    <span className="ms-toggler-bar bg-primary" />
                    <span className="ms-toggler-bar bg-primary" />
                    <span className="ms-toggler-bar bg-primary" />
                </div>
                <div className="logo-sn logo-sm ms-d-block-sm">
                    <Link className="pl-0 ml-0 text-center navbar-brand mr-0" to="/"><img src={costiclogo} alt="logo" /> </Link>
                </div>
                <ul className="ms-nav-list ms-inline mb-0" id="ms-nav-options">
                     {storedArray.user_EsAdmin? <li className="ms-nav-item ms-search-form pb-0 py-0">
                     <div className="ms-form-group has-icon">
                                    <select className='form-control' id="validationCustom13" name="sucu_Id" value={this.state.sucu_Id} onChange={handleInputChange} required>
                                         {this.state.sucursales.map(sucu =>
                                            <option key={sucu.sucu_Id} value={sucu.sucu_Id}>{sucu.sucu_Nombre}</option>
                                        )} 
                                        </select>
                                </div>
                    </li> : <></>}   
                    {/* <li className="ms-nav-item dropdown">
                        <Dropdown className="custom-dropdown">

                            <Dropdown.Toggle as={NavLink} className="text-disabled ms-has-notification p-0" ><i className="flaticon-mail" /></Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu dropdown-menu-right" aria-labelledby="mailDropdown">
                                <div className="dropdown-menu-header">
                                    <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Mail</span></h6><span className="badge badge-pill badge-success">3 New</span>
                                </div>
                                <div className="dropdown-divider" />
                                <Scrollbar className="ms-scrollable ms-dropdown-list">
                                    <Link className="media p-2" to="#">
                                        <div className="ms-chat-status ms-status-offline ms-chat-img mr-2 align-self-center">
                                            <img src="assets/img/costic/customer-3.jpg" className="ms-img-round" alt="people" />
                                        </div>
                                        <div className="media-body"> <span>Hey man, looking forward to your new project.</span>
                                            <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 30 seconds ago</p>
                                        </div>
                                    </Link>
                                    <Link className="media p-2" to="#">
                                        <div className="ms-chat-status ms-status-online ms-chat-img mr-2 align-self-center">
                                            <img src="assets/img/costic/customer-2.jpg" className="ms-img-round" alt="people" />
                                        </div>
                                        <div className="media-body"> <span>Dear John, I was told you bought Costic! Send me your feedback</span>
                                            <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 28 minutes ago</p>
                                        </div>
                                    </Link>
                                    <Link className="media p-2" to="#">
                                        <div className="ms-chat-status ms-status-offline ms-chat-img mr-2 align-self-center">
                                            <img src="assets/img/costic/customer-1.jpg" className="ms-img-round" alt="people" />
                                        </div>
                                        <div className="media-body"> <span>How many people are we inviting to the dashboard?</span>
                                            <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 6 hours ago</p>
                                        </div>
                                    </Link>
                                </Scrollbar>
                                <div className="dropdown-divider" />
                                <div className="dropdown-menu-footer text-center"> <Link to="/email">Go to Inbox</Link>
                                </div>
                            </Dropdown.Menu>

                        </Dropdown>
                    </li> */}
                    {/* <li className="ms-nav-item dropdown">
                        <Dropdown className="custom-dropdown">
                            <Dropdown.Toggle as={NavLink} className="text-disabled ms-has-notification p-0"><i className="flaticon-bell" /></Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu dropdown-menu-right" aria-labelledby="notificationDropdown">
                                <div className="dropdown-menu-header">
                                    <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Notifications</span></h6><span className="badge badge-pill badge-info">4 New</span>
                                </div>
                                <div className="dropdown-divider" />
                                <Scrollbar className="ms-scrollable ms-dropdown-list">
                                    <Link className="media p-2" to="#">
                                        <div className="media-body"> <span>12 ways to improve your crypto dashboard</span>
                                            <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 30 seconds ago</p>
                                        </div>
                                    </Link>
                                    <Link className="media p-2" to="#">
                                        <div className="media-body"> <span>You have newly registered users</span>
                                            <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 45 minutes ago</p>
                                        </div>
                                    </Link>
                                    <Link className="media p-2" to="#">
                                        <div className="media-body"> <span>Your account was logged in from an unauthorized IP</span>
                                            <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 2 hours ago</p>
                                        </div>
                                    </Link>
                                    <Link className="media p-2" to="#">
                                        <div className="media-body"> <span>An application form has been submitted</span>
                                            <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 1 day ago</p>
                                        </div>
                                    </Link>
                                </Scrollbar>
                                <div className="dropdown-divider" />
                                <div className="dropdown-menu-footer text-center"> <Link to="#">View all Notifications</Link>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li> */}
                    <li className="ms-nav-item ms-nav-user dropdown">
                        <Dropdown className="custom-dropdown">
                            <Dropdown.Toggle as={NavLink} id="userDropdown" className="p-0">
                            <img className="ms-user-img ms-img-round" src={storedArray?.user_Image === null ? defautImage : storedArray?.user_Image} alt="people"  />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu dropdown-menu-right user-dropdown" aria-labelledby="userDropdown">
                                <div className="dropdown-menu-header">
                                    <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Bienvenide, {storedArray?.empe_NombreCompleto}</span></h6>
                                </div>
                                <div className="dropdown-divider" />
                                <div className="ms-dropdown-list">
                                    <Link className="media fs-14 p-2" to="/user-profile"> <span><i className="flaticon-user mr-2" /> Profile</span>
                                    </Link>
                                </div>
                                <div className="dropdown-divider" />
                                <div className="dropdown-menu-footer">
                                    <Link className="media fs-14 p-2" to="/lock-screen"> <span><i className="flaticon-security mr-2" /> Lock</span>
                                    </Link>
                                </div>
                                <div className="dropdown-menu-footer">
                                    <Link onClick={handleOutLog} className="media fs-14 p-2" to="/default-login"> <span><i className="flaticon-shut-down mr-2" /> Logout</span>
                                    </Link>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
                <div className="ms-toggler ms-d-block-sm pr-0 ms-nav-toggler" onClick={this.topbaropen}>
                    <span className="ms-toggler-bar bg-primary" />
                    <span className="ms-toggler-bar bg-primary" />
                    <span className="ms-toggler-bar bg-primary" />
                </div>
            </nav >
        );
    }
}

export default Topnavigation;