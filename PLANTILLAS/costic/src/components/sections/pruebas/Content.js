import React, { Component } from 'react';
import PDFDocument from './pdf'
import Select from './select'
//import ColumnChart from './graficas'

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
                                <h6>Reporte</h6>
                            </div>
                            <div className="ms-panel-body">
                                 {/* <PDFDocument></PDFDocument>  */}
                                 <Select></Select> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Content;
