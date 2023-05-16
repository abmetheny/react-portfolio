import React from "react";
import { Card, Col, Row } from 'antd';

function About() {
  return (
    <div style={{marginTop: '50px'}} className="about-container">
        <Row gutter={[16, 16]}>
          <Col className="gutter-row" s={24} md={8}>
          <img style={{width: '100%'}} src={require("../images/profile-pic2.jpg")} alt="Profile"></img>
          </Col>
          <Col className="gutter-row" xs={24} md={16}>
          <Card style={{ width: '100%', height: '100%', alignItems: 'center' }}>
            <p style={{fontSize: '1.5vw', marginBottom: '0'}}>Full Stack Web Developer</p>
            <h1 style={{fontSize: '3vw', marginTop: '0'}}>Amy Metheny</h1>
            <p style={{fontSize: '1.25vw'}} >I have worked with and around software development teams in various supporting roles for almost a decade.  Now, I am transitioning into becoming a software developer myself!  Already well-versed in eingineering terminology and Agile principles and workflow, the next step was completing a rigorous, immersive certification program: the 24-week Full Stack Web Development bootcamp through the prestigious Rutger's University.  These new skills, combined with my previous experience, have fully prepared me to take on clients as a web developer.</p>
          </Card>
  
          </Col>
        </Row>
    </div>
  );
}

export default About;