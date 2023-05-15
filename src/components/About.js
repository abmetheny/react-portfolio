import React from "react";
import { Card, Col, Row } from 'antd';

function About() {
  return (
    <div className="about-container">
      <Card
        title="About Me"
        bordered={false}
        style={{
          width: '100%',
        }}
      >
        <Row gutter={[16, 16]}>
          <Col className="gutter-row" xs={24} md={8}>
          <img style={{width: '100%'}} src={require("../images/self.jpg")} alt="Profile"></img>
          </Col>
          <Col style={{fontSize: '2vw'}} className="gutter-row" xs={24} md={16}>My name is Amy Metheny.  I have worked with and around software development teams in various supporting roles for almost a decade.  Now, I am transitioning into becoming a software developer myself!  Already well-versed in eingineering terminology and Agile principles and workflow, the next step was completing a rigorous, immersive certification program: the 24-week Full Stack Web Development bootcamp through the prestigious Rutger's University.  These new skills, combined with my previous experience, have fully prepared me to take on clients as a web developer.</Col>
        </Row>
      </Card>
    </div>
  );
}

export default About;