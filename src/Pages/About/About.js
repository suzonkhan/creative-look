import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <section className="page-block">
      <Container>
        <div>
          <h2>About</h2>
        </div>
        <Row className="justify-content-md-center">
          <Col xs lg="4"></Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
