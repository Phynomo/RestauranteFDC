import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import $ from 'jquery';
import { Dropdown } from 'react-bootstrap';
import Scrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

const closeIcon = (
    <div className="close">
        <span aria-hidden="true">×</span>
    </div>
)
class Notes extends Component {
    state = {
        open: false,
    };
    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    deletecardbtn = (e) => {
        var elem = e.target,
            parentTask = elem.closest('.ms-deletable');
        $(parentTask).slideUp('slow', function () { $(parentTask).remove(); });
    }
    render() {
        const { open } = this.state;
        return (
            <div>
                    <Scrollbar className="ms-quickbar-container ms-scrollable">
                    <div className="ms-card ms-qa-card ms-deletable">
                            <div className="ms-card-header">
                                <h6 className="ms-card-title">Karla</h6>
                            </div>
                            <div className="ms-card-body">
                                <p></p>
                            </div>
                        </div>
                        <div className="ms-card ms-qa-card ms-deletable">
                            <div className="ms-card-header">
                                <h6 className="ms-card-title">Phynomo</h6>
                            </div>
                            <div className="ms-card-body">
                                <p>No hizo nada</p>
                            </div>
                        </div>
                        <div className="ms-card ms-qa-card ms-deletable">
                            <div className="ms-card-header">
                                <h6 className="ms-card-title">Panxho</h6>
                            </div>
                            <div className="ms-card-body">
                                <p></p>
                            </div>
                        </div>
                    </Scrollbar>
            </div>
        );
    }
}

export default Notes;