import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Blog = () => {
  return (
    <section className="page-block">
      <Container>
        <div className="text-center">
          <h2>Blog</h2>
        </div>
        <Row className="justify-content-md-center">
          <Col xs lg="8">
            <h2>1 Difference between authorization and authentication</h2>
            <p>Ans:</p>   
            <p>Authentication is the process where system verify user (some one), who want to access the system. On the other hand authorization is the process of verifying specific applications, files, and data user has access to.</p>
           <p>Authentication is done before the authorization. On the other hand Authorization  process is done after the authentication process.</p>
           <p>For Authentication usually  need  user’s login details. On the others hand for Authorization  needs user’s privilege or security levels.</p>
            <h2>
              2 Why are you using firebase? What other options do you have to implement authentication?
            </h2>
            <p>Ans: </p>
            <p>Firebase is a complete package of products that allows to build web and mobile apps by allow syncing the real-time data across all the devices without refreshing the screen. </p>
            <p>Other options to authenticate can be cards, retina scans, voice recognition, and fingerprints.</p>
            <h2>
              3 What other services does firebase provide other than authentication
            </h2>
            <p>Ans: Firebase provide Cloud Firestore, Cloud Functions, Hosting, Google Analytics, Cloud Messaging and some others popular services besides Authentication</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
