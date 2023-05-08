import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Breadcrumb extends Component {
    render() {
        return (
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb pl-0">
                    <li className="breadcrumb-item"><Link to="#"><i className="material-icons">home</i> Home</Link></li>
                    <li class="breadcrumb-item"><Link to="#">Factura</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Factura detalles</li>
                </ol>
            </nav>
        );
    }
}

export default Breadcrumb;