import React from "react";
import { Card, Col, Row, Button } from 'antd';

const style = {
  width: '100%', 
  height: '100%', 
};

//Returns About section
function About() {
  return (
    <div style={{marginTop: '50px'}} className="about-container">
        <Row gutter={[16, 16]}>
          <Col className="gutter-row" xs={24} md={8}>
          <img style={{width: '100%'}} src={require("../images/profile-pic2.jpg")} alt="Profile"></img>
          </Col>
          <Col className="gutter-row" xs={24} md={16}>
          <Card style={style}>
            <p style={{fontSize: '1.5vw', marginBottom: '0', color:'lightgray'}}>Full Stack Web Developer</p>
            <h1 style={{fontSize: '3vw', marginTop: '0'}}>Amy Metheny</h1>
            <p style={{fontSize: 'max(1.25vw, 12px)'}} >I have worked with and around software development teams in various supporting roles for almost a decade.  Now, I am transitioning into becoming a software developer myself!  Already well-versed in eingineering terminology and Agile principles and workflow, the next step was completing a rigorous, immersive certification program: the 24-week Full Stack Web Development bootcamp through the prestigious Rutger's University.  These new skills, combined with my previous experience, have fully prepared me to take on clients as a web developer.</p>
            <Button style={{marginTop: '15px'}} type="primary" shape="round" size={"large"}>
            <a href={require("../assets/resume.pdf")} download="ametheny_resume">Download CV</a>
            </Button>
          </Card>
  
          </Col>
        </Row>
    </div>
  );
}

export default About;