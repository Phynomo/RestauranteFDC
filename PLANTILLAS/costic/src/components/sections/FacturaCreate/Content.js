import React from 'react';
import { useHistory } from 'react-router-dom';
import { Tab, Nav } from "react-bootstrap";

function Content() {
    const history = useHistory();

    function handleCreate() {
    }

    return (
        <div className="ms-content-wrapper">
            <div className='container'>
                <div className='row'>
                    <div className='col-8'>
                        <div className='card' style={{}} >
                            <div className='card-body'>
                                <Tab.Container defaultActiveKey="tab1">
                                    <Nav variant="tabs" className="nav nav-tabs tabs-bordered d-flex nav-justified mb-4">
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab1">Overview</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link disabled="true" eventKey="tab2">Profile</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tab3">Settings</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="tab1">
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                            <p> Cras egestas nisi vel tempor dignissim. Ut condimentum iaculis ex nec ornare. Vivamus sit amet elementum ante. Fusce eget erat volutpat </p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab2">
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                            <p> Cras egestas nisi vel tempor dignissim. Ut condimentum iaculis ex nec ornare. Vivamus sit amet elementum ante. Fusce eget erat volutpat </p>
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tab3">
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, congue nec laoreet sed, maximus non massa. Fusce vestibulum vel risus vitae tincidunt. </p>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='card' style={{ height: "100%" }}>
                            <div className='card-header'>
                                Informacion de compra
                            </div>
                            <div className='card-body'>
                                <div className="input-group" style={{}}>
                                    <div className="input-group-prepend"> <span className="input-group-text" id="inputGroupPrepend" style={{width:"100px"}}><i className="flaticon-supermarket"  style={{marginRight: "10px"}}/>Subtotal</span>
                                    </div>
                                    <input type="text" className="form-control" aria-describedby="inputGroupPrepend" value={300} readOnly="true" />
                                </div>
                                <div className="input-group" style={{}}>
                                    <div className="input-group-prepend"> <span className="input-group-text" id="inputGroupPrepend" style={{width:"100px"}}><i className="flaticon-information"  style={{marginRight: "10px"}}/>IVA</span>
                                    </div>
                                    <input type="text" className="form-control" aria-describedby="inputGroupPrepend" value={300} readOnly="true" />
                                </div>
                                <div className="input-group" style={{}}>
                                    <div className="input-group-prepend"> <span className="input-group-text" id="inputGroupPrepend" style={{width:"100px"}}><i className="flaticon-star"  style={{marginRight: "10px"}}/>Total</span>
                                    </div>
                                    <input type="text" className="form-control" aria-describedby="inputGroupPrepend" value={300} readOnly="true" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
