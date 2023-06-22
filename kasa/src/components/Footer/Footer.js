import React from 'react';
import './Footer.css';

/**
 * Error404 renvoi la page d'erreur
 * @param {*} props
 * @returns
 */

function Footer(props) {
  return (
    <footer className="footer">
      <img src={props.url} className="logo-footer" alt="Logo footer" />
      <p>{props.p}</p>
    </footer>
  );
}

export default Footer;
