import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../../images/banner1.jpg';
import banner2 from '../../../images/banner2.jpg';
import banner3 from '../../../images/banner3.jpg';
import './Banner.css';
const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block banner-img w-100'
            src={banner2}
            alt='First slide'
          />
          <Carousel.Caption>
            <div>
              <h5>Best Collection 2021</h5>
              <h1>
                <span style={{ color: '#94c300' }}>SPORTS BIKE</span> COLLECTION
              </h1>
              <Link to='/bikes'>
                <Button
                  style={{ backgroundColor: '#94c300', fontWeight: 'bold' }}
                  variant='success'
                >
                  Shop Now
                </Button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block banner-img w-100'
            src={banner1}
            alt='Second slide'
          />
          <Carousel.Caption>
            <div>
              <h5>Best Collection 2021</h5>
              <h1>
                <span style={{ color: '#94c300' }}>SPORTS BIKE</span> COLLECTION
              </h1>
              <Link to='/bikes'>
                <Button
                  style={{ backgroundColor: '#94c300', fontWeight: 'bold' }}
                  variant='success'
                >
                  Shop Now
                </Button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block banner-img w-100'
            src={banner3}
            alt='Third slide'
          />
          <Carousel.Caption>
            <div>
              <h5>Best Collection 2021</h5>
              <h1>
                <span style={{ color: '#94c300' }}>SPORTS BIKE</span> COLLECTION
              </h1>
              <Link to='/bikes'>
                <Button
                  style={{ backgroundColor: '#94c300', fontWeight: 'bold' }}
                  variant='success'
                >
                  Shop Now
                </Button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
