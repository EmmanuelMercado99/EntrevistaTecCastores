
import React from "react";
import CardVideo from "../CardVideo/CardVideo"; 
import data from "../../data/data"; 
import { useSelector } from "react-redux";


const CardsGallery = () => {
    const data = useSelector(state => state.videoData.videos)
    console.log(data);

    return (
        <div className="d-flex flex-wrap" style={{ justifyContent: "center" }}>
            {data.data.lenght === 0? (
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <p>¿Cual será tú búsqueda de hoy? 👀✨</p>
                </div>
                
            ) : (
                data.data.map((video, index) => {
                    console.log(index); // Agrega esta línea
                    return <CardVideo key={index} video={video} />;
                })
                    
                )
            }
        </div>
    );
};

export default CardsGallery ;