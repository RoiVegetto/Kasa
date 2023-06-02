import React from 'react';
import './Carrousel.css';

/**
 * Le Carrousel retourne un défilé d'image(s)
 * @param {*} props 
 * @returns 
 */

function Carrousel(props) {
    return (
        <img src={props.ih1} className="carrousel" alt="Carrousel" />
    )
}

export default Carrousel;
