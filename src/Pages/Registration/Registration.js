import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
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
      const [updateProfile] = useUpdateProfile(auth);
    const submitRegistration = async (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password =event.target.password.value;
         
        await  createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name}); 
    }
    if (user) {
        return (
          <div>
            <p>Registered User: {user?.user}</p>
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
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" name="name" placeholder="Enter name" required /> 
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" required /> 
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required />
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}
              <Button className="w-100" variant="primary" type="submit">
                Submit
              </Button>
              <p className="my-4">Already Have account <Link to='/login'>Login Now.</Link></p>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Registration;
