import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import profilePhoto from "../../images/profile-pic.jpg";
const About = () => {
  return (
    <section className="page-block">
      <Container>
        <div className="text-center">
          <h2>About me</h2>
        </div>
        <Row className="justify-content-md-center">
          <Col xs lg="8">
            <div className="text-center">
              <img src={profilePhoto} alt="" />
              <h2 className="mt-4">Abdur Rahman</h2>
            </div>
            <p>
              I want to be a frontend developer who have good knowledge UI/UX.{" "}
            </p>

            <p>
              If i explain my work process how i am trying to achieve my goal -{" "}
            </p>
            <p>
              I am working as a UI/UX design at one of the renowned company in
              Bangladesh. As a UX designer i have to work for different project
              and which is build with different technology. Sometime i feel
              that, if i have good knowledge into frontend technology then i can
              make it more attractive. and it will be more user fiendly.{" "}
            </p>
            <p>
              To become a good frontend developer i have focused on Javascript
              and i am learning new this daily after office time.
            </p>

            <p>
              After learning some new this i want to build a new project based
              on my new learning language and method. In to this process i can
              feel my weekness and then i try to recover this weekness{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
