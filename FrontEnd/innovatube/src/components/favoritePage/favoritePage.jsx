import React from 'react';
import { useSelector } from 'react-redux';
import CardVideo from '../CardVideo/CardVideo';
import Navbar from '../Navbar/Navbar';
import PageNotFound from '../PageNotFound/PageNotFound';

const FavoritePage = () => {
    const valueLogin = useSelector((state) => state.loginSession.login)
    const favorites = useSelector(state => state.favorites.favorites);


    return (
        <div>
            {valueLogin ? (<div>
                <div>
                    <Navbar></Navbar>
                </div>
                <div style={{ paddingTop: "7%" }}>
                    <div className="d-flex flex-wrap" style={{ justifyContent: "center" }}>
                        {favorites.length === 0 ? (
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <p>No tienes favoritos todavía. ¡Agrega algunos! ❤️</p>
                            </div>
                        ) : (
                            favorites.map((video, index) => (
                                <CardVideo key={index} video={video} />
                            ))
                        )}
                    </div>
                </div>
            </div>) :
                <div>
                    <PageNotFound></PageNotFound>
                </div>
            }


        </div>


    );
};

export default FavoritePage;