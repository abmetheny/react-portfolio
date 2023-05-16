import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import { Card } from 'antd';

const style = {
  fontSize: '30px',
  padding: '0 10px',
  color: '#ffe6eb',
};

function Footer() {
  return (
    <div style={{marginTop: '50px'}} className="footer-container">
      <Card
        bordered={false}
        style={{
          width: "100%",
          textAlign: "center",
          background: '#1d2786',
        }}
      >
        <a style={style} href="https://github.com/abmetheny"><FaGithub /></a>
        <a style={style} href="https://www.linkedin.com/in/amy-metheny-8b1177276/"><FaLinkedin /></a>          
        <a style={style} href="https://stackoverflow.com/users/21890121/amy"><FaStackOverflow /></a>
      </Card>
    </div>
  );
}

export default Footer;