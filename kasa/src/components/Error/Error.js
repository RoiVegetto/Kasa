import React from 'react';
import './Error.css';

function Error404(props) {
  return (
    <section className="error-section">
      <h1>{props.h1}</h1>
      <p>{props.p}</p>
      <a href="http://localhost:3000/Home">{props.href}</a>
    </section>
  );
}

export default Error404;
