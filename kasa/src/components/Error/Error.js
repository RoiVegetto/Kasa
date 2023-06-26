import React from 'react';
import './Error.css';
import { Link } from 'react-router-dom';

/**
 * Error404 renvoi la page d'erreur
 * @param {*} props
 * @returns
 */

function Error404(props) {
  return (
    <section className="error-section">
      <h1>{props.h1}</h1>
      <p className="description-error">{props.p}</p>
      <p className="return">
        <Link to="/">{props.href}</Link>
      </p>
    </section>
  );
}

export default Error404;
