import React, { useState } from 'react';
import './TitleBtn.css';

function TitleBtn({ titleBtn, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`titleBtn ${isOpen ? 'open' : ''}`} onClick={handleClick}>
      <div className="titleBtnContainer">
        <p className="titleCollapse">{titleBtn}</p>
        <svg
          id="ingredientArrow"
          className={`arrow ${isOpen ? 'rotate' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </div>

      <div className="content">
        {Array.isArray(content) ? (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}

export default TitleBtn;
