import React from 'react';

import './Accomodation.css';
import Carrousel from '../../components/Carrousel/Carrousel';
import Information from '../../components/Information/Information';
import TitleBtn from '../../components/TitleBtn/TitleBtn';

function Accomodation() {
  return (
    <main>
      <Carrousel ih1="/images/acceuilKasa.png" />
      <Information stars="/images/étoile.png" ih1="/images/acceuilKasa.png" />
      <div className="titleBtns">
        <TitleBtn titleBtn="Description" />
        <TitleBtn titleBtn="Équipements" />
      </div>
    </main>
  );
}

export default Accomodation;
