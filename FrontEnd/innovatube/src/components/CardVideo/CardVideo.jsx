// CardVideo.js
import React, { useState } from 'react';
import CardDetail from '../CardDetail/CardDetail'; // Asegúrate de que la ruta sea correcta
import "./CardVideo.css";

const CardVideo = ({ video }) => {
    console.log(video);
    const { snippet } = video;
    const titleCard = snippet.title || "Titulo no disponible";
    const descriptionCard = snippet.description|| "Descripción no disponible";
    const imgCard = snippet.thumbnails.medium.url || "URL no disponible";
    const channel = snippet.channelTitle || "Canal no disponible";

    // Estado para manejar la visibilidad del modal
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div className="position-relative">
            <div className="card cardVideoStyle" style={{ width: "20rem", height: "24rem", margin: "10px" }}>
                <img src={imgCard} className="card-img-top" alt={descriptionCard} />
                <div className="card-body">
                    <p className='card-text'>{channel}</p>
                    <p className="card-text">{titleCard}</p>
                </div>
                <button className="btn btn-light position-absolute" style={{ top: "10px", right: "10px" }}>
                    <i className="bi bi-heart" style={{ fontSize: "1rem", color: "red" }}></i>
                </button>
                <div className='btnDetails'>
                    <button className="btn btn-primary" style={{bottom: "10px", left: "10px" }} onClick={handleShow}>
                        Ver Más
                    </button>
                </div>

            </div>

            {/* Modal */}
            <CardDetail show={showModal} handleClose={handleClose} video={video} />
        </div>
    );
}

export default CardVideo;
