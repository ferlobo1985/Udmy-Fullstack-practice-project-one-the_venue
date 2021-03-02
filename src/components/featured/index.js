import React from 'react';
import Carrousel from './Carrousel';
import TimeUntil from './timeUntil';

const Featured = () => {
    return(
        <div className="featured_container">
            <Carrousel/>
            <div className="artist_name">
                <div className="wrapper">
                    Ariana Grande
                </div>
            </div>
            <TimeUntil/>
        </div>
    )
}

export default Featured;