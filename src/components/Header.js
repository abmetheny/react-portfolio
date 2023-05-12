import React from "react";
import Navigation from './components/Navigation';

function Header() {
  return (
    <div className="header-container">
        <Navigation />
        <div className="banner">
            <h1>Portfolio Header</h1>
        </div>
    </div>
  );
}

export default Header;