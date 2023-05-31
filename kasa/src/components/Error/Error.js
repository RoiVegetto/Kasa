import React from 'react';
import './Error.css';
import { Link } from 'react-router-dom';

function Error404(props) {
  return (
    <section className="error-section">
      <h1>{props.h1}</h1>
      <p>{props.p}</p>
      <p><Link to="/">{props.href}</Link></p>
    </section>
  );
}

export default Error404;
