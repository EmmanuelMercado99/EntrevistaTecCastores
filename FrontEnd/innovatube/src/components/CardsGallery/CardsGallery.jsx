
import React from "react";
import CardVideo from "../CardVideo/CardVideo"; 
import data from "../../data/data"; 


const CardsGallery = () => {
    return (
        <div className="d-flex flex-wrap" style={{justifyContent:"center"}}>
            {data.data.map((video, index) => (
                <CardVideo key={index} video={video} />
            ))}
        </div>
    );
};

export default CardsGallery ;