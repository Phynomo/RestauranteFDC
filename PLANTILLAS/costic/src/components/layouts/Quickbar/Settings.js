import React, { Component, useEffect } from 'react';
import $ from 'jquery';

class Settings extends Component {
    adddarkmode = (e) => {
        var elem = e.target,
        parentTask = elem.closest('.ms-body');
        $(parentTask).toggleClass('ms-dark-theme');
    }
    addquickbar = (e) => {
        var elem = e.target,
        parentTask = elem.closest('.ms-body');
        $(parentTask).toggleClass('ms-has-quickbar');
    }
    
    render() {
        return (

            <div className="ms-quickbar-container text-center ms-invite-member">
                <div className="row">
                    <div className="col-md-12 text-left mb-5">
                        <h4 className="section-title bold">Tunear</h4>
                        <div>
                            <label className="ms-switch">
                                <input type="checkbox" id="dark-mode" onClick={this.adddarkmode} /> <span className="ms-switch-slider round" />
                            </label> <span> Tema oscuro </span>
                        </div>
                        <div>
                            <label className="ms-switch">
                                <input type="checkbox" id="remove-quickbar" onClick={this.addquickbar} /> <span className="ms-switch-slider round" />
                            </label> <span> Quitar menu rapido </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Settings;