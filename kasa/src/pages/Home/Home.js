import React, { useEffect, useState } from 'react';
import Title from '../../components/Title/Title';
import SectionCards from '../../components/SectionCards/SectionCards';
import Footer from '../../components/Footer/Footer';

function Home() {
  const [data, setData] = useState([]);
  const [titleText] = useState('Chez vous, partout et ailleurs');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/kasa.json');
        const jsonData = await response.json();
        const transformedData = jsonData.map((item) => ({
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
    <>
      <main>
        <Title picture="/images/acceuilKasa.png" titleText={titleText} />
        <SectionCards data={data} />
      </main>
      <Footer
        url="/images/logoKasaFooter.png"
        p="© 2020 Kasa. All rights reserved"
      />
    </>
  );
}

export default Home;
