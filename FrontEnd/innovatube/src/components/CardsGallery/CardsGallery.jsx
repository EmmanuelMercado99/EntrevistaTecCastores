
import React from "react";
import CardVideo from "../CardVideo/CardVideo"; 
import data from "../../data/data"; 
import { useSelector } from "react-redux";
import { setVideos } from '../../redux/slices/videoSlices'; 


const CardsGallery = () => {
    const data = useSelector(state => state.videoData.videos)

    return (
        <div className="d-flex flex-wrap" style={{ justifyContent: "center" }}>
            {data.length === 0? (
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <p>¿Cual será tú búsqueda de hoy? 👀✨</p>
                </div>
                
            ) : (
                data.data.map((video, index) => {
                    return <CardVideo key={index} video={video} />;
                })
                    
                )
            }
        </div>
    );
};

export default CardsGallery ;