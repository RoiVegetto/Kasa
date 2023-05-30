import React from 'react';
import Logo from './components/Header/Logo/Logo';
import Navigation from './components/Header/Navigation/Navigation';
// import Home from './pages/Home/Home';
import Accomodation from './pages/Accommodation/Accomodation';
// import Error from './pages/Error/Error';
//import About from './pages/About/About';

import './App.css';
import './components/Header/header.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <Logo url="/images/logoKasa.png" />
          <Navigation />
        </div>
      </header>
      <Accomodation />

    </div>
  );
}

export default App;
