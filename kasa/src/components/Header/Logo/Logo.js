import React from 'react';
import './Logo.css';

/**
 * Logo envoi l'image du logo
 * @param {*} props 
 * @returns 
 */

function Logo(props) {
  return <img src={props.url} className="logo" alt="Logo" />;
}

export default Logo;
