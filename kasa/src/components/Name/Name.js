import React from 'react';
import './Name.css';

function Name({ hostName, hostPicture }) {
  return (
    <div className="name-picture">
      <p className="name">{hostName}</p>
      <img src={hostPicture} className="picture" alt="Host" />
    </div>
  );
}

export default Name;