import React from 'react';
import './Navigation.css';

function Navigation() {
    return (
        <nav className='navbar'>
            <a href="/" className='home'>Accueil</a>
            <a href="/about" className='about'>A propos</a>
        </nav>
    );
}

export default Navigation;
