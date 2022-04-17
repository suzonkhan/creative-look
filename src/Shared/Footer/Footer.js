import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    let year = new Date().getFullYear();
 
    return (
        <div className='main-footer'>
            <Container>
                <Row>
                    <Col>
                    <h3 className='h2'> Creative Look </h3>
                    <p> &copy; {year} Creative Look. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;