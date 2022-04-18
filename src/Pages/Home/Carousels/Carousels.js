import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
            <h3 className='h1'>Looking for Photography?</h3>
            <p className='lead my-3'>I will cover full wedding ceremony within this package. Within this package i will provide you 100 copy photo by lab print and 1000 copy photos into a CD or a pendrive.</p>
            <Link className="btn btn-primary mb-4" to="/checkout/3"> Book Now </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SliderImageOne}
            alt="Second slide"
          />

          <Carousel.Caption>
          <h3 className='h1'>Wedding Photography</h3>
            <p className='lead my-3'>I will cover full wedding ceremony within this package. Within this package i will provide you 100 copy photo by lab print and 1000 copy photos into a CD or a pendrive.</p>
            <Link className="btn btn-primary mb-4" to="/checkout/1"> Book Now </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SliderImageThree}
            alt="Third slide"
          />

          <Carousel.Caption>
          <h3 className='h1'>Product Photography</h3>
            <p className='lead my-3'>Good looking photos create huge selling opportunity for eCommerce business. Within this package i will shoot photo for 1000 products and will edit this for your business.</p>
            <Link className="btn btn-primary mb-4" to="/checkout/2"> Book Now </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
    );
};

export default Carousels;