import React from 'react';
import './Tag.css';

/**
 * Ici on retourne les tag, map sert a faire un tag par tag du tableau
 * Et key sert a actualiser la page seulement avec les élément key qui ont besoin d'être changé
 * @param {*} param0 
 * @returns 
 */

function Tag({ tags }) {
  return (
    <div className="tagContainer">
      {tags.map((tag, index) => (
        <p key={index} className="tag">
          {tag}
        </p>
      ))}
    </div>
  );
}

export default Tag;
