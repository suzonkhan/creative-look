import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import useServices from "../../hooks/useServices";
import Carousels from "./Carousels/Carousels";

const Home = () => {
     const [services] = useServices();

  return (
    <div>
      <section>
        <Carousels></Carousels>
      </section>

      <section className="page-block bg-gray">
        <Container>
          <Row>
            <Col>
              <div className="page-block-heading">
                <h2>My Services</h2>
              </div>
            </Col>
          </Row>
          <Row>
            {services.map(service => 
                <Col key={service.id}>
                  <div className="service-box">
                    <img src={service.image} alt="" />
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    <p className="lead text-danger text-bold">Price: {service.price} Taka</p>
                    <Button> Book Now </Button>
                  </div>
                </Col>
                
            )}
           
            
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
