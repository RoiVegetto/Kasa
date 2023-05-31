import React from 'react';
import './Navigation.css';
import { useLocation, useNavigate } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <nav className="navbar">
      <p
        className={`nav-link ${location.pathname === '/' ? 'active-link' : ''}`}
        onClick={() => handleClick('/')}
      >
        Accueil
      </p>
      <p
        className={`nav-link ${
          location.pathname === '/about' ? 'active-link' : ''
        } about`}
        onClick={() => handleClick('/about')}
      >
        A propos
      </p>
    </nav>
  );
}

export default Navigation;
