import React, { Component } from 'react';
import PDFDocument from './pdf'

class Content extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                    </div>
                    <div className="col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <h6>Reporte de empleados</h6>
                            </div>
                            <div className="ms-panel-body">
                                 <PDFDocument></PDFDocument>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Content;
