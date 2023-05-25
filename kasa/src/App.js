import React from 'react';
import './App.css';
import './Header/header.css';
import Title from './Title/Title';
import Logo from './Header/Logo/Logo';
import Navigation from './Header/Navigation/Navigation';
import SectionCards from './SectionCards/SectionCards';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <Logo />
          <Navigation />
        </div>
      </header>
      <Title />
      <SectionCards />
    </div>
  );
}

export default App;
