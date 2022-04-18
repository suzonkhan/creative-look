import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const NotFound = () => {
    return (
        <section className="page-block">
        <Container>
          <div className="text-center">
            <h2>Not Found</h2>
          </div>
          <Row className="justify-content-md-center">
            <Col xs lg="8">
              <p></p>
            </Col>
          </Row>
        </Container>
      </section>
    );
};

export default NotFound;