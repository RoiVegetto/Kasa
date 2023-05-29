import React from 'react';
import '../../App.css';
import Title from '../../components/Title/Title';
import SectionCards from '../../components/SectionCards/SectionCards';

import '../../components/Header/header.css'

function Home() {
  return (
    <main>
      <Title
        ih1="/images/acceuilKasa.png"
        titleText="Chez vous, partout et ailleurs"
      />
      <SectionCards />
    </main>
  );
}

export default Home;
