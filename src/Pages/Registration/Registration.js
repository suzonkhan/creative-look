import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";

const Registration = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const submitRegistration = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password =event.target.password.value;
         
        createUserWithEmailAndPassword(email, password);
    }
    if (user) {
        return (
          <div>
            <p>Registered User: {user.user.email}</p>
          </div>
        );
      }
  return (
    <section className="page-block">
      <Container>
        <div>
          <h2>Reg</h2>
        </div>
        <Row className="justify-content-md-center">
          <Col xs lg="4">
            <Form onSubmit={submitRegistration}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" />
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}
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

export default Registration;
