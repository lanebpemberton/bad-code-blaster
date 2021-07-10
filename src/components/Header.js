import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/Header.css';

import Navigation from './Navigation';

function Header() {
  return (
    <header className="header">
      <h1>LANE <span className="lightWeight">PEMBERTON</span></h1>
      <Navigation/>
    </header>
  );
}

export default Header;
