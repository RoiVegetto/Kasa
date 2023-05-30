import React from 'react';

import './About.css';
import Picture from '../../components/Picture/Picture';
import TitleBtn from '../../components/TitleBtn/TitleBtn';

function About() {
  return (
    <main>
      <Picture montagne="/images/montagne.png" />
      <section className='sectionTitleBtn'>
        <TitleBtn titleBtn="Fiabilité" />
        <TitleBtn titleBtn="Respect" />
        <TitleBtn titleBtn="Service" />
        <TitleBtn titleBtn="Sécurité" />
      </section>
    </main>
  );
}

export default About;
