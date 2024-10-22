// CardVideo.js
import React, { useState } from 'react';
import CardDetail from '../CardDetail/CardDetail'; // Asegúrate de que la ruta sea correcta
import "./CardVideo.css";
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/slices/favoritesSlices';

const CardVideo = ({ video }) => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites.favorites);
    const isFavorite = favorites.some(fav => fav.id.videoId === video.id.videoId);


    const { snippet } = video;
    const titleCard = snippet.title || "Titulo no disponible";
    const descriptionCard = snippet.description || "Descripción no disponible";
    const imgCard = snippet.thumbnails.medium.url || "URL no disponible";
    const channel = snippet.channelTitle || "Canal no disponible";

    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleFavoriteClick = () => {

        if (isFavorite) {
            dispatch(removeFavorite(video)); // Elimina de favoritos
        } else {
            dispatch(addFavorite(video)); // Agrega a favoritos
        }
    };

    return (
        <div className="position-relative">
            <div className="card cardVideoStyle" style={{ width: "20rem", height: "24rem", margin: "10px" }}>
                <img src={imgCard} className="card-img-top" alt={descriptionCard} />
                <div className="card-body">
                    <p className='card-text'>{channel}</p>
                    <p className="card-text">{titleCard}</p>
                </div>
                <button className="btn btn-light position-absolute" style={{ top: "10px", right: "10px" }} onClick={handleFavoriteClick}>
                    {!isFavorite?  <i className="bi bi-heart" style={{ fontSize: "1rem", color: "red" }}></i>
                    :<i className="bi bi-heart-fill" style={{ fontSize: "1rem", color: "red" }}></i>}
                   
                </button>
                <div className='btnDetails'>
                    <button className="btn btn-primary" style={{ bottom: "10px", left: "10px" }} onClick={handleShow}>
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
