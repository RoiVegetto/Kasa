import React from 'react';
import './Title.css';

function Title(props) {
  return (
    <div className="containerh1">
      <img src={props.ih1} className="imageh1" alt="Fond_d'écran" />
      <h1>{props.titleText}</h1>
    </div>
  );
}

export default Title;
