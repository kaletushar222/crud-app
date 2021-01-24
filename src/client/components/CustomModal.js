import React from 'react';
import { Button, Modal } from 'react-bootstrap';
const ComponentCustomModal = props => {
    return (
        <Modal show={props.showModalFlag}>
            <Modal.Header>
                <Modal.Title>{ props.title }</Modal.Title>
            </Modal.Header>
            <Modal.Body>{ props.body }</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={ props.handleCancel }>
                    Cancel
                </Button>
                <Button variant="primary" onClick={props.handleConfirm}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ComponentCustomModal;