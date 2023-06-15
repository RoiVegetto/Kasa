import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

/**
 * Retourne l'image et le titre de la carte
 * @param {*} param0
 * @returns
 */

function Card({ id, picture, titleText }) {
  return (
    <Link to={`${id}`}>
      <div className="card">
        <img src={picture} alt="cover" />
        <p className="titlecard">{titleText}</p>
      </div>
    </Link>
  );
}

export default Card;
