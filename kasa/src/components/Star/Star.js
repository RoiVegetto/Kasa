import React from 'react';
import './Star.css';

function Star({ rating }) {
  // Créer un tableau de taille 5 rempli de false
  let stars = new Array(5).fill(false);

  // Remplacer les premières 'rating' valeurs par true
  for(let i = 0; i < rating; i++) {
    stars[i] = true;
  }

  return (
    <div className="stars">
      {
        stars.map((isFilled, index) => (
          <img
            key={index}
            src={isFilled ? "/images/filledStar.png" : "/images/emptyStar.png"}
            className="star"
            alt="Étoile"
          />
        ))
      }
    </div>
  );
}

export default Star;