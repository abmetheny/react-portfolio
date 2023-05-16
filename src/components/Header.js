import React from "react";
import Navigation from './Navigation';
import { Col, Row } from 'antd';

const style = {
  logo: {
    height: '50px',
    width: 'auto',
  },
  row: {
    width: '100%'
  },
};

function Header() {
  return (
    <div className="header-container">
      <Row wrap="false" className="gutter-row">
        {/* <Col flex="auto"> */}
          {/* <img style={style.logo} src={require("../images/logo.png")} alt="Profile"></img> */}
          <Navigation />
        {/* </Col> */}
      </Row>
        {/* <div className="banner">
          <Row style={style.row} className="gutter-row">
            <Col flex="75px"><img style={{width: '100%'}} src={require("../images/logo.png")} alt="Profile"></img>
            </Col>
            <Col flex="auto">
              <h1 style={style.col}>Amy Metheny</h1>
            </Col>
          </Row>
        </div> */}
    </div>
  );
}

export default Header;