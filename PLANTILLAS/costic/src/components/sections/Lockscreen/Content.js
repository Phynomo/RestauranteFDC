import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Dropdown, NavLink } from 'react-bootstrap';
import Scrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

class Content extends Component {
    render() {
        const storedArray = JSON.parse(localStorage.getItem('token'));
        return (
            <div className="ms-body ms-primary-theme">
                <div className="ms-lock-screen-weather">
                   
                </div>
                
                {/* Main Content */}
                <main className="body-content ms-lock-screen">
                    {/* Body Content Wrapper */}
                    <div className="ms-content-wrapper">
                        <img className="ms-user-img ms-img-round ms-lock-screen-user" src={storedArray.user_Image} style={{height:"200px", width:"200px", objectFit: "cover",border: "7px solid white", clipPath: "circle(50%)" }} alt="people" />
                        <h1>{storedArray.user_NombreCompleto}</h1>
                        <form method="post">
                            <Link to="/" className="btn bg-black w-100 text-white">Desbloquear</Link>
                        </form>
                    </div>
                </main>
                <div className="ms-lock-screen-time">
                    
                </div>
            </div>

        );
    }
}

export default Content;