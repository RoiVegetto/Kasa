import React from 'react';
import Logo from './components/Header/Logo/Logo';
import Navigation from './components/Header/Navigation/Navigation';
import Home from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <Logo url="/images/logoKasa.png" />
          <Navigation />
        </div>
      </header>
      <Home />
    </div>
  );
}

export default App;
