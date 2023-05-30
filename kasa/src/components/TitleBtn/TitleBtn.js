import React from 'react';
import './TitleBtn.css';

function TitleBtn(props) {
  return (
    <div className="titleBtn">
      <p>{props.titleBtn}</p>
      <svg
        id="ingredientArrow"
        className="arrow"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </div>
  );
}

export default TitleBtn;
