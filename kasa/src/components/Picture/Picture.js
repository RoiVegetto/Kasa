import React from 'react';
import './Picture.css';

function Picture(props) {
  return (
    <img src={props.montagne} className="montagne" alt="Photo_de_montagne" />
  );
}

export default Picture;
