import React from 'react';
import Carrousel from './Carrousel';

const Featured = () => {
    return(
        <div className="featured_container">
            <Carrousel/>
            <div className="artist_name">
                <div className="wrapper">
                    Ariana Grande
                </div>
            </div>
        </div>
    )
}

export default Featured;