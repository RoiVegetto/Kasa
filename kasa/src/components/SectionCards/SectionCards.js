import React from 'react';
import './SectionCards.css';
import Card from '../Card/Card';

/**
 * Création de la section des cartes
 * data.map va gérer l'import des éléments (id, photo, titre)
 * @param {*} param0 
 * @returns 
 */

function SectionCards({ data }) {
  return (
    <section className="sectioncards">
      {data.map((item) => (
        <Card key={item.id} id={item.id} picture={item.cover} titleText={item.title} />
      ))}
    </section>
  );
}

export default SectionCards;