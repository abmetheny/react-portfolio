import React from "react";
import Navigation from './Navigation';
import { Col, Row } from 'antd';

const style = {
  row: {
    align: 'middle',
    padding: '10px',
    marginTop: '5px',
    background: 'lightblue',
  },
  col: {
    fontSize: '50px',
    margin: "0 0 0 20px",
    color: 'white',
  },
};

function Header() {
  return (
    <div className="header-container">
        <Navigation />
        <div className="banner">
          <Row style={style.row} className="gutter-row">
            <Col flex="75px"><img style={{width: '100%'}} src={require("../images/logo.png")} alt="Profile"></img>
            </Col>
            <Col flex="auto">
              <h1 style={style.col}>Amy Metheny</h1>
            </Col>
          </Row>
        </div>
    </div>
  );
}

export default Header;