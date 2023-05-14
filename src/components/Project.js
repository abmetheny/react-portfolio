import React from "react";
import { Col, Divider, Row } from 'antd';

const style = {
  padding: '8px 0',
  margin: '10px 10px',
};

function Project(props) {
  return (
      <Col className="gutter-row" sm={24} md={12}>
            <div style={style}>
              <a href={props.href}>
                <img style={{width: '100%'}} src={props.src} alt={props.alt}></img>
              </a>
            </div>
          </Col>
  );
}

export default Project;