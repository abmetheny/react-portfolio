import React from "react";
import Project from "./Project";
import { Divider, Row } from 'antd';

function Portfolio() {
  return (
    <div className="portfolio-container">
      <p>A sample of projects completed over the last few months.  For a full list of projects and repositories, visit my <a href="https://github.com/abmetheny">GitHub</a> page.</p>

      <div className="project-container">
        <Divider orientation="left">Collaborative Projects</Divider>
        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
          <Project 
            name="Trip Planning of the Future"
            href="https://abmetheny.github.io/trip-planning-of-the-future/"
            src={require("../images/work-3.png")}
            alt="Space travel planning app screenshot"
            deployed="#"
          />
          <Project 
            name="Scentimental"
            href="https://github.com/RyanEbanks/scent-imental"
            src={require("../images/work-4.png")}
            alt="Scentimental app screenshot"
            deployed="#"
          />
        </Row>

        <Divider orientation="left">Full Stack Projects</Divider>
        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
          <Project 
            name="CMS Tech Blog"
            href="https://github.com/abmetheny/cms-tech-blog"
            src={require("../images/tech-blog.png")}
            alt="CMS Tech Blog screenshot"
            deployed="#"
          />
          <Project 
            name="Note Taker App"
            href="https://github.com/abmetheny/note-taker-app"
            src={require("../images/note-taker.jpg")}
            alt="Note Taker app screenshot"
            deployed="#"
          />
        </Row>
        
        <Divider orientation="left">Back End Projects</Divider>
        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
          <Project 
            name="Social Media Network API"
            href="https://github.com/abmetheny/social-network-api"
            src={require("../images/social-network.png")}
            alt="Social Network app API screenshot"
            deployed="#"
          />
          <Project 
            name="Ecommerce API"
            href="https://github.com/abmetheny/ecommerce_back_end"
            src={require("../images/ecommerce.png")}
            alt="Ecommerce app API screenshot"
            deployed="#"
          />
        </Row>
      </div>

    </div>
  );
}

export default Portfolio;