import React from "react";
import Navigation from './Navigation';

function Header(props) {
  return (
    <div className="header-container">
        <Navigation />
        <div className="banner">
            <h1>Portfolio Header {props.taco}</h1>
        </div>
    </div>
  );
}

export default Header;