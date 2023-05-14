import React from "react";
import Project from "./Project";
import { Divider, Row } from 'antd';

function Portfolio() {
  return (
    <div className="portfolio-container">
        <h1>Here is a list of my current projects.</h1>

        <div className="project-container">
          <Divider orientation="left">Collaborative Projects</Divider>
          <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
            <Project 
              href="https://abmetheny.github.io/trip-planning-of-the-future/"
              src={require("../images/work-3.png")}
              alt="Space travel planning app screenshot"
            />
            <Project 
              href="https://github.com/RyanEbanks/scent-imental"
              src={require("../images/work-4.png")}
              alt="Scentimental app screenshot"
            />
          </Row>

          <Divider orientation="left">Full Stack Projects</Divider>
          <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
            <Project 
              href="https://github.com/abmetheny/cms-tech-blog"
              src={require("../images/tech-blog.png")}
              alt="CMS Tech Blog screenshot"
            />
            <Project 
              href="https://github.com/abmetheny/note-taker-app"
              src={require("../images/note-taker.jpg")}
              alt="Note Taker app screenshot"
            />
          </Row>
          
          <Divider orientation="left">Back End Projects</Divider>
          <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
            <Project 
              href="https://github.com/abmetheny/social-network-api"
              src={require("../images/social-network.png")}
              alt="Social Network app API screenshot"
            />
            <Project 
              href="https://github.com/abmetheny/ecommerce_back_end"
              src={require("../images/ecommerce.png")}
              alt="Ecommerce app API screenshot"
            />
          </Row>
        </div>

    </div>
  );
}

export default Portfolio;