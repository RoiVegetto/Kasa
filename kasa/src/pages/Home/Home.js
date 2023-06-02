import React, { useEffect, useState } from 'react';
import Title from '../../components/Title/Title';
import SectionCards from '../../components/SectionCards/SectionCards';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/kasa.json');
        const jsonData = await response.json();
        const transformedData = jsonData.map(item => ({
          id: item.id,
          title: item.title,
          cover: item.cover,
        }));
        setData(transformedData);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <Title
        picture="/images/acceuilKasa.png"
        titleText="Chez vous, partout et ailleurs"
      />
      <SectionCards data={data} />
    </main>
  );
}

export default Home;
