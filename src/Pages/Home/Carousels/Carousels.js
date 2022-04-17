import React from 'react';
import { Carousel } from 'react-bootstrap';
import SliderImageOne from './../../../images/slider-01.jpg';
import SliderImageTwo from './../../../images/slider-02.jpg';
import SliderImageThree from './../../../images/slider-03.jpg';
const Carousels = () => {
    return (
        <div>
             <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SliderImageTwo}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className='h1'>First slide label</h3>
            <p className='h3'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SliderImageOne}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className='h1'>Second slide label</h3>
            <p className='h3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SliderImageThree}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className='h1'>Third slide label</h3>
            <p className='h3'>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
    );
};

export default Carousels;