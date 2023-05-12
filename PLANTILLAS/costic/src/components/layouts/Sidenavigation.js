import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery';
import Scrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import axios from 'axios';

import logo from '../../assets/img/costic/costic-logo-216x62.png';

class Sidenavigation extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleFetchData = this.handleFetchData.bind(this);
        this.state = {
            pantallas: [],
            seguridad: false,
            restaurante: false,
            general: false,
        };
    }

    handleFetchData() {
        axios.get('api/Pantallas/PantallasPorRol?rol=1&esAdmin=0')
            .then(response => {
                const responseData = response.data.data;

                responseData.forEach(item => {

                    if (item.pant_Menu.includes("acceso")) {
                        this.setState({
                            seguridad: true
                        });
                    } else if (item.pant_Menu.includes("restaurante")) {
                        this.setState({
                            restaurante: true
                        });
                    } else if (item.pant_Menu.includes("general")) {
                        this.setState({
                            general: true
                        });
                    }

                });

                this.setState({
                    pantallas: response.data.data
                });
            })
            .catch(error => {
                console.error('Error al cargar los departamentos:', error);
            });
    }

    removeoverlay = () => {
        $('.ms-body').toggleClass('ms-aside-left-open');
        $('#ms-side-nav').toggleClass('ms-aside-open');
        $(".ms-aside-overlay.ms-overlay-left").toggleClass('d-block');
    }
    componentDidMount() {
        function setActiveMenuItem() {
            $('.ms-main-aside .menu-item>a').on('click', function () {
                $(this).removeAttr('href');
                var element = $(this).parent('li');
                if (element.hasClass('active')) {
                    element.removeClass('active');
                    element.find('li').removeClass('active');
                    element.find('.collapse').slideUp();
                } else {
                    element.addClass('active');
                    element.children('.collapse').slideDown();
                    element.siblings('li').children('.collapse').slideUp();
                    element.siblings('li').removeClass('active');
                    element.siblings('li').find('li').removeClass('active');
                    element.siblings('li').find('.collapse').slideUp();
                }
            });
        }
        setActiveMenuItem();

        this.handleFetchData();
    }
    render() {
        return (
            <div>
                <div className="ms-aside-overlay ms-overlay-left ms-toggler" onClick={this.removeoverlay}></div>
                <div className="ms-aside-overlay ms-overlay-right ms-toggler"></div>
                <Scrollbar id="ms-side-nav" className="side-nav fixed ms-aside-scrollable ms-aside-left">
                    {/* Logo */}
                    <div className="logo-sn ">
                        <Link className="text-center" to="/">
                            <img src='https://i.ibb.co/9GcKFNs/FDCNegro.png' style={{ height: "75px" }} alt="logo" />
                            <img src="https://i.ibb.co/fQ52ntR/FDC.png" alt="FDC" style={{ height: "75px" }} border="3"></img>
                        </Link>
                    </div>
                    {/* Navigation */}
                    <ul className="accordion ms-main-aside fs-14" id="side-nav-accordion">
                        
                        <li className="menu-item" >
                            <Link to="/"> <span><i className="flaticon-diamond"></i>Home</span>
                            </Link>
                        </li>
                        {this.state.general? 
                        <li className="menu-item" >
                            <Link to="#" className="has-chevron"> <span><i className="flaticon-gear"></i>General</span>
                            </Link>
                            <ul id="basic-elements" className="collapse" aria-labelledby="basic-elements" data-parent="#side-nav-accordion">
                                {this.state.pantallas.map(pantalla =>
                                    pantalla.pant_Menu == "general"? <li className="menu-item" >
                                        <Link to={pantalla.pant_Url}> <span><i className="material-icons fs-16"></i>{pantalla.pant_Nombre}</span>
                                        </Link>
                                    </li> : <></>
                                )}
                            </ul >
                        </li >
                        :
                        <li className="menu-item" style={{display: "none"}} >
                            <Link to="/"> <span><i className="flaticon-pdf"></i>Pruebazzz</span>
                            </Link>
                        </li>
                        }
                        {this.state.restaurante? 
                        <li className="menu-item" >
                        <Link to="#" className="has-chevron"> <span><i className="flaticon-grid"></i>Restaurante</span>
                        </Link>
                        <ul id="basic-elements" className="collapse" aria-labelledby="basic-elements" data-parent="#side-nav-accordion">
                            {this.state.pantallas.map(pantalla =>
                                pantalla.pant_Menu == "restaurante"? <li className="menu-item" >
                                <Link to={pantalla.pant_Url}> <span><i className="material-icons fs-16"></i>{pantalla.pant_Nombre}</span>
                                </Link>
                            </li> : <></>
                            )}
                        </ul >
                        </li >
                        :
                        <li className="menu-item" style={{display: "none"}} >
                            <Link to="/"> <span><i className="flaticon-pdf"></i>Pruebazzz</span>
                            </Link>
                        </li>
                        }
                        {this.state.seguridad? 
                        <li className="menu-item" >
                        <Link to="#" className="has-chevron"> <span><i className="flaticon-security"></i>Seguridad</span>
                        </Link>
                        <ul id="basic-elements" className="collapse" aria-labelledby="basic-elements" data-parent="#side-nav-accordion">
                            {this.state.pantallas.map(pantalla =>
                                 pantalla.pant_Menu == "acceso"? <li className="menu-item" >
                                 <Link to={pantalla.pant_Url}> <span><i className="material-icons fs-16"></i>{pantalla.pant_Nombre}</span>
                                 </Link>
                             </li> : <></>
                            )}
                        </ul >
                        </li >
                        :
                        <li className="menu-item" style={{display: "none"}} >
                            <Link to="/"> <span><i className="flaticon-pdf"></i>Pruebazzz</span>
                            </Link>
                        </li>
                        }
                        <li className="menu-item" >
                            <Link to="/pruebas"> <span><i className="flaticon-pdf"></i>Pruebazzz</span>
                            </Link>
                        </li>
                    </ul >
                </Scrollbar >
            </div >
        );
    }
}

export default Sidenavigation;