import React from 'react';
import './Information.css';

function Information(props) {
  return (
    <section className="information">
      <div className="first-bloc">
        <div>
          <h1 className="title">Cozy loft on the Canal Saint-Martin</h1>
          <p className="location">Paris, Île-de-France</p>
          <p className="tag">Cozy</p>
        </div>
      </div>
      <div className="second-bloc">
        <div className="name-picture">
          <p className="name">Alexandre Dumas</p>
          <img src={props.ih1} className="picture" alt="Carrousel" />
        </div>
        <div className="stars">
          <img src={props.stars} className="star" alt="Étoiles" />
          <img src={props.stars} className="star" alt="Étoiles" />
          <img src={props.stars} className="star" alt="Étoiles" />
          <img src={props.stars} className="star" alt="Étoiles" />
          <img src={props.stars} className="star" alt="Étoiles" />
        </div>
      </div>
    </section>
  );
}

export default Information;
