import React from "react";
import Navigation from './Navigation';
import { Row } from 'antd';

//Populates the page header
function Header() {
  return (
    <div className="header-container">
      <Row wrap="false" className="gutter-row">
          <Navigation />
      </Row>
    </div>
  );
}

export default Header;