import React from 'react';
import './Destination.css';

function Destination({ title, location }) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <p className="location">{location}</p>
    </>
  );
}

export default Destination;
