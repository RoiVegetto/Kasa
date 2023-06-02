import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

/**
 * La navbar est composée de deux mot, Acceuil et A propos
 * isActive sert a savoir si l'on se trouve sur l'une de ses pages pour souligner le mot en question
 * @returns 
 */

function Navigation() {
  return (
    <nav className="navbar">
      <NavLink
        className={({ isActive }) =>
          isActive ? 'nav-link active-link' : 'nav-link'
        }
        to="/"
      >
        Accueil
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'nav-link active-link' : 'nav-link'
        }
        to="/about"
      >
        A propos
      </NavLink>
    </nav>
  );
}

export default Navigation;
