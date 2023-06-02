import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './Accomodation.css';
import Carrousel from '../../components/Carrousel/Carrousel';

import TitleBtn from '../../components/TitleBtn/TitleBtn';
import Name from '../../components/Name/Name';
import Destination from '../../components/Destination/Destination';
import Tag from '../../components/Tag/Tag';
import Star from '../../components/Star/Star';

function Accomodation() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/kasa.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        const accommodation = jsonData.find((item) => item.id === id);
        setData(accommodation);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchData();
  }, [id]);

  return data && data.host ? (
    <main>
      <Carrousel ih1={data.cover} />
      <section className="information">
        <div className="first-bloc">
          <div>
            <Destination title={data.title} location={data.location} />
            <Tag tags={data.tags} />
          </div>
        </div>
        <div className="second-bloc">
          <Name hostName={data.host.name} hostPicture={data.host.picture} />
          <Star rating={Number(data.rating)} />
        </div>
      </section>
      <div className="titleBtns">
        <TitleBtn titleBtn="Description" content={data.description} />
        <TitleBtn titleBtn="Équipements" content={data.equipments} />
      </div>
    </main>
  ) : (
    <p>Chargement...</p>
  );
}

export default Accomodation;
