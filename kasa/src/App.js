import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logo from './components/Header/Logo/Logo';
import Navigation from './components/Header/Navigation/Navigation';
import Home from './pages/Home/Home';
import Accomodation from './pages/Accommodation/Accomodation';
import Error from './pages/Error/Error';
import About from './pages/About/About';

import './App.css';
import './components/Header/header.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <div className="header">
            <Logo url="/images/logoKasa.png" />
            <Navigation />
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accomodation/:id" element={<Accomodation />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
