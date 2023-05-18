import React from "react";
import { FaGithub } from 'react-icons/fa';
import { Col, Popover } from 'antd';

const style = {
  padding: '8px 0',
  margin: '10px 10px',
};

//Individual projects that populate the Portfolio page
function Project(props) {
  const content = (
    <div>
      <a href={props.href}><FaGithub /> {props.name}</a>
    </div>
  )
  return (
      <Col className="gutter-row" sm={24} md={12}>
        <Popover content={content} title="Click here to view the GitHub repo for this project:">
        <div style={style}>
          <a href={props.deployed}>
            <img style={{width: '100%'}} src={props.src} alt={props.alt}></img>
          </a>
        </div>
        </Popover>
      </Col>
  );
}

export default Project;