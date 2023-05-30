import React from 'react';
import Title from '../../components/Title/Title';
import SectionCards from '../../components/SectionCards/SectionCards';

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
