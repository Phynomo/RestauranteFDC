import React, { useEffect } from 'react';
/*import { Modal, Accordion, Card } from "react-bootstrap";*/

const Modal = ({ title, message, confirmText, onConfirm, onCancel, showModal }) => {
  useEffect(() => {
    const modalElement = document.querySelector('.modal');
    if (showModal) {
      modalElement.classList.add('show');
    } else {
      modalElement.classList.remove('show');
    }
  }, [showModal]);

  return (
    <div className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalTitle">{title}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onCancel}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {message}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onCancel}>Cancelar</button>
            <button type="button" className="btn btn-primary" onClick={onConfirm}>{confirmText}</button>
          </div>
        </div>
      </div>
    </div>



       /* <Modal  aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header className="bg-primary">
            <h3 className="modal-title has-icon ms-icon-round  text-white"><i className="flaticon-alert-1 bg-primary text-white" />{title}</h3>
            <button type="button" className="close" onClick={onCancel}><span aria-hidden="true">×</span></button>
        </Modal.Header>
        <Modal.Body className='text-center'>
        {message}
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center'> 
            <button type="button" className="btn btn-light btn-sm" onClick={onCancel}>Cancelar</button>
            <button type="button" className="btn btn-primary shadow-none btn-sm" onClick={onConfirm}>{confirmText}</button>
        </Modal.Footer>
        </Modal>*/
  );
};

export default Modal;
