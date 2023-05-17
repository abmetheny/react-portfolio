import React from "react";
import Proficiencies from "./Proficiencies";
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaServer } from 'react-icons/fa';
import { TbBrandJavascript } from "react-icons/tb";
import { DiJqueryUiLogo, DiResponsive, DiMysql, DiMongodb } from "react-icons/di";
import { AiOutlineApi } from "react-icons/ai";
import { SiGraphql } from "react-icons/si";
import { Card, Button, Row } from 'antd';

const style = {
  div: {
    display: 'flex', 
    flexWrap: 'wrap', 
    justifyContent: 'space-evenly',
  },
  title: {
    background: '#1d2786', 
    color: '#ffe6eb', 
    fontSize: 'x-large',
    width: '100%',
  },
  card: {
    background: 'lightgray',
    marginTop: '20px',
    display: 'flex',
    flexWrap: 'wrap'
  },
  front: {
    display: 'flex', 
    justifyContent: 'center', 
    margin: '10px 5vw 30px 5vw', 
    textAlign: 'center', 
    fontWeight: 'bold', 
    fontSize: 'max(1.2vw, 12px)'
  }
};

function Resume() {
  return (
    <div className="resume-container">

      <Row style={style.front}>
        <p>As a full-stack web developer, I am proficient in both front- and back-end technologies and frameworks.  See below for an overview, or download my resume for a full list of my working experience.</p>
        <Button type="default" block size={"large"}>
          <a href={require("../assets/resume.pdf")} download="ametheny_resume">Download My Resume</a>
        </Button>
      </Row>


      <Card style={style.card} headStyle={style.title} title="Front-End Proficiencies">
        <div style={style.div} >
          <Proficiencies 
            img={<FaHtml5 />}
            name="HTML"
            desc="Standard markup language for documents designed to be displayed in a web browser."
          />
          <Proficiencies
            img={<FaCss3 />}
            name="CSS"
            desc="Style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML."
          />
          <Proficiencies
            img={<TbBrandJavascript />}
            name="JavaScript"
            desc="Programming language used by 98% of websites for client-side webpage behavior."
          />
          <Proficiencies
            img={<DiJqueryUiLogo />}
            name="jQuery"
            desc="JS framework simplifying HTML DOM tree traversal and manipulation, event handling, CSS animation, and Ajax."
          />
          <Proficiencies
            img={<FaReact />}
            name="React"
            desc="A free and open-source front-end JavaScript library for building user interfaces based on components."
          />
          <Proficiencies
            img={<DiResponsive />}
            name="Responsive Design"
            desc="Architecture frameworks such as Bootstrap, Bulma, and Ant Design."
          />
        </div>
      </Card>

      <Card style={style.card} headStyle={style.title}title="Back-End Proficiencies">
        <div style={style.div} >
          <Proficiencies
            img={<AiOutlineApi />}
            name="REST/APIs"
            desc="Defines how two applications communicate with each other using requests and responses."
          />
          <Proficiencies
            img={<FaNodeJs />}
            name="Node"
            desc="A cross-platform, open-source server environment that executes JS code outside a web browser."
          />
          <Proficiencies
            img={<FaServer />}
            name="Express"
            desc="A back-end web application framework for building RESTful APIs with Node.js."
          />
          <Proficiencies
            img={<DiMysql />}
            name="MySQL/Sequelize"
            desc="An open-source relational database management system."
          />
          <Proficiencies
            img={<DiMongodb />}
            name="MongoDB/Mongoos"
            desc="Classified as NoSQL, a source-available cross-platform document-oriented database program."
          />
          <Proficiencies
            img={<SiGraphql />}
            name="GraphQL"
            desc="An open-source data query and manipulation language for APIs and a query runtime engine."
          />
        </div>
      </Card>
        
    </div>
  );
}

export default Resume;