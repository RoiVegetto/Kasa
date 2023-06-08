import React, { useEffect, useState } from 'react';
import Title from '../../components/Title/Title';
import SectionCards from '../../components/SectionCards/SectionCards';

function Home() {
  const [data, setData] = useState([]);
  const [titleText, setTitleText] = useState('Chez vous, partout et ailleurs');

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

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
      if (window.innerWidth <= 700) {
        setTitleText(
          <>
            <span>Chez vous,</span>
            <br />
            <span>partout et ailleurs</span>
          </>
        );
      } else {
        setTitleText('Chez vous, partout et ailleurs');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main>
      <Title picture="/images/acceuilKasa.png" titleText={titleText} />
      <SectionCards data={data} />
    </main>
  );
}

export default Home;
