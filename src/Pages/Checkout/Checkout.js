import React, { useEffect } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import useServices from '../../hooks/useServices';
const Checkout = () => {
  let params = useParams();
  const currentServiceId = params.serviceId;

 

  const submitBooking = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
  
  
  };

    return (
        <section className="page-block">
        <Container>
          <div className="text-center">
            {/* <h1>You are booking - {currentServiceId}</h1> */}
            <h2>Continue your checkout/Booking</h2>
          </div>
          <Row className="justify-content-md-center">
          <Col xs lg="4">
            <Form onSubmit={submitBooking}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>

              <Button className="w-100" variant="primary" type="submit">
                Submit
              </Button>
             

              
            </Form>
          </Col>
        </Row>
        </Container>
      </section>
    );
};

export default Checkout;