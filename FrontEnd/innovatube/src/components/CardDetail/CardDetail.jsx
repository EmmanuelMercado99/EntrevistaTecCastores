
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalVideo = ({ show, handleClose, video }) => {
    const { title, description, thumbnails } = video.snippet;
    const {videoId} = video.id
    const url = `https://www.youtube.com/watch?v=${videoId}`;

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={thumbnails.high.url} alt={title} className="img-fluid" />
                <p>{description}</p>
                <a href={url} target="_blank" rel="noopener noreferrer">
                Visita Youtube
            </a>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalVideo;
