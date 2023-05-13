import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer-container">
        <div>
          <a href="https://github.com/abmetheny"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/amy-metheny-8b1177276/"><FaLinkedin /></a>          
          <a href="https://stackoverflow.com/users/21890121/amy"><FaStackOverflow /></a>
        </div>
    </div>
  );
}

export default Footer;