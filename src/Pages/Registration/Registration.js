import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Registration = () => {
  const [status, setStatus] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
  const submitRegistration = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };
  if (error) {
    return (
      <div>
        <p className="text-center">Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p className="text-center"> Loading...</p>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <section className="page-block">
      <Container>
        <div>
          <h2>Registration</h2>
        </div>
        <Row className="justify-content-md-center">
          <Col xs lg="4">
            <Form onSubmit={submitRegistration}>
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
              {status ? <p>{status}</p> : <p></p>}

              <p className="my-4">
                Already Have account <Link to="/login">Login Now.</Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Registration;
