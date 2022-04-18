import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useAuthState, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Authentication from "../../Authentication/Authentication";
import auth from "../../firebase.init";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
     
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
    if (user) {
        navigate(from, { replace: true });
    }
  const submitLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(email, password);
  };
  return (
    <section className="page-block">
      <Container>
        <div>
          <h2>Login</h2>
        </div>
        <Row className="justify-content-md-center">
          <Col xs lg="4">
            <Form onSubmit={submitLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
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
              <p className="my-4">Don't have account <Link to='/registration'>Register Now.</Link></p>
            </Form>
          </Col>
          
        </Row>
        <Row  className="justify-content-md-center mt-3">
        <Col xs lg="4">
              <Authentication></Authentication>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
