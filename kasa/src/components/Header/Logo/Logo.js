import React from 'react';
import './Logo.css';

function Logo(props) {
  return <img src={props.url} className="logo" alt="Logo" />;
}

export default Logo;
