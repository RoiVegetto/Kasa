import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../Hook/fetchData';

import './Accomodation.css';

import Carrousel from '../../components/Carrousel/Carrousel';
import TitleBtn from '../../components/Collapse/Collapse';
import Name from '../../components/Name/Name';
import Destination from '../../components/Destination/Destination';
import Tag from '../../components/Tag/Tag';
import Star from '../../components/Star/Star';
import Footer from '../../components/Footer/Footer';

function Accomodation() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData(id).then((data) => setData(data));
  }, [id]);

  return data && data.host ? (
    <>
      <main>
        <Carrousel images={data.pictures} />
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
      <Footer
        url="/images/logoKasaFooter.png"
        p="© 2020 Kasa. All rights reserved"
      />
    </>
  ) : (
    <p>Chargement...</p>
  );
}

export default Accomodation;
