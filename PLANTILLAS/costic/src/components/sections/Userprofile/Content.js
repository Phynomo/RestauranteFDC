import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Tab, Nav } from "react-bootstrap";

import customerimg from '../../../assets/img/costic/customer-5.jpg'
class Content extends Component {

    render() {
        const storedArray = JSON.parse(localStorage.getItem('token'));
        return (
            <div className="ms-content-wrapper">
                <div className="ms-profile-overview">
                    <div className="ms-profile-cover">
                        <img className="ms-profile-img" src={storedArray.user_Image} alt="people" />
                        <div className="ms-profile-user-info">
                            <h4 className="ms-profile-username text-white">{storedArray.empe_NombreCompleto}</h4>
                            <h2 className="ms-profile-role">{storedArray.empe_Cargo}</h2>
                        </div>
                        <div className="ms-profile-user-buttons">
                        </div>
                    </div>
                    
                </div>
            </div >

        );
    }
}

export default Content;